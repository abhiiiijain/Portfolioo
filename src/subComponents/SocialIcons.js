import {
  Github,
  Twitter,
  Instagram,
  Document,
  // Facebook,
  // YouTube,
} from "../components/AllSvgs";
import styled from "styled-components";
import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;

    ${mediaQueries(20)`
      margin: 0.3rem 0;


  `};
  }

  ${mediaQueries(40)`
  left: 1rem;

      svg{
        width:20px;
        height:20px
      }

  `};
`;
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
`;
const SocialIcons = (props) => {
  const mq = window.matchMedia("(max-width: 40em)").matches;

  return (
    <Icons>
      {/* changed initial [transform: "scale(0)"] to [scale: 0] */}
      
      {/* Github Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://github.com/abhiiiijain"}
          // to={{ pathname: "https://github.com/abhiiiijain" }}
        >
          <Github
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </a>
      </motion.div>

      {/* Twitter Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://twitter.com/abhiiiijain1"}
          // to={{ pathname: "https://twitter.com/abhiiiijain1" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </a>
      </motion.div>

      {/* Instagram Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          href={"https://www.instagram.com/abhiiiijain"}
          // to={{ pathname: "https://www.instagram.com/abhiiiijain" }}
        >
          <Instagram
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </a>
      </motion.div>

      {/* Document Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}>
        <a
          style={{ color: "inherit" }}
          target="_blank"
          rel="noreferrer"
          // href={"https://drive.google.com/file/d/1GaLpWs3rFaAotqY_Q3RV1tbu10JmBh2e/view?usp=sharing"}
          href={"https://drive.google.com/file/d/1Cdx8ee153hox9P998U6usd20kVHMv2um/view?usp=sharing"}
        >
          <Document
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </a>
      </motion.div>

      {/* Facebook Icon */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.facebook.com/abhiiiijain/" }
          // to={{ pathname: "https://www.instagram.com/abhiiiijain" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </a>
      </motion.div> */}

      {/* Youtube Icon */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{
            pathname:
              "https://www.youtube.com/channel/UCeYt6blRBKuNrEg_-282fSA",
          }}
        >
          <YouTube
            width={25}
            height={25}
            fill={
              props.theme === "dark" ? `${DarkTheme.text}` : `${DarkTheme.body}`
            }
          />
        </NavLink>
      </motion.div> */}

      <Line
        initial={{ height: 0 }}
        animate={{ height: mq ? "5rem" : "8rem" }}
        color={props.theme}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
      />
    </Icons>
  );
};

export default SocialIcons;
