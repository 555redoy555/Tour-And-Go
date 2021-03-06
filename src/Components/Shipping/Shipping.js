import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../hook/useAuth';

const Shipping = () => {
     const { id } = useParams();
     const [booking, setBooking] = useState([])
     const { user } = useAuth()

     const { register, reset, handleSubmit, formState: { errors } } = useForm();



     useEffect(() => {

          fetch(`https://infinite-hamlet-14555.herokuapp.com/Servises/${id}`)
               .then(res => res.json())
               .then(data => setBooking(data))

     }, [])

     const onSubmit = data => {

          fetch(`https://infinite-hamlet-14555.herokuapp.com/order`, {
               method: 'POST',
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)

          })
               .then(res => res.json())
               .then(result => {
                    if (result.insertedId) {
                         alert('Added Successfuly')
                         reset()
                    }
               })

          console.log(data)
     };

     // const Iteam = booking.filter(td => td.id === id)
     // console.log(Iteam)

     console.log(booking)
     return (
          <div>
               <h1>{booking.name}</h1>

               <div className="row">
                    <div className="col-md-6">
                         <div className="card    ">
                              <img src={booking.img} className="card-img-top img-fluid  " alt="..." />
                              <div className="card-body">
                                   <h5 className="card-title">{booking.name}</h5>
                                   <p className="card-text text-primary ">{booking.description}</p>
                                   <h2 className="text-primary mb-3 " >
                                        {booking.price}
                                   </h2>

                              </div>
                         </div>
                    </div>
                    <div className="col-md-6">
                         <h1>Full the form for order</h1>
                         <div className="card    ">

                              <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>

                                   <input defaultValue={user.displayName} {...register("name")} />

                                   <input defaultValue={user.email} {...register("email", { required: true })} />
                                   <input defaultValue={id} {...register("service",)} />
                                   {errors.email && <span className="error">This field is required</span>}
                                   <input placeholder="Address" defaultValue="" {...register("address", { required: true })} />
                                   <input placeholder="City" defaultValue="" {...register("city", { required: true })} />
                                   <input placeholder="phone number" defaultValue="" {...register("phone", { required: true })} />

                                   <input type="submit" />
                              </form>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default Shipping;