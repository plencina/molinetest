import css from "./css.module.css"
import VerticalChart from "../charts/vertical-lines/page"

const data = {
    h20: 15000,
    h21: 20000,
    h22: 10000,
    h23: 1000,
    h00: 100,
    h01: 50,
    h02: 30,
    h03: 10,
    h04: 1
}

export default function Estadisticas () {
    return <div className={css.main}>
        <h2>Estadísticas</h2>
        <div className={css.grafico}>
            <VerticalChart data={data} />
        </div>
    </div> 
}