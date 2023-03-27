import hoodies from '../data/db.json'

interface Hoodie {
    id: number;
    name: string;
    src: string;
    price: number;
  }
  

const Hoodies = () => {
    return (
        <>
        <ul>
        {hoodies.map((hoodie : Hoodie) => (
          <li key={hoodie.id}>
            <img 
            src={hoodie.src}
            />
          </li>         
        ))}
      </ul>
      </>  
    )
}

export default Hoodies