import {
    faAd,
    faBook,
    faCartArrowDown,
    faHandHoldingMedical, faHistory, faHome,
    faNewspaper,
    faWallet
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { MENU_ROUTE } from "../../route/menu";
import styles from "./Menu.module.scss";
import MenuItem from "./MenuItem";

const isLogin = true;
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
        sub_icon: <Image src={"/images/hot2.gif"} width={50} height={50} alt="" />,
        auth: true,
    },
    {
        title: "Mua hàng",
        href: '#',
        icon: <FontAwesomeIcon icon={faCartArrowDown} />,
        key: '#buy',
        submenu: [
            {
                title: 'Via VN',
                slug: '1'
            },
            {
                title: 'Via VN1',
                slug: '2'
            },
            {
                title: 'Via VN2',
                slug: '3'
            },
            {
                title: 'Via VN3',
                slug: '4'
            },
            {
                title: 'Via VN',
                slug: '5'
            },
            {
                title: 'Via VN',
                slug: '6'
            },
            {
                title: 'Via VN',
                slug: '7'
            },
            {
                title: 'Via VN',
                slug: '8'
            },
            {
                title: 'Via VN',
                slug: '9'
            },
            {
                title: 'Via VN',
                slug: '10'
            },
            {
                title: 'Via VN',
                slug: '11'
            },
            {
                title: 'Via VN',
                slug: '12'
            },
            {
                title: 'Via VN',
                slug: '13'
            },
            {
                title: 'Via VN',
                slug: '14'
            },
            {
                title: 'Via VN',
                slug: '15'
            },
            {
                title: 'Via VN',
                slug: '16'
            },
        ]
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
        sub_icon: <Image src={"/images/hot2.gif"} width={20} height={20} alt="" />,
    },
    {
        title: "Group Zalo Support",
        href: "https://zaloweb.me",
        target: "_blank",
        icon: <FontAwesomeIcon icon={faBook} />,
        sub_icon: <Image src={"/images/hot2.gif"} width={20} height={20} alt="" />,
    },
];

function Menu() {
    const router = useRouter();
    const { asPath } = router;

    return (
        <div id="left_navbar">
            <div className="logo">
                <Link href="/">
                    <a>
                        <div className={styles.logo_wrap}>
                            <Image src={"/images/logo.png"} alt="logo" layout="fill" />
                        </div>
                        <h2>ViaFb.VN</h2>
                    </a>
                </Link>
            </div>
            <ul className={styles.menu}>
                {menus.map((menu, index) =>
                    isLogin ? (
                        <MenuItem menu={menu} active={menu.href == asPath} key={index} />
                    ) : (
                        !menu.auth && <MenuItem menu={menu} active={menu.href == asPath} key={index} />
                    )
                )}
            </ul>
        </div>
    );
}

export default Menu;
