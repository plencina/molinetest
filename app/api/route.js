import { NextResponse } from "next/server";

export async function POST ( req ) {
    const { event, data } = await req.json()
    switch (event) {
        case 1: 
            try {
                const { user, password } = data;
                if( user == "asd" && password == "123") {
                    return NextResponse.json({ login: true })
                } else {
                    return NextResponse.json({ login: false })
                }
            } catch (error) {
                return NextResponse.json({ error })
            }
        case 2: {
            try {
                return NextResponse.json({
                    ok: true,
                    vendidos: 200000,
                    reservas:10000,
                    ingresos: 25000 
                })
            } catch (error) {
                return NextResponse.json({ error })
            }
        }
        default: return NextResponse.json({ error: "evento default "})
    }
    return NextResponse.json({ rta: true })

}

export async function GET ( req ) {
    return NextResponse.json({ error: "no get" })
}