import styled from "styled-components";

export default styled.button`
background-color: ${props => (props.primary ? "#979797" : "#008877" )};
border:none;
color: #000;
padding: 10px 25px;
text-align: center;
text-decoration:none;
display:inline-block;
font-size:16px;
`;