import React, { useState } from "react";
import api from "../services/api";

function ProductForm({ refresh }) {

const [product, setProduct] =
useState(

JSON.parse(
localStorage.getItem("edit")
)

||

{
id: null,
name: "",
category: "",
price: "",
quantity: "",
supplier: ""
}

);

const handle = (e) => {

setProduct({

...product,

[e.target.name]:
e.target.value

});

};

const save = async () => {

if (!product.name) {

alert(
"Enter Product Name"
);

return;

}

if (product.price <= 0) {

alert(
"Price must be greater than 0"
);

return;

}

if (product.quantity < 0) {

alert(
"Invalid Quantity"
);

return;

}

try {

if (product.id) {

await api.put(

`/products/${product.id}`,

product

);

alert(
"Product Updated"
);

} else {

await api.post(

"/products",

product

);

alert(
"Product Added"
);

}

localStorage.removeItem(
"edit"
);

setProduct({

id:null,
name:"",
category:"",
price:"",
quantity:"",
supplier:""

});

refresh();

} catch (err) {

console.log(err);

alert(
"Operation Failed"
);

}

};

return (

<div>

<h2>

Add / Edit Product

</h2>

<input
name="name"
placeholder="Name"
value={product.name}
onChange={handle}
/>

<br/><br/>

<input
name="category"
placeholder="Category"
value={product.category}
onChange={handle}
/>

<br/><br/>

<input
type="number"
name="price"
placeholder="Price"
value={product.price}
onChange={handle}
/>

<br/><br/>

<input
type="number"
name="quantity"
placeholder="Quantity"
value={product.quantity}
onChange={handle}
/>

<br/><br/>

<input
name="supplier"
placeholder="Supplier"
value={product.supplier}
onChange={handle}
/>

<br/><br/>

<button
onClick={save}
>

{

product.id

?

"Update"

:

"Save"

}

</button>

</div>

);

}

export default ProductForm;