import React,{useState} from "react";
import api from "../services/api";

function SearchProduct(){

const [name,setName]=useState("");

const [products,setProducts]=useState([]);

const search=
async()=>{

const res=
await api.get(
`/products/search?name=${name}`
);

setProducts(
res.data
);

};

return(

<div>

<h2>
Search Product
</h2>

<input

placeholder="Enter Name"

onChange={
e=>
setName(
e.target.value
)
}

/>

<button
onClick={search}
>

Search

</button>

{

products.map(

p=>

<p
key={p.id}
>

{p.name}

</p>

)

}

</div>

);

}

export default SearchProduct;