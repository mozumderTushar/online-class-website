import React, { useState } from 'react';
import './App.css';
import fakeData from './fakeData/course.js'
import CourseItem from './components/Courses/CourseItem';
import Cart from './components/Cart/Cart';

function App() {

  // get fakeData
  const [courses, setCourses] = useState(fakeData)
  console.log(fakeData);

  //set cart
  const [cart, setCart] = useState([])

  //click handler
  const handleAddCart = (item) => {
    console.log("click",item);
    const newCart = [...cart, item]
    setCart(newCart)
  }

  //total price
  const totalPrice = (cart.reduce((sum, item) => sum + item.price,0)).toFixed(2)

  return (
    <div className="container-fluid">
       <h2 className="text-center mt-5">Online Course</h2>
       <div className="row course-items">
         <div className="col-md-9 row border-right mt-3">
           {
             courses.map(course => <CourseItem course={course} key={course.id} handleAddCart={handleAddCart}></CourseItem>)
           }
         </div>
         <div className="col-md-3 m-2">
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
}

export default App;
