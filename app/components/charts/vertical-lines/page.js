"use client"
import { useEffect, useState } from "react"
import css from "./css.module.css"
import { storeTickets } from "@/app/state/state"


export default function VerticalChart () {

    const [ state, setState ] = useState({})
    const [ unidades, setUnidades ] = useState([])

    const { ingresosPorHora } = storeTickets()

    const cuantificar = () => {
        if(Object.keys(ingresosPorHora).length > 1){
        const nroMaximo = Object.values(ingresosPorHora).reduce((max, num)=>Math.max(max, num))
        const unidad = nroMaximo / 100;
        let valores = [];
        for(let x of Object.values(ingresosPorHora)){
            let unidades = x / unidad
            valores.push(unidades)
        }
        setUnidades(valores)
    }
}


    useEffect(()=>{
        setState(ingresosPorHora)
        cuantificar()
    },[ingresosPorHora])

    return <div className={css.container}>
        <p className={css.subtitulo}>Ingreso de personas por horario</p>
        <div className={css.row}>
            <p>20:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[0]}%` }}></div>
            </div>
            <p>{state.h20}</p>
        </div>
        <div className={css.row}>
            <p>21:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[1]}%` }}></div>

            </div>
            <p>{state.h21}</p>
        </div><div className={css.row}>
            <p>22:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[2]}%` }}></div>

            </div>
            <p>{state.h22}</p>
        </div><div className={css.row}>
            <p>23:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[3]}%` }}></div>

            </div>
            <p>{state.h23}</p>
        </div><div className={css.row}>
            <p>00:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[4]}%` }}></div>
            </div>
            <p>{state.h00}</p>
        </div><div className={css.row}>
            <p>01:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[5]}%` }}></div>

            </div>
            <p>{state.h01}</p>
        </div><div className={css.row}>
            <p>02:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[6]}%` }}></div>

            </div>
            <p>{state.h02}</p>
        </div><div className={css.row}>
            <p>03:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[7]}%` }}></div>

            </div>
            <p>{state.h03}</p>
        </div><div className={css.row}>
            <p>04:00</p>
            <div className={css.containerBarra}>
            <div className={`${css.barra}`} style={{"width": `${unidades[8]}%` }}></div>

            </div>
            <p>{state.h04}</p>
        </div>
    </div>
}