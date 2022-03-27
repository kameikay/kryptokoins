import React, { ReactNode, useState } from "react";
import { Container } from "./styles";

interface IFromGroup {
  children: ReactNode | any;
  label: string;
  error?: string;
}

export function FormGroup({ children, label, error }: IFromGroup) {
  const [formOnFocus, setFormOnFocus] = useState<boolean>(false);
  const inputIsEmpty = children[0].props?.value;

  return (
    <Container
      onFocus={() => setFormOnFocus(true)}
      onBlur={() => setFormOnFocus(false)}
      formOnFocus={formOnFocus}
      isEmpty={!inputIsEmpty}
      isOnError={!!error}
    >
      <span>{label}</span>
      {children}
      {error && <small>{error}</small>}
    </Container>
  );
}
