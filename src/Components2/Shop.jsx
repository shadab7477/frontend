import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Shop.css";
import Card from './Card';
// import ProductModals from './ProductModals.jsx';

const Shop = () => {

    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategory, setsubcategory] = useState([]);
console.log(categories)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalitems, setTotalitems] = useState(0);

    const [minPrice, setMinPrice] = useState(0); // Default minimum price
    const [sortBy, setSortBy] = useState('asc'); // Default sort order
    const [sortField, setSortField] = useState('price'); // Default sort field
    const itemsPerPage = 20;
    const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category
    const [selectedsubCategory, setSelectedsubCategory] = useState(''); // State for selected category

    const [loading, setLoading] = useState(false); // Loading state

    const [maxPrice, setMaxPrice] = useState(4000); // Default maximum price\
console.log(selectedsubCategory)

    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const categoryQuery = selectedCategory ? `&category=${selectedCategory}` : '';
                const response = await axios.get(`http://localhost:9000/products?page=${currentPage}&limit=${itemsPerPage}&category=${selectedCategory}&subcategory=${selectedsubCategory}&sortBy=${sortBy}&sortField=${sortField}`);
             
                // const response = await axios.get(`http://localhost:9000/products?page=${currentPage}&limit=${itemsPerPage}${categoryQuery}`);
                // const response = await axios.get(`http://localhost:9000/products?page=${currentPage}&limit=${itemsPerPage}`);
                setTotalitems(response.data.totalItems)
                let filteredItems = response.data.items;
                filteredItems = filteredItems.filter(item => {
                    const itemPrice = parseFloat(item.price);
                    return itemPrice <= maxPrice;
                });
                
                setItems(filteredItems)
                setTotalPages(response.data.totalPages);
            } catch (err) {
                console.error('Error fetching data:', err);
            }
        };

        fetchData();
    }, [currentPage,, selectedCategory,maxPrice,sortBy, sortField,minPrice,selectedsubCategory]);
    const handleCategoryChange = (categoryId) => {
        console.log(categoryId)
        setSelectedCategory(categoryId);
        setCurrentPage(1); // Reset to the first page when category changes
    };

    const handlesubCategoryChange = (categoryId) => {
        console.log(categoryId)
        setSelectedsubCategory(categoryId);
        setCurrentPage(1); // Reset to the first page when category changes
    };


    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:9000/categories-with-count');
                setCategories(response.data);
                console.log(response.data)
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchCategories();


        const fetchsubCategories = async () => {
            try {
                const response = await axios.get('http://localhost:9000/subcategory');
                setsubcategory(response.data);
            } catch (error) {
                console.error('Error fetching subcategories:', error);
            }
            finally {
                setLoading(false);
            }
        };

        fetchsubCategories()
    }, []);
    const handleMaxPriceChange = (e) => {
        setMaxPrice(parseInt(e.target.value));
    };
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleSortChange = (e) => {
        const value = e.target.value;
        const [field, order] = value.split('-');
        setSortField(field);
        setSortBy(order);
    };
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
  

    console.log(items);
    return (
        <div id='shopmain' className="container-fluid">
            <div className='row'>
                <div className="col-md-3 pt-2 fixed categorysec ">
                    <h4 className='productcat text-light p-1 '  >Product Categories</h4>
                    <hr />
                    <div>
<div className="" >
                         {categories.map((category) => (
                                <div
                                 key={category._id}   className={`w-100 d-flex row border border-1  my-2 m-1 p-1 ${selectedCategory === category.id ? 'categorybtnselect' : 'categorybtn'}`}
                                    onClick={() => handleCategoryChange(category.id)}
                                >
<div className='col-10' > 
{category.name}

</div>
                                    <div className="  text-center col-2 rounded-circle justify-content-center " >{category.count}</div>
                                </div>))} 
                                </div>
                                <hr />

{/* subcategory */}
                                <h4 className='productcat text-light p-1 '  >Subcategory</h4>
                    <hr />
                  
<div
className='gap-3  '                                >
                         {subcategory.map((category) => (
                                
<button 
                                 key={category._id}   className={` border border-1 m-1 p-1    ${selectedsubCategory === category.id ? 'subcategorybtnselect' : 'subcategorybtn'}`}
                                    onClick={() => handlesubCategoryChange(category.id)} > 
{category.name}

</button>
                                ))} 
                                </div>
<hr/>

                    <h4 className='productcat text-light p-1 '  >Price filter</h4>
<hr />
                                <label htmlFor="maxPrice" className="mt-3 fs-5" >Max Price: {maxPrice} RS</label>
                    
<input type="range" class="form-range text-danger "  id="maxPrice" min="0" max="1500" step="50" value={maxPrice} onChange={handleMaxPriceChange} />
                    
                    <hr/>
                    </div>
                    
                </div>

<div id='products' className="col-md-9 bg-white ">
{loading ? (
                        <p>Loading...</p>
                    ) : totalitems === 0 ? (
                        <h4 className='text-center mt-5' >No products found. <i class="fa-regular fa-circle-xmark"></i></h4>
                    ) : (
                        <>  
                           <div className='text-end pe-4 pt-2 sort ' >
                        <lable className="fs-5  " >Sort By : </lable>


                        <select id="pric" defaultValue="Default" className="p-1 productcat text-light border-none outline-none border" value={`${sortField}-${sortBy}`}  onChange={handleSortChange}>
                        <option  value="Default">Default</option>
                            
                            <option value="price-asc">Price: Low to High</option>
                            <option value="price-desc">Price: High to Low</option>
                        </select>
                    </div>
                        <h5 className="text-center mb-4 mt-2 showing " > Showing {totalitems} results </h5>
{/* Card */}
                    <div className="row p-0 m-0 gap-4 justify-content-center">
                        {items.map((product) => (
                            
        <Card key={product._id} product={product} />
                        ))}
                    </div>

                    <div className="row text-center w-100 justify-content-center">
      <nav className='col-12 text-center justify-content-center' aria-label="Page navigation example">
        <ul className="pagination text-center fs-5 mt-3  justify-content-center">
          {/* Previous button */}
          {currentPage > 1 && (
            <li className="page-item">
              <button
                className="page-link text-dark "
                onClick={() => handlePageChange(currentPage - 1)}
                aria-disabled={currentPage === 1}
              >
                <i className="fa-solid fa-backward pe-1"></i>
                <span className='fs-5' >Prev..</span>
              </button>
            </li>
          )}
          
          {/* Current page button */}
          <li className="page-item active">
            <button
              className="page-link bg-dark fs-5 border border-none "
              onClick={() => {handlePageChange(currentPage) ; window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            >
              {currentPage}
            </button>
          </li>
          
          {/* Next button */}
          {currentPage < totalPages && (
            <li className="page-item">
              <button
                className="page-link text-dark "
                onClick={() =>{ handlePageChange(currentPage + 1) ;window.scrollTo({ top: 0, behavior: 'smooth' })  }  }
                aria-disabled={currentPage === totalPages}
              >
<span className="fs-5" >Next</span>
                 <i className="fa-solid ps-1 fa-forward"></i> 
                 
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
                    </>)}

                </div>
            </div>
        </div>
    );
};

export default Shop;
