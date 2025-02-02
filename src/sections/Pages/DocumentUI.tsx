/* eslint-disable prettier/prettier */

import { Breadcrumb, Card, Col, Divider, Empty, Pagination as AntPagination, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import DocItem from 'src/components/document/doc-item';
import { DocCourseWrapper } from 'src/components/document/style';
import HomeSide from 'src/components/home/homeSide';
import DocCourseItemSkeleton from 'src/components/skeleton/document-skeleton';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Document, PaginationParams, Pagination as PaginationType } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { DEFAULT_PAGE_SIZE } from 'src/lib/utils/constant';
import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { Nav as NavType } from 'src/lib/types/backend_modal';

export interface DocumentParams {
  page?: number;
  topic?: string;
  topicLabel?: string;
  header?: string;
}

const DocumentUI: React.FC = () => {
  const header: NavType[] = useSelector((state: RootState) => state.app.header);
  const [listDoc, setListDoc] = useState<PaginationType<Document>>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const params: DocumentParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: params?.page || 1,
    limit: DEFAULT_PAGE_SIZE,
  });

  const topicLabel = useMemo(() => {
    const topic = header?.find((e) => e.header === params.header)?.topic?.find((e) => e.value === params.topic);
    return UpperCaseFirstLetter(params.topic === 'ALL' ? '' : topic?.label ?? '');
  }, [params.topic, header]);

  const fetchDocument = async (pagination) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      setLoading(true);
      const newPagination = { ...pagination };
      // if (!params.page) pagination.page = 1;
      if (!token) {
        const homeDoc = await CourseService.getHomeDocs(
          newPagination,
          params.topic === 'ALL' ? '' : params.topic || '',
        );
        setListDoc(homeDoc);
      } else {
        const homeDoc = await CourseService.getAllDocs(newPagination, params.topic === 'ALL' ? '' : params.topic || '');
        setListDoc(homeDoc);
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetch Doc Fail :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocument(pagination);
  }, [pagination, params.topic]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.DOCUMENT}?topic=${params.topic}&page=${page}&header=${params.header}`);
  };
  return (
    <div>
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>
            <HomeOutlined
              css={css`
                font-size: 30px !important;
              `}
            />
          </Breadcrumb.Item>
          {/* <Breadcrumb.Item href={`${RoutePaths.DOCUMENT}?document=ALL&page=${1}&header=${params.header}`}> */}
          <Breadcrumb.Item>{params?.header}</Breadcrumb.Item>
          <Breadcrumb.Item>{topicLabel}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={16}>
        <Col span={18}>
          <Card>
            {loading ? (
              <DocCourseItemSkeleton />
            ) : (
              <DocCourseWrapper>
                {listDoc?.results?.length ? (
                  listDoc?.results?.map((e, i) => {
                    return (
                      <Col key={i} className="item">
                        <DocItem document={e} />
                      </Col>
                    );
                  })
                ) : (
                  <Empty />
                )}
              </DocCourseWrapper>
            )}
          </Card>
          <div
            css={css`
              text-align: center;
            `}
          >
            {/* <Pagination
              defaultCurrent={1}
              current={params.page || pagination.page}
              pageSize={pagination.limit}
              total={listDoc?.count || 10}
              showSizeChanger={false}
              onChange={onChangePage}
              hideOnSinglePage
            /> */}
            <AntPagination
              current={params.page || pagination.page}
              pageSize={pagination.limit}
              total={listDoc?.count || 0}
              showSizeChanger={false}
              hideOnSinglePage
              onChange={onChangePage}
            />
          </div>
        </Col>
        <Col span={6}>
          <HomeSide />
        </Col>
      </Row>
    </div>
  );
};
export default DocumentUI;
