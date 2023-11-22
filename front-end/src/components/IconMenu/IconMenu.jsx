import { Link} from 'react-router-dom';
import BAG_ICON from '../../assets/bag.svg';
import HEART_ICON from '../../assets/heart.svg';
import styles from './IconMenu.module.css'

export function IconMenu(){
 const cartItem = 2;
 return(

   <ul className={styles.iconMenu}>
    <li><Link to="/ulubione"><img src={HEART_ICON} alt="" /></Link></li>
    <li>
      <Link to="/kooszyk">
        <img src={BAG_ICON} alt="" />
        <div className={styles.numberOfProducts}>{cartItem}</div>
       </Link>
      </li>
   </ul>
 
 )
}