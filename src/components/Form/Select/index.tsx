import { ReactNode } from "react";
import { Container, Label } from "./styles";

interface SelectProps {
  children: ReactNode;
  name: string;
  label: string;
}

export function Select({ children, name, label }: SelectProps) {
  return (
    <>
      <Label>
        {label}
      </Label>
      <Container name={name}>
        {children}
      </Container>
    </>
  );
}