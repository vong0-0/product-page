import { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Product from "./components/Product";
import { CartItemsProvider } from "./components/CartItemsContext";

export default function App(){
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    function handleResize(){
      if(window.innerWidth >= 768){
        setOpenSidebar(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  return(
    <CartItemsProvider>
      <div className="relative min-h-screen md:w-11/12 md:max-w-[800px] md:mx-auto ml:max-w-[970px]">
        <header className="max-w-[500px] w-11/12 mx-auto md:mx-0 md:w-auto md:max-w-none">
          <div className={`w-screen h-screen fixed left-0 top-0 ${openSidebar ? "bg-black opacity-75" : "invisible opacity-0"} z-40 transition-all duration-300`}></div>
          <Sidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
          />
            <NavigationBar
              setOpenSidebar={setOpenSidebar}
            />
        </header>
        <main className="mb-4 md:my-20">
          <Product />
        </main>
      </div>
    </CartItemsProvider>
  )
}