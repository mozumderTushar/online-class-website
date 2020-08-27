import React, { useState } from 'react';
import fakeData from '../../fakeData/course'
import CourseItem from '../CourseItem/CourseItem';
import Cart from '../Cart/Cart';


const Course = () => {

    // get fakeData
    const [courses, setCourses] = useState(fakeData)

    //set cart
    const [cart, setCart] = useState([])

    //click handler
    const handleAddCart = (item) => {
        const newCart = [...cart, item]
        setCart(newCart)
    }

    //total price
    const totalPrice = (cart.reduce((sum, item) => sum + item.price, 0)).toFixed(2)

    return (
        <div className="container-fluid">
            <h2 className="text-center mt-5">Online Course</h2>
            <hr/>
            <div className="row course-items">
                <div className="col-md-9 row border-right mt-3">
                    {
                        courses.map(course => <CourseItem course={course} key={course.id} handleAddCart={handleAddCart}></CourseItem>)
                    }
                </div>
                <div className="col-md-3">
                    <h2 className="text-center">Cart {cart.length}</h2>
                    <ul className="list-group">
                        {
                            cart.map(item => <Cart item={item}></Cart>)
                        }
                    </ul>
                    <button className="btn btn-primary btn-block">Checkout <span className="badge badge-light">{totalPrice}</span></button>
                </div>
            </div>
        </div>
    );
};

export default Course;