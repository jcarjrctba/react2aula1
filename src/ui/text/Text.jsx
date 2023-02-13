import styled, { css } from "styled-components";

const textCss = css`
  color: ${(props) => props.color || "#fff"};
  font-weight: ${(props) => (props.bold ? "900" : "")};
  ${(props) => (props.size === "small" ? "font-size: 12px;" : "")}
  ${(props) => (props.textdecor === "none" ? "text-decoration: none;" : "")}
`;

export const Text = styled.div`
  ${textCss}
`;

export const TextLink = styled.a`
  ${textCss};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
