import React from "react";
import Celdagato from "../Celdagato/Celdagato";

function Juegogato(){
    return(
        <div className="juego">
            <div className="fila">
                <Celdagato/>
                <Celdagato/>
                <Celdagato/>
            </div>
        </div>
    );
}
export default Juegogato;