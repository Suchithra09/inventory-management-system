import "./App.css";

import Navbar from "./components/Navbar";

import Dashboard from "./components/Dashboard";

import ProductForm from "./components/ProductForm";

import ProductList from "./components/ProductList";

import SearchProduct from "./components/SearchProduct";

import { useState } from "react";

function App(){

const [reload,setReload]=
useState(false);

const refresh=()=>{

setReload(

!reload

);

};

return(

<div>

<Navbar/>

<div className="container">

<div className="card">

<Dashboard/>

</div>

<div className="card">

<ProductForm
refresh={refresh}
/>

</div>

<div className="card">

<SearchProduct/>

</div>

<div className="card">

<ProductList
reload={reload}
/>

</div>

</div>

</div>

);

}

export default App;