import { createContext, useState } from "react";
import ListImagenes from "./components/ListImagenes";
import Jumbotron from "./components/Jumbotron";
import Formulario from "./components/Formulario";
import useAxios from "./hooks/useAxios";


// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState('');
  const { response, isLoading, error, fetchData } = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=50`);

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Jumbotron>
        <Formulario />
      </Jumbotron>
      <ListImagenes />
    </ImageContext.Provider>
  );
}

export default App;