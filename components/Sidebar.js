import Image from "next/image"
import useQuiosco from "../hooks/useQuiosco"
import Categoria from "./Categoria"
import Link from "next/link"

export const Sidebar = () => {
  const {categorias} = useQuiosco();
    
  return (
    <>
      <Link href={'/'}>
        <Image width={200} height={50} src="/assets/img/logo.svg" alt="Imagen logotipo"/>
        </Link>
       
        <nav className="mt-10">
        {categorias.map(categoria => (
            <Categoria key={categoria.id}
            categoria={categoria}
            />
          ))}
        </nav>
  
    </>


  )
}

export default Sidebar
