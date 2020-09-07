import React from "react";
import { Card, CardImgOverlay, CardTitle, CardImg,Breadcrumb,BreadcrumbItem } from "reactstrap";
import {Link} from 'react-router-dom';

  function RenderMenuItem(dish) {//if line 23 is used enclose dish,onClick in {}
      return(
        <Card >
          <Link to={`/menu/${dish.id}`}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
        </Card>
      )
  }
  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 mt-5 m-1">
             {RenderMenuItem(dish)}
        </div>
      );
    });
     /* (on line19) or <RenderMenuItem dish={dish} onClick={props.onClick} */
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
             <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
             <BreadcrumbItem  active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>MENU</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }

export default Menu;