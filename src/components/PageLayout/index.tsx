import React from "react";
import { Outlet } from "react-router-dom";
import { ContentContainer } from "../../components/ContentContainer";
import { Header } from "../../components/Header";
import { MenuAside } from "../../components/MenuAside";
import { Container } from "./styles";

export default function PageLayout() {
  return (
    <>
      <MenuAside />
      <Header />
      <ContentContainer>
        <Container>
          <Outlet />
        </Container>
      </ContentContainer>
    </>
  );
}
