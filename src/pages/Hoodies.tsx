import HoodieCard from '../components/HoodieCard';
import hoodies from '../data/hoodies.json'

const Hoodies = () => {

    return (
        <section className='main'>
             { hoodies.map((hoodie) => (
                <HoodieCard id={hoodie.id} name={hoodie.name} image={hoodie.image} price={hoodie.price}   /> 
             ))} 
        </section>
    )
    
}

export default Hoodies