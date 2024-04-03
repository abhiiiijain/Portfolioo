import styled from "styled-components";
import { mediaQueries } from "../components/Themes";

const Text = styled.h1`
  position: fixed;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.1)`};
  font-size: calc(3rem + 3vw);
  z-index: 0;
  ${mediaQueries(50)`
  font-size: calc(2.5rem + 2.5vw);
            
  `};
  ${mediaQueries(30)`
  font-size: calc(2rem + 2vw);
           
           
           
  `};
`;

const BigTitle = (props) => {
  return (
    <Text top={props.top} left={props.left} right={props.right}>
      {props.text}
    </Text>
  );
};

export default BigTitle;
