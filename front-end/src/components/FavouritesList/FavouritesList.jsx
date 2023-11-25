import {CenteredContent} from '../CenteredContent/CenteredContent'
import { FavouriteProduct } from '../FavourtieProduct/FavouriteProduct'
import styles from './FavouritesList.module.css'
export function FavouritesList({products}){
 return(
  <CenteredContent>
   <div className={styles.favouritesList}>
    <h2>Ulubione</h2>
   <div >
    {products.map((product)=> {
     return (
     <FavouriteProduct product={product} key={product.id} />
     )
    })}
   </div>
   </div>
  </CenteredContent>
 )
}