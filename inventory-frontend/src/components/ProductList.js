import React, {
useEffect,
useState
}
from "react";

import api
from "../services/api";

function ProductList({
reload
}) {

const [products, setProducts] =
useState([]);

const [loading, setLoading] =
useState(true);

const load = async () => {

try {

const res =
await api.get(
"/products"
);

setProducts(
res.data
);

} catch (err) {

console.log(err);

} finally {

setLoading(
false
);

}

};

useEffect(() => {

load();

}, [reload]);

const remove =
async (id) => {

const confirmDelete =
window.confirm(
"Delete Product?"
);

if (!confirmDelete)
return;

try {

await api.delete(

`/products/${id}`

);

alert(
"Product Deleted"
);

load();

} catch (err) {

console.log(err);

alert(
"Delete Failed"
);

}

};

const edit =
(product) => {

localStorage.setItem(

"edit",

JSON.stringify(
product
)

);

window.location.reload();

};

if (loading) {

return (

<h2>

Loading...

</h2>

);

}

if (products.length === 0) {

return (

<h2>

No Products Found

</h2>

);

}

return (

<div>

<h2>

Products

</h2>

<table>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Category</th>

<th>Price</th>

<th>Quantity</th>

<th>Supplier</th>

<th>Edit</th>

<th>Delete</th>

</tr>

</thead>

<tbody>

{

products.map(

(p) => (

<tr
key={p.id}
>

<td>
{p.id}
</td>

<td>
{p.name}
</td>

<td>
{p.category}
</td>

<td>
₹{p.price}
</td>

<td>
{p.quantity}
</td>

<td>
{p.supplier}
</td>

<td>

<button

onClick={() =>

edit(p)

}

>

Edit

</button>

</td>

<td>

<button

onClick={() =>

remove(
p.id
)

}

>

Delete

</button>

</td>

</tr>

)

)

}

</tbody>

</table>

</div>

);

}

export default ProductList;