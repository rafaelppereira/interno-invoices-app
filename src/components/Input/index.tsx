import { useEffect, useRef } from "react";
import { useField } from '@unform/core';

import { Container } from "./styles";

interface InputProps {
  name: string;
  placeholder: string;
  type: string;
}

export function Input({ name, placeholder, ...rest }: InputProps) {
  // const inputRef = useRef(null);
  // const { fieldName, registerField } = useField(name);

  // useEffect(() => {
  //   registerField({
  //     name: fieldName,
  //     ref: inputRef.current,
  //     path: 'value'
  //   })
  // }, [fieldName, registerField])
  
  return (
    <Container placeholder={placeholder} {...rest} />
  );
}