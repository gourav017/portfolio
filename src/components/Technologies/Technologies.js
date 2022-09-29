import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  ImageContainer,
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
  MainImage,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    {/* <SectionDivider divider /> */}
    <SectionTitle>Technologies & Skills</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <picture>
            <MainImage src="/images/react.png" />
            <SectionText>ReactJS</SectionText>
          </picture>
          <picture>
            <MainImage src="/images/redux.png" />
            <SectionText>Redux</SectionText>
          </picture>
          <picture>
            <MainImage src="/images/javascript.png" />
            <SectionText>Javascript</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/html.png" />
            <SectionText>  HTML</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/csscolor.png" />
            <SectionText> CSS</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/chakralogo.jpg" />
            <SectionText>Chakra-ui</SectionText>
          </picture>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <picture>
          <MainImage src="/images/MERNcolor.png" />
            <SectionText>MERN</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/mongodb.png" />
            <SectionText>MongoDB</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/Expressjs.png" />
            <SectionText>ExpressJS</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/nodejscolor.png" />
            <SectionText>NodeJS</SectionText>
          </picture>
        </ListContainer>
      </ListItem>
      <ListItem>
        <ListContainer>
          <ListTitle>Tools I Use</ListTitle>
          <picture>
          <MainImage src="/images/vscode.png" />
            <SectionText>Vscode</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/git.png" />
            <SectionText>Github</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/heroku.png" />
            <SectionText>Heroku</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/netlify.png" />
            <SectionText>netlify</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/vercel.png" />
            <SectionText>Vercel</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/githubb.png" />
            <SectionText>Github</SectionText>
          </picture>
          <picture>
          <MainImage src="/images/postman.png" />
            <SectionText>Postman</SectionText>
          </picture>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
