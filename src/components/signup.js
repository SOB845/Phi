import React, { Component } from 'react';


class Signup extends Component {

    state={
        isVisible: false
    }

    onClickEvent = () =>{
        this.setState({
            isVisible: !this.state.isVisible
        })
    }


    render(){
        return(
            <div className = "col-md-8 mb-4">
                    <div className= "card" style={isVisible ? {color:"black", textAlign:"center"}: null}>
                            <div className= "card-header d-flex justify-content-between">
                                <h4 className="d-inline">Sign up</h4>
                                    <div className="card-body">
                                        <form>
                                            <label>
                                                    Name:
                                                    <input type="text" name="name" placeholder="Enter your real name"></input>

                                                    Email:
                                                    <input type= "text" name="email address" placeholder="Enter your email"></input>
                                            </label>
                                            <input type="submit" value="Create account" onSubmit={this.onClickEvent}/>
                                        </form>
                                    </div>
                            </div>
                    </div>
            </div>
        )
    }

}

export default Signup;
