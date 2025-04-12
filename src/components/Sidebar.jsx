import { X } from "lucide-react"

export default function Sidebar({ openSidebar, setOpenSidebar }){
  return(
    <nav
      className={`h-screen max-w-[250px] w-full fixed ${openSidebar ? "left-0" : "-left-full"} top-0 bg-white z-50 transition-all duration-`}
      aria-label="Sidebar navigation"
    >
      <div className="w-full h-full relative">
        <button
          className="absolute top-[5%] left-8 text-dark-grayish-blue"
          aria-label="Close sidebar button"
          onClick={() => setOpenSidebar(false)}
        >
          <X size={30} />
        </button>
        <ul className="flex flex-col gap-4 py-24">
          {["collections", "men", "women", "about", "contact"].map((link) => (
            <li
              key={link}
              className="pl-10 py-2 cursor-pointer hover:text-white hover:bg-orange transition-colors duration-300"
            >
              <a
                href={`/${link}`}
                className="font-bold capitalize"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}