//import logo from './assets/logo.png'
import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/Searchinput";
import { Typography } from "./components/Typography";
import Card from "./components/Card";
import { DailyBudget } from "./components/DailyBudget";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
        <div>
          <Typography variant="h1">Olá, Saulo!</Typography>
          <Typography variant="body">
            Veja como estão suas finanças hoje.
          </Typography>
        </div>
        <section>
          <Card>
            <Card.Header>Orçamento diário disponível:</Card.Header>
            <Card.Body>
              <DailyBudget value={250} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível:</Card.Header>
            <Card.Body>R$ 200</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível:</Card.Header>
            <Card.Body>R$ 200</Card.Body>
          </Card>
          <Card>
            <Card.Header>Orçamento diário disponível:</Card.Header>
            <Card.Body>R$ 200</Card.Body>
          </Card>
        </section>
      </Main>
    </Container>
  );
}

export default App;
