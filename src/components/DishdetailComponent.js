import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

export class Dishdetail extends Component {

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                   <CardImg top src={dish.image} alt={dish.name}/>
                   <CardBody>
                       <CardTitle>{dish.name}</CardTitle>
                       <CardText>{dish.description}</CardText>
                   </CardBody> 
                </Card>
            );
        }

        else {
            return(
                <div></div>
            );
        }
    }

    renderComments(comments) {
        if(comments != null) {
            const allComment = comments.map((comment) => {
                return(
                   <ul className="list-unstyled">
                     <li>{comment.comment}</li>
                     <br></br>
                     <li>-- {comment.author} , {comment.date}</li>
                     <br></br>
                   </ul> 
                );
            });
            return(
                <ul><h4>Comments</h4>{allComment}</ul>
            );
        }

        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.setDish)}
                    </div>
                    <div className="col-12 col-md m-1">
                        {this.renderComments(this.props.setDish.comments)}
                    </div>
                </div>                 
            </div>
        )
    }
}
