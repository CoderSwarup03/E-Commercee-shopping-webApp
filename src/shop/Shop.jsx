import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import DataProduct from '../products.json'
import ProductCards from './ProductCards'
import Pagination from './Pagination'
import Search from './Search'
import ShopCategory from './ShopCategory'
import PopularPost from './PopularPost'
import Tags from './Tags'


const ShowResults = "Showing 01 - 12 of 139 Results"

const Shop = () => {
    const[GridList,setGridList] = useState(true);
    const [products,setproducts] = useState(DataProduct);
    // console.log(products);

    //pagination swipe format
    const [currentPage,setCurrentPage] = useState(1); //means singale page
    const productsPerPage = 12;


    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFristProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFristProduct,indexOfLastProduct);

    // function to the current page:
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // filter base on products category
    const [selectedCategory,setSelectedCategory] = useState("All");
    const menuItem = [...new Set(DataProduct.map((Val) => Val.category))];

    const filterItem = (curcat) => {
        const newItem = DataProduct.filter((newVal) => {
            return newVal.category === curcat;
        })
        setSelectedCategory(curcat);
        setproducts(newItem);
    }

  return (
    <div>
        <PageHeader title ="Our Shop Page" curPage="Shop"/>
        {/* shop page */}
        <div className="shop-page padding-tb">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8 col-12">
                        {/* left side */}/
                        <article>
                            {/* layout and title here */}
                            <div className="shop-title d-flex flex-warp justify-content-between">
                                <p>{ShowResults}</p>
                                <div className={`product-view-mode ${GridList ? "gridActive" : "listActive"}`}>
                                    <a className='grid' onClick={()=> setGridList(!GridList)}>
                                        <i className='icofont-ghost'></i>
                                    </a>
                                    <a className='list' onClick={()=> setGridList(!GridList)}>
                                        <i className='icofont-listine-dots'></i>
                                    </a>
                                </div>
                            </div>

                            {/* products card section */}

                            <div>
                                <ProductCards GridList={GridList} products={currentProducts}/>
                            </div>

                            <Pagination
                                productsPerPage= {productsPerPage}
                                totalProducts={products.length}
                                paginate={paginate}
                                activePage={currentPage}
                            />

                        </article>
                    </div>
                    <div className="col-lg-4 col-12">
                        {/* semantic tag */}
                        <aside>
                            <Search products ={products} GridList = {GridList}/>
                            <ShopCategory
                                filterItem ={filterItem}
                                setItem={setproducts}
                                menuItem={menuItem}
                                setProducts={setproducts}
                                selectedCategory={selectedCategory}
                            />
                            <PopularPost/>
                            <Tags/>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop

//Yt- 3:04:20