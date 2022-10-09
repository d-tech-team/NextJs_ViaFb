import Link from 'next/link'
import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { MENU_ROUTE } from '../../../../route/menu'
import styles from './index.module.scss'

function SubMenu({ subMenu, show }) {

    return (
        <ListGroup variant="flush" className="submenu" data-show={show}>
            {Array.isArray(subMenu) && subMenu.map((submenu, index) => (
                <Link key={index} href={`${MENU_ROUTE.category}/${submenu.slug}`} passHref={true}>
                    <ListGroup.Item action className="submenu_item" >
                        <span className="submenu_title text-uppercase">
                            {submenu.title}
                        </span>
                        ✅
                    </ListGroup.Item>

                </Link>
            ))}
        </ListGroup>
    )
}

export default SubMenu
