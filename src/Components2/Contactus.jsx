import React from "react";
import "./home2.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Fix default icon issues with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
const position = [22.71681, 75.89977];

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  console.log(formData)
  const [formMessage, setFormMessage] = useState({ type: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmits = async () => {
  
    try {
      const response = await axios.post("http://localhost:9000/contactus",formData);

      if (response.ok) {
        setFormMessage({
          type: "success",
          content: "Your message was sent, thank you!",
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      setFormMessage({ type: "error", content: error.toString() });
    }
  };
  return (
    <div>
      <section className="ftco-section container-fluid ">
        <div className="row">
          <div className="col-12">
            <MapContainer
              center={position}
              zoom={15}
              style={{ height: "300px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <div className="container border border-1 ">
          <div className="row justify-content-center">
            {/* <div className="col-md-6 text-center mb-5">
      </div> */}
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h1 className="mb-4">Get in touch</h1>
                      <div id="form-message-warning" className="mb-4" />
                      <div id="form-message-success" className="mb-4">
                        Your message was sent, thank you!
                      </div>
                      <form  id="contactForm" name="contactForm">
                        <div className="row ">
                          <div className="col-md-6 mt-2">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mt-2">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mt-2 ">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                value={formData.subject}
                                onChange={handleChange}
                    
                                placeholder="Subject"
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mt-2 ">
                            <div className="form-group">
                              <textarea
                                name="message"
                                className="form-control"
                                id="message"
                                cols={30}
                                rows={7}
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 text-center ">
                            <div className="form-group ">
<div
                              onClick={()=>handleSubmits()}
                               
                                                              className="btn btn-dark rounded-pill px-5 mt-4">
                                                                Contact us
                                                              </div>
                              <div className="submitting"  />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-5 d-flex text-light align-items-stretch">
                    <div className="info-wrap  text-white w-100 p-lg-5 p-4">
                      <h1 className="mb-4 ">Contact us</h1>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div className="icon d-flex align-items-center justify-content-center">
                          {/* <span className="fa fa-map-marker" /> */}
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fs-4">Address:</span> 18 Swarn
                            Vatika Vandana Nagar, Indore, MP 452018
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          {/* <span className="fa fa-phone" /> */}
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fs-5">Phone:</span>{" "}
                            <a
                              className="text-decoration-none text-light"
                              href="tel://1234567920"
                            >
                              +91 7987574121
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          {/* <span className="fa fa-paper-plane" /> */}
                        </div>
                        <div className="text pl-3">
                          <p>
                            <span className="fs-5">Email:</span>{" "}
                            <a
                              className="text-decoration-none text-light"
                              href="mailto:info@artsupplyindore.com"
                            >
                              info@artsupplyindore.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center">
                        <div className="icon d-flex align-items-center justify-content-center">
                          {/* <span className="fa fa-globe" /> */}
                        </div>
                        <div className="text pl-3">
                          {/* <p><span>Website</span> <a href="#">yoursite.com</a></p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* map start */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contactus;
