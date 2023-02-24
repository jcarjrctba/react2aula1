import { InstaContext } from "../../App";
import { NavItem } from "../nav-item";
import { Title } from "../title";
import * as S from "./styles";
import React from "react";

const items = [
  "Página Inicial",
  "Pesquisa",
  "Explorar",
  "Reels",
  "Mensagens",
  "Notificações",
  "Criar",
  "Perfil",
];

export const Navbar = () => {
  const { pageState, meuDispatch } = React.useContext(InstaContext);
  const onClickLoginButtonHandler = () => {
    meuDispatch({ type: "change_current_page", payload: "login" });
  };

  return (
    <S.NavbarWrapper>
      <S.Box>
        <S.Box>
          <Title />
        </S.Box>
        <S.Box>
          {items.map((item) => (
            <NavItem key={item} text={item} />
          ))}
        </S.Box>
      </S.Box>
      <NavItem onClick={onClickLoginButtonHandler} text={"Ir para login"} />
      <NavItem text={"Mais"} />
    </S.NavbarWrapper>
  );
};
