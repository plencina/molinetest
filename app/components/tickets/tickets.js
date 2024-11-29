import css from "./css.module.css"
import { storeTickets } from "@/app/state/state"


export default function Tickets () {
    const { vendidos, ingresos } = storeTickets()
    return <div className={css.main}>
        <h2>Tickets</h2>
        <span>
        <h4>Vendidos: {vendidos}</h4>
        <h4>Ingresos: {ingresos}</h4>
        </span>
    </div>
}