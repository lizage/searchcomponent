import React from 'react';
import './Message.scss';

const Message = ({ value, resultsCount }) => {
    return (
        <div className="message">
            <div className="message__container">
                <div className="message__title">
                    <p>Don't see a provider near you? </p>
                    <p>Not a problem.</p>
                </div>
                <div className="message__text">
                    That’s why we offer professional at-home training. Your kit will arrive in the mail and you will be matched with a professional neuro-coach to start training using the Myndlift app.
                </div>
                <button className="message__button">Check Out The Remote Program</button>
            </div>
        </div>
        
    );
}

export default Message;