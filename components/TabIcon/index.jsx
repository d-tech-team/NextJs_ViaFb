import Image from 'next/image'
import React from 'react'
import styles from './index.module.scss'    

function TabIcon({icon}) {
    return (
        <span className={styles.tab_icon}>
            <Image src={icon} alt="" layout='fill'  objectFit='contain'/>
        </span>
    )
}

export default TabIcon