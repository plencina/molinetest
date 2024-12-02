"use client"
import css from "./css.module.css"
import Navbar from "../components/navbar/navbar"
import Tickets from "../components/tickets/tickets"
import Puertas from "../components/puertas/puertas"
import Estadisticas from "../components/estadisticas/estadisticas"

import { storePuertas, storeNoche } from "../state/state"
import { conectarWS, activarPuertas } from "../websocket/page"
import { useEffect } from "react"
/* 
            handlePuerta("norte", "ayacucho", "puerta1", "ticket", "rechazado")

*/
export default function Dashboard () {
    const { handlePuerta } = storePuertas()
    const { noche } = storeNoche()

    const activarPuertas = () => {
        for (let i = 1; i < 25; i++) {
            handlePuerta(`p${i}`, "estado", true)
        }
    }
    const ticket = (puerta, value) => {
        handlePuerta(puerta, "ticket", value ? "correcto" : "rechazado")
    }
    const lowChance = () => {
        return Math.random() < 0.99
    }

    const simularTickets = async () => {
        for (let i = 1; i < 25; i++) {
            for (let t = 0; t < 1000; t++) {
                const r = lowChance()
                ticket(`p${i}`, r)
            }
        }
    }
    useEffect(()=>{
        simularTickets()
    },[])

    return <div className={css.main}>
        <Navbar />
        <div className={css.btns}>
        <button onClick={activarPuertas}>activar puertas</button>
        <button onClick={simularTickets}>simular tickets</button>
        <button onClick={()=>{conectarWS()}}>conectar websocket</button>
        <button onClick={()=>{conectarWS()}}>cargar datos</button>
        </div>
        <h1>Dashboard, noche { noche }</h1>
        <Tickets />
        <Estadisticas />
        <Puertas />
    </div>
} 