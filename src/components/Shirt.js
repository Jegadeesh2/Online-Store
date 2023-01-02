import React from "react";

const  Shirt = ({image,type,description,price}) =>{
  return (
    <article className="product">
    <img className="shirtImage" src={image} alt="t-shirt" />
    <br />
      <h2 className="shirtType">{type}</h2>
      <p className="shirtDescription">{description}</p>
      <h3 className="shirtPrice">{price}</h3>
    </article>
  );
}

export default Shirt;
