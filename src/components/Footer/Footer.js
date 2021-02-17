import React from 'react'
import {FooterContainer,
FooterWrap,
FooterLinksContainer,
FooterLinksWrapper,
FooterLinkItems,
FooterLinkTitle,
FooterLink,
FooterLinkS,
FooterLinkR,
SocialMedia,
SocialMediaWrap,
WebsiteRights,
SocialIcons,
Signature,
LnSelect,
SocialIconLink} from './FooterElements'
import {FaFacebook, FaLinkedin} from 'react-icons/fa'


const Footer = () => {


  return (
    <FooterContainer>
     <FooterWrap>
      <FooterLinksContainer>
       <FooterLinksWrapper>
       <FooterLinkItems>
        <FooterLinkTitle>Title </FooterLinkTitle>
         <FooterLink href="">Bla</FooterLink>
         <FooterLink href="">Bla</FooterLink>
         <FooterLink href="">Bla</FooterLink>
         <FooterLink href="">Bla</FooterLink>
         <FooterLink href="">Bla</FooterLink>
       </FooterLinkItems>

       <FooterLinkItems>
        <FooterLinkTitle>Navigation</FooterLinkTitle>
         <FooterLinkS to="/">one </FooterLinkS>
         <FooterLinkS to="/">two </FooterLinkS>
         <FooterLinkS to="/">thee </FooterLinkS>
         <FooterLinkS to="/">four </FooterLinkS>
         <FooterLinkR to="//">five</FooterLinkR>

       </FooterLinkItems>


       </FooterLinksWrapper>
      </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>

            <WebsiteRights>Ashton Gagnon Avocats.Lawyers © {new Date().getFullYear()} footer rights</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='//www.facebook.com/avocatsdefense/' target="_blank" aria-label="Facebook">
              <FaFacebook />
             </SocialIconLink>
             <SocialIconLink href='//www.linkedin.com/in/charles-ashton-71b385171/' target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
             </SocialIconLink >
            </SocialIcons>
            <Signature href="//www.tatianalab.dev" target="_blank" aria-label="Tatiana Lab">Built by Tatiana.Lab</Signature>
          </SocialMediaWrap>
        </SocialMedia>
     </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
