import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/azzaro-iconcard.svg'
import office from '../../assets/showroom.png'

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card_map">
        <div className="GameImg">
          <div className="Gfooter">
            <img src={office} className="SmallIcon" />
            <span className="Stars"><svg preserveAspectRatio="xMidYMid meet" viewBox="0 0 50.000000 50.000000" height="50.000000pt" width="50.000000pt" version={1.0} xmlns="http://www.w3.org/2000/svg" className="StarIcon">
                <g stroke="none" fill="#dc2626" transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)">
                  <path d="M210 405 l-33 -85 -83 0 c-45 0 -85 -4 -88 -9 -3 -5 23 -33 59 -62 36 -29 65 -60 65 -68 0 -9 -9 -48 -20 -86 -11 -38 -20 -71 -20 -72 0 -12 35 4 85 37 33 22 67 40 75 40 8 0 42 -18 75 -40 50 -33 85 -49 85 -37 0 1 -9 34 -20 72 -11 38 -20 77 -20 86 0 8 29 39 65 68 36 28 63 56 60 62 -4 5 -44 9 -90 9 l-83 0 -33 85 c-17 47 -35 85 -39 85 -4 0 -22 -38 -40 -85z" />
                </g>
              </svg>
              5/5</span>
            <span className="Descripion">This is Descripion of The Game</span>
          </div>
          <img src={Icon} alt="" className='GameIcon' />
          <span className="Name">Kottarakara</span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card_map {
    width: 250px;
    height: 250px;
    background:#0a233e;
    border-radius:30px;
  }

  .GameIcon {
    transform: translate(-30px,-100px);
    position: absolute;
    width: 100px;
    height: 200px;
    transition: 0.3s;
  }

  .GameImg {
    width: 100%;
    height: 100%;
  }

  .Gfooter {
    width: 100%;
    height: 0%;
    background-color: #dc2626;
    border-radius: 30px;
    transition: all 0.3s;
  }

  .Name {
    transform: translate(10px,200px);
    position: absolute;
    background-color: transparent;
    font-weight: bold;
    font-size: 18px;
    transition: 0.3s;
    color: white;
  }

  .SmallIcon {
    width: 0px;
    height: 0px;
    transform: translate(10px,10px);
    border-radius: 10px;
    background-color: #ff5858;
    transition: 0.2s;
  }

  .Descripion {
    padding: 10px;
    position: absolute;
    transform: translate(0px,20px);
    opacity: 0%;
    color: white;
    font-weight: bold;
    font-size: 15px;
  }

  .StarIcon {
    transform: translate(-0px,25px);
    width: 20px;
    fill: #ebd300;
  }

  .Stars {
    position: absolute;
    color: white;
    font-size: 15px;
    font-weight: bold;
    transform: translate(80px,-70px);
  }

  .GameImg:hover .Descripion {
    opacity: 100%;
  }

  .GameImg:hover .Gfooter {
    width: 100%;
    height: 100%;
  }

  .GameImg:hover .SmallIcon {
    width: 60px;
    height: 60px;
  }

  .GameImg:hover .Name {
    transform: translate(75px,-235px);
  }

  .GameImg:hover .GameIcon {
    transform: translate(100px,-160px);
  }`;

export default Card;
