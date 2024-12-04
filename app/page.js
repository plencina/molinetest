"use client"
import css from "./page.module.css"
import { redirect } from "next/navigation"

export default function Home() {

  const checkCredentials = async ( form ) => {
    const user = form.get("user")
    const password = form.get("password")
    
    const res = await fetch("/api", {
      method: "post",
      body: JSON.stringify({ event: 1, data: { user, password }})
    })
    const response =  await res.json()
    const { error, login } = response
    if(error) console.log("error: ", error)
    if(login) {
      redirect("/dashboard")
    } else {
      console.log("login incorrecto")
    }
  }

  return (
    <div className={css.main}>
      <form
      action={checkCredentials}
      >
        <h3>Iniciar sesión</h3>
        <p>Usuario</p>
        <input type="text" name="user" ></input>
        <p>Contraseña</p>
        <input type="password" name="password"></input>
        <input type="submit" value="Conectar"/>
      </form>
    </div>
  );
}
