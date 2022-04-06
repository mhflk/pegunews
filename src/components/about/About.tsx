import React from 'react';
import author from '../../images/thulina2.jpg';
import { Section, Image, TextContent, Title, Paragraph } from './styledAbout';
export default function About() {
  return (
    <Section>
      <Image src={author} alt="Smiling Author" />
      <TextContent>
        <Title>About the author</Title>
        <Paragraph>
          Hey there, I'm Thulina Perera. I am a full stack developer with experience building websites and web
          applications.
        </Paragraph>
        <Paragraph>
        I'm interested in the whole front end stack Like trying new things and building great projects. I'm an independent freelancer and a footballer.

I believe everything is an Art when you put your consciousness in it.
        </Paragraph>
        {/* <Paragraph>
          These days my time is spent learning how to build and deploy beautiful websites. I've long
          been interested in the convergence of creativity and problem solving. I'm learning how to
          best occupy that space. I design and build websites that look good and solve problems.
        </Paragraph> */}
        {/* <Paragraph>
          When I'm not coding, you can find me making music, out hiking, and petting all the good
          dogs.
        </Paragraph> */}
      </TextContent>
    </Section>
  );
}
