import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import useModal from '../../hooks/useModal';
import CardImage from '../card-image/CardImage';
import CardAddress from '../card-address/CardAddress';
import CardBio from '../card-bio/CardBio';
import CardSpecialties from '../card-specialties/CardSpecialties';
import CardButtons from '../card-buttons/CardButtons';
import ContactForm from '../contact-form/ContactForm';
import ContactMessage from '../contact-message/ContactMessage';
import './ResultsCard.scss';
import './ResultsCardModal.scss';

const Card = ({ data }) => {

    const [isOpen, setIsOpen] = useState(false); 
    const { show, RenderModal } = useModal();
    const { 
        firstName, 
        lastName, 
        clinicName, 
        biography, 
        address, 
        city, 
        state, 
        zipCode, 
        country, 
        topSpecialties, 
        otherSpecialties, 
        languages 
    } = data;
    

    const toggleIsOpen = () => {
        setIsOpen(isOpen => !isOpen);
    }

    return (
        <>
            <div className="card" onClick={toggleIsOpen}>
                <div className="card_row">
                    <CardImage />
                    <CardBio 
                        firstName={firstName} 
                        lastName={lastName} 
                        clinicName={clinicName} 
                        isOpen={isOpen} 
                        biography={biography} />
                    <CardAddress 
                        address={address} 
                        city={city} 
                        state={state} 
                        zipCode={zipCode} 
                        country={country} />
                </div>
                <div className="card_row">
                    <CardSpecialties 
                        isOpen={isOpen} 
                        topSpecialties={topSpecialties} 
                        otherSpecialties={otherSpecialties} 
                        languages={languages} />
                    <CardButtons isOpen={isOpen} handleClick={() => show()} />
                </div>
            </div>
            <RenderModal>
                <div className="modal__title">
                    <FontAwesomeIcon icon={faCamera} size="4x" />
                    {`Send a message to ${firstName} ${lastName}`}
                </div>
                <div className="modal__body">
                    <ContactForm />
                    <ContactMessage />
                </div>
            </RenderModal>
        </>
    );
}

export default Card;