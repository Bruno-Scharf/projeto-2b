"use client"


import { useEffect, useState } from "react"

export default function Efeitos(){
    //const [cont1 , setCont1] = useState(0);
    //const [cont2 , setCont2] = useState(1);

    const[ufs, steUfs] = useState([])
    const [estado, setEstado] = useState("")

    const getUfs = async() => {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        if (!response.ok){
            throw new Error('Erro ao buscar os dados:' +response.statusText);
        }
        console.log(response)
        
        const data = await response.json();
        steUfs(data)
        console.log(data)
    }
    useEffect(() => {
        getUfs();
    },[])
    
    return(
        <div>
            <select
            onChange={(ev) => setEstado(ev.target.value)}
            >
                {ufs.map(uf =>
                    <option 
                    value={uf.nome}
                    key={uf.id}
                    >
                        {uf.nome}

                    </option>)}

            </select>
        </div>
    )
    //return(
        //<div>
          //  <h1>Efeito</h1>
            //<button onClick={()=> setCont1(cont1+1)}>adicionar</button>
            //<p>Cont 1 = {cont1}</p>
            //<button onClick={()=> setCont2(cont2+1)}>+++</button>
            //<p>numeral 1  = {cont2}</p>

        //</div>
        
    //)
}