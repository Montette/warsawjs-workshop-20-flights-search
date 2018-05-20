import React from 'react';
import styles from './Flight.css';

const Flight = ({flight}) => {
    return (
        <div className={styles.flight}>
            <p className={styles.price}>Price: <span className={styles.span}> {flight.price}PLN </span></p>
            <div className={styles.path}>
            <p>from: <span className={styles.span}>{flight.outboundPath[0].airportFrom}</span></p>
            <p>to: <span className={styles.span}>{flight.outboundPath[flight.outboundPath.length - 1].airportTo}</span></p>
            </div>
            <div className={styles["path-back"]}>
            <p>departure date: <span className={styles.span}>{flight.outboundDate}</span></p>
            <p>return date:<span className={styles.span}> {flight.inboundDate}</span></p>
            </div>
        </div>
    )
}

export default Flight