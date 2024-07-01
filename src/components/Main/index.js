import React from "react";
import { MainContainer } from "./styles";
import backgroundImg from "../../assets/background.png";
import { Input } from "../Input";
import { Button } from "../Button";

export function Main() {
  return (
    <MainContainer>
      <div className="divImg">
        <img src={backgroundImg} alt="Background imagem" />
      </div>
      <article> 
        <div className="searchDiv">
        <Input />
        <Button/>
        </div>
        <p>KÇLJÇLKJÇLKJÇLKJÇLKJ</p>
      </article>
    </MainContainer>
  );
}
