import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../Components/CardItem'
import List from '../Components/List'
import { useTypedSelector } from '../hooks/useTypetSelector'


const Card :React.FC = () => {
    const {card,quantity,totalPrice} = useTypedSelector(state=>state.card)
    return (
        <>
        <div>Total Price :{totalPrice}</div>
        <div>Quantity :{quantity}</div>
        <List
        products={card}  
        renderItem={(product) => <CardItem  key={product.id} product={product}></CardItem >}>
    </List>
    </>
    )
}

export default Card
