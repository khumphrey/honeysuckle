import Styled from 'styled-components';

export const Carousel = Styled.section`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CarouselImageContainer = Styled.div`

`

export const CarouselImage = Styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  min-width: 100vw;
  transform: ${props => props.transform};
  opacity: 1;
  transition: opacity 1s;
  &.hidden{
    opacity: 0;
  }
`;

export const CarouselCenterContainer = Styled.div`
  position: absolute;
  width: 100vw;
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1vmax;
`;

export const CarouselText = Styled.div`
  color: #f0f0f0;
  text-shadow: 0 2px 0 rgba(25, 25, 25, 0.4);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1%;
  margin: 1%;
  border-radius: 5%/22%;
`;

export const CarouselTextH1 = Styled.h1`
  font-size: 3vw;
`

export const Arrow = Styled.i`
  font-size: 7vmax;
  color: #939393;
  text-shadow: 1px 0 #494747;
  transition: all .5s;
  &:hover {
    color: #d3d3d3;
    text-shadow: 0 0 0.5em #fff;
  }
`;

export const CircleContainer = Styled.div`
  position: absolute;
  bottom: 2vh;
  display: flex;
`;

export const Circle = Styled.i`
  font-size: 2.5vmax;
  color: #939393;
  text-shadow: 1px 0 #494747;
  padding: 2.5%;
  transition: all .5s;
  &:hover {
    color: #d3d3d3;
    text-shadow: 0 0 0.5em #fff;
  }
  &::before {
    content: "\f10c";
  }
  &.active::before {
    content: "\f111"
  }
`;