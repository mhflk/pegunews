import React from 'react';
import linkedin from '../../images/whatsapp.svg';
import github from '../../images/github.svg';
import { Section, Copyright, Nav, TextLink, IconLink } from './styledFooter';
import { newsApi } from '../../utils/NewsApi';

export default function Footer(): JSX.Element {
  function handleCopyClick() {
    newsApi
      .getSources()
      .then((response: any) => console.info(response.sources))
      .catch((error: Error) => console.error(error));
  }
  return (
    <Section>
      <Copyright onClick={handleCopyClick}>&#169; 2022 Thulina(PeGu), Powered by News API </Copyright>
      <Nav>
        <TextLink area="H" href="https://mhflk.github.io/pegunews/">
          Home
        </TextLink>
        <TextLink area="P" href="https://thulina2004.netlify.app/" rel="noopener" target="_blank">
          Portfolio
        </TextLink>
        <IconLink
          area="G"
          href="https://github.com/mhflk"
          rel="noopener"
          target="_blank"
          aria-label="View my projects on Github"
          icon={github}
        />
        <IconLink
          area="L"
          href="https://wa.me/qr/Q4VXDDGTICEDC1"
          rel="noopener"
          target="_blank"
          aria-label="DM me in Whatsapp"
          icon={linkedin}
        />
      </Nav>
    </Section>
  );
}
