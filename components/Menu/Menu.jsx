import { faAd, faBook, faCartArrowDown, faHandHoldingMedical, faHome, faNewspaper, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from "./Menu.module.scss";

const isLogin = true;
const menus = [
    {
        title: 'Trang chủ',
        href: '/',
        icon: <FontAwesomeIcon icon={faHome} />
    },
    {
        title: 'Nạp tiền',
        href: '/deposit',
        icon: <FontAwesomeIcon icon={faWallet} />,
        sub_icon: <Image src={'/images/hot2.gif'} width={50} height={50} alt="" />,
        auth: true
    },
    {
        title: 'Mua hàng',
        href: '/cart',
        icon: <FontAwesomeIcon icon={faCartArrowDown} />

    },
    {
        title: 'Chính sách bảo hành',
        href: '/rules-and-policy',
        icon: <FontAwesomeIcon icon={faHandHoldingMedical} />

    },
    {
        title: 'Tin tức',
        href: '/blogs',
        icon: <FontAwesomeIcon icon={faNewspaper} />

    },
    {
        title: 'Zalo Admin',
        href: 'https://zaloweb.me',
        target: '_blank',
        icon: <FontAwesomeIcon icon={faAd} />,
        sub_icon: <Image src={'/images/hot2.gif'} width={20} height={20} alt="" />

    },
    {
        title: 'Group Zalo Support',
        href: 'https://zaloweb.me',
        target: '_blank',
        icon: <FontAwesomeIcon icon={faBook} />,
        sub_icon: <Image src={'/images/hot2.gif'} width={20} height={20} alt="" />

    },
]
function Menu({ show }) {
    const router = useRouter();
    const { asPath } = router;


    function Item({ menu }) {
        return (
            <li className='menu_item'>
                <Link href={menu.href} className="menu_link" >
                    <a target={menu.target} className={(menu.href == asPath) ? `${styles.active} active` : ''}>
                        {menu.icon}
                        <span className='menu_title'>{menu.title}</span>
                        {menu.sub_icon}
                    </a>
                </Link>
            </li>
        )
    }

    return (
        <div id='left_navbar'>
            <div className='logo'>
                <Link href="/">
                    <a>
                        <div className={styles.logo_wrap}>
                            <Image src={'/images/logo.png'} alt="logo" layout='fill' />
                        </div>
                        <h2>ViaFb.VN</h2>
                    </a>
                </Link>
            </div>
            <ul className={styles.menu}>
                {menus.map((menu, index) => (
                    isLogin ? <Item menu={menu} key={index} />
                        : !menu.auth && <Item menu={menu} key={index} />
                ))}

            </ul>
        </div>

    )
}



export default Menu;

