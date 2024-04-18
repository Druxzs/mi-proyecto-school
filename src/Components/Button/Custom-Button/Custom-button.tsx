import React from "react";
import { useState } from "react";
import "./custombutton.css";

interface Datos {
    texto: string;
    color: string;
}
function Custombutton({ texto, color}: Datos) {
    const [gatoState, setGatoState] = useState('-');
    const cambiarEstado = () =>{
        setGatoState(valor=>{
            if(valor === '-') return 'X';
            if(valor === 'X') return 'O';
            return '-';
        });
    };
    const nombre = `mi-boton ${color}`;
    return(
        <div onClick={cambiarEstado} className={nombre}>
            {gatoState}
        </div>
    );
}
export default Custombutton;