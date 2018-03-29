import Styled from 'styled-components';

export const Carousel = Styled.div`
  position: relative;
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const CarouselText = Styled.div`
	font-size: 1.8vw;
	position: absolute;
  top: 45vh;
  color: #fff;
  text-shadow: 2px 2px #252525;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1%;
  margin: 1%;
  border-radius: 30px;
`;

export const CarouselImageContainer = Styled.div`
  display: block;
  position: absolute;
  min-width: 100vw;
  height: 100vh;
  margin: auto;
`;

export const CarouselImage = Styled.img`
	position: absolute;
	top: 0px;
	left: 0px;
  height: 100vh;
  opacity: 1;
  transition: opacity 1s;
  &.hidden{
  	  opacity: 0;
  }
`;