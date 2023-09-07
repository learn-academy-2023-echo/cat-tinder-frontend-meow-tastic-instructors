import React from "react"
import { useParams } from "react-router-dom"

const CatShow = ({cats}) => {
  const {id} = useParams()

  let selectedCat = cats.find(cat => cat.id === +id)
  
  return (
    <>
      <img 
      alt={`profile pic of ${selectedCat.name}`}
      src= {selectedCat.image}/>
    <h3> {selectedCat.name} likes {selectedCat.enjoys}</h3>
    </>
  )
}

export default CatShow
