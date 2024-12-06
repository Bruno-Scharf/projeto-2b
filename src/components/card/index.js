import style from './card.module.css';

export default function Card({id,modelo, ano, cor}) {
    return(
        <div className="div">
            <h2>{id} - {modelo}</h2>
            <p>{id}</p>
            <p>{ano}</p>
            <p>{cor}</p>
        </div>
    )
}