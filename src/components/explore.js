import React, {Component} from 'react';

//npm install --save react-awesome-button
import {
    AwesomeButton,
    AwesomeButtonSocial,
    AwesomeButtonProgress,
    AwesomeButtonStyles,
} from 'react-awesome-button';

import "react-awesome-button/dist/styles.css";

class Explore extends Component{
    render(){
        return[

            <AwesomeButton type = "primary" size = "medium"> Explore </AwesomeButton>,
                
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type ="github" icon url="https://github.com/SOB845/Pi">FORK ME!</AwesomeButtonSocial>,
            
            <AwesomeButtonSocial cssModule={AwesomeButtonStyles}
            type="twitter" icon size="medium">
                Follow
            </AwesomeButtonSocial>,

            <AwesomeButtonSocial cssModule={AwesomeButtonStyles} type="instagram">Instagram</AwesomeButtonSocial>,
            

        ]      
    }
}

export default Explore;
