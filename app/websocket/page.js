"use client"
import io from 'socket.io-client';
import css from "./css.module.css"

import { storePuertas } from '../state/state';
import { useState } from 'react';

let socket;

export const handlePuerta = (evento, id) => {
    socket.emit("handlePuerta", { evento, id })
}


export const conectarWS = () => {

    socket = io("ws://localhost:3000")

    socket.on("connect", ()=>{
        console.log("conectado al servidor")
    })
    socket.on("disconnect", ()=>{
        console.log("desconectado del servidor")
        return () => {
            socket.disconnect()
        }
    })
    socket.on("handlePuerta", (data) => {
        const upgrade = storePuertas((state)=>state.handlePuerta)
        upgrade(data.id, "estado", data.evento == "activar" ? true : false)
        console.log("evento desde el server, ",data)
    })
    socket.on("broadcast", (data) => {
        console.log("nuevo mensaje del server: ", data)
    })
} 

export default function Websocket () {
    const [ state, setState ] = useState(undefined)

    return <div className={css.main}>
        <button onClick={()=>{conectarWS()}}>conectar ws</button>
        <input placeholder='puerta: ' onChange={(e)=>setState(e.target.value)}/>
        <button onClick={()=>{handlePuerta("activar", state)}}>activar puerta</button>
        <button onClick={()=>{handlePuerta("desactivar", state)}}>desactivar puerta</button>
    </div>
}