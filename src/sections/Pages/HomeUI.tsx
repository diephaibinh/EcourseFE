/* eslint-disable prettier/prettier */

/** @jsxImportSource @emotion/react */
import { AppstoreAddOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, Divider, Row } from 'antd';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import CourseItem from 'src/components/course/course-item';
import DocItem from 'src/components/document/doc-item';
import { Course, Document, SaleStatusEnum } from 'src/models/backend_modal';
import { courseAction } from 'src/reducers/course/courseSlice';
import { docActions } from 'src/reducers/document/documentSlice';
import { RootState } from 'src/reducers/model';
import CourseService from 'src/services/course';
const LIMIT = 4;

interface InitialState {
	listDoc: Document[];
	listCourse: Course[];
	O;
}

enum HomeActionKind {
	LIST_DOC = 'LIST_DOC',
	LIST_COURSE = 'LIST_COURSE',
	UPDATE_DOC = 'UPDATE_DOC',
	UPDATE_COURSE = 'UPDATE_COURSE',
}
export interface ActionBase {
	type: string;
	payload?: any;
}
function reducer(state: InitialState, action: ActionBase) {
	switch (action.type) {
		case HomeActionKind.LIST_DOC:
			return {
				...state,
				listDoc: action.payload,
			};
		case HomeActionKind.UPDATE_DOC:
			const item = [...state.listDoc];
			const itemUpdateIdx = state.listDoc?.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemUpdateIdx < 0) return state;
			//update existed drip
			const updateStatus = {
				...action.payload,
				sale_status:
					action.payload.sale_status !== SaleStatusEnum.AVAILABLE
						? SaleStatusEnum.AVAILABLE
						: SaleStatusEnum.IN_CART,
			};
			item.splice(itemUpdateIdx, 1, updateStatus);
			return {
				...state,
				listDoc: item,
			};
		default:
			return state;
	}
}
const HomeUI = () => {
	const dispatch = useAppDispatch();
	const fetchHomeData = async () => {
		const mostDownloadDoc = await CourseService.getMostDownloadDocs();
		const mostDownloadCourse = await CourseService.getMostDownloadCourses();
		dispatch(docActions.fetchMostDoc(mostDownloadDoc));
		dispatch(courseAction.fetchMostCourse(mostDownloadCourse));
	};
	const listDoc = useAppSelector(
		(state: RootState) => state.document.mostDownDoc
	);
	const listCourse = useAppSelector(
		(state: RootState) => state.course.mostDownCourse
	);
	useEffect(() => {
		fetchHomeData();
	}, []);
	return (
		<div
			className="page-container"
			css={css`
				.doc-wrapper {
					padding-bottom: 40px;
					&:last-child {
						padding-bottom: 60px;
					}
				}
				.ant-col {
					height: 100%;
				}
				.cover {
					color: '#fff';
					lineheight: '160px';
					textalign: 'center';
					background: '#fff';
					margin: '0 auto';
					.rounded {
						margin: 0 auto;
						height: 350px;
					}
				}
				.doc {
					display: flex;
				}
				.title {
					font-weight: 700;
					font-size: 20px;
					text-align: center;
				}
				.doc-title {
					font-size: 30px;
					font-weight: 500;
					text-decoration: overline;
					.anticon {
						vertical-align: baseline;
					}
				}
			`}
		>
			<Divider orientation="center">Tải nhiều nhất</Divider>
			<div className="doc-wrapper">
				<div className="doc-title">
					<AppstoreAddOutlined />
					{' Tài liệu'}
				</div>
				<Row gutter={[8, 16]}>
					{listDoc?.slice(0, LIMIT).map((e, i) => {
						return (
							<Col lg={8} xl={6} md={12} sm={24} xs={24} key={i}>
								<DocItem document={e} />
							</Col>
						);
					})}
				</Row>
			</div>
			<div className="doc-wrapper">
				<div className="doc-title">
					<AppstoreAddOutlined />
					{'Khoá học'}
				</div>
				<Row gutter={[8, 16]}>
					{listCourse?.slice(0, LIMIT).map((e, i) => {
						return (
							<Col
								lg={8}
								xl={listCourse.length > 4 ? 6 : 8}
								md={12}
								sm={24}
								xs={24}
								key={i}
							>
								<CourseItem course={e} />
							</Col>
						);
					})}
				</Row>
			</div>
		</div>
	);
};

export default HomeUI;
