"use client"
import css from "./css.module.css"
import Tickets from "../components/tickets/tickets"
import Puertas from "../components/puertas/puertas"

import { storePuertas } from "../state/state"
import { conectarWS, activarPuertas } from "../websocket/page"
/* 
            handlePuerta("norte", "ayacucho", "puerta1", "ticket", "rechazado")

*/
export default function Dashboard () {
    const { handlePuerta } = storePuertas()

    return <div className={css.main}>
        <button onClick={()=>{conectarWS()}}>conectar websocket</button>
        <h1>Dashboard</h1>
        <Tickets />
        <Puertas />
    </div>
} 