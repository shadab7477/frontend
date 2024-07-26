import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'
import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'
const Searchproduct = () => {


    const [searchResults, setSearchResults] = useState([]);
    const {val} =useParams()

useEffect(() => {
    handleSearch()
}, [val])


    const handleSearch = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/products/search?query=${val}`);
        setSearchResults(response.data);
      } catch (error) {
        console.error('Error searching products:', error);
      }
    };
 console.log(val)
    return (
    <div>
        <div className="results-container container ">
        {searchResults.length === 0 ? (
          <h2 className="text-center my-5 py-5"  >No results found.</h2>
        ) : (
            

            <div className="row gap-4 justify-content-center">
        <h4>Search Results:</h4>

            {searchResults.map((product) => (

        <Card key={product._id} product={product} />

            ))}
        </div>

        )}
      </div>
    </div>
  )
}

export default Searchproduct
