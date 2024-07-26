import React from 'react'
import axios from "axios"
import "./upload.css"
import { useState } from 'react';
const Uploadproduct = () => {
    const [productData, setProductData] = useState({
        id: '',
        cat_id: '',
        subcat_id: '',
        name: '',
        price: '',
        image: null,
        weight: '',
        unit: '',
        productgenre: '',
        description: '',
        popular: false, // Added popular checkbox state
        best: false, // Added best checkbox state
    });

    const handleInputChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setProductData({
            ...productData,
            image: e.target.files[0], // Assuming you allow selecting only one file
        });
    };

    const handleCheckboxChange = (e) => {
        setProductData({
            ...productData,
            [e.target.name]: e.target.checked,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('id', productData.id);
        formData.append('cat_id', productData.cat_id);
        formData.append('subcat_id', productData.subcat_id);
        formData.append('name', productData.name);
        formData.append('price', productData.price);
        formData.append('image', productData.image);
        formData.append('weight', productData.weight);
        formData.append('unit', productData.unit);
        formData.append('productgenre', productData.productgenre);
        formData.append('description', productData.description);
        formData.append('popular', productData.popular); // Append popular checkbox value
        formData.append('best', productData.best); // Append best checkbox value

        try {
            const response = await axios.post('http://localhost:9000/addproduct', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Product added:', response.data);
            // Optionally, handle success UI or redirect to another page
        } catch (error) {
            console.error('Error adding product:', error);
            // Handle error UI or show an alert
        }
    };

    console.log(productData)


    const submit =()=>{

    }

  return (
    <div className="main">
    <div className="container boxes mt-1  " >
       <form onSubmit={handleSubmit}>
{/* id */}
<div className="row">
    <div className="col-md-4">
    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="id"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.id}
                    />
                    <label htmlFor="floatingPassword">Product Id</label>
                </div>
    </div>
    <div className="col-md-4">


    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="cat_id"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.cat_id}
                    />
                    <label htmlFor="floatingPassword">Category</label>
                </div>



    {/* <input type="text" name="id" value={productData.id} onChange={handleInputChange} placeholder="Product ID" /> */}

    </div>

<div className="col-md-4">
    
{/* sub category */}
<div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="subcat_id"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.subcat_id}
                    />
                    <label htmlFor="floatingPassword">Sub Category</label>
                </div>
</div>

</div>

{/* second */}
<div className="row">
    <div className="col-md-6">

    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="name"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.name}
                    />
                    <label htmlFor="floatingPassword">Product name</label>
                </div>
    </div>
    <div className="col-md-6">
        
    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="price"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.price}
                    />
                    <label htmlFor="floatingPassword">product price</label>
                </div>
    </div>
</div>




            {/* Other input fields for product details */}
            <label for="" className='pe-2 mb-3 ms-2 ' > Upload images </label>
            <input type="file" name="image" onChange={handleImageChange} />
            {/* <button type="submit">Add Product</button> */}

{/* after image */}
{/* weight */}
<div className="row">
    <div className="col-md-6">

    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="weight"
                        className=" ps-2  form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.weight}
                    />
                    <label htmlFor="floatingPassword  " className='ps-3' >weight</label>
                </div>
    </div>
    <div className="col-md-6">

    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="unit"
                        className=" ps-2  form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.unit}
                    />
                    <label htmlFor="floatingPassword  " className='ps-3' >unit</label>
                </div>

    </div>
</div>

<div className="row">
    <div className="col-md-6">
        
    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="productgenre"
                        className=" ps-2  form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.productgenre}
                    />
                    <label htmlFor="floatingPassword  " className='ps-3' >productgenre</label>
                </div>

    </div>
    <div className="col-md-6">

        
    <div className="form-floating">
                    <input
                        type="text"
                        onChange={handleInputChange}
                        name="description"
                        className=" ps-2  form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        value={productData.description}
                    />
                    <label htmlFor="floatingPassword  " className='ps-3' >description</label>
                </div>

    </div>
</div>


                    {/* Checkboxes for popular and best */}
                    <div className="form-check mt-3">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="popular"
                            name="popular"
                            checked={productData.popular}
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="popular">
                            Popular
                        </label>
                    </div>

                    <div className="form-check mt-2">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="best"
                            name="best"
                            checked={productData.best}
                            onChange={handleCheckboxChange}
                        />
                        <label className="form-check-label" htmlFor="best">
                            Best
                        </label>
                    </div>

<div className="w-100 text-center">
    <div type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn btn-primary ">ADD PRODUCT</div>
</div>

        </form>
    </div>
    </div>
  )
}

export default Uploadproduct
