import HoodieCard, { Hoodie } from '../components/HoodieCard';
import hoodies from '../data/hoodies.json'

interface Props {
    hoodie: Hoodie 
}

const Hoodies = ({hoodie}: Props) => {

    return (
        <section className='main'>
             { hoodies.map((hoodie) => (
                <HoodieCard key={hoodie.id} name={hoodie.name} image={hoodie.image} price={hoodie.price} id={hoodie.id} /> 
             ))} 
        </section>
    )
    
}

export default Hoodies