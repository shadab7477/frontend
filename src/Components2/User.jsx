import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from "axios"
import "./user.css"
import {useState,useEffect} from "react"
import Wishlist from './Wishlist';
function TabPanel(props) {



  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function User() {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [value, setValue] = React.useState(0);
    const [user, setUser] = useState({});
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    console.log(orders)
    const getToken = () => {
  
// Get the token from local storage or wherever you store it
return localStorage.getItem('token');
};

const token = getToken();
console.log(token)
const getOrdersByUserId = async () => {
    const headers = {
        'x-auth-token': token, // Match the token in the middleware
        'Content-Type': 'application/json'
      };

  try {
    const response = await axios.get('http://localhost:9000/myorders', { headers });
    setOrders(response.data);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching orders:', error);
    setError(error);
    setLoading(false);
  }
};




const fetchCart = async () => {
        
            
    console.log(token)
    const headers = {
      'x-auth-token': token, // Match the token in the middleware
      'Content-Type': 'application/json'
    };
      
      try {
        const response = await axios.get('http://localhost:9000/get-userdetail', { headers });
        setUser(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching cart:', error);
        // Handle error, show error message, etc.
      }
    };


    const updatePasswordHandler = async () => {
        
            
        console.log(token)
        const headers = {
          'x-auth-token': token, // Match the token in the middleware
          'Content-Type': 'application/json'
        };
          
          try {
            const response = await axios.put('http://localhost:9000/change-password',{ password }, { headers });
            setMessage("Password updated successfully");
            setUser(response);
          } catch (error) {
            console.error('Error fetching cart:', error);
            // Handle error, show error message, etc.
          }
        };
    


useEffect(() => {
    getToken()
  if (token) {
    fetchCart();

    getOrdersByUserId();
  } else {
    setLoading(false);
  }
}, [token]);

if (loading) return <div>Loading...</div>;
if (error) return <div>Error: {error.message}</div>;




  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  
  
  return (


    <>   
    <div className="tableuser  w-100  ">    
     <Box
      sx={{ flexGrow: 1, bgcolor: '', display: 'flex', minheight: 324 }}
    >
        <div className="row w-100 " >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange  }
        className="tableuser col-md-2 text-center justify-content-center text-light  pt-4  "
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider'  }}
      >
        <Tab className="fw-bold tab" label="User profile" {...a11yProps(0)} />
        <Tab  className="fw-bold tab "  label="My orders" {...a11yProps(1)} />
        <Tab  className="fw-bold tab "  label="Wishlist" {...a11yProps(2)} />
        <Tab  className="fw-bold  tab "  label="Account details" {...a11yProps(3)} />
        <Tab  className="fw-bold  "  label="Logout" {...a11yProps(4)} />
        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
<div className="col-md-10   text-center justify-content-center ">
      <TabPanel className="bg-white w-100 fs-1 py-5 " variant="h3" value={value} index={0}>
 <h5 className='' >
 Hello shadab khan (not shadab khan?

<span className="text-danger text-decoration-underline " >Sign out</span>)
From your account dashboard you can view your recent orders, manage your shipping and billing addresses and Edit Your Password And <span className="text-primary text-decoration-underline " >account detail.</span>
 
 </h5>
      </TabPanel>
      <TabPanel className="bg-white w-100 " value={value} index={1}>
        

      <div className="container">
      {orders.length === 0 ? (
        <p>No orders found</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Payment Status</th>
                <th>Products</th>
                <th>Shipping Address</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                  <td>{order.paymentStatus}</td>
                  <td>
                    <ul style={{listStyleType: 'disc'}} >
                      {order.products.map((product) => (
                        <li key={product.productId}>
                          {/* <img
                            src={`http://localhost:9000/product/${product.image}`}
                            alt={product.name}
                            style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }}
                          /> */}
                          {product.name} - {product.quantity} x {product.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.state}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
      </TabPanel>
      <TabPanel className="bg-white w-100" value={value} index={2}>
        <Wishlist/>
      </TabPanel>
      <TabPanel className="bg-white w-100" value={value} index={3}>
        

      <div className='container border-1 border p-3 userdetail justify-content-center text-center row' >

        <div className="card-fluid col-md-4 border-1 border p-2 userdeatilcard ">
        <img src="https://www.transparentpng.com/thumb/user/gray-user-profile-icon-png-fP8Q1P.png" height="100px"  alt="" />
            <h2 className='pb-2' >Account Details</h2>
            <p><strong>Email:</strong> {user.email}</p>

            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Created At:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
            
            <form >
                <div>
                    {/* <label htmlFor="password">New Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    /> */}

<div class="form-floating mb-3">
  <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} class="form-control" id="floatingInput" required placeholder="Change pasword"/>
  <label for="floatingInput">Change password</label>
</div>

                </div>
                <button onClick={()=>{updatePasswordHandler()}}  className="mb-3 btn btn-dark " >Update Password</button>
            </form>
            {message && <p>{message}</p>}
            </div>
        </div>

      </TabPanel>
      <TabPanel className="bg-white w-100" value={value} index={4}>
    <div className='container py-5 fs-2' >
    Are you sure you want to sign out? 
    <br/>
    <div className="btn btn-danger px-4 ">Sign-Out</div>
    </div>
      </TabPanel>
      <TabPanel className="bg-white w-100" value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
      </div>
      </div>
    </Box>
    </div>

    </>

  );
}