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
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { MENU_ROUTE } from "../../route/menu";
import ProfileMenu from "../ProfileMenu";
import MenuItem from "./MenuItem";

const isLogin = true;

function Menu() {
  const router = useRouter();
  const { asPath } = router;
  const [subMenu, setSubMenu] = useState(null);

  const getDefaultSubMenu = () => [
    {
      image: "image",
      updated_at: "2000-01-23T04:56:07.000+00:00",
      description: "description",
      created_at: "2000-01-23T04:56:07.000+00:00",
      id: "0000000000000000000000003",
      title: "title1",
    },
    {
      image: "image",
      updated_at: "2000-01-23T04:56:07.000+00:00",
      description: "description",
      created_at: "2000-01-23T04:56:07.000+00:00",
      id: "0000000000000000000000002",
      title: "title2",
    },
    {
      image: "image",
      updated_at: "2000-01-23T04:56:07.000+00:00",
      description: "description",
      created_at: "2000-01-23T04:56:07.000+00:00",
      id: "0000000000000000000000001",
      title: "title3",
    },
  ];

  useEffect(() => {
    setSubMenu(getDefaultSubMenu());
  }, []);

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
    },
    {
      title: "Tin tức",
      href: MENU_ROUTE.blogs,
      icon: <FontAwesomeIcon icon={faNewspaper} />,
    },
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
      <ListGroup as="ul" variant="flush" className="menu_list">
        {Array.isArray(menus) &&
          menus.map((menu, index) =>
            isLogin ? (
              <MenuItem menu={menu} active={menu.href == asPath} key={index} />
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
  );
}

export default Menu;
