
import { XMarkIcon } from "@heroicons/react/24/outline";
export default function Drawer({ children, isOpen, setIsOpen, title, subtitle }:{ children: any, isOpen: boolean, setIsOpen: any, title: string, subtitle?: string}) {
    return (
      <main
        className={
          " fixed overflow-hidden z-[70] bg-gray-900/75  inset-0 transform ease-in-out " +
          (isOpen
            ? " transition-opacity opacity-100 duration-500 translate-x-0  "
            : " transition-all delay-500 opacity-0 translate-x-full  ")
        }
      >
        <section
          className={
            " w-screen max-w-lg right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
            (isOpen ? " translate-x-0 " : " translate-x-full ")
          }
        >
          <article className="relative w-screen max-w-lg pb-10- flex flex-col space-y-6- overflow-y-scroll h-full">
                <header className="p-4 font-bold text-lg flex justify-between">
                {title}
                <XMarkIcon className="size-5 cursor-pointer" onClick={()=>setIsOpen(false)} />
                </header>
                {subtitle ? <div className=" px-4 "><span className="badge rounded-full border border-warning text-warning">{subtitle}</span></div> : null }
                <div className="p-4">
                    {children}
                </div>            
          </article>
        </section>
        <section
          className=" w-screen h-full cursor-pointer "
          onClick={() => {
            setIsOpen(false);
          }}
        ></section>
      </main>
    );
  }