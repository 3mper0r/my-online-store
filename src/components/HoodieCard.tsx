import { Link } from 'react-router-dom';

export interface Hoodie {
    id: number;
    name: string;
    image: string;
    price: number;
  }

const HoodieCard = (hoodie: Hoodie) => {
  return (       
        <article key={hoodie.id}>
            <div className='hoodies'>
                <h4>{hoodie.name}</h4>                      
                <img 
                src={hoodie.image}
                alt={hoodie.name}
                />
                <span className='price'>{`${hoodie.price}€`}</span>
                <Link to={`/hoodies/${hoodie.id}`}>View Hoodie</Link>
            </div>
        </article>               
    )
}

export default HoodieCard