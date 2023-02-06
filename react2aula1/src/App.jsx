import { Navbar } from "./components/navbar";
import { Header } from "./components/header";
import { Title } from "./components/title";
import { NavItem } from "./components/nav-item";
import { Avatar } from "./components/avatar";
import { Text } from "./components/text";
import { Button } from "./components/button";

const items = [
  "Pagina Inicial",
  "Pesquisa",
  "Explorer",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
  "Mais",
];

function App() {
  return (
    <>
      <Navbar>
        <Title />
        {items.map((item) => (
          <NavItem key={item} text={item} />
        ))}
      </Navbar>
      <Header>
        <Avatar />
        <Text bold>@adatechbr</Text>
        <Button>Seguindo</Button>
        <Button>Enviar mensagem</Button>
        <Text>211 publicações</Text>
        <Text>44,2 mil seguidores</Text>
        <Text>2 seguindo</Text>
      </Header>
    </>
  );
}

export default App;
