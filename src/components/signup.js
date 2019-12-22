import React, { Component } from 'react';

class Signup extends Component {

    constructor(props){
        super(props);
        this.isVisible = {isVisible:true};
    }

    onClickEvent = () =>{
        this.setState({
            isVisible : false
        })
    }

    render(){
        return(
            <div className = "col-md-8 mb-4">
                    <div className= "card" style={{color:"black", textAlign:"center"}}>
                            <div className= "card-header d-flex justify-content-between">
                                <h4 className="d-inline">Sign up</h4>
                                <br/>
                                    <div className="card-body">
                                        <form>
                                            <label>
                                                    Name:
                                                    <input type="text" name="name" placeholder="        Enter your full name"></input>
                                                    <br/>
                                                    <br/>
                                                    Email:
                                                    <input type= "text" name="email address" placeholder= "         Enter your email"></input>
                                                    <br/>
                                                    <br/>
                                                    University: 
                                                    <input type="text" name="University" placeholder="      Where do you study?"></input>
                                                    <br/>
                                                    <br/>
                                                    <button className="sign_in" type="submit" value="create account">Sign in</button>
                                            </label>
                                        </form>
                                    </div>
                            </div>
                    </div>
            </div>
        )
    }

}

export default Signup;
