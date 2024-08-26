import React from "react";
import { ButtonSt } from "./styled_componetes/ButtonSt";
import { Link } from "react-router-dom";

export const Button = (props) => {
  return (
    <>
      <Link className="bt" to={'/SecondPage'}>
      Clique aqui
      </Link>
    </>
  );
}
