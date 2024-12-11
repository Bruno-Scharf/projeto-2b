"use client"
import { useState } from "react";


export default function Filtro() {
    
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const nomes = ["cauã","jonas","julio", "bruno","emanuel"]
    const pares = nums.filter((num) => (num % 2 === 0));
    const [busca,setBusca] = useState('')
    const nomesBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())))
    console.log(nums)
    console.log(pares);

    return (
        <div>
            <h1>Filtr0</h1>
            <input 
                type="text"
                value={busca}
                onChange={(ev) => setBusca(ev.target.value)}
            />
            <ul>
                {nomesBusca.map((nome , i) => (
                    <li key={i}>{nome}</li>
                ))}
            </ul>
        </div>
    )
}