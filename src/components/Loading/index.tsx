import React from "react";
import Lottie from "react-lottie";

import loadingData from "../../utils/animations/loading.json";
import successAnimationData from "../../utils/animations/success-animation.json";

import { Container, Overlay } from "./styles";

const loadingOptions = {
  loop: true,
  autoplay: true,
  animationData: loadingData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export function Loading() {
  return (
    <Overlay>
      <Container>
        <Lottie
          options={loadingOptions}
          width={796}
          height={714}
          isStopped={false}
          isPaused={false}
        />
      </Container>
    </Overlay>
  );
}
