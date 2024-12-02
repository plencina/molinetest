"use client"
import { useEffect } from "react"
import css from "./css.module.css"
import { storeTickets } from "@/app/state/state"


export default function Tickets () {
    const { vendidos, ingresos, reservas, fetchData } = storeTickets()
    const dataTickets = async () => {
        await fetchData()
    opacity: 100;
    }
    useEffect(()=>{
        dataTickets()
    },[])
    
    return <div className={css.main}>
        <h2>Tickets</h2>
        <span>
        <h4>Vendidos <span className={css.invert}>{vendidos}</span></h4>
        <h4>Ingresos <span className={css.invert}>{ingresos}</span></h4>
        <h4>Reservas <span className={css.invert}>{reservas}</span></h4>
        </span>
    </div>
}