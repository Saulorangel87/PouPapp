import styles from "./account.module.css";
import { Button } from "../Button";
import { IconBank, IconWallet } from "../Icons";

const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const AccountItem = ({ account }) => {
  return (
    <div className={styles.account}>
      <div>
        <p className={styles.bank}>
          <IconBank />
          <strong>{account.bank}</strong>
        </p>
      </div>
      <div className={styles.details}>
        <p>
          <strong>Saldo</strong>
        </p>
        <p>{formatter.format(account.balance)}</p>
      </div>
    </div>
  );
};

export const Account = ({ transactions }) => {
  const accounts = transactions.reduce((accumulator, transaction) => {
    const bank = transaction.account;
    const account = accumulator.find((item) => item.bank === bank);

    if (account) {
      account.balance += transaction.value;
      return accumulator;
    }

    return [...accumulator, { bank, balance: transaction.value }];
  }, []);

  return (
    <div className={styles.accounts}>
      <ul className={styles.list}>
        {accounts.map((account) => (
          <li key={account.bank}>
            <AccountItem account={account} />
          </li>
        ))}
      </ul>
      <div className={styles.divider} />
      <div className={styles.actions}>
        <Button>
          <IconWallet /> Adicionar conta
        </Button>
      </div>
    </div>
  );
};
