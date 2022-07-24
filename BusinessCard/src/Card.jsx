import CardInfo from './CardInfo.jsx';

import twitter from './images/twitter-icon.png';
import facebook from './images/facebook-icon.png';
import github from './images/github-icon.png';
import instagram from './images/instagram-icon.png';

const Card = () => {
    return (
        <div className="card">
            <CardInfo />
            <div className="card-detail text">
                <div className="detail-text">
                    <h2>About</h2>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with
                        security and best practices, and am always looking for new things to learn.</p>
                </div>
                <div className="detail-text">
                    <h2>Interests</h2>
                    <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee
                        fanatic.</p>
                </div>
            </div>
            <div className="card-social button-box">
                <img src={twitter} alt="twitter" />
                <img src={facebook} alt="facebook"/>
                <img src={instagram} alt="instagram"/>
                <img src={github} alt="github"/>
            </div> 
        </div>
    )     
}

export default Card;