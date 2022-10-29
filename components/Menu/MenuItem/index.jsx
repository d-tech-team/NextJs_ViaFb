import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import SubMenu from "./SubMenu";

function MenuItem({ menu, active }) {
    const [showSubmenu, setShowSubmenu] = useState(false);
    const handleToggleSubMenu = (e) => {
        if (menu.submenu) {
            e.preventDefault();
        }
        setShowSubmenu(!showSubmenu);
    };
    const isMenuActive = active || (menu.submenu && showSubmenu);
    return (
        <ListGroup.Item as="li"
            className='menu_item'
            action
        >
            <Link href={menu.href}>
                <a className={`menu_link ${isMenuActive ? "active" : ''}`}
                    onClick={handleToggleSubMenu}
                    target={menu.target}

                >
                    <span className={"icon"}>{menu.icon}</span>
                    <span className={"menu_title"}>
                        {menu.title}
                    </span>
                    <span className={"sub_icon"}>{menu.sub_icon}</span>
                    <span className={"toggleIcon"}>
                        {menu.submenu && <FontAwesomeIcon icon={faCaretRight} />}
                    </span>
                </a>
            </Link>
            {Array.isArray(menu.submenu) && (
                <SubMenu subMenu={menu.submenu} show={showSubmenu} />
            )}
        </ListGroup.Item>
    );
}

export default MenuItem;
