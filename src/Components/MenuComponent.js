import React from "react";
import { Card, CardImgOverlay, CardTitle, CardImg } from "reactstrap";


  function RenderMenuItem(dish,onClick) {//if line 23 is used enclose dish,onClick in {}
      return(
        <Card onClick= {()=> onClick(dish.id) }>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
      )
  }
  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 mt-5 m-1">
             {RenderMenuItem(dish,props.onClick)}
        </div>
      );
    });
     /* (on line19) or <RenderMenuItem dish={dish} onClick={props.onClick} */
    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }

export default Menu;