import {
  faAd,
  faBook,
  faCartArrowDown,
  faHandHoldingMedical,
  faHistory,
  faHome,
  faNewspaper,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { getListCategory, getProfile } from "../../pages/api/listRouteApi";
import { MENU_ROUTE } from "../../router/menu";
import ProfileMenu from "../ProfileMenu";
import MenuItem from "./MenuItem";
import Cookies from "universal-cookie";
import { connect } from "react-redux";
const cookies = new Cookies();

function Menu({ user }) {
  const router = useRouter();
  const { asPath } = router;
  const [subMenu, setSubMenu] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  // Fetch api categories
  useEffect(() => {
    fetch(getListCategory)
      .then((res) => res.json())
      .then((data) => {
        setSubMenu(data);
      });
  }, []);

  useEffect(() => {
    if (user) {
      setIsLogin(true);
    }
  }, [user]);

  const menus = [
    {
      title: "Trang chủ",
      href: MENU_ROUTE.home,
      icon: <FontAwesomeIcon icon={faHome} />,
    },
    {
      title: "Nạp tiền",
      href: MENU_ROUTE.deposit,
      icon: <FontAwesomeIcon icon={faWallet} />,
      sub_icon: (
        <Image src={"/images/hot2.gif"} width={50} height={50} alt="" />
      ),
      auth: true,
    },
    {
      title: "Mua hàng",
      href: "#",
      icon: <FontAwesomeIcon icon={faCartArrowDown} />,
      key: "#buy",
      submenu: subMenu,
    },
    {
      title: "Chính sách bảo hành",
      href: MENU_ROUTE.rulePolicy,
      icon: <FontAwesomeIcon icon={faHandHoldingMedical} />,
    },
    {
      title: "Lịch sử mua hàng",
      href: MENU_ROUTE.order,
      icon: <FontAwesomeIcon icon={faHistory} />,
      auth: true,
    },
    // {
    //   title: "Tin tức",
    //   href: MENU_ROUTE.blogs,
    //   icon: <FontAwesomeIcon icon={faNewspaper} />,
    // },
    {
      title: "Zalo Admin",
      href: "https://zaloweb.me",
      target: "_blank",
      icon: <FontAwesomeIcon icon={faAd} />,
      sub_icon: (
        <Image src={"/images/hot2.gif"} width={20} height={20} alt="" />
      ),
    },
    {
      title: "Group Zalo Support",
      href: "https://zaloweb.me",
      target: "_blank",
      icon: <FontAwesomeIcon icon={faBook} />,
      sub_icon: (
        <Image src={"/images/hot2.gif"} width={20} height={20} alt="" />
      ),
    },
  ];

  return (
    <div id="left_navbar">
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <a>
            <span className="logo_img">
              <Image src={"/images/logo.png"} alt="logo" layout="fill" />
            </span>
            <h2>ViaFb.VN</h2>
          </a>
        </Link>
      </div>
      {/* Menu */}
      <div className="menu_wrapper">
        <ListGroup as="ul" variant="flush" className="menu_list">
          {Array.isArray(menus) &&
            menus.map((menu, index) =>
              isLogin ? (
                <MenuItem
                  menu={menu}
                  active={menu.href == asPath}
                  key={index}
                />
              ) : (
                !menu.auth && (
                  <MenuItem
                    menu={menu}
                    active={menu.href == asPath}
                    key={index}
                  />
                )
              )
            )}
        </ListGroup>
        <ProfileMenu />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
  };
};

export default connect(mapStateToProps)(Menu);
