import {
  BookOutlined,
  HomeFilled,
  LogoutOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Avatar, Divider, Dropdown, Space } from 'antd';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { Nav as NavType, NavTypeEnum, RoleEnum } from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

import styled from '@emotion/styled';
import type { MenuProps } from 'antd';

const Nav: React.FC = React.memo(() => {
  const header: NavType[] = useSelector((state: RootState) => state.app.header);
  const router = useRouter();
  const myProfile = useSelector((state: RootState) => state.app.user);

  const compareTextNotCase = (w1 = '', w2 = '') => {
    return w1.toLowerCase() === w2.toLowerCase();
  };

  const goToPage = (type, topicValue, navHeader) => {
    return type === NavTypeEnum.DOCUMENT
      ? `${RoutePaths.DOCUMENT}?topic=${topicValue}&header=${navHeader}&page=1`
      : compareTextNotCase(type, NavTypeEnum.COURSE)
      ? `${RoutePaths.COURSE}?topic=${topicValue}&header=${navHeader}&page=1`
      : compareTextNotCase(type, NavTypeEnum.CLASS)
      ? `${RoutePaths.CLASS}?topic=${topicValue}&header=${navHeader}&page=1&isClass=true`
      : compareTextNotCase(type, NavTypeEnum.POST)
      ? `${RoutePaths.POST}?topic=${topicValue}&header=${navHeader}&page=1`
      : compareTextNotCase(type, NavTypeEnum.CHATGPT)
      ? 'gpt-search'
      : '';
  };
  const generateItem = (navItem: NavType): MenuProps['items'] => {
    return navItem.topic.map((v, i) => ({
      key: i,
      label: (
        <Link
          href={`${goToPage(navItem.type?.toLocaleUpperCase(), v.value || 'ALL', navItem.header)}`}
          css={css`
            background-color: ${router.query?.[navItem.type?.toLocaleLowerCase()] === v.label ? '#cdcdcd' : ''};
            text-align: 'center';
          `}
        >
          {v.label}
        </Link>
      ),
      icon: '',
      title: v.label,
    }));
  };

  const accountItems: MenuProps['items'] = [
    {
      key: '1',
      label: <Link href={RoutePaths.SETTINGS}>Cài đặt</Link>,
      icon: <SettingOutlined />,
    },
    {
      key: '2',
      label: <Link href={RoutePaths.LOGOUT}>Đăng xuất</Link>,
      icon: <LogoutOutlined />,
    },
  ];

  const managerAccountItems: MenuProps['items'] = [
    {
      key: '3',
      label: <Link href={RoutePaths.CREATE_QUIZ}>Tạo quiz mới</Link>,
      icon: <BookOutlined />,
    },
  ];

  return (
    <NavStyle id="menu-nav" router={router}>
      <div className="home">
        <Link
          href={RoutePaths.HOME}
          className="logo"
          css={css`
            opacity: ${router.pathname === RoutePaths.HOME ? 1 : 0.6};
          `}
        >
          <HomeFilled />
          TRANG CHỦ
        </Link>
      </div>
      <div className="menu-container">
        <div className="menu-left">
          {header.map((v, index) => {
            const items = generateItem(v);

            return (
              <Dropdown
                key={index}
                menu={{ items }}
                getPopupContainer={() => document.getElementById('menu-nav') as HTMLElement}
                dropdownRender={(menues) => {
                  if (!menues) return;
                  return (
                    <div
                      className="dropdown-Cuong"
                      css={css`
                        max-width: 200px;
                        margin-top: 12px;
                        .ant-dropdown-menu {
                          span {
                            width: 100%;
                            cursor: pointer;
                            a {
                              color: #000 !important;
                              font-weight: 400;
                              text-overflow: ellipsis;
                              text-overflow: nowrap;
                              overflow: hidden;
                              max-width: 100%;
                              display: block;
                            }
                          }
                        }
                      `}
                    >
                      {menues}
                    </div>
                  );
                }}
              >
                <Link
                  href={goToPage(v.type?.toLocaleUpperCase(), 'ALL', v.header)}
                  css={css`
                    opacity: ${router.pathname.includes(v.type?.toLocaleLowerCase()) &&
                    v.header.includes(router.query?.header as string)
                      ? 1
                      : 0.6};
                  `}
                >
                  <Space
                    css={css`
                      text-align: center;
                    `}
                  >
                    {v.header}
                  </Space>
                </Link>
              </Dropdown>
            );
          })}
        </div>
        <div className="menu-right">
          <Link href={RoutePaths.CART} className="cart-btn">
            <ShoppingCartOutlined className="cart-icon" />
          </Link>
          <Divider type="vertical" style={{ height: '100%' }} />
          <div className="account-group" id="account-dropdown">
            {!isEmpty(myProfile) ? (
              <Dropdown
                menu={
                  myProfile && (myProfile as any)?.quiz_permission
                    ? { items: managerAccountItems.concat(accountItems) }
                    : { items: accountItems }
                }
                placement="bottomRight"
                arrow
                className="cuongDropdown"
                // open={true}
                overlayClassName="account-overlay"
                overlayStyle={{ minWidth: 130 }}
                // getPopupContainer={() => document.getElementById('account-dropdown') as HTMLElement}
              >
                {myProfile.avatar ? (
                  <Avatar shape="square" src={myProfile.avatar} icon={<UserOutlined />} />
                ) : (
                  <UserOutlined className="setting-icon" />
                )}
              </Dropdown>
            ) : (
              <Link href={RoutePaths.LOGIN} className="login-btn">
                Đăng nhập
              </Link>
            )}
          </div>
        </div>
      </div>
    </NavStyle>
  );
});

export default Nav;

type NavProps = {
  router: NextRouter;
};

const NavStyle = styled.div`
  display: flex;
  justify-content: flex-start;
  border-radius: 5px;
  font-size: 13px;
  height: 47px;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;

  border-radius: 5px;

  --bs-gutter-x: 5rem;
  --bs-gutter-y: 0;
  .ant-dropdown {
    margin-top: 12px;
  }
  .menu-left,
  .home {
    a {
      font-weight: 700;
      color: #fff !important;
    }
  }
  .home {
    border-radius: 3px 0 0 5px;
    padding: 0 10px;
    background-color: #3a3a3a;
    a {
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .ant-space,
  .account-group,
  .menu-right .anticon {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
  .menu-container {
    background-color: #4c4c4c;
    border-radius: 0 5px 5px 0;
    padding: 0 10px;
    flex: 1;
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: space-between;
    .menu-left {
      display: flex;
      gap: 15px;
    }
    .ant-dropdown-trigger {
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
  .menu-right {
    display: flex;
    height: 100%;
    align-items: center;
    gap: 10px;
    padding-right: 20px;
    .ant-divider {
      height: 50% !important;
      color: #fff;
      background-color: #fff;
      width: 2px;
    }
    .anticon-shopping-cart,
    .anticon-user {
      color: #fff !important;
      font-size: 17px;
      font-weight: 700;
    }
    .anticon-shopping-cart {
      opacity: ${(props: NavProps) => (props.router.pathname.includes(RoutePaths.CART) ? 1 : 0.6)};
    }
    .anticon-user {
      opacity: ${(props: NavProps) => (props.router.pathname.includes(RoutePaths.SETTINGS) ? 1 : 0.6)};
    }
    .account-overlay {
      margin-left: 24px;
    }
  }
  .login-btn {
    color: #fff !important;
    font-weight: 700;
  }
`;
