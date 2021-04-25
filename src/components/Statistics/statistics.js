import React from "react";
import PropTypes from 'prop-types';

import styles from './Statistics.module.css'


const Statistic = ({ title, stats }) => {
    return <section className={styles.statistics}>  
        {title && <h2 className={styles.title}>Upload stats</h2>}

        <ul className={styles.stat_list}>
            {stats.map((stat) =><li key={stat.id} className={styles.item}>
                <span className={styles.label}>{stat.label}</span>
                <span className={styles.percentage}>{stat.percentage}</span>
            </li>)}         
        </ul>
    </section>
};


Statistic.propTypes = {
    id:PropTypes.string,
    label:PropTypes.string,
    percentage:PropTypes.number.isRequired,
 }





export default Statistic;