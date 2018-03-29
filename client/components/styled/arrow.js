import Styled from 'styled-components';

export const Arrow = Styled.div`
	position: absolute;
	top: 50vh;
	color: grey;
	font-size: 2em;
	transition: color .5s;
	&:hover {
		color: black;
	}
`;

export const LeftArrow = Arrow.extend`
	left: 1vw;
`;

export const RightArrow = Arrow.extend`
	right: 1vw;
`;