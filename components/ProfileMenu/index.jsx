import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { MENU_ROUTE } from '../../route/menu'
import styles from "./index.module.scss";
import Image from 'next/image'

function ProfileMenu({ profile }) {
    return (
        <div className={styles.profile_box}>
            <div className={styles.top_icon}>
                <Image src="/images/icon/dollarpurple.png" width={100} height={100} alt="" />
            </div>
            <h5 className={styles.username}>User: <span>{profile.username}</span></h5>
            <p className={styles.money}>Đã nạp: <span>{profile.money}</span> <span>VND</span></p>
            <Link href={MENU_ROUTE.deposit}>
                <a className={styles.add_more}>Nạp thêm tiền <FontAwesomeIcon icon={faArrowRight} /></a>
            </Link>
        </div>
    )
}


export default ProfileMenu
