
export default function lista() {
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
    return(
        <div>
            <div>
                <h1>lista comum</h1>
                <ul style={{marginLeft: '50px'}}>
                    {nomes.map((nome, id) => (
                        <li key={id}>{id+1} - {nomes}</li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>lista de objeto</h2>
                {
                    carros.map((carros,id) =>(
                        <div key={id}>
                            <h1>{carros.id} - {carro.modelo}</h1>
                            <p>{carros.cor}</p>
                            <p>{carros.ano}</p>
                        </div>

                    ))}
            </div>

            
        
    </div>
    )

}