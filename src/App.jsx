import React, { useState, useEffect } from "react"
import ImageCard from "./Components/ImageCard.jsx";
import SearchBar from "./Components/SearchBar.jsx";

function App() {

  const [images, setimage] = useState([])
  const [isloading, setisloading] = useState(true)
  const [Term, setTerm] = useState('')

  const handleSearch = (query) => {
    setTerm(query); // Update the search term
  };

  useEffect(() => {

    fetch(`https://pixabay.com/api/?key=${import.meta.env.VITE_PIXABAY_API_KEY}&q=${Term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setimage(data.hits)
        setisloading(false)


      })
      .catch(err => console.log(err))
  }, [Term]);


  return (
    <div className="container mx-auto">
      <SearchBar onSearch={handleSearch} />

      {isloading ? <h1 className="text-center text-6xl">Loading...</h1> : <div className="grid grid-cols-4 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
      }

    </div>

  )
}

export default App
