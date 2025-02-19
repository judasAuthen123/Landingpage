import React from 'react'
import layeredgeW from "../../../../assets/imgs/layeredgeW.png"

import styles from "./GroupConnect.module.css"
import { RiMediumLine } from 'react-icons/ri'
import { BsTwitterX } from "react-icons/bs";
import { RxDiscordLogo } from 'react-icons/rx'
import { TbBrandTelegram } from 'react-icons/tb'
export default function GroupConnect() {
  return (
    <div className={styles.container}>
      <img src={layeredgeW} alt='layeredge'/>
      <div className={styles.viewConnect}>
        <RiMediumLine className={styles.icon}/>
        <TbBrandTelegram className={styles.icon}/>
        <RxDiscordLogo className={styles.icon}/>
        <BsTwitterX className={styles.icon}/>
      </div>
    </div>
  )
}
