import React from "react";
import * as Ai from 'react-icons/ai'
import {NavLink} from "react-router-dom"

export const Sidenav = () => {
  return (
    <nav className="sidenav box bg-1">
      <ul>
        <li>
          <NavLink to="/"><Ai.AiFillHome /> Resumo</NavLink>
        </li>
        <li>
          <NavLink to="/vendas"><Ai.AiFillCreditCard/> Vendas</NavLink>
        </li>
        <li>
          <a href=""><Ai.AiFillTool/> Configurações</a>
        </li>
        <li>
          <a href=""><Ai.AiFillPhone/> Contato</a>
        </li>
        <li>
          <a href=""><Ai.AiOutlineArrowLeft/> Sair</a>
        </li>
      </ul>
    </nav>
  );
};
