"use client"
import css from "./css.module.css"

export default function Puerta ({ data }) {
    
    return <div className={css.main}>
        <p className={css.tpuerta}>{data.id}</p>
         <p>Estado: { data.estado ? "Activa" : "Inactiva" }</p>
         <p>Ingresos correctos: {data.tickets.correctos}</p>
         <p>Ingresos rechazados: {data.tickets.rechazados}</p>
    </div>
} 