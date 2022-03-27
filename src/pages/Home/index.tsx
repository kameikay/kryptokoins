import React from "react";
import { CryptoCards } from "../../components/CryptoCards";
import { Container } from "./styles";

export default function Home() {
  return (
    <Container>
      <div className="title">
        <h2>Criptomoedas</h2>
      </div>
      <CryptoCards />
    </Container>
  );
}
