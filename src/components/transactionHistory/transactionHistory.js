import styles from './TransactionHistory.module.css';

export default function TransactionHistory(props) {
    const { transactions } = props;
  return (
    <table className={styles.transactionHistory}>
      <thead className={styles.head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.rows}>
      {transactions.map(transaction => (
        <tr key={transaction.id}><td>{transaction.type}</td><td>{transaction.amount}</td><td>{transaction.currency}</td></tr>
        ))}
      </tbody>
    </table>
  );
}