import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./styles.module.css"
export default function Home() {
    const navigate = useNavigate()
    return (
        <div className={styles.container}>
            This is home page
            <button onClick={() => navigate('/explorer')}>Move to Explorer page</button>
        </div>
    )
}
