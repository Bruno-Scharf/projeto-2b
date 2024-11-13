"use client"
import { useState } from "react"


export default function State() {
    const [msg, setMsg] = useState("");
    const [mostrarDiv, setMostrarDiv] = useState(true)

    

    //const alterarMsg = () => {
    //    setMsg ('Bom dia')
    //    console.log('msg:'+msg)
    //}
    const manipularInput = (evento ) =>{
        console.log(evento.target.value);
        setMsg(evento.target.value)
    }
    
    return(
        <div>
            <p>{img}</p>
            <button onClick={alterarMsg}>alterar</button>
            <p>sua mensagem: {msg}</p>
            <input type="text" onChange={manipularInput} />


            <button onClick={()=>setMostrarDiv(!mostrarDiv)}>{mostrarDiv? 'Esconder': 'Mostrar'}</button>
            {mostrarDiv && (
            <div>
                <p>parágrafo dinamico!</p>
            </div>
            )
            }
        </div>

        
    )
}