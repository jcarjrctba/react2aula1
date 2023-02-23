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

export const Login = (props) => {
  const [user, setUser] = React.useState("");
  const onClickHomeHandler = () => {
    props.onClickSelectButton("home");
  };

  const onClickSignUpHandler = () => {
    props.onClickSelectButton("signup");
  };

  const handleChangeUser = (event) => {
    setUser(event.currentTarget.value);
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
            <input type="password" placeholder="Senha" />
          </InputWrapper>
        </Form>
        <Button
          onClick={
            (() => {
              console.log({ user });
            },
            onClickHomeHandler)
          }
        >
          Entrar
        </Button>
        <TextLink onClick={onClickSignUpHandler}>
          Não tem uma conta? Cadastre-se
        </TextLink>
      </Wrapper>
    </>
  );
};
