import { useEffect, useRef } from "react";
import { useField } from '@unform/core';

import { Container, Label } from "./styles";

interface InputProps {
  name: string;
  placeholder?: string;
  type: string;
  label?: string;
  value?: string;
  disabled?: boolean;
}

export function Input({ name, placeholder, label, value, ...rest }: InputProps) {
  const inputRef = useRef(null);
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])
  
  return (
    <>
      <Label>{label}</Label>
      <Container ref={inputRef} placeholder={placeholder} value={value} {...rest} />
    </>
  );
}