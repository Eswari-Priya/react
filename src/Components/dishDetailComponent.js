import React,{Component} from 'react';
import {Card, CardImg, CardText,CardBody, CardTitle,BreadcrumbItem,Breadcrumb,Col,Row,Button,Modal,ModalHeader,ModalBody,Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm,Errors} from 'react-redux-form';

const required =(val)=>val&& val.length;
const maxLength=(len)=>(val)=>!(val) || (val.length)<=(len);
const minLength=(len)=>(val)=>(val) && (val.length)>=(len);


   
    function RenderDish({dish}){
        if(dish!=null){
            
                const details=(
                   
                        <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>
                            {dish.name}
                        </CardTitle>
                         <CardText>{dish.description}</CardText>
                    </CardBody>

                </Card>
     
                );
                return(
                    
                        <div className="col-12 col-md-5 m-1">
                            {details}
                        </div>
                        
                   
                        
                    
                );

                  
            

        }
        else{
            return(
            <div></div>
            );
        }
    }
    function RenderComments({comments}){
        
        if(comments!=null){
            const commentsArray = comments.map((commentElement)=>
                
                <li key={commentElement.id} className="list-unstyled">
                    <p>{commentElement.comment}</p>
                    <p>{commentElement.author} &#9; {new Intl.DateTimeFormat('en-US',{year:'numeric',month:'short',day:'2-digit'}).format(new Date(Date.parse(commentElement.date)))}</p>
                </li>
            );
            return(
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {commentsArray}
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <CommentForm/>

                        </div>
                    </div>
                </div>
            );
          
        }
        else{
            return (<div></div>);
        }
        
    }
    const Dishdetail=(props)=>{
        
            
            return(
                <div className="container">
                    <Breadcrumb>
                    <BreadcrumbItem>
                    <Link to="/menu">
                        Menu
                    </Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                         {props.dish.name}
                    </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    <div className="row">
                       <RenderDish dish={props.dish}/>
                       <RenderComments comments={props.comments}/>
                    </div>
 
                </div>

            );
        
            
        
        
    }
class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            
            isModalOpen:false
        };
        
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
       
    }
    render(){
        return(
            <React.Fragment>
                <Button outline onClick={this.toggleModal}>
                          <span className="fa fa-pencil"> Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating" className="form-control"  >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>

                                    </Control.select>
                                         
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="author" >Your Name</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name"
                                        className="form-control"
                                        validators={{required,minLength:minLength(3),maxLength:maxLength(15)}}
                                         />
                                         <Errors
                                         className="text-danger" 
                                         model=".author"
                                         show="touched"
                                         messages={{required:'Required',minLength:'Must be greater than 2 characters',
                                        maxLength:'Must be 15 characters or less'}}
                                         />
                                </Col>
                                
                                    
                               
                            </Row>
                            
                            <Row className="form-group">
                                <Col md={12}>
                                 <Label htmlFor="comment" >Comment</Label>   
                                </Col>
                                
                                <Col md={12}>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>

                </ModalBody>
            </Modal>

            </React.Fragment>
        );
    }
}

export default Dishdetail;