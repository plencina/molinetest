"use client"
import css from "./css.module.css"
import { useEffect } from "react"

import { Navbar } from "../components/navbar/navbar"
import { Tickets } from "../components/tickets/tickets"
import { Puertas } from "../components/puertas/puertas"
import { Stats } from "../components/estadisticas/estadisticas"

import { storePuertas, storeNoche } from "../state/state"
import { conectarWS, activarPuertas } from "../websocket/page"

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
        </div>
        <h1>Dashboard, noche { noche }</h1>
        <Tickets />
        <Stats />
        <Puertas />
    </div>
} 