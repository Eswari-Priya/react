import React from "react";
import { Card, CardImgOverlay, CardTitle, CardImg } from "reactstrap";


class Menu extends React.Component {
  constructor(props) {
    super(props); 
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 mt-5 m-1">
          <Card onClick={()=>this.props.onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}
export default Menu;