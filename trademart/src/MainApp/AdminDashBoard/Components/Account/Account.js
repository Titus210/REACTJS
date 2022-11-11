import React from 'react';
import { useForm } from "react-hook-form";
import { Form, Button } from 'semantic-ui-react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

import "./Account.css"

function Account() {




    const formSchema = Yup.object().shape({
        Currentpassword: Yup.string()
            .required('Cant Be blank')
            .min(3, 'Password must be at 3 char long'),
        password: Yup.string()
            .required('Cant Be blank')
            .min(3, 'Password must be at 3 char long'),
        confirmPwd: Yup.string()
            .required('Cant Be blank')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),

        firstName: Yup.string()
            .required('Cant Be blank')
            .min(3, 'Name must be at 3 char long')
            .max(10, 'Name must be at 10 char long'),
        secondName: Yup.string()
            .required('Cant Be blank')
            .min(3, 'Name must be at 3 char long')
            .max(10, 'Name must be at 10 char long'),
        storeName: Yup.string()
            .required('Cant Be blank')
            .min(3, 'Store Name be at 3 char long')
            .max(10, 'Store Name must be at 10 char long')
            .matches(/^[A-Za-z ]*$/, "Can't Contain digits"),
        address: Yup.string()
            .required('Cant Be blank')
            .min(3, 'Store Name be at 3 char long')
            .max(17, 'Store Name must be at 10 char long'),

        email: Yup.string()
            .required('Cant Be blank')
            .matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Invalid email address"),

        tel: Yup.string()
            .required('Cant Be blank')
            .matches(/^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/, "Invalid format"),
    })
    const formOptions = { resolver: yupResolver(formSchema) }

    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions)

    const onSubmit = (data, e) => {

        console.log(data);
        console.log(JSON.stringify(data, null, 4))
        return false
    }


    return (
        <>
            <div className="container-wrapper">
                <div className="account-side">

                    {/* update Account details */}
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Form.Field >
                            <label htmlFor="fName">First Name</label>
                            <input type="text" className="name" placeholder="John"   {...register('firstName')} />

                        </Form.Field>
                        <p>{errors.firstName?.message}</p>


                        <Form.Field>
                            <label htmlFor="sName">Second Name</label>
                            <input type="text" className="sname" placeholder="Doe"  {...register("secondName", { required: true, maxLength: 10 })} />

                        </Form.Field>
                        <p>{errors.secondName?.message}</p>



                        <Form.Field>
                            <label htmlFor="storeName">Store Name</label>
                            <input type="text" className="sName" placeholder="Villa Sofa"
                                {...register("storeName")} />
                        </Form.Field>
                        <p>{errors.storeName?.message}</p>

                        <Form.Field>
                            <label htmlFor="location">Location</label>
                            <input type="text" className="name" placeholder="North Villa"
                                {...register("location", { maxLength: 10 })} />
                        </Form.Field>
                        <p>{errors.location?.message}</p>

                        <label htmlFor="fName">Currency</label>
                        <select id="currency-option" onchange="changeCurrency">
                            <option name="USD" id="">KES</option>
                            <option name="NGN" id="">CAD</option>
                            <option name="EUR" id="">EUR</option>
                            <option name="INR" id="">USD</option>
                        </select>

                        <Form.Field>
                            <label htmlFor="fName">Email</label>
                            <input type="email" className="name" placeholder="johndoe@gmail.com"
                                {...register("email")
                                } />

                        </Form.Field>
                        <p>{errors.email?.message}</p>

                        <Form.Field>
                            <label htmlFor="fName">Phone</label>
                            <input type="tel" className="phone" placeholder="+254 71212121"
                                {...register("tel")
                                } />

                        </Form.Field>
                        <p>{errors.tel?.message}</p>

                        <Form.Field>
                            <label htmlFor="fName">Address</label>
                            <input type="" className="name" placeholder="212 View Street "
                                {...register("address",
                                    {
                                        required: true,
                                    })
                                }
                            />
                            <p>{errors.address?.message}</p>

                        </Form.Field>
                    </form>
                </div>

                {/* Update Password */}
               
                <div className="password-side">
                    <h3>Update Password</h3>
                    <div className="passwords">
                        <form action="" >
                            <Form.Field>
                                <label htmlFor="password ">Current Password</label>
                                <input type="password" className="pass" placeholder="******** "
                                    {...register('Currentpassword')}
                                />
                            </Form.Field>
                            <p>{errors.Currentpassword?.message}</p>

                            <Form.Field>
                                <label htmlFor="password ">New Password</label>
                                <input type="password"
                                    placeholder="******** "
                                    {...register('password')}
                                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                />
                                <p>{errors.password?.message}</p>

                            </Form.Field>

                            <Form.Field> <label htmlFor="password ">Confirm Password</label>
                                <input type="password"
                                    className={`form-control ${errors.confirmPwd ? 'is-invalid' : ''}`}
                                    placeholder="******** "
                                    {...register("confirmPwd", {
                                    })} />
                            </Form.Field>
                            <p>{errors.confirmPwd?.message}</p>


                        </form>
                    </div>


                    {/* Manage Notifications */}
                    <div className="notifications">
                        <div className="order">
                            <div className="notification-items">
                                <h4>Order Confirmation</h4>
                                <p>You will be notified when customer orders any product</p>
                            </div>
                            <div className="fa">
                                <i class="fa fa-toggle-on"></i>
                            </div>
                        </div>
                        <div className="order">
                            <div className="notification-items">
                                <h4>Order Status Changed</h4>
                                <p>You will be notified when order status change</p>
                            </div>
                            <div className="fa">
                                <i class="fa fa-toggle-on"></i>
                            </div>
                        </div>
                        <div className="order">
                            <div className="notification-items">
                                <h4>Order Delivered</h4>
                                <p>You will be notified when customer order id delivered</p>
                            </div>
                            <div className="fa">
                                <i class="fa-solid fa-toggle-on"></i>
                            </div>
                        </div>
                        <div className="order">
                            <div className="notification-items">
                                <h4>Email Notification</h4>
                                <p>You will be notified on Email Updates</p>
                            </div>
                            <div className="fa">
                                <i class="fa fa-toggle-on"></i>
                            </div>
                        </div>
                    </div>
                    <Button onClick={handleSubmit(onSubmit)} type='submit'>Update</Button>
                </div>
            </div>
        </>
    )
}


export default Account