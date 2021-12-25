import React from 'react';
import { Helmet } from 'react-helmet';
import InvitationCard from '../components/InvitationCard/InvitationCard';
import { eventInformationPageData, nikkahCardData, walimaCardData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const EventInformationPage = function () {
  const { title, lang, description } = eventInformationPageData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <InvitationCard
        title={nikkahCardData.title}
        img={nikkahCardData.img}
        id={nikkahCardData.id}
      />
      <InvitationCard
        title={walimaCardData.title}
        img={walimaCardData.img}
        id={walimaCardData.id}
      />
    </>
  );
};

export default EventInformationPage;
