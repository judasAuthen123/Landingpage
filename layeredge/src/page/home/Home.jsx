import React from 'react'
import styles from "./styles.module.css"
import PrimaryHeader from '../../shared/components/header/PrimaryHeader'
import PrimaryButtonLayout from '../../shared/components/layouts/button/PrimaryButtonLayout'
import Partners from './_components/Partners'
export default function Home() {
  return (
    <div className={styles.container}>
      <PrimaryHeader />
      <div className={styles.banner}>
        <div className={styles.content}>
          <p className={styles.text}>Powering trustless settlement & trust-minimized vertification on Bitcoin at 99% lower cost for all Layers & Apps</p>
          <h2>Bitcoin Backed <p>Internet</p></h2>
          <div className={styles.button}>
            <PrimaryButtonLayout>
              <button className={`${styles.btn} ${styles.buttonTest}`}>Incentivized Testnet</button>
            </PrimaryButtonLayout>
            <PrimaryButtonLayout>
              <button className={`${styles.btn} ${styles.buttonDoc}`}>Documentation</button>
            </PrimaryButtonLayout>
          </div>
        </div>
        <div className={styles.mouse}>
          <div className={styles.mouseView}>

          </div>
        </div>
      </div>
      <div className={styles.banner2}>
        <div className={styles.content}>
          <h2>Powering Trust-Minimized</h2>
          <h2>Settlement on Bitcoin</h2>
          <p>
            LayerEdge opens door for anyone to tap into Bitcoin's security, while talking only upto 1% of the Bitcion blockspace they would have taken building rirectly without LayerEdge
          </p>
        </div>
      </div>
      <div className={styles.partners}>
          <Partners />
      </div>
    </div>
  )
}
