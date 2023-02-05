/* eslint-disable react/no-children-prop */
import { Breadcrumb, Checkbox, Col, Divider, Image, Row, Spin } from 'antd';
import { useEffect, useState } from 'react';
import PricingCard from 'src/components/cart/cart-price';
import { CalculatePriceArgs, Course, CreateOrderArg, Document, OCart } from 'src/lib/types/backend_modal';
import { RootState } from 'src/lib/reducers/model';
import CartItemRow from '../../components/cart/cart-item';

import { Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import CourseService from 'src/lib/api/course';
import RoutePaths from 'src/lib/utils/routes';
import useDebouncedCallback from 'src/lib/hooks/useDebouncedCallback';
import { useDispatch, useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;
const CheckboxGroup = Checkbox.Group;
const CartUI: React.FC = () => {
  const [cartData, setCartData] = useState<OCart>();
  const [docCart, setDocCart] = useState<Document[]>([]);
  const [courseCart, setCourseCart] = useState<Course[]>([]);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [checkedListDoc, setCheckedListDoc] = useState<string[]>([]);
  const [checkedListCourse, setCheckedListCourse] = useState<string[]>([]);
  const [indeterminateDoc, setIndeterminateDoc] = useState(false);
  const [indeterminateCourse, setIndeterminateCourse] = useState(false);

  const [checkAllDoc, setCheckAllDoc] = useState(false);
  const [checkAllCourse, setCheckAllCourse] = useState(false);

  const [checkedList, setCheckedList] = useState<CalculatePriceArgs>({} as CalculatePriceArgs);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const dispatch = useDispatch();
  const getCart = async () => {
    try {
      setLoading(true);
      const cart = await CourseService.getCart();
      setCartData(cart);
      setDocCart(cart.documents);
      setCourseCart(cart.courses);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getCart();
  }, []);
  const onChangeDoc = (list) => {
    // setCheckedListDoc(list.map((v) => v.id));
    setCheckedListDoc(list);
    setIndeterminateDoc(!!list.length && list.length < docCart.length);
    setCheckAllDoc(list.length === docCart.length);
  };

  const onCheckAllChangeDoc = (e: CheckboxChangeEvent) => {
    setCheckedListDoc(
      // e.target.checked ? Array.from(Array(docCart?.length).keys()) : []
      e.target.checked ? docCart.map((v) => v.id) : [],
    );
    setIndeterminateDoc(false);
    setCheckAllDoc(e.target.checked);
  };

  const onChangeCourse = (list) => {
    // setCheckedListDoc(list.map((v) => v.id));

    setCheckedListCourse(list);
    setIndeterminateCourse(!!list.length && list.length < courseCart.length);
    setCheckAllCourse(list.length === courseCart.length);
  };

  const onCheckAllChangeCourse = (e: CheckboxChangeEvent) => {
    setCheckedListCourse(
      // e.target.checked ? Array.from(Array(courseCart?.length).keys()) : []
      e.target.checked ? courseCart.map((v) => v.id) : [],
    );
    setIndeterminateCourse(false);
    setCheckAllCourse(e.target.checked);
  };

  useEffect(() => {
    // console.log('call debounce');
    // debounceSetCheckList(checkedListDoc, checkedListCourse);

    setCheckedList({
      documents: checkedListDoc.map((v) => v.toString()),
      courses: checkedListCourse.map((v) => v.toString()),
    });
  }, [checkedListDoc, checkedListCourse]);

  // const debounceSetCheckList = useCallback(
  // 	(checkedListDoc, checkedListCourse) => {
  // 		console.log('before call debounce');
  // 		debounce((checkedListDoc, checkedListCourse) => {
  // 			console.log('set again');
  // 			// setCheckedList({
  // 			// 	documents: checkedListDoc.map((v) => v.toString()),
  // 			// 	courses: checkedListCourse.map((v) => v.id),
  // 			// });
  // 		}, 1000);
  // 		setAgain();
  // 	}
  // );
  const debouncePrice = useDebouncedCallback(async (checkedList: CalculatePriceArgs) => {
    if (checkedList.courses?.length || checkedList.documents?.length) {
      const price = await CourseService.calculatePrice(checkedList);
      setTotalPrice(price.total_price);
    } else {
      setTotalPrice(0);
    }
  }, 500);
  useEffect(() => {
    debouncePrice(checkedList);
  }, [checkedList]);

  return (
    <div
      className="page-container"
      css={css`
        .empty-img {
          opacity: 0.6;
        }
        .ant-checkbox-group {
          display: flex;
          flex-direction: column;
        }
        .ant-checkbox {
          width: 19px;
          height: 19px;
          .ant-checkbox-inner {
            width: 19px;
            height: 19px;
            &:after {
              /* width: 6.714286px;
              height: 15.142857px; */

              border: 3px solid #fff;
              border-top: 0;
              border-left: 0;
            }
          }
        }
        .title {
          font-size: 20px;
          font-weight: 600;
          font-family: Montserrat;
          color: #ffa900;
        }
        .choose-all {
          font-size: 17px;
          font-family: 'Montserrat';
          margin: 0 8px;
        }
        .doc {
          opacity: ${checkAllDoc ? '1' : '0.7'};
          font-weight: ${checkAllDoc ? '700' : '400'};
        }
        .course {
          opacity: ${checkAllCourse ? '1' : '0.7'};
          font-weight: ${checkAllCourse ? '700' : '400'};
        }
        .checkbox-group {
          max-height: 40%;
          overflow: auto;
          .ant-checkbox-wrapper {
            align-items: start;
          }
          .ant-checkbox-group-item {
            margin: 0;
          }
        }
        .ant-checkbox-indeterminate .ant-checkbox-inner:after {
          background-color: #1c1d1f;
        }
        .ant-checkbox-checked .ant-checkbox-inner {
          border-color: #1c1d1f;
          background-color: #1c1d1f;
        }
        .check-all {
          .ant-checkbox-indeterminate {
            .ant-checkbox-inner:after {
              width: 15px;
              height: 15px;
            }
          }
        }
        .ant-checkbox-wrapper {
          display: flex;
          align-items: center;
        }
        .cart-list {
          height: 85vh;
        }
        .cart-list-item {
          overflow: auto;
          max-height: 100vh;
        }
      `}
    >
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>Giỏ hàng</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <p className="title">Danh sách tài liệu trong giỏ</p>
      {loading ? (
        <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <Row gutter={[16, 16]} className="cart-list">
          <Col span={18} className="cart-list-item">
            {cartData?.documents?.length ? (
              <>
                <Checkbox
                  className="check-all"
                  indeterminate={indeterminateDoc}
                  onChange={onCheckAllChangeDoc}
                  checked={checkAllDoc}
                >
                  <p className="choose-all doc">Chọn tất cả tài liệu</p>
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  onChange={onChangeDoc}
                  className="checkbox-group"
                  value={checkedListDoc}
                  options={cartData?.documents?.map((v) => ({
                    label: <CartItemRow document={v} />,
                    value: v.id,
                    Properties: null,
                  }))}
                />
              </>
            ) : (
              <></>
            )}
            {cartData?.courses?.length ? (
              <>
                <Checkbox
                  className="check-all"
                  indeterminate={indeterminateCourse}
                  onChange={onCheckAllChangeCourse}
                  checked={checkAllCourse}
                >
                  <p className="choose-all course">Chọn tất cả khoá học</p>
                </Checkbox>
                <Divider />
                <CheckboxGroup
                  onChange={onChangeCourse}
                  className="checkbox-group"
                  value={checkedListCourse}
                  options={cartData?.courses.map((v) => ({
                    label: <CartItemRow course={v} />,
                    value: v.id,
                    Properties: null,
                  }))}
                />
              </>
            ) : (
              <></>
            )}
            {/* {cartData?.documents?.length === 0 &&
						cartData?.courses?.length === 0 && (
							<Image src={EmptyImg} preview={false} className="empty-img" />
						)} */}
          </Col>
          <Col span={6}>
            <div className="">
              <PricingCard
                docNum={cartData?.documents?.length || 0 + cartData?.courses?.length || 0}
                children={null}
                checkoutList={
                  {
                    ...checkedList,
                    total_price: totalPrice,
                  } as CreateOrderArg
                }
              />
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default CartUI;
