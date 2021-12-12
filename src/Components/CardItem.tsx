import { useDispatch } from "react-redux"
import { deleteCard } from "../GLobal/actions/CardAction/CardAction"
import { SingleProduct } from "../GLobal/types/productType"
import { useActions } from "../hooks/useAction"
interface CardItemProps {
    product:SingleProduct
}
const CardItem:React.FC<CardItemProps> = ({product}) => {
    const {deleteCard} = useActions()
    
    return (
        <div className="card me-5 pt-5 w-25"  >
            <img src={product.image} style={{ height: '250px' }} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between ">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">$ {product.price}</p>
                <div className= 'align-item-bottom'><button onClick= {()=>deleteCard(product.id)}  className="btn btn-info" >Remove</button></div>
            </div>
        </div>
    )
}

export default CardItem