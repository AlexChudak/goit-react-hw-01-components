import PropTypes from "prop-types";

import styles from './Transition.module.css'


const TransactionHistory = ({ items })=>{
    return <table className={styles.transaction_history}>
  <thead>
    <tr className={styles.tr}>
      <th className={styles.th}>Type</th>
      <th className={styles.th}>Amount</th>
      <th className={styles.th}>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map((item)=><tr id={item.id}  >
      <td className={styles.td}>{item.type}</td>
      <td className={styles.td}>{item.amount}</td>
      <td className={styles.td}>{item.currency}</td>
    </tr>)} 
  </tbody>
</table>
};


TransactionHistory.propTypes = {
  id:PropTypes.string,
      type:PropTypes.string,
    amount:PropTypes.number,
  currency:PropTypes.string
}




export default TransactionHistory;