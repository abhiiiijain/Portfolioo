import { motion } from "framer-motion";
import styled, { ThemeProvider } from "styled-components";
import { lazy, Suspense } from "react";
import { lightTheme, mediaQueries } from "./Themes";

import { Design, Develope } from "./AllSvgs";
import Loading from "../subComponents/Loading";

//Components
const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const ParticlesComponent = lazy(() =>
  import("../subComponents/ParticlesComponent")
);
const BigTitle = lazy(() => import("../subComponents/BigTitle"));
const PageNav = lazy(() => import("../subComponents/PageNav"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow-y: auto;
  padding: 6rem 0 4rem;

  ${mediaQueries(50)`
            flex-direction:column;  
            padding:8rem 0 6rem;
            min-height:auto;
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
            &>*:nth-child(6){
              margin-bottom:4rem;
            }
            &>*:nth-child(7){
              margin-bottom:4rem;
            }
           
  `};
  ${mediaQueries(30)`
           
            &>*:nth-child(5){
              margin-bottom:4rem;
            }
            &>*:nth-child(6){
              margin-bottom:4rem;
            }
            &>*:nth-child(7){
              margin-bottom:4rem;
            }
           
  `};
`;

const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 20vw;
  height: max-content;
  max-height: 60vh;
  overflow: auto;
  z-index: 5;
  line-height: 1.5;

  ${mediaQueries(60)`
            max-height: 55vh;
  `};

  ${mediaQueries(50)`
              width: 50vw;
              height: max-content;

  `};

  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${mediaQueries(60)`
          font-size:calc(0.8em + 1vw);
  `};

  ${mediaQueries(50)`
          font-size:calc(1em + 2vw);
          margin-bottom:1rem;
  `};

  ${mediaQueries(30)`
                      font-size:calc(1em + 1vw);
  `};
  ${mediaQueries(25)`
                      font-size:calc(0.8em + 1vw);
                      svg{
                        width:30px;
                        height:30px;
                      }
  `};

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;
const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  ${mediaQueries(50)`
            font-size: calc(0.8em + 1vw);

  `};

  ${mediaQueries(30)`
                      font-size:calc(0.7em + 1vw);

              

  `};

  ${mediaQueries(25)`
                      font-size:calc(0.5em + 1vw);

              

  `};

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 2rem;
  align-items: start;
  width: 80vw;
  z-index: 3;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & > *:first-child {
    grid-column: 1 / -1;
    justify-self: center;
  }

  ${mediaQueries(60)`
    grid-template-columns: 1fr;
    width: 92vw;
    justify-items: center;
  `};
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Suspense fallback={<Loading />}>
        <Box
          key="skillsexperience"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0, transition: { duration: 0.5 } }}>
          <LogoComponent theme="light" />
          <PowerButton />
          <SocialIcons theme="light" />
          <ParticlesComponent theme="light" />
          <PageNav variant="light" />

          <Content>
            {/* Skills */}
            <Main>
              <Title>
                <Design width={40} height={40} /> Skills
              </Title>
              <Description>
                <ul>
                  <li>C++</li>
                  <li>C</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>ReactJs</li>
                  <li>NodeJs</li>
                  <li>SQL</li>
                  <li>Express</li>
                  <li>MongoDB</li>
                </ul>
              </Description>
            </Main>

            {/* Experience 1 */}
            <Main>
              <Title>
                <Develope width={40} height={40} /> Experience
              </Title>
              <Description>
                <b>Software Developer Trainee </b>
                @Connecting Points Tech
                <ul>
                  <li>Jun 2022 - Sep 2022 | Remote</li>
                </ul>
              </Description>
              <Description>
                <strong>Tech Stack</strong> <br />
                <p>HTML, CSS , JavaScript, ReactJs, Redux, Rest Api's</p>
              </Description>
            </Main>

            {/* Experience 2 */}
            <Main>
              <Title>
                <Develope width={40} height={40} /> Experience
              </Title>
              <Description>
                <b>Mern Stack Intern </b>
                @A2it Online
                <ul>
                  <li>Jan 2023 - Jun 2023 | Mohali, INDIA</li>
                </ul>
              </Description>
              <Description>
                <strong>Tech Stack</strong> <br />
                <p>HTML, CSS , JavaScript, ReactJs, NodeJs, Mongo DB</p>
              </Description>
            </Main>

            {/* Experience 3 */}
            <Main>
              <Title>
                <Develope width={40} height={40} /> Experience
              </Title>
              <Description>
                <b>Software Engineer Trainee </b>
                @Twigz Technologies Private Limited
                <ul>
                  <li>Sep 2023 - Present | Gurugram, INDIA</li>
                </ul>
              </Description>
              <Description>
                <strong>Tech Stack</strong> <br />
                <p>HTML, CSS , JavaScript, ReactJs, NodeJs, Mongo DB</p>
              </Description>
            </Main>
          </Content>
          <BigTitle text="Skills & Experience" top="84%" right="10%" />
        </Box>
      </Suspense>
    </ThemeProvider>
  );
};

export default MySkillsPage;
