import React, { useCallback, useState } from 'react';
import './App.css';
import SelectBox from './component/SelectBox';



function _Example() {
  const [test, setTest] = useState([]);
  const itemList = [["en", "English"], ["de", "German"]];

  console.log(test);
  const getValue = useCallback(value => setTest(value), [setTest]);
  
  return (
        <SelectBox
          backgroundColor="blue"   
          fontSize="55px"  
          color="green"   
          hoverBackgroundColor="red" 
          hoverColor="white"
          getValue={getValue}
          itemsList={itemList}
          
        />
  );
}

export default _Example;
