import React, { useEffect, useState } from 'react'
import { arrFilterParter, arrPartners } from '../../../shared/data/data'
import PrimaryButtonLayout from '../../../shared/components/layouts/button/PrimaryButtonLayout'
import img from "../../../assets/imgs/logoW.png"
import styles from "./Partners.module.css"
function Partners() {
    const [currentArr, setCurrentArr] = useState(arrPartners.slice(0, 12))
    const [currentFilter, setCurrentFitler] = useState("All")
    useEffect(() => {
        setCurrentArr(() => {
            return currentFilter === "All" ? 
            arrPartners.slice(0, 12) : 
            arrPartners.filter(item => item.type === currentFilter)
        })
    }, [currentFilter])
    return (
        <div className={styles.container}>
            <div className={styles.viewSort}>
                {
                    arrFilterParter.map(item => (
                        <PrimaryButtonLayout key={item}
                        onClick={() => setCurrentFitler(item)}>
                            <button 
                            className={`${styles.btn} ${item === currentFilter ? styles.active : {}}`}>
                                {item}
                            </button>
                        </PrimaryButtonLayout>
                    ))
                }
            </div>
            <div className={styles.listView}>
                {
                   currentArr.length > 0 && currentArr.map(item => (
                    <div key={item.id}> 
                        <img alt='' src={img}/>
                        <p>{item.content}</p>
                    </div>
                   ))
                }
            </div>
        </div>
    )
}
export default React.memo(Partners)
