//Styles
import styled from "@emotion/styled";

export default function Backdrop(props) {
    return props.show ? (
        <BackdropStyled onClick={props.clicked}></BackdropStyled>
    ) : null;
}

const BackdropStyled = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;
