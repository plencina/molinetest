import css from "./css.module.css"
import VerticalChart from "../charts/vertical-lines/page"

export default function Estadisticas () {
    return <div className={css.main}>
        <h2>Estadísticas</h2>
        <div className={css.grafico}>
            <VerticalChart />
        </div>
    </div> 
}