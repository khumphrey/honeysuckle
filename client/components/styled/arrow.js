import Styled from 'styled-components';

export const Arrow = Styled.i`
	position: absolute;
	top: 48vh;
	font-size: 4em;
	color: #939393;
  text-shadow: 1px 0 #494747;
	transition: all .5s;
	&:hover {
		color: #d3d3d3;
	  text-shadow: 0 0 0.5em #fff;
	}
`;

export const LeftArrow = Arrow.extend`
	left: 1vw;
`;

export const RightArrow = Arrow.extend`
	right: 1vw;
`;