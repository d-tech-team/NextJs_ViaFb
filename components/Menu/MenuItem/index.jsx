import { faCaretRight, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react'
import { MENU_ROUTE } from '../../../route/menu';
import styles from './index.module.scss'

function MenuItem({ menu, active }) {
    const [showSubmenu, setShowSubmenu] = useState(false)
    const handleToggleSubMenu = (e) => {
        if (menu.submenu) {
            e.preventDefault();
        }
        setShowSubmenu(!showSubmenu);
    }
    return (
        <li className={`menu_item ${styles.menuItem}`}>
            <Link href={menu.href} className="menu_link">
                <a onClick={handleToggleSubMenu}
                    target={menu.target}
                    className={active || menu.submenu && showSubmenu ? `${styles.active} active` : ""}
                >
                    {menu.icon}
                    <span className={`menu_title ${styles.menu_title}`}>{menu.title}</span>
                    {menu.sub_icon}
                    <span className={styles.toggleIcon}>
                        {menu.submenu && <FontAwesomeIcon icon={faCaretRight} />}
                    </span>
                </a>
            </Link>
            {menu.submenu && (
                <ul className={styles.submenu} data-hidden={!showSubmenu}>
                    {menu.submenu.map((submenu, index) => (
                        <li key={index} className={styles.submenu_item}>
                            <Link href={`${MENU_ROUTE.category}/${submenu.slug}`} >
                                <a suppressHydrationWarning={true} className={active ? `${styles.active} active` : ""}>
                                    <span className={styles.menu_subtitle}>{submenu.title}</span>
                                    <FontAwesomeIcon icon={faSquareCheck} fontSize={'20'} />
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default MenuItem