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
import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { MENU_ROUTE } from "../../route/menu";
import ProfileMenu from "../ProfileMenu";
import MenuItem from "./MenuItem";

const isLogin = true;

function Menu() {
  const router = useRouter();
  const { asPath } = router;

  const getDefaultSubMenu = () => [
    {
      image: "image",
      updated_at: "2000-01-23T04:56:07.000+00:00",
      description: "description",
      created_at: "2000-01-23T04:56:07.000+00:00",
      id: "000000000000000000000000",
      title: "title",
    },
  ];

  useEffect(() => {
    
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
      submenu: [
        {
          title: "Via VN",
          slug: "1",
        },
        {
          title: "Via VN1",
          slug: "2",
        },
        {
          title: "Via VN2",
          slug: "3",
        },
        {
          title: "Via VN3",
          slug: "4",
        },
        {
          title: "Via VN4",
          slug: "5",
        },
        {
          title: "Via VN5",
          slug: "6",
        },
        {
          title: "Via VN6",
          slug: "7",
        },
        {
          title: "Via VN7",
          slug: "8",
        },
        {
          title: "Via VN8",
          slug: "9",
        },
        {
          title: "Via VN9",
          slug: "10",
        },
        {
          title: "Via VN10",
          slug: "11",
        },
      ],
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
