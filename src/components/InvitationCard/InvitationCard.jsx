import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Fade from 'react-reveal/Fade';
import AboutImg from '../Image/AboutImg';
import Title from '../Title/Title';

const InvitationCard = function ({ title, img, id }) {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id={id}>
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Title title={title} />
          <div className="eventinfomation-wrapper__info">
            <AboutImg alt={title} filename={img} />
          </div>
        </Fade>
      </Container>
    </section>
  );
};

InvitationCard.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default InvitationCard;
