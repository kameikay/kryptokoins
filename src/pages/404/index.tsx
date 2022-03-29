import React from "react";
import Lottie from "react-lottie";
import { Container } from "./styles";
import animationData from "../../utils/animations/404.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Page404() {
  return (
    <Container>
      <div className="title">
        <h1>Oopss... Página não encontrada!</h1>
        <p>
          Volte para a página de <a href="/">Login</a>
        </p>
      </div>
      <Lottie
        options={defaultOptions}
        width={500}
        height={500}
        isStopped={false}
        isPaused={false}
      />
    </Container>
  );
}
