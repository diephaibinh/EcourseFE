/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fileImg from 'src/assets/images/file.jpg';
import { Document } from 'src/models/backend_modal';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; // import ProductRating from '../product-rating';
import AppButton from '../button';
import CourseService from 'src/services/course';
import globalVariable from 'src/config/env';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import { cartActions } from 'src/reducers/document/documentSlice';
import { formatCurrency } from 'src/utils/currency';
import { VerticalAlignBottomOutlined, WalletOutlined } from '@ant-design/icons';
import { DocStatus, GlobalStyle } from 'src/utils/enum';
import { isObject } from 'formik';
import { Button } from 'antd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
interface ChildProps {
	document: Document; // try not to use any.
}
enum BtnString {
	AVAILABLE = 'THÊM',
	IN_CART = 'XOÁ',
	PENDING = 'CHỜ THANH TOÁN',
	BOUGHT = 'ĐÃ THANH TOÁN',
}
enum Color {
	AVAILABLE = '#0dcaf0',
	IN_CART = '#ed5e68',
	PENDING = '#8c8c8c',
	BOUGHT = '#23c501',
}
const DocItemCard: React.FC<ChildProps> = (props) => {
	const { document } = props;
	const [added, setAdded] = useState(false);
	const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
	const cartData = useAppSelector((state: RootState) => state.document);
	const [loading, setLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (document.sale_status === DocStatus.AVAILABLE) {
			setBtnString(BtnString.AVAILABLE);
		} else if (document.sale_status === DocStatus.IN_CART) {
			setBtnString(BtnString.IN_CART);
		} else if (document.sale_status === DocStatus.PENDING) {
			setBtnString(BtnString.PENDING);
		} else if (document.sale_status === DocStatus.BOUGHT) {
			setBtnString(BtnString.BOUGHT);
		}
	}, [document]);

	const handleClick = () => {
		setLoading(true);
		setTimeout(() => {
			if (document.sale_status === DocStatus.AVAILABLE) {
				dispatch(cartActions.updateCart(document));
				setLoading(false);
			} else if (document.sale_status === DocStatus.IN_CART) {
				dispatch(cartActions.updateCart(document));
				setLoading(false);
			}
		}, 500);
	};
	return (
		<div
			className="container"
			css={css`
				.title,
				p {
					color: black;
				}
				.description,
				title {
					text-align: left;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					color: gray;
				}
				@media only screen and (min-width: 1200px) {
					.ant-btn[disabled] {
						letter-spacing: 2px;
					}
				}
				@media only screen and (max-width: 1200px) {
					.ant-btn[disabled] {
						letter-spacing: 0px;
					}
				}
				.download {
					font-weight: bold;
				}

				.card-img-top {
					object-fit: contain;
					width: 15ppx;
					height: 150px;
				}
				.anticon {
					position: relative;
					bottom: 3px;
					right: 6px;
					color: ${GlobalStyle.BROWN_YELLOW};
				}
				.card-btn {
					width: 100%;
					color: #000;
					border-color: #000;
					&:hover {
						border-color: ${btnString === BtnString.AVAILABLE
							? Color.AVAILABLE
							: Color.IN_CART};

						color: ${btnString === BtnString.AVAILABLE
							? Color.AVAILABLE
							: Color.IN_CART};
						letter-spacing: 8px;
					}
				}

				.anticon-loading {
					position: absolute;
					top: -7px !important;
					left: -32px !important;
					font-size: 18px;
					color: ${btnString === BtnString.AVAILABLE
						? Color.AVAILABLE
						: Color.IN_CART};
				}
				.price-tag {
					display: flex;
					justify-content: space-evenly;
				}
			`}
		>
			<Link to={`/document/detail?id=${document.id}`}>
				<div>
					<img
						className="card-img-top"
						src={`${document.thumbnail.image_path}`}
						alt="document image."
					/>
				</div>
				<div>
					<div>
						<h2 className="title">{document.name}</h2>
					</div>
					<p className="description">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
						iste vitae nihil beatae dignissimos, possimus molestiae ab,
						temporibus eligendi, necessitatibus architecto? Provident animi
						quisquam dolorum doloribus cum illum porro voluptate!
					</p>
					<p className="download">
						<VerticalAlignBottomOutlined />
						Số lượt tải: {document.sold}
					</p>
				</div>
			</Link>
			<div className="price-tag">
				<span>
					<WalletOutlined />
					{formatCurrency(document.price)}
				</span>

				{document.sale_status === DocStatus.BOUGHT && (
					<TaskAltIcon sx={{ color: `${Color.BOUGHT}` }} />
				)}
			</div>
			<AppButton
				className="card-btn"
				btnTextColor={'black'}
				btnStyle={'outline'}
				btnSize={'small'}
				btnWidth={'full-w'}
				loading={loading}
				disabled={
					document.sale_status === DocStatus.PENDING ||
					document.sale_status === DocStatus.BOUGHT ||
					loading
				}
				onClick={handleClick}
			>
				{btnString}
			</AppButton>
		</div>
	);
};

export default DocItemCard;
