import React, { useState } from 'react';
import fakeData from '../../fakeData/course'
import CourseItem from '../CourseItem/CourseItem';
import Cart from '../Cart/Cart';
import './Course.css'


const Course = () => {

    // set fakeData
    const [courses, setCourses] = useState(fakeData)

    //set cart
    const [cart, setCart] = useState([])

    //handle click event
    const handleAddCart = (item) => {
        const newCart = [...cart, item]
        setCart(newCart)
    }

    //total price of ordered cart
    const totalPrice = (cart.reduce((sum, item) => sum + item.price, 0)).toFixed(2)

    return (
        <div className="container-fluid">
            <div className="row course-items">
                <div className="col-md-9 row border-right mt-3">
                    {
                        courses.map(course => <CourseItem course={course} key={course.id} handleAddCart={handleAddCart}></CourseItem>)
                    }
                </div>
                <div className="col-md-3 mt-3">
                    <h3 className="text-center bg-light p-2 text-dark">Course Ordered: {cart.length}</h3>
                    <ul className="list-group">
                        {
                            cart.map(item => <Cart item={item} key={item.id}></Cart>)
                        }
                    </ul>
                    <button className="btn btn-primary btn-block p-2 checkout">Checkout <span className="badge badge-light">${totalPrice}</span></button>
                </div>
            </div>
        </div>
    );
};

export default Course;