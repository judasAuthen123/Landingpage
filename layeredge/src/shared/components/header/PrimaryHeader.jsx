import React from "react"
import styles from "./PrimaryHeader.module.css"
import GroupConnect from './_components/GroupConnect'
import { Link } from 'react-router-dom'
import PrimaryButtonLayout from "../layouts/button/PrimaryButtonLayout"
export default function PrimaryHeader() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <GroupConnect />
                <div className={styles.boxMoving}>
                    <Link>Docs</Link>
                    <Link>Blog</Link>
                    <Link>Ecosystem</Link>
                    <Link>Explorer</Link>
                    <PrimaryButtonLayout>
                        <button className={styles.button}>Run a light node</button>
                    </PrimaryButtonLayout>
                </div>
            </div>
        </div>
    )
}
