import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Nav } from 'react-bootstrap';
import styles from "../styles/Menu.module.css";

const menus = [
    {
        title: 'Trang chủ',
        href: '/',
    },
    {
        title: 'Mua hàng',
        href: '/',
    },
    {
        title: 'Chính sách bảo hành',
        href: '/policy',
    },
    {
        title: 'Tin tức',
        href: '/news',
    },
    {
        title: 'Zalo Admin',
        href: '/',
    },
    {
        title: 'Group Zalo Support',
        href: '/',
    },
]
function Menu() {
    return (
        <div id='left_navbar'>
            <div class='logo'>
                <Link href="/">
                    <a>
                        <div className={styles.logo_wrap}>
                            <Image src={'/images/logo.png'} alt="logo" layout='fill' />
                        </div>
                        <h2>ViaFb.VN</h2>
                    </a>
                </Link>
            </div>
            <ul>
                {menus.map((menu, index) => (
                    <li key={index}>
                        <Link href={menu.href} >
                            <a>{menu.title}</a>
                        </Link>
                    </li>
                ))}

            </ul>
        </div>

    )
}

export default Menu