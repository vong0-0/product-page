import { useContext } from "react";
import { CartItemsContext, CartItemsDispatch } from "./CartItemsContext";

export default function CartDropdown(){
  const cartItems = useContext(CartItemsContext);
  return(
    <div className="max-w-[400px] w-[90vw] rounded-lg shadow-xl bg-white text-start px-4 py-4">
      <p className="font-bold border-b border-solid border-grayish-blue pb-4 text-lg">Cart</p>
      <div className="py-6">
        {cartItems.length <= 0 ? (
          <div className="h-28 flex justify-center items-center font-bold text-dark-grayish-blue">Your cart is empty</div>
        ) : (
          <ul className="flex flex-col gap-3">
            {cartItems.map(cartItem => (
              <li
                key={cartItem.id}
              >
                <CartItem
                  key={cartItem.id}
                  id={cartItem.id}
                  productName={cartItem.productName}
                  currentPrice={cartItem.currentPrice}
                  quantity={cartItem.quantity}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
      <button className="w-full flex justify-center items-center font-bold bg-orange py-4 rounded-xl hover:bg-pale-orange transition-all duration-300">Checkout</button>
    </div>
  )
}

function CartItem({ id, productName, currentPrice, quantity }){
  const dispatch = useContext(CartItemsDispatch)
  const totalPrice = currentPrice * quantity;

  function removeCartItem(){
    dispatch({
      type: "remove",
      id: id
    })
  }

  return(
    <div className="flex flex-col gap-4">
      <div className="flex gap-2 justify-between">
        <div className="w-12 h-12 rounded-md overflow-hidden">
          <img src="images/image-product-1.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-dark-grayish-blue text-sm">{productName}</p>
          <div className="flex gap-2 text-start">
            <span className="text-dark-grayish-blue text-sm">{`$${currentPrice.toFixed(2)}`} <span className="text-xs">X</span> {quantity}</span>
            <span className="font-bold text-sm">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <button
          aria-label={`Remove ${productName} from cart`}
          onClick={removeCartItem}
        >
          <img src="images/icon-delete.svg" alt="Delete icon" />
        </button>
      </div>
    </div>
  )
}