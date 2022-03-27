import React from "react";
import Lottie from "react-lottie";

import successAnimationData from "../../utils/animations/success-animation.json";

import { Container, Overlay } from "./styles";


const successOptions = {
  loop: true,
  autoplay: true,
  animationData: successAnimationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function SuccessModal() {
  return (
    <Overlay>
      <Container>
        <Lottie
          options={successOptions}
          width={796}
          height={714}
          isStopped={false}
          isPaused={false}
        />
      </Container>
    </Overlay>
  );
}
