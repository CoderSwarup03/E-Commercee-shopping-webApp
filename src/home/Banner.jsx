import React, { useState } from 'react'
import productData from '../products.json'
import { Link } from 'react-router-dom';
import SelectedCatagory from '../components/SelectedCatagory';

const title = (
    <h2>Search Your One From <span>Thousand</span> Of Product</h2>
)
const desc = "we have the largest collection of products";
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];

const Banner = () => {
    const [searchInput,setSearchInput] = useState("");
    const [filterProduct,setFilterProduct] = useState(productData);
    // console.log(productData);

    //filtering search functionlity
    const handleSearch =(e) =>{
        // console.log(e.target.value);
        const searchTerm = e.target.value;
        setSearchInput(searchTerm)

        //filtering products search bases
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilterProduct(filtered);

    }
    return (
        <div className='banner-section style-4'>
            <div className="container">
                <div className="banner-content">
                    {title}
                    <form>
                        <SelectedCatagory select={"all"}/>
                        <input type="text" name='search' id='search' placeholder='Search your product' 
                        value={searchInput} onChange={handleSearch}/>
                        <button type='submit'>
                        <i className="icofont-search"></i>
                        </button>
                    </form>
                    <p>{desc}</p>
                    <ul className="lab-ul">
                        {
                            searchInput && filterProduct.map((product,i) => <li key={i}>
                                <Link to={`/shop/${product.id}`}>{product.name}</Link>
                            </li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Banner