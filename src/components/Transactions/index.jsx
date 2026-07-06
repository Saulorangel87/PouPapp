import { Button } from "../Button";
import { IconCurrency } from "../Icons";
import { TransactionItem } from "../TransactionItem";
import styles from "./transactions.module.css";

export const Transactions = ({ items }) => {
  return (
    <>
      <ul className={styles.list}>
        {items.map((transactionItem, index) => {
          return (
            <li key={index}>
              <TransactionItem item={transactionItem} />
            </li>
          );
        })}
      </ul>
      <div className={styles.actions}>
        <Button>
          <IconCurrency /> Adicionar transação
        </Button>
      </div>
    </>
  );
};
