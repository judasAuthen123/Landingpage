import React, { useState } from "react"
import styles from "./PrimaryButtonLayout.module.css"
export default function PrimaryButtonLayout({ children, onClick }) {
    const [isBounce, setIsBounce] = useState(false)
    const handlerClick = () => {
        setIsBounce(true)
        setTimeout(() => setIsBounce(false), 1000)
    }
    return (
        <div className={`${styles.container} ${isBounce && styles.bounce}`}
            onClick={() => {
                onClick()
                handlerClick()
            }}>
            {children}
        </div>
    )
}
