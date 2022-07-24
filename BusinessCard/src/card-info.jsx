import email from "./images/mail-icon.png";
import linkedin from "./images/linkedin-icon.png";

const cardInfo = () => {
    return (
        <>
            <div className="card-image"></div>
            <div className="top-content text">
                <div className="center">
                    <h1>Laura Smith</h1>
                    <h3>Frontend Developer</h3>
                    <a href="#">Laura's Website</a>
                </div>
                <div className="button-box">
                    <div className="button email">
                        <img src={email} alt="email" />
                        Email
                    </div>
                    <div className="button linkedin">
                        <img src={linkedin} alt="linkedin" />
                        LinkedIn
                    </div>
                </div>
            </div>
        </>
    );
}