import React, { useState } from "react";

import { MdOutlineAlternateEmail, MdLockOutline } from "react-icons/md";
import Lottie from "react-lottie";

import { Container, LeftContainer, RightContainer } from "./styles";

import { FormGroup } from "../../components/FormGroup";
import { LoginInput } from "../../components/LoginInput";

import { useError } from "../../hooks/useError";
import animationData from "../../utils/animations/login-animation.json";

import { Loading } from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import isEmailValid from "../../utils/isEmailValid";
import { SuccessModal } from "../../components/SuccessModal";

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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const navigate = useNavigate();
  const { errors, getErrorMessageByFieldName, removeError, setError } =
    useError();

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);

    if (!event.target.value) {
      setError({ fieldName: "email", message: "E-mail é obrigatório" });
    } else if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ fieldName: "email", message: "E-mail inválido" });
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

  function handleLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (errors.length === 0 && email && password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);

        setTimeout(() => {
          setIsSuccess(false);
          navigate("/dashboard");
        }, 1500);
      }, 1500);
    } else {
      setError({ fieldName: "email", message: "E-mail é obrigatório" });
      setError({ fieldName: "password", message: "Senha é obrigatória" });
    }
  }
  return (
    <Container>
      {isLoading && <Loading />}
      {isSuccess && <SuccessModal />}
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

        <form onSubmit={(event) => handleLogin(event)}>
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
