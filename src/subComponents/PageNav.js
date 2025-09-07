import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { DarkTheme, mediaQueries } from "../components/Themes";

const Container = styled.nav`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 5;
`;

const SideLink = styled(NavLink)`
  position: absolute;
  top: 50%;
  ${(p) =>
    p.$right
      ? "right: 0; transform: translateY(-50%) rotate(90deg);"
      : "left: 0; transform: translateY(-50%) rotate(-90deg);"}
  transform-origin: center;
  color: ${(p) => p.$color};
  text-decoration: none;
  pointer-events: auto;
  font-family: "Karla", sans-serif;
  font-weight: 500;
  font-size: 1.25rem;
  padding: 8px 12px;

  ${mediaQueries(50)`
    text-shadow: 0 0 4px #000;
    font-size: 1.1rem;
    ${(p) =>
      p.$right
        ? "right: 0;"
        : "left: 0;"}
    padding: 6px 10px;
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
  pointer-events: none;
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

