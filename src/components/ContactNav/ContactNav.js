import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import './ContactNav.scss';

const icons = {
  facebook: faFacebookF,
  instagram: faInstagram,
  twitter: faTwitter
};

const ContactNav = ({ phone, address, social, email }) => {
  return (
    <div className="contact-nav">
      <div className="contact-nav__wrapper">
        <div className="contact-nav__contacts">
          <div className="contact-nav__contact contact-nav__phone">{phone}</div>
          <div className="contact-nav__contact contact-nav__address">
            {address}
          </div>
          <div className="contact-nav__contact contact-nav__email">{email}</div>
        </div>
        <div className="contact-nav__socials">
          {social.map(site => (
            <div key={site.name} className="contact-nav__social">
              <FontAwesomeIcon icon={icons[site.name]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactNav;
