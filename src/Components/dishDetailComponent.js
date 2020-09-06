import React from "react";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";


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

  function RenderComments(dish) {
    if (dish != null && dish.comments != null) {
      const coms = dish.comments.map((com) => {
        let dateFormat = { year: "numeric", month: "short", day: "numeric" };
        return (
          <div>
            <ul className="list-unstyled" key={com.id}>
              <li>
                <p>{com.comment}</p>
                <p>
                  -- {com.author} ,{" "}
                  {new Date(com.date).toLocaleDateString("en-us", dateFormat)}
                </p>
              </li>
            </ul>
          </div>
        );
      });
      return (
        <div>
          <h4>Comments</h4>
          {coms}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  const DishDetail = (props)=>{
    return (
      <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 mt-5 m-1">{RenderDish(props.dish)}</div>
        <div className="col-12 col-md-5 mt-5 m-1">
          {RenderComments(props.dish)}
        </div>
      </div>
      </div>
    );
  }

export default DishDetail;