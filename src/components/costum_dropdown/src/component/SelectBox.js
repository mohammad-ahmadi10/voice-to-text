import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import useLocalStorage from '../costumHooks/useLocalStorage';

import {
    GlobalStyle,
    Container,
    OptContainer,
    Option,
    Selected,
    ArrowContainer,
    Arrow
} from "./selectBoxStyle";


const SelectBox = (props) => {
    const {width, backgroundColor, height, fontSize, color, hoverBackgroundColor, 
           hoverColor, getValue, itemsList, arrowWidth, arrowHeight, selectedHeight} = props;

    const selectedRef= useRef(null);
    const optContainer = useRef(null);
    const arrowRef1 = useRef(null);
    const arrowRef2 = useRef(null);

    const [select, setSelect] = useState(false);
    const [selectedValue, setSelectedValue] = useLocalStorage( "selectItem" , [itemsList instanceof Array? itemsList[0][0]: "" , itemsList instanceof Array? itemsList[0][1]: ""]);
    
    const [optLabel, setOptLabel] = useState(null);
    
    const handleSelectedClick = e =>{
        e.preventDefault();
        setSelect(select => !select);
    }
    
    const onOptionClick = e =>{
        let lbl = e.target.children[0];
        setOptLabel(lbl);
    }

    const getSelectedValue = useCallback(
        
        () =>{
            if(optLabel === null) return
            let lbl_values = [optLabel.id, optLabel.innerHTML];
            setSelectedValue(lbl_values)
        }
        , [optLabel, setSelectedValue]);

    useEffect(() => {getSelectedValue()}, [optLabel, getSelectedValue]);
    useLayoutEffect(() => {
      if(select){
        optContainer.current.classList.add('select');
        arrowRef1.current.classList.add('arrow_down');
        arrowRef2.current.classList.add('arrow_down');  
        return
      }
      optContainer.current.classList.remove('select');
      arrowRef1.current.classList.remove('arrow_down');
      arrowRef2.current.classList.remove('arrow_down');

    },[select]);
    

    useEffect(() => {       
        if(select){
            document.addEventListener("click", e => {
                if(e.target.id !== "selected" && select)
                    setSelect(false);
            })
        }
    }, [select]);
    useEffect(() => {
        if(getValue instanceof Function)
            getValue(selectedValue)
    },[ getValue, selectedValue ])
    

    const getOption = (value, text) => {
       return   <Option onClick={onOptionClick} 
                        key={value}

                        hoverBackgroundColor={hoverBackgroundColor}
                        hoverColor={hoverColor}
                        fontSize={fontSize} color={color}
                >
                    <label htmlFor={value} id={value} value={value} >{text}</label>
                </Option>
    }
    const getArrow = (left, ref) =>{
        return <Arrow ref={ref}  arrowHeight={arrowHeight} arrowWidth={arrowWidth}   left={left} className="arrow_up"></Arrow>
    }

    
    return (
        <Container>
            <GlobalStyle/>
            <OptContainer ref={optContainer}   
                          width={width} 
                          backgroundColor={backgroundColor} 
                          height={height}  
            > 
                {   itemsList instanceof Array ? itemsList.map(item => (
                        getOption(item[0], item[1])
                )) : 
                    <></>
                }
               
            </OptContainer>
            <Selected onClick={handleSelectedClick}  id="selected" ref={selectedRef}
                      width={width}
                      backgroundColor={backgroundColor}
                      color={color} fontSize={fontSize}
                      selectedHeight={selectedHeight}
            >
                    <label name={selectedValue[0] ? selectedValue[0]: ""} 
                           value={selectedValue[0] ? selectedValue[0]: ""}
                    >{selectedValue[1] ? selectedValue[1]: ""}</label>
                    <ArrowContainer>
                        {getArrow(true,arrowRef1)}
                        {getArrow(false,arrowRef2)}
                    </ArrowContainer>
            </Selected>
        </Container>
        
    )
}




export default SelectBox
