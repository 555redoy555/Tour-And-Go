import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Servise from '../Servise/Servise';

const Servises = () => {
     const [services, setServices] = useState([])





     useEffect(() => {
          fetch(`https://infinite-hamlet-14555.herokuapp.com/servises`)
               .then(res => res.json())
               .then(data => {
                    setServices(data);
               });
     }, [])

     // console.log(servises)

     return (
          <div>
               <div class="card  pb-5">
                    <img src='https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560' class="card-img   " alt="..." />
                    <div class="card-img-overlay">
                         <h5 class="card-title Home-h3-tag-banner text-white ">Homepage</h5>
                         <p class="card-text text-white"><h1 className="Home-h1-tag-banner"></h1></p>
                         <p class="card-text text-white"> <h2 className="Home-h2-tag-banner" ></h2></p>
                    </div>
               </div>
               <h1 className="text-center my-5" >
                    This is our best deals
               </h1>


               <div className="row row-cols-1 row-cols-md-2 g-4 mx-4 my-5  ">
                    {
                         services.map((service, index) => <Servise service={service} index={index} ></Servise>)
                    }

               </div>

          </div>

     );
};

export default Servises;