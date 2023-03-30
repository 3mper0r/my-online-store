import { Link, useParams } from "react-router-dom"
import { Hoodie } from "../components/HoodieCard"
import hoodies from "../data/hoodies.json"

interface Props {
  hoodie : Hoodie
}

const HoodieDetails = ({hoodie}: Props) => {

  const {id} = useParams()

    //TODO useNavigate()

  const singleHoodie = hoodies.find((hoodie) => hoodie.id === Number(id))
    
  const {name, image, price}:any = singleHoodie
    
    return (
      <section className="single-hoodie">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <span>{`${price.toFixed(2)}€`}</span>
        <Link to="/hoodies">back to hoodies</Link>
      </section>  
    )
  
}

export default HoodieDetails