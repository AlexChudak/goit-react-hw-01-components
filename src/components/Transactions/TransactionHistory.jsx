import PropTypes from "prop-types";


const TransactionHistory = ({ items })=>{
    return <table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
      <tbody>
        {items.map((item)=><tr id={item.id}  >
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
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