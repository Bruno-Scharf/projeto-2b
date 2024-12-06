import Card from "@/components/card";

const nomes = ['Wagner','Bruno','Jonadas','Cauã', 'Ana']
    const carros = [
        {
            id: 1,
            modelo: 'fusca',
            ano: 1975,
            cor: 'preto'
        },
        {
            id: 2,
            modelo: 'saveiro',
            ano: 1985,
            cor: 'Azul'
        },
        {
            id: 3,
            modelo: 'Opala',
            ano: 1995,
            cor: 'Vermelho'
        },
        {
            id: 4,
            modelo: 'Diplomata',
            ano: 2000,
            cor: 'Branco'
        },
        {
            id: 5,
            modelo: 'camaro',
            ano: 2001,
            cor: 'Amarelo'
        }
    ]
export default function props() {
    return(
        <div>
            <h1>props</h1>
            {
                carros.map((carro) =>(
            <Card 
            key= {carro.id} 
            id = {carro.id}
            modelo = {carro.modelo}
            ano = {carro.ano}
            cor = {carro.cor}/>
            ))}
        </div>
    )
    
}