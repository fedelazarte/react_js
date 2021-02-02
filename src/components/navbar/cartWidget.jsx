
import 'bootstrap/dist/css/bootstrap.min.css';
import cart from './Shopping-Cart-icon.png';


function CartWidget() {
  return (
   <>
   <button>
     <img src={cart} alt="" style={{height:'25px'},{width:'25px'}} />
   </button>
  

   </>
  
  );

}

export default CartWidget;