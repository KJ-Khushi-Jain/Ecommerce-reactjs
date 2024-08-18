import React, { useEffect , useState } from "react";
import "./Shop.css"

const Shop = () => {
  const[apiData,setApiData]= useState(null);
  const[searchInput,setSearchInput]= useState("");      // Forsearch 1

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    // nothing mentioned that means GET
            .then(res=>res.json())
            .then(json=>{
              console.log(json);
              setApiData(json);
            })
      },[]);
  
  return (
    <div>
        <h1>Shopping</h1>
        <div className="search-bar">
          {/* value and onchange added for search 2*/}
          <input type="text" placeholder="Search" className="search-input" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
        </div>
        <div className="content-wrapper">
          {apiData?.filter((filtered_value)=>{        // Forsearch (from filter added later => logic for search 3)
            if(searchInput==""){
              return filtered_value;
            } else if(filtered_value?.title?.toLowerCase()?.includes(searchInput.toLowerCase())){
              return filtered_value;
            }
          })?.map((data,index) => {
            return (
              <div key={data?.id} className="product-card">
              <div className="image-wrapper">
                <img src={data?.image} alt={data?.title}/>
              </div>
              <div className="product-details">
              <h3>{data?.title}</h3>
              <div className="price">
                <p>{data?.category}</p><p>${data?.price}</p>
              </div>
              </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default Shop