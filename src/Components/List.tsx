
interface ListPropsType<T> {
products:T[],
renderItem:(item:T) => React.ReactNode,
children?:React.ReactNode

}

function List <T>  ({products,renderItem}:ListPropsType<T>) {
  return <div className="d-flex flex-wrap">{products.map(renderItem)}</div>;
}


export default List;
