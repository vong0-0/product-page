// Components
import UserAvatar from "./UserAvatar"
import CartDropdown from "./CartDropdown"

// Icons
import { AlignJustify, ShoppingCart } from "lucide-react"
import { useContext, useState } from "react"

import { CartItemsContext } from "./CartItemsContext";

export default function NavigationBar({ setOpenSidebar }){
  const [openCartDropdown, setOpenCartDropdown] = useState(false);
  const cartItems = useContext(CartItemsContext);
  console.log(cartItems)
  const totalCartQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return(
    <nav className="relative pt-4 pb-4 md:pt-8 md:pb-0">
      <div className="flex justify-between items-center md:pb-8 md:border-b border-solid border-grayish-blue">
        <div className="flex gap-6 md:gap-8 ml:gap-12 items-center">
          <button
            className="md:hidden"
            aria-label="Open sidebar button"
            onClick={() => setOpenSidebar(true)}
          >
            <AlignJustify />
          </button>
          <a
            href="#"
            aria-labelledby="logo-link-instructions"
          > 
            <img src="assets/images/logo.svg" alt="Website logo" />
            <span id="logo-link-instructions" className="visually-hidden">Go to home page</span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {["collections", "men", "women", "about", "contact"].map(link => (
              <li
                key={link}
                className="group relative cursor-pointer"
              >
                <a
                  href={`/${link}`}
                  className="text-dark-grayish-blue capitalize text-sm ml:text-base hover:text-very-dark-blue transition-colors duration-300"
                >
                    {link}
                </a>
                <div className="w-0 h-[2px] bg-orange absolute left-0 -bottom-[160%] group-hover:w-full transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-6 ml:gap-8 items-center">
          <button
            className="relative"
            aria-label="Open shopping cart dropdown"
            onClick={() => setOpenCartDropdown(!openCartDropdown)}
          >
            <ShoppingCart />
            {totalCartQuantity ? (
              <div className="absolute top-[-20%] right-[-50%] px-2 bg-orange text-[10px] text-white font-bold rounded-full">
                {totalCartQuantity}
              </div>
            ) : ""}
          </button>
          <UserAvatar />
        </div>
      </div>
      <div className={`${openCartDropdown ? "block" : "hidden"} absolute translate-y-full -bottom-[10%] right-[2%] z-50`}>
        <CartDropdown />
      </div>
    </nav>
  )
}