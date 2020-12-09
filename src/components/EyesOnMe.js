// Code EyesOnMe Component Here

import React from 'react'

class EyesOnMe extends React.Component {

    focusHandler = () => {
        return console.log("Good!")
    }
    blurHandler = () => {
        return console.log("Hey! Eyes on me!")
    }
    
    render() {

        return (
            <div>
                <button onFocus={this.focusHandler} onBlur={this.blurHandler}>
                    Enter
                </button>
                
            </div>
        )
    }
} 


export default EyesOnMe