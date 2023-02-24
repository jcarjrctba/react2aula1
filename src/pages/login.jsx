import { Button } from "../ui/button";
import { Text, TextLink } from "../ui/text";
import styled from "styled-components";
import React from "react";
import { InstaContext } from "../App";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 70%;
  margin: 5% auto;
  background-color: #b4b0b0;
  padding: 20px;
  border-radius: 5px;
  border: #e1d9d9 7px solid;
`;

const TitleWrapper = styled.div`
  margin-bottom: 16px;
`;

const Form = styled.form``;

const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
  input {
    width: 100%;
    height: 40px;
    border: 0;
    padding: 10px;
  }
`;

export const Login = (props) => {
  const { meuState, meuDispatch } = React.useContext(InstaContext);

  const [user, setUser] = React.useState("");
  const [pass, setPass] = React.useState("");
  const onClickHomeHandler = () => {
    if (pass && user) {
      meuDispatch({ type: "change_current_page", payload: "home" });
      meuDispatch({ type: "add_user", payload: { username: user } });
    }
  };

  const onClickSignUpHandler = () => {
    meuDispatch({ type: "change_current_page", payload: "signup" });
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };

  const handleChangePass = (event) => {
    setPass(event.currentTarget.value);
  };

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Text color="darkblue">Instagram</Text>
        </TitleWrapper>
        <Form>
          <InputWrapper>
            <input
              type="text"
              placeholder="Telefone, nome de usuário ou e-mail"
              onChange={handleChangeUser}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="password"
              onChange={handleChangePass}
              value={pass}
              placeholder="Senha"
            />
          </InputWrapper>
        </Form>
        <Button onClick={onClickHomeHandler}>Entrar</Button>
        <TextLink onClick={onClickSignUpHandler}>
          Não tem uma conta? Cadastre-se
        </TextLink>
      </Wrapper>
    </>
  );
};
