import { useContext } from "react";
import { CartItemsDispatch } from "./CartItemsContext";

export default function QuantitySelector({ quantity, setQuantity, productName, currentPrice, productImage }){
  const dispatch = useContext(CartItemsDispatch);
  function addToCart(){
    setQuantity(0);
    dispatch({
      type: "added",
      productName: productName,
      currentPrice: currentPrice,
      quantity: quantity,
      productImage: productImage
    })
  }

  return(
    <div className="w-full grid grid-cols-1 ml:grid-cols-2 auto-rows-auto gap-4">
      <div className="flex h-14 bg-light-grayish-blue rounded-lg">
        <button
          className="flex-1 flex justify-center items-center hover:opacity-50 transition-opacity duration-300"
          aria-label="Decrese quantity button"
          onClick={() => {
            if(quantity <= 0) return;
            setQuantity(quantity - 1);
          }}
        >
          <img src="assets/images/icon-minus.svg" alt="Minus icon" />
        </button>
        <div
          className="flex-[3] flex justify-center items-center font-bold text-lg"
          aria-hidden="true"
        >
          {quantity}
          {/* For screen reader */}
          <span
            className="visually-hidden"
            aria-live="polite" 
            role="status"
          >
            Quantity is now {quantity}
          </span>
        </div>
        <button
          className="flex-1 flex justify-center items-center hover:opacity-50 transition-opacity duration-300"
          aria-label="Decrese quantity button"
          onClick={() => setQuantity(quantity + 1)}
        >
          <img src="assets/images/icon-plus.svg" alt="Plus icon" />
        </button>
      </div>
      <button
        className={`flex justify-center items-center gap-4 py-4 rounded-lg ${quantity <= 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-pale-orange opacity-100"} bg-orange font-bold  transition-colors duration-300`}
        onClick={addToCart}
      >
        <img src="assets/images/icon-cart.svg" alt="Cart icon" />
        <p className="font-bold">Add to cart</p>
      </button>
    </div>
  )
}