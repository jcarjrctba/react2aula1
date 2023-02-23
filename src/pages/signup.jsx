import { Button } from "../ui/button";
import { Text, TextLink } from "../ui/text";
import styled from "styled-components";
import React from "react";

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

export const SignUp = (props) => {
  const [userId, setUserId] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const onClickLoginHandler = () => {
    props.onClickLoginButton("login");
  };

  const handleChangeUserId = (event) => {
    setUserId(event.currentTarget.value);
  };

  const handleChangeFullName = (event) => {
    setFullName(event.currentTarget.value);
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <Text color="darkblue">Instagram Sign up</Text>
        </TitleWrapper>
        <Form>
          <InputWrapper>
            <input
              type="text"
              placeholder="Número do celular ou e-mail"
              onChange={handleChangeUserId}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="Nome completo"
              onChange={handleChangeFullName}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="text"
              placeholder="Nome de usuário"
              onChange={handleChangeUser}
            />
          </InputWrapper>
          <InputWrapper>
            <input
              type="password"
              placeholder="Senha"
              onChange={handleChangePassword}
            />
          </InputWrapper>
        </Form>
        <Button
          onClick={() => {
            console.log({ userId, fullName, user, password });
          }}
        >
          Entrar
        </Button>
        <TextLink onClick={onClickLoginHandler}>Voltar para o login</TextLink>
      </Wrapper>
    </>
  );
};
