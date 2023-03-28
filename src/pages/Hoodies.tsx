import { Link } from 'react-router-dom';
import data from '../data/db.json'

export interface Hoodie {
    id: number;
    name: string;
    image?: string;
    price: number;
    
}

export interface Props {
    hoodies: Hoodie[]
}


const Hoodies = ({hoodies}: Props) => {

    return (
        <section className='main'>
            { data.map((hoodie  : Hoodie) => (
                 
                <article key={hoodie.id}>
                    <div className='hoodies'>

                        <h4>{hoodie.name}</h4>                      
                        <img 
                        src={hoodie.image}
                        alt={hoodie.name}
                        />
                        <span className='price'>{hoodie.price}</span>
                        <Link to={`/hoodies/${hoodie.id}`}>View Hoodie</Link>
                    </div>
                
                </article>        
                ))
            }  
        </section>
    )
}

export default Hoodies