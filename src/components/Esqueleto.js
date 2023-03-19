const Esqueleto = ({ item }) => {
    return [...Array(item).keys()].map(() => (
      <div className="animate-pulse">
        <div className="bg-gray-300 rounded-lg h-64 w-64"></div>
      </div>
    ))
  }
  
  export default Esqueleto