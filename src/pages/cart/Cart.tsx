import { useSelector } from "react-redux";
import Headling from "../../components/Headling/Headling";
import { RootState } from "../../store/store";
import CartItem from "../../components/CartItem/CartItem";
import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product.interface";
import axios from "axios";
import { PREFIX } from "../../helpers/API";
  
export function Cart() {
const [cardProducts, setCardProducts] = useState<Product []>([])
const items = useSelector((s: RootState)=>s.cart.items)

const getItem = async (id: number)=> {
 const {data} =  await axios.get<Product>(`${PREFIX}/products/${id}`)
 return data
}

const loadAllItems = async ()=> {
  const res =  await Promise.all(items.map(i => getItem(i.id)))
  setCardProducts(res)
}

useEffect(()=> {
  loadAllItems()
}, [items])

  return <>
    <Headling>Корзина</Headling>
    {items.map (i => {
      const product = cardProducts.find(p => p.id === i.id)
      if (!product){
        return;
      }
      return <CartItem count={i.count} {...product}/>
    })}
  </>;
}
