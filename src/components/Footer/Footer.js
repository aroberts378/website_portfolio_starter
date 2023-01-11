import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:407.376.5888">407.376.5888</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:aroberts378@mail.com">
            aroberts378@mail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIcons>
        <SocialContainer>
          <CompanyContainer>
            <Slogan>Innovating one Project at a time</Slogan>
          </CompanyContainer>
          <SocialContainer>
            <SocialIcons href="https://github.com">
              <AiFillGithub size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://linkdin.com">
              <AiFillLinkedin size="3rem" />
            </SocialIcons>
            <SocialIcons href="https://instagram.com">
              <AiFillInstagram size="3rem" />
            </SocialIcons>
          </SocialContainer>
        </SocialContainer>
      </SocialIcons>
    </FooterWrapper>
  );
};

export default Footer;
