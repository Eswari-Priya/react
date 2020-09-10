import React,{Component} from "react";
import { Card, CardImg, CardTitle, CardText, CardBody,Breadcrumb,BreadcrumbItem} from "reactstrap";
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';

  function RenderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  function RenderComments(comment) {
    if (comment != null ) {
      const coms = comment.map((com) => {
        let dateFormat = { year: "numeric", month: "short", day: "numeric" };
        return (
              <li key = {com.id}>
                <p>{com.comment}</p>
                <p>
                  -- {com.author} ,{" "}
                  {new Date(com.date).toLocaleDateString("en-us", dateFormat)}
                </p>
              </li> 
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          {coms}
          <CommentForm />
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const DishDetail = (props)=>{
    return (
      <div className="container">
        <Breadcrumb>
           <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
           <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
           <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
        </Breadcrumb>
      <div className="row">
        <div className="col-12 col-md-5 mt-5 m-1">{RenderDish(props.dish)}</div>
        <div className="col-12 col-md-5 mt-5 m-1">
           <ul className="list-unstyled">{RenderComments(props.comments)}</ul>
          
        </div>
      </div>
      </div>
    );
  }

export default DishDetail;