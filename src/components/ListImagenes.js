import { useContext } from "react"
import { ImageContext } from "../App"
import Imagen from "./Imagen";
import Esqueleto from "./Esqueleto";

const ListImagenes = () => {
  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <>
      <h1 className="text-center mt-6 text-2xl">Resultados para {searchImage || 'Cats'}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
        {isLoading ? <Esqueleto item={10} /> : response.map((data, key) => <Imagen key={key} data={data} />)}
      </div>
    </>
  )
}
export default ListImagenes
