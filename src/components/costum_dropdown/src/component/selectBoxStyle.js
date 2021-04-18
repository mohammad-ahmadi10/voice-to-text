import styled, {createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
    *, *::after, *::before{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;


const Container = styled.div`
    z-index: 1;
    display: flex;
    position: absolute;
    flex-direction: column-reverse;
    width: fit-content;
    height: fit-content;
    padding: 5px;
    align-items: flex-start;
`;

const OptContainer = styled.div`
        width: ${({width}) => typeof width === "string"? width : "200px"};
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        background-color: ${({backgroundColor}) => typeof backgroundColor === "string"? backgroundColor : "rgb(0, 119, 0)"};
        margin: 10px;
        margin-top: 2px;
        margin-left: 0;
        visibility: hidden;
        opacity: 0;
        height: 0;
        transition: 0.6s ease-in-out opacity, 0.2s ease-out visibility, 0.5s ease-out height;

        
        &.select{
        visibility: visible;
        opacity: 1;
        overflow: hidden;
        height: ${({height, children}) => typeof height === "string"? height : children instanceof Array? `${children.length * 43}px` : "50px"};
        }
`;


const Option = styled.div`
     padding: 10px;
     margin: 1px;
     border-radius: 5px;
     cursor: pointer;

    & label{
        font-size: ${({fontSize}) => typeof fontSize === "string"? fontSize : "18px"};
        pointer-events: none;
        color: ${({color}) => color? color : "white"};
    }

    & input{
        display: none;
    }

    :hover{
        background-color: ${({hoverBackgroundColor}) => typeof hoverBackgroundColor === "string"? hoverBackgroundColor : "whitesmoke"};
    }
    :hover label{
        color: ${({hoverColor}) => typeof hoverColor === "string"? hoverColor : "black"};
    }
`;

const Selected = styled.div`
    display: flex;
    justify-content:  space-between;
    align-items:  center;
    width: ${({width}) => typeof width === "string"? width : "200px"};
    padding: 10px;
    border-radius: 2px;
    cursor: pointer;
    background-color: ${({backgroundColor}) => typeof backgroundColor === "string"? backgroundColor : " rgb(0, 119, 0)"};
    height: ${({selectedHeight}) => typeof selectedHeight === "string"? selectedHeight : "50px"};

    border-radius: 5px;
    & label{
        color: ${({color}) => typeof color === "string"? color : "white"};
        font-size: ${({fontSize}) => typeof fontSize === "string"? fontSize : "18px"};
        pointer-events: none;
    }

`;

const ArrowContainer = styled.div`
    justify-content:space-between;
    display: flex;
    flex-direction:row;
    width: 10.5px;
`;


const Arrow = styled.div`
    background-color: white;
    height: ${({arrowHeight}) => typeof arrowHeight === "string"? arrowHeight : "15px"};
    width: ${({arrowWidth}) => typeof arrowWidth === "string"? arrowWidth : "3.2px"};
    border-radius: 35%;
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    transition: 0.3s ease-in-out transform;   

    &.arrow_up{
        transform: ${({left}) => left? "rotateZ(30deg)" : "rotateZ(-30deg)"};
    }
    &.arrow_down{
        transform: ${({left}) => left? "rotateZ(150deg)" : "rotateZ(-150deg)"}
    }
`;


export {
    GlobalStyle,
    Container,
    OptContainer,
    Option,
    Selected,
    ArrowContainer,
    Arrow
}