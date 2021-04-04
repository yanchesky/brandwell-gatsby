import React from "react";
import styled from "styled-components";

import { media } from "src/helpers/breakpoints";

const ProductSection = styled.div`
  font-size: 18px;
  > p:first-of-type {
    font-weight: bold;
  }
  padding-bottom: 1rem;

  ${media.tablet`
    padding-bottom: 4rem;
  `}
`;

const Categories = styled.div`
  font-size: 14px;
  margin-bottom: 2rem;
  > p {
    margin-bottom: 0.25rem;
  }

  ol > li {
    color: #c4c4c4;
    font-size: 14px;
    display: inline-block;

    > p {
      &:after {
        content: "|";
        margin-left: 0.25rem;
        margin-right: 0.25rem;
      }
    }

    &:last-of-type > p {
      &:after {
        content: "";
      }
    }

    & + li {
    }
  }

  ${media.tablet`
    font-size: 18px;
   
     ol > li {
        font-size: 18px;
        line-height: 21px;
      }
  `}
`;

const ProjectDetailsElement = ({ projectDetails }) => {
  const { product, producer, categories, title } = projectDetails;
  return (
    <div className="project-details-section">
      <ProductSection>
        <p>{producer}</p>
        <p>{product}</p>
      </ProductSection>
      <Categories>
        <p>Zakres prac:</p>
        <ol>
          {categories?.map((el, index) => (
            <li key={index}>
              <p>{el}</p>
            </li>
          ))}
        </ol>
      </Categories>
    </div>
  );
};

export default ProjectDetailsElement;
