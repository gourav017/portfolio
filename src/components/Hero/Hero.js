import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
        Hi, I am
         <br />
         Gourav Sahu  
        </SectionTitle>
        <SectionText>
        Ambitious full stack developer with problem solving and analyzing skills and a creative software designer.
        </SectionText>
        <a href='https://drive.google.com/file/d/1LrR5ArGzconWyWMwAXJr8eLU9PUhapzh/view?usp=sharing' target="_blank">
        <Button onClick={props.handleClick}>Resume</Button>
        </a>
      </LeftSection>
      <div style={{marginLeft:"50px"}}>
         <img src={'/images/professional picture.png'} width={240} style={{borderRadius:"40%"}} />
      </div>
    </Section>
  </>
);

export default Hero;