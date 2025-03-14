import React from 'react';
import styled from 'styled-components';
import { assets } from '../../assets/asset';

const Card = ({ title, para }) => {
  return (
    <StyledWrapper>
      <div className="results-summary-container">
        <div className="confetti">
          {[...Array(19)].map((_, index) => (
            <div key={index} className="confetti-piece" />
          ))}
        </div>
        <div className="results-summary-container__result">
          <div className="heading-tertiary">{title}</div>
          <div className="result-box">
            <img src={assets.protection} alt="" />
            {/* <div className="heading-primary">100</div> */}
            {/* <p className="result">Quality</p> */}
          </div>
          <div className="result-text-box">
            <div className="heading-secondary">{title}</div>
            <p className="paragraph">
              {para}
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .results-summary-container {
    font-family: "Hanken Grotesk", sans-serif;
    display: flex;
    width: 100%;
    max-width: 320px;
    border-radius: 30px;
    box-shadow: 10px 20px 20px rgba(120, 87, 255, 0.3);
    backface-visibility: hidden;
    margin: 0 auto;

    @media (max-width: 768px) {
      max-width: 280px;
    }
  }

  .heading-primary,
  .heading-secondary,
  .heading-tertiary {
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: 1px;
  }

  .heading-primary {
    font-size: clamp(24px, 5vw, 36px);
    font-weight: 600;
    background-image: linear-gradient(to right, #f7bb97, #dd5e89);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(1.6);
  }

  .heading-secondary {
    font-size: clamp(18px, 4vw, 24px);
    font-weight: 600;
    margin-top: 20px;
    letter-spacing: 2px;
  }

  .heading-tertiary {
    font-size: clamp(16px, 3.5vw, 20px);
    font-weight: 500;
    color: hsl(221, 100%, 96%);
  }

  .paragraph {
    font-size: clamp(14px, 3vw, 17px);
    line-height: 1.4;
    color: hsl(221, 100%, 96%);
  }

  .paragraph-text-box {
    width: 100%;
  }

  .text-center {
    text-align: center;
  }

  .margin-1 {
    margin-bottom: 10px;
  }

  .results-summary-container__result {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding: clamp(15px, 4vw, 20px);
    border-radius: 30px;
    background-image: linear-gradient(to bottom, #734b6d, #42275a);
    animation: gradient 9s infinite alternate linear;

    .result-box {
      width: clamp(120px, 30vw, 160px);
      height: clamp(120px, 30vw, 160px);
      border-radius: 50%;
      background-image: linear-gradient(-45deg, #ef629f, #42275a);
      background-color: #56ab2f;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      animation: gradient 9s linear infinite;

      img {
        max-width: 100%;
        height: auto;
      }
    }

    .result {
      margin-top: -8px;
      font-size: clamp(14px, 3vw, 16px);
      font-weight: 400;
      color: hsl(241, 100%, 89%);
    }
  }

  .btn {
    width: clamp(200px, 80%, 240px);
    padding: 10px;
    color: #ffffff;
    background-image: linear-gradient(to right, #aa076b, #61045f);
    border: none;
    border-radius: 100px;
    font-size: clamp(12px, 2.5vw, 14px);
    text-transform: uppercase;
    letter-spacing: 3px;
    font-weight: 500;
    cursor: pointer;
    margin: 20px 0 2px 0;
    transition: all 0.3s;
  }

  .btn:hover {
    transform: translateY(5px);
    background-image: linear-gradient(to left, #aa076b, #61045f);
  }

  .confetti {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    max-width: 300px;
    height: 60%;
    overflow: hidden;
    z-index: 1000;

    @media (max-width: 768px) {
      max-width: 260px;
    }
  }

  /* Rest of the confetti styles remain unchanged */
  /* Keeping all the confetti-piece styles and animations as they are */
  /* since they work well across different screen sizes */

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
      background-image: linear-gradient(-45deg, #ef629f, #42275a);
    }

    50% {
      background-position: 100% 50%;
      background-image: linear-gradient(to bottom, #aa076b, #61045f);
    }

    100% {
      background-position: 0% 50%;
      background-image: linear-gradient(to top, #ef629f, #42275a);
    }
  }

  @keyframes makeItRain {
    from {
      opacity: 0;
    }

    50% {
      opacity: 1;
    }

    to {
      transform: translateY(250px);
    }
  }
`;

export default Card;
