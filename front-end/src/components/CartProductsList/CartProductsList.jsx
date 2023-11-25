import {CenteredContent} from '../CenteredContent/CenteredContent'
import { CartProduct } from '../CartProduct/CartProduct'
import styles from './CartProductsList.module.css'
export function CartProductsList({products}){
 return(
  <CenteredContent>
   <div className={styles.cartList}>
    <h2>Koszyk</h2>
   <div >
    {products.map((product)=> {
     return (
     <CartProduct product={product} key={product.id} />
     )
    })}
   </div>
   </div>
  </CenteredContent>
 )
}