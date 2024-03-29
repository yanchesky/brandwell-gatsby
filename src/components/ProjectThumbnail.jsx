import React from "react";
import styled from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;

  &:hover,
  &.touched {
    > div {
      transform: translateY(0);
      transition: 0.8s cubic-bezier(0.01, 0.75, 0.33, 0.99);
    }
  }
`;

const DescriptionContainer = styled.div`
  bottom: 0;
  transform: translateY(100%);
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  text-align: center;
  padding: 1.25rem;
  transition: 0.6s ease;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > span {
      font-size: 0.875rem;
      margin-right: 0.25rem;

      &:first-letter {
        text-transform: capitalize;
      }

      &:after {
        content: ".";
      }
    }
  }
`;

const ProjectThumbnail = ({ alt, image, categories, producer }) => {
  const { t } = useTranslation();
  const ref = React.useRef(null);
  return (
    <Wrapper
      ref={ref}
      onTouchStart={() => {
        ref?.current.classList.add("touched");
      }}
      onTouchEnd={() => {
        ref?.current.classList.remove("touched");
      }}
    >
      <GatsbyImage
        style={{ width: "100%" }}
        alt={alt}
        image={getImage(image)}
      />
      <DescriptionContainer>
        <h2>{producer}</h2>
        <div>
          {categories.map((category, index) => (
            <span key={index}>{t(category)}</span>
          ))}
        </div>
      </DescriptionContainer>
    </Wrapper>
  );
};

export default ProjectThumbnail;
