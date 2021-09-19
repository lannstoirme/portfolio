import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './Social';
import profile from './assets/lori.jpg';

class RegularClass{}
class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('regularClassInstace', regularClassInstance);
console.log('componentClassInstance', componentClassInstance);

class App extends Component { 
    state = {displayBio: false};

    //constructor() {
    //    super();
    //    this.state = { displayBio: false };

    //    console.log('Component this', this);
        
    //    this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
        
    //}


    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio});
    }

    render() {
        return (
            <div>
                <img src={profile} alt="profile picture" className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Lori Woodward Orford. I am a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                { this.state.displayBio ? (
                    <div>
                <p>I live in Brisbane, and code every day. I am currently working on ReactJS projects. </p>
                <p>My favorite language is JavaScript and I think ReactJS is awesome. </p>
                <p>Besides coding, I also love music and Asian Food</p>
                <p>I work part time as an ESL teacher, and enjoy this also.</p>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
                ) }   
                <hr />
                <Projects />    
                <hr />
                <SocialProfiles />         
            </div>
        )
    }
}

export default App; 