import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br/>
      My Tech Portfolio
    </SectionTitle>
    <SectionText>
    Motivated designer and developer with recent experience creating custom projects through HTML and CSS. 
    Strong collaboration skills and proven history of application development. Also familiar with basic
    python, Django and JavaScript. React, Redux and MySQL.
    </SectionText>
    <Button onClick={()=> window.location = 'https//:google.com'}>Learn More</Button>
  </LeftSection>

</Section>
);

export default Hero;