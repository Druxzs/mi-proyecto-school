import React from "react";
import "./Chatwebsocket.css";
import { IoIosSend } from 'react-icons/io';
//import { IoLogoSteam } from 'react-icons/io5';
import { useEffect, useState } from "react";

function Chatwebsocket(){

    const [mensaje, setMensaje] = useState('');
    const [mensajes, setMensajes] = useState<String[]>([]);
    const [socket, setSocket] = useState<WebSocket | null >(null);
    useEffect (()=>{
        const newSocket = new WebSocket('ws://localhost:8087');
        newSocket.onopen = () =>{
            console.log('Conectado');
        };
        newSocket.onmessage = (evento)=>{
            evento.data.text().then((texto:string)=>{
                console.log(texto);
                setMensajes((mAnterior)=>[...mAnterior, texto]);
            });
        };
        newSocket.onclose = () =>{
            console.log('Sesion cerrada');
        };
        setSocket(newSocket);
        return ()=>{ newSocket.close() };
    },[]);

    const sendMensaje = ()=>{
        if(socket && mensaje.trim()){
            setMensajes((anteriorM)=>
            [...anteriorM, mensaje]);
            socket.send(mensaje);
            setMensaje('');
        }
    }

    return (
        <>
        <div className="chat-container">
            <div className="chat-title">
                Telegram xd {/* Titulo variable */}
            </div>
            <div className="chat-messages">
                {mensajes.map((mensaje, index)=>(
                    <div className={'mensaje-azul'} key={index}>{mensaje}</div>
                ))}
                <div className={`message.green`}>
                    
                    <div className={`message.time`}>
                    
                </div>
                </div>
                <div className={`message.white`}>
                    
                    <div className={`message.time`}>
                    
                </div>
                </div>
            </div>
            <div className="chat-input-message">
                <input className="chat-text" type="chat-text" 
                value={mensaje}
                onChange={(evento)=>
                    setMensaje(evento.target.value)}
                onKeyDown={(evento)=>{
                    if(evento.key == 'Enter'){
                        sendMensaje();
                    }
                }}
                />
                <div onClick={sendMensaje} className="chat-send"><IoIosSend></IoIosSend></div>
            </div>
        </div>
        </>
    )
}
export default Chatwebsocket;