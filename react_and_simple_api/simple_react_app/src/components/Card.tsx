import './card.css'

type cardProps = {
    name:string;
    price:string;
}


export const Card = ({name, price}:cardProps) => {
    return (
        <div className="card">
            <div>
                <h3>{name}</h3>
            </div>
            <hr />
            <div>
                <p>$ {price}</p>
            </div>
        </div>
    )
}

export default Card