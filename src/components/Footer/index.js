import React from 'react'
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, WebsiteRights, SocialIconLink  } from './FooterElements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investers</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investers</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>                           
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investers</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>                           
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/signin'>How it works</FooterLink>
                                <FooterLink to='/signin'>Testimonials</FooterLink>
                                <FooterLink to='/signin'>Careers</FooterLink>
                                <FooterLink to='/signin'>Investers</FooterLink>
                                <FooterLink to='/signin'>Terms of service</FooterLink>                           
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            HOLA
                        </SocialLogo>
                        <WebsiteRights>hola @{ new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='/' target='_blank' aria-label="Facebook"><FaFacebook/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Instagram"><FaInstagram/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href='/' target='_blank' aria-label="LinkedIn"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
