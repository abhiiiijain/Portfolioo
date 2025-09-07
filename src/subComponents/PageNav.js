import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Container = styled.nav`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 3;
`;

const SideLink = styled(NavLink)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%) rotate(${(p) => (p.$right ? "90deg" : "-90deg")});
  ${(p) => (p.$right ? "right: calc(-2rem + 2vw);" : "left: calc(1rem + 2vw);")}
  color: ${(p) => p.$color};
  text-decoration: none;
  pointer-events: auto;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;

  ${mediaQueries(50)`
    text-shadow: 0 0 4px #000;
    font-size: 1.1rem;
  `};
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const BottomLink = styled(NavLink)`
  color: ${(p) => p.$color};
  text-decoration: none;
  pointer-events: auto;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;

  ${mediaQueries(50)`
    font-size: 1.1rem;
  `};
`;

const PageNav = ({ variant = "light" }) => {
  const { pathname } = useLocation();
  const color = variant === "dark" ? DarkTheme.text : DarkTheme.body;

  const isAbout = pathname.startsWith("/about");
  const isSkills = pathname.startsWith("/skillsexperience");
  const isProjects = pathname.startsWith("/projects");
  const isCerts = pathname.startsWith("/certifications");

  return (
    <Container aria-label="Page navigation">
      {!isProjects && (
        <SideLink to="/projects" $color={color}> 
          <span>Projects</span>
        </SideLink>
      )}
      {!isCerts && (
        <SideLink to="/certifications" $right $color={color}>
          <span>Certifications</span>
        </SideLink>
      )}
      <BottomBar>
        {!isAbout && (
          <BottomLink to="/about" $color={color}>About</BottomLink>
        )}
        {!isSkills && (
          <BottomLink to="/skillsexperience" $color={color}>
            Skills & Experience
          </BottomLink>
        )}
      </BottomBar>
    </Container>
  );
};

export default PageNav;

