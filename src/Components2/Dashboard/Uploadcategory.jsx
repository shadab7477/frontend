import React, { useState } from 'react';
import axios from 'axios';

const Uploadcategory = () => {
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [id, setid] = useState(null);
  const [cat_id, setcat_id] = useState(null);


  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('id', id);
    formData.append('cat_id', cat_id);

    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:9000/category', formData);
      console.log('Category created:', response.data);
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
     
<div class="form-floating mb-3">
  <input 
        type="text"
        class="form-control"
        placeholder="Category Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required id="floatingInput"/>
  <label for="floatingInput">Category name</label>
</div>


<div class="form-floating mb-3">
  <input 
        type="text"
        class="form-control"
        placeholder="Category id"
        value={id}
        onChange={(e) => setid(e.target.value)}
        required id="floatingInput"/>
  <label for="floatingInput">Category id</label>
</div>


<div class="form-floating mb-3">
  <input 
        type="text"
        class="form-control"
        placeholder="Category id"
        value={cat_id}
        onChange={(e) => setcat_id(e.target.value)}
        required id="floatingInput"/>
  <label for="floatingInput">Category id</label>
</div>

      <input
        type="file"
        onChange={(e) => setImage(e.target.files[0])}
        required
      />
      <button type="submit" className="btn btn-primary" >Create Category</button>
    </form>
    </>
  )
}

export default Uploadcategory