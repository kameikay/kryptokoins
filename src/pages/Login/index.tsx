import React, { useState } from "react";

import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import Lottie from "react-lottie";

import { Container, LeftContainer, RightContainer } from "./styles";

import { FormGroup } from "../../components/FormGroup";
import { LoginInput } from "../../components/LoginInput";

import { useError } from "../../hooks/useError";
import animationData from "../../utils/animations/92445-crypto-bitcoin.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useError();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "email", message: "E-mail é obrigatório" });
    } else {
      removeError("email");
    }
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "password", message: "Senha é obrigatória" });
    } else {
      removeError("password");
    }
  }

  return (
    <Container>
      <LeftContainer>
        <Lottie
          options={defaultOptions}
          width={560}
          height={720}
          isStopped={false}
          isPaused={false}
        />
      </LeftContainer>

      <RightContainer>
        <div className="title">
          <h2>Seja bem-vindo!</h2>
          <p>
            Para acessar sua conta, faça o login abaixo com suas credenciais.
          </p>
        </div>

        <form>
          <FormGroup label="E-mail" error={getErrorMessageByFieldName("email")}>
            <LoginInput
              value={email}
              onChange={(event) => handleEmailChange(event)}
              type="email"
              autoComplete="new-password"
              isOnError={!!getErrorMessageByFieldName("email")}
            />
            <MdOutlineAlternateEmail size={24} />
          </FormGroup>

          <FormGroup
            label="Senha"
            error={getErrorMessageByFieldName("password")}
          >
            <LoginInput
              value={password}
              onChange={(event) => handlePasswordChange(event)}
              type="password"
              autoComplete="new-password"
              isOnError={!!getErrorMessageByFieldName("password")}
            />
            <MdLockOutline size={24} />
          </FormGroup>

          <button disabled={errors.length > 0}>Entrar</button>
        </form>
      </RightContainer>
    </Container>
  );
}
