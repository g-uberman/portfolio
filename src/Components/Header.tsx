import { StyledHeader } from "./Styles/Header.styles";

export const Header = () => {
  return (
    <StyledHeader>
      <h1>Grzegorz Uberman</h1>
      <h4>Junior Front-End Developer Portfolio</h4>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Graphic Design</li>
      </ul>
      <div><a href="https://github.com/g-uberman" target="blank">github.com/g-uberman</a></div>
      <div><a href="https://www.linkedin.com/in/grzegorz-uberman/" target="blank">linkedin.com/in/grzegorz-uberman</a></div>
    </StyledHeader>
  );
};
