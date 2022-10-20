import styled from 'styled-components';

function Button(props) {
    return (
        <ButtonContainer
            onClick={props.onClick}
            height={props.height}
            width={props.width}
            selfAlign={props.selfAlign}
            selfJustify={props.selfJustify}
        >
            {props.input}
        </ButtonContainer>
    );
}

const ButtonContainer = styled.button.attrs((props) => ({
    height: props.height || '60px',
    width: props.width || '200px',
    selfAlign: props.selfAlign || 'inherit',
    selfJustify: props.selfJustify || 'inherit',
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ef293d;
    border-radius: 50px;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    min-width: 120px;
    border: none;
    padding: 0;
    align-self: ${(props) => props.selfAlign};
    justify-self: ${(props) => props.selfJustify};
    margin-top: 1rem;
    cursor: pointer;
    color: white;
    font-size: 1.6rem;
`;
// const Btn = styled.button`
//     border: none;
//     color: white;
//     background-color: #ef293d;
//     width: 100%;
//     height: 100%;
//     border-radius: 50px;
//     font-size: 25px;
//     font-weight: 700;
//     font-family: 'Manrope', sans-serif;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     padding: 0 0;
//     font-size: 1.6rem;
//     cursor: pointer;
// `;

export default Button;
