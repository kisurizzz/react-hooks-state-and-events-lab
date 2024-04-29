import React , {useState} from "react";

function Item({ name, category }) {
const[isAdded,setIsAdded] = useState(false)

const handleAddToCart = () => {
  setIsAdded(!isAdded)
}

  
  return (
    <li className={isAdded ? 'in-cart' : ''}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{isAdded ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
