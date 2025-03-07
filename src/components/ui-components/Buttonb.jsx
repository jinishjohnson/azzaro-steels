import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
  return (
    <StyledWrapper>
      <button className="button">
        <svg
          className="svgIcon"
          viewBox="0 0 24 24"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#ffffff"
            d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
          />
        </svg>
        {props.title}
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    width: 140px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    background-color: #dc2626;
    border-radius: 20px;
    color:#ffffff;
    font-weight: 600;
    border: none;
    position: relative;
    cursor: pointer;
    transition-duration: .2s;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
    padding-left: 8px;  
    transition-duration: .5s;
  }

  .svgIcon {
    height: 25px;
    transition-duration: 1.5s;
    }
    
    @keyframes ringing {
    0% {
      transform: rotate(0deg);
    }
    5% {
      transform: rotate(25deg);
    }
    10% {
      transform: rotate(-20deg);
    }
    15% {
      transform: rotate(15deg);
      }
      20% {
        transform: rotate(-10deg);
        }
    25% {
      transform: rotate(5deg);
    }
    30% {
      transform: rotate(0deg);
      }
      100% {
        transform: rotate(0deg);
        }
        }
        
        .button:hover {
          background-color:#dc2626;
          box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.116);
          border:3px solid #ffffff;
          transition-duration: .5s;
          }
          
          .button:active {
            transform: scale(0.97);
            transition-duration: .2s;
            }
            
            .button:hover .svgIcon {
              animation: ringing 2s ease-in-out infinite;
  }`;

export default Button;
