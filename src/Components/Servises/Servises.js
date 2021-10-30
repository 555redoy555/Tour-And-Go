import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Servise from '../Servise/Servise';

const Servises = () => {
     const [services, setServices] = useState([])





     useEffect(() => {
          fetch(`https://nameless-hamlet-63339.herokuapp.com/servises`)
               .then(res => res.json())
               .then(data => {
                    setServices(data);
               });
     }, [])

     // console.log(servises)

     return (
          <div>
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