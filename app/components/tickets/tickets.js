"use client"
import { useEffect } from "react"
import css from "./css.module.css"
import { storeTickets } from "@/app/state/state"

const  dataTickets = async () => {
    const r = await fetch("/api", {
        method: "post",
        body: JSON.stringify({ event: 2 })
    })
    const response = await r.json()
    if (response.ok) {
        return response
    }
}

const Tickets =  () => {
    const { vendidos, ingresos, reservas, setTickets } = storeTickets()

    useEffect(()=>{
        const fetch = async () => {
            const response = await dataTickets()
            setTickets(response)
        }
        fetch()
    },[])
    
    return <div className={css.main}>
        <h2>Tickets</h2>
        <span>
        <h4>Vendidos <span className={css.nro}>{vendidos}</span></h4>
        <h4>Ingresos <span className={css.nro}>{ingresos}</span></h4>
        <h4>Reservas <span className={css.nro}>{reservas}</span></h4>
        </span>
    </div>
}

export {
    Tickets
}