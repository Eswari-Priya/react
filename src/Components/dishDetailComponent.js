import React,{Component} from "react";
import { Card, CardImg, CardTitle, CardText, CardBody,Breadcrumb,BreadcrumbItem,Button,Modal,ModalBody,ModalHeader,Row, Label} from "reactstrap";
import {Link} from 'react-router-dom';
import {Control,LocalForm,Errors} from 'react-redux-form';

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
      super(props);
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
      this.state = {
        isModalOpen: false,
      }
    }

    toggleModal(){
        this.setState({
           isModalOpen : !(this.state.isModalOpen)
        });
    }

    handleSubmit(values){
        this.toggleModal();
        alert(JSON.stringify(values));
    }
    render(){
      return(
        <React.Fragment>
        <Button type="submit" onClick={this.toggleModal}><span className="fa fa-pencil mr-2"></span>Submit Comment</Button>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
             <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
             <ModalBody>
                   <LocalForm className="container" onSubmit={(values)=>this.handleSubmit(values)}>
                       <Row className="form-group"> 
                           <Label htmlFor="rating">Rating</Label>
                           <Control.select className="form-control" model=".rating" id = "rating" name="rating" >
                               <option>1</option>
                               <option>2</option>
                               <option>3</option>
                               <option>4</option>
                               <option>5</option>
                           </Control.select> 
                       </Row>
                       <Row className="form-group"> 
                           <Label htmlFor="name">Name</Label>
                           <Control.text className="form-control" model=".name" id = "name" name="name" placeholder="Your Name" validators={{minLength: minLength(3), maxLength: maxLength(15)}}/> 
                           <Errors
                                className="text-danger"
                                model=".name"
                                show="touched"
                                messages={{
                                        
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                        }}
                            /> 
                       
                       </Row>
                       <Row className="form-group"> 
                           <Label htmlFor="comment">Comment</Label>
                           <Control.textarea className="form-control" model=".comment" id = "comment" name="comment" rows={6} /> 
                       </Row>
                       <Row>
                           <Button type="submit" className="bg-primary">Submit</Button>
                       </Row>
                 </LocalForm>
             </ModalBody>
        </Modal>
        </React.Fragment>
      )
    }
}

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