//import logo from './assets/logo.png'
import { Aside } from "./components/Aside";
import { Container } from "./components/Container";
import { Main } from "./components/Main";
import { SearchInput } from "./components/Searchinput";

function App() {
  return (
    <Container>
      <Aside />
      <Main>
        <SearchInput />
      </Main>
    </Container>
  );
}

export default App;
