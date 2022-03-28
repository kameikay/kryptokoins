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

export function Loading({
  width = 796,
  height = 714,
}: {
  width?: number;
  height?: number;
}) {
  return width !== 796 && height !== 714 ? (
    <Container>
      <Lottie
        options={loadingOptions}
        width={width}
        height={height}
        isStopped={false}
        isPaused={false}
      />
    </Container>
  ) : (
    <Overlay>
      <Container>
        <Lottie
          options={loadingOptions}
          width={width}
          height={height}
          isStopped={false}
          isPaused={false}
        />
      </Container>
    </Overlay>
  );
}
