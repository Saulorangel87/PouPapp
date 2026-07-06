//import logo from './assets/logo.png'
import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/Searchinput";
import { Typography } from "./components/Typography";
import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";
import { SavingsStatus } from "./components/SavingsStatus";
import styles from "./app.module.css";
import { Transactions } from "./components/Transactions";
import { Account } from "./components/AccountBank";

function App() {
  const transactions = [
    {
      description: "iFood",
      value: -20,
      date: "2024-10-01T00:00:00-03:00",
      account: "Anybank",
    },
    {
      description: "Papelaria Mila",
      value: -80,
      date: "2024-10-03T00:00:00-03:00",
      account: "Bytebank",
    },
    {
      description: "Freela (2ª parte)",
      value: 1000,
      date: "2024-10-03T00:00:00-03:00",
      account: "Anybank",
    },
    {
      description: "Magazine Luiza",
      value: -300,
      date: "2024-10-05T00:00:00-03:00",
      account: "Switch Bank",
    },
  ];

  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant="h1">Olá, Saulo!</Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>Orçamento diário disponível:</Card.Header>
              <Card.Body>
                <DailyBudget value={250} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Progresso da meta financeira</Card.Header>
              <Card.Body>
                <SavingsStatus percent={40} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Movimentação financeira</Card.Header>
              <Card.Body>
                <Transactions items={transactions} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>Minhas contas:</Card.Header>
              <Card.Body>
                <Account transactions={transactions} />
              </Card.Body>
            </Card>
          </section>
        </div>
      </Main>
    </Container>
  );
}

export default App;
