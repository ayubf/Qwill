import React from "react";
import Card from "react-bootstrap/Card";



function Post(props) {
	
	
        return (
            <div>
                <div>
                <Card style={{width:"65%" , margin:"auto"}}>
                    <a onClick={props.handleClick} href='\' className='post'>
                        <Card.Body>
                            <Card.Title>
                                <p>
                                    <a href='#post' className='posttitle'> {props.title} by </a>

                                    <a href={ ""+props.profile} >{props.username}</a> 
                                </p>
                            </Card.Title>
                            <Card.Text>
                                {props.content}
                            </Card.Text>
                            <Card.Text>
                                <div className='postbuttons'>
                                    Like
                                </div>
                                <div className='postbuttons'>
                                    Dislike
                                </div>
                                <div className='postbuttons'>
                                    Save
                                </div>

                            </Card.Text>                         
                            <Card.Subtitle>{props.score}</Card.Subtitle>

                            </Card.Body>
                    </a>       
                </Card>               
                <br />    
             </div>
            


            </div>
            
            
        )
    


}

export default Post
