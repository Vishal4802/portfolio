import React from "react";
import { FaLinkedin } from "react-icons/fa";
import styled from "@emotion/styled";

const Social = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);

  ul {
    display: block;
  }

  .item + .item {
    margin-top: 1rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    &:hover {
      color: rgb(57, 134, 250);
    }
  }

  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      list-style: none;
    }

    a {
      font-size: 2.5rem;
      color: #151418;
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }
`;
function FixSocialIcon() {
  return (
    <Social>
      <ul>
        <li className="item">
          <a
            href="https://www.linkedin.com/in/vishal-sharma-a0724a197/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </Social>
  );
}

export default FixSocialIcon;
