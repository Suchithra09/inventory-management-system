import React,
{
useEffect,
useState
}
from "react";

import api
from "../services/api";

function Dashboard(){

const[
data,
setData
]=
useState({

totalProducts:0,

totalQuantity:0,

lowStockCount:0,

inventoryValue:0

});

useEffect(()=>{

load();

},[]);

const load=
async()=>{

const res=
await api.get(
"/products/dashboard"
);

setData(
res.data
);

};

return(

<div>

<h2>
Dashboard
</h2>

<div
className="cards"
>

<div
className="box"
>

Products

<h3>

{
data.totalProducts
}

</h3>

</div>

<div
className="box"
>

Quantity

<h3>

{
data.totalQuantity
}

</h3>

</div>

<div
className="box"
>

Low Stock

<h3>

{
data.lowStockCount
}

</h3>

</div>

<div
className="box"
>

₹

{
data.inventoryValue
}

</div>

</div>

</div>

);

}

export default Dashboard;