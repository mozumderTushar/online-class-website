import React from 'react';
import './CourseItem.css'

const CourseItem = (props) => {

    const {img, title, instructor, level, price} = props.course;
    return (
        <div className="col-md-4">
           <div className="single-item my-4">
            <div className="card">
                    <img src={img} alt="" className="card-img-top"/>
                <div className="card-body">
                    <div className="card-title"><h3>{title}</h3></div>
                    <p>{instructor}</p>
                    <p><small>{level}</small></p>
                    <div className="rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    </div>
                    <h4 className="price">${price}</h4>
                    <button className="btn btn-sm btn-primary enrollBtn" onClick={()=>props.handleAddCart(props.course)}>Enroll Now</button>
                </div>
         </div>
           </div>
        </div>
    );
};

export default CourseItem;