import { useField } from "@unform/core";
import { ReactNode, useEffect, useRef } from "react";
import { Container, Label } from "./styles";

interface SelectProps {
  children: ReactNode;
  name: string;
  label: string;
}

export function Select({ children, name, label, ...rest }: SelectProps) {
  const selectRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value'
    })
  }, [fieldName, registerField]);

  return (
    <>
      <Label>
        {label}
      </Label>
      <Container ref={selectRef} name={name} {...rest}>
        {children}
      </Container>
    </>
  );
}