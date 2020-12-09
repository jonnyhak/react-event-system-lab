// Code Keypad Component Here

// import { render } from 'enzyme'
import React from 'react'

class Keypad extends React.Component {

    keyHandler = () => {
        console.log("Entering password...")
    }
    
    
    render() {

        return (
            <div>
                <input onKeyUp={this.keyHandler} type="password" />
            </div>
        )
    }
} 

export default Keypad