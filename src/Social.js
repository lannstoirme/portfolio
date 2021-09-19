import React, { Component } from 'react';
import SOCIAL from './data/socialProfiles';

class SocialProfile extends Component {
    render() {
        console.log('this.props', this.props);

        const {title, image, link } = this.props.social;

        return (
            <div style={{display: 'inline-block', width: 100, margin: 10}}>
                <a href={link}><img src={image} alt='social-profile' style={{width: 50, height: 50 }} /></a>  
            </div>
        )
    }
}
class SocialProfiles extends Component {
    render() {
        return(
            <div>
                <h2>Connect With Me</h2>
                <div>
                    {
                        SOCIAL.map((SOCIAL) => {
                            return (
                                <SocialProfile key={SOCIAL.id} social={SOCIAL}/>
                            );
                        })
                    }
                </div>
            </div>
        )

    }
}

export default SocialProfiles; 