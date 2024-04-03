import { motion } from "framer-motion";
import { useEffect, useRef, lazy, Suspense } from "react";
import styled, { ThemeProvider } from "styled-components";
import { YinYang } from "./AllSvgs";
import { Project } from "./ProjectData";
import { DarkTheme, mediaQueries } from "./Themes";
import Card from "../subComponents/Card";
import Loading from "../subComponents/Loading";

const SocialIcons = lazy(() => import("../subComponents/SocialIcons"));
const PowerButton = lazy(() => import("../subComponents/PowerButton"));
const LogoComponent = lazy(() => import("../subComponents/LogoComponent"));
const BigTitle = lazy(() => import("../subComponents/BigTitle"));

const Box = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  height: 400vh;

  ${mediaQueries(100)`
  height: 450vh;
  `};

  ${mediaQueries(80)`
  height: 480vh;
  `};

  ${mediaQueries(60)`
  height: 500vh;  
  `};

  ${mediaQueries(40)`
    height: 450vh;
    `};

  ${mediaQueries(25)`        
  height: 400vh;
  `};
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(4rem + 15vw);

  height: 50vh;
  /* height:200vh; */
  // border:1px solid white;

  display: flex;

  ${mediaQueries(50)`
  left:calc(4rem + 8vw);
  
  `};

  ${mediaQueries(40)`
  top: 30%;
  left:calc(4rem + 8vw);
  
  `};

  ${mediaQueries(40)`

  left:calc(2rem + 15vw);
  
  `};
  ${mediaQueries(25)`        
        left:calc(1rem + 15vw);

  `};
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;

  z-index: 1;
  ${mediaQueries(40)`
     width:60px;
         height:60px;   
       svg{
         width:60px;
         height:60px;
       }

  `};
  ${mediaQueries(25)`
        width:50px;
         height:50px;
        svg{
         width:50px;
         height:50px;
       }

  `};
`;
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const ProjectPage = () => {
  const ref = useRef(null);

  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        key="project"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{ opacity: 0, transition: { duration: 0.5 } }}>
        <LogoComponent theme="dark" />
        <PowerButton />
        <SocialIcons theme="dark" />
        <Suspense fallback={<Loading />}>
          <Main ref={ref} variants={container} initial="hidden" animate="show">
            {Project.map((d) => (
              <Card key={d.id} data={d} />
            ))}
          </Main>
        </Suspense>

        <BigTitle text="PROJECTS" top="10%" right="20%" />

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>
      </Box>
    </ThemeProvider>
  );
};

export default ProjectPage;
