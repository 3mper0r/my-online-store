import { Link, useParams } from "react-router-dom"
import hoodies from "../data/db.json"

interface Hoodie {
  id: number;
  name: string;
  image?: string;
  price: number;
  
}


const SingleHoodie = () => {

    const {id} = useParams()

    const hoodie = hoodies.find((hoodie: Hoodie) => hoodie.id === Number(id))

   
    const {name, image} = hoodie

    
    
    return (
      <section className="single-hoodie">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <Link to="/hoodies">back to hoodies</Link>
      </section>  
    )
    
}

export default SingleHoodie