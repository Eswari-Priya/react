import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import DishDetail from './dishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
/*import{ DISHES } from '../shared/dishes';
import{ LEADERS } from '../shared/leaders';
import{ COMMENTS } from '../shared/comments';
import{ PROMOTIONS } from '../shared/promotions';*/
import {Route,Switch,Redirect,withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
      }
    ;
}

class Main extends Component {
  constructor(props){
    super(props);
    /*this.state = {
      dishes : DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders:LEADERS
    };*/
  }
 
  render() {
    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]} 
        comments = {this.props.comments}/>
      );
    };
    const HomePage = ()=> {
      return(
        <Home
         dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
         promotion = {this.props.promotions.filter((promo)=>promo.featured)[0]}
         leader = {this.props.leaders.filter((leader)=>leader.featured)[0]}/>
      );
    }
    return (
      <div className="App">
        <Header/>
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route path='/contactus' component={Contact}/>
            <Route path="/aboutus" component={()=><About leaders={this.props.leaders} />}/>
            <Redirect to="/home" />
          
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter((connect(mapStateToProps)(Main)));
