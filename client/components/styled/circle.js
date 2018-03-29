import Styled from 'styled-components';

export const CircleContainer = Styled.div`
	position: absolute;
	bottom: 2vh;
	display: flex;
`;

export const Circle = Styled.i`
	font-size: 1.5em;
	color: #939393;
  text-shadow: 1px 0 #494747;
	padding: 2.5%;
	transition: all .5s;
	&:hover {
		color: #d3d3d3;
	  text-shadow: 0 0 0.5em #fff;
	}
	&.active::before {
		content: "\f111";
	}
	&::before {
		content: "\f10c";
		transition: content 1s;
	}
`;