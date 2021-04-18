import './App.css';
import React, {useState, useEffect, useCallback, useRef} from 'react';

import {AiOutlineCopy} from 'react-icons/ai';
import {RiCloseLine} from 'react-icons/ri';
import {IconContext} from 'react-icons';
import {GrSave} from 'react-icons/gr';
import {RiStopFill} from 'react-icons/ri'
import {GiMicrophone} from 'react-icons/gi';
import ReactTooltip from 'react-tooltip';
import {useLoading, Bars} from '@agney/react-loading';
import SelectBox from './components/costum_dropdown/src/component/SelectBox';

const SpeechRecognition = window.speechRecognition ||window.webkitSpeechRecognition;
const recognition = SpeechRecognition && new SpeechRecognition();
const utter = new SpeechSynthesisUtterance();

recognition.interimResults = true;
recognition.continuous = false;



const itemsList = [["en-US", "English"],["ar-SA","Arabic"], ["de-DE", "German"], ["fr-FR", "French"], ["es-ES", "Spanish"], ["tr-TR", "Turkish"]]


const App = () => {
  const [isUserCaputure,
    setIsUserCapture] = useState(false);
  const [sentence,
    setSentence] = useState();
  const [sentences,
    setSentences] = useState([]);
  const [copyRemoveFlag,
    setCopyRemoveFlag] = useState({isClick: false, target: null});
  const [lang, setLang] = useState([]);
  const [changeValue, setChangeValue] = useState({id: "", text: ""})
  const [ChangeIndex, setChangeIndex] = useState(-1);
  const [txtChange, setTxtChange] = useState(false);

  const popUpRef = useRef(null);
  const getValue = useCallback( value => setLang(value), [setLang])
    // loading or listening icon
  const {containerProps, indicatorEl} = useLoading({loading: true, indicator: <Bars className="ball"/>})


  useEffect(() => {
    if(txtChange){
      popUpRef.current.classList.add("popup_fadein")
    }
    else {
      popUpRef.current.classList.remove("popup_fadein")
    }
  },[txtChange])

  useEffect(() => {
    recognition.lang = lang[0];
    utter.lang = lang[0];    
  }, [lang])
  

  useEffect(() => {
    handleListening();
  }, [isUserCaputure])

  useEffect(() => {
    if (copyRemoveFlag.isClick) {
      let node = copyRemoveFlag.target.parentElement.parentElement;
      let p = node.children[1];
      if (copyRemoveFlag.target.id === "remove") {
        const newList = sentences.filter(sentence => sentence.props.id !== p.id)
        setSentences(newList);
      } else if (copyRemoveFlag.target.id === "copy") {
        changeBackground(node);
      }

      setCopyRemoveFlag({isClick: false, target: null})

    }
  }, [copyRemoveFlag.isClick, copyRemoveFlag.target, sentences, setSentences])

  const changeBackground = async(node) => {
    let p = node.children[1];
    node.style.backgroundColor = "green";
    await navigator
      .clipboard
      .writeText(p.innerHTML);
    setInterval(() => {
      node.style.backgroundColor = "whitesmoke";
    }, 1000)
  }

  let counter = 0;
  const handleReadSentence = e =>{
      e.preventDefault();
      utter.text= e.target.innerHTML;
      if(e.target.tagName === "P"){
        window.speechSynthesis.speak(utter);
      }
      else if(e.target.tagName === "DIV"){
        counter++;
        if(counter === 2){
          setChangeValue({id:e.target.children[1].innerHTML, text:e.target.children[1].innerHTML})
          setTxtChange(true);
        }
        setTimeout(() => counter = 0, 200)
      }
  }

  const handleListening = () => {
    recognition.onend = () => {
      recognition.stop();
      setIsUserCapture(false);
    }
    recognition.onresult = function (e) {
      let text = e.results[0][0].transcript;
      let p = React.createElement('p', {
        id: text,
        label: text
      }, text);

      setSentence(p);
    }
    recognition.onerror = function (event) {
      console.log('Error occurred in recognition: ' + event.error);
    }
  }


  const handleStartStopBtn = e => {
    e.preventDefault();
    setIsUserCapture(prevState => !prevState);
    if (e.target.name === "stop") {
      recognition.stop();
    } else if (e.target.name === "start") {
      recognition.start();
      setSentence(null);
    }
  }
  const handleSaveBtn = e => {
    e.preventDefault();
    setIsUserCapture(false);
    if (sentence && sentence.props.children.length > 0) 
      setSentences(sentences => [
        ...sentences,
        sentence
      ])
    setSentence(null);
  }

  const getSaveContainer = (sentence, id) => {
    return <div className="saved_txt" 
                key={id} onClick={handleReadSentence} 
                id={`cont${id}`}
                data-tip="Press on the Text to hear it or double click to edit "
            >
            <ReactTooltip effect="float" delayShow={500} type="info" />
              {sentence}
            <div className="icon_container">
              <IconContext.Provider value={{
                className: "prev_icon"
              }}>
                <AiOutlineCopy id="copy" onClick={handleCopy}/>
                <RiCloseLine id="remove" onClick={handleRemove}/>
              </IconContext.Provider>
            </div>
    </div>
  }

  const handleCopy = e => {
    setCopyRemoveFlag({isClick: true, target: e.target})
  }
  const handleRemove = e => {
   
    setCopyRemoveFlag({isClick: true, target: e.target})
  }


  const onChangeBtnClick = e =>{
    e.preventDefault();
    if(e.target.value === "CHANGE" && changeValue.text !== ""){
        let neuSentences =  sentences.filter((sentence, index) => {
                            return  sentence.props.id === changeValue.id? setChangeIndex(index) :  sentence
                            })
        
        let p = React.createElement('p', {
                        id: changeValue.text,
                      }, changeValue.text);
        neuSentences.splice(ChangeIndex, 0, p)
        setSentences(neuSentences)
        setTxtChange(false)
    }else if(e.target.value === "CANCEL"){
        setTxtChange(false)
    }
    
  }

  const onChangeValue = e =>{
    setChangeValue(prevState => ({id: prevState.id, text: e.target.value}))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="speechContainer box">
          <div className="lang_continer">
            <SelectBox
              width="100px"
              selectedHeight="30px"
              fontSize="16px"
              arroWidth="5px"
              arrowHeight="13px"
              backgroundColor="rgb(2,0,36)"
              getValue={getValue}
              itemsList={itemsList}

            />
          </div>

          <h4>Press the button below to capture your speech</h4>
          <div className="bttn_container">
            <button
              type="button"
              name={isUserCaputure
              ? "stop"
              : "start"}
              onClick={handleStartStopBtn}>
              <IconContext.Provider
                value={{
                color: isUserCaputure
                  ? "red"
                  : "black",
                size: 35,
                boxShadow: "none"
              }}>
                {isUserCaputure
                  ? <div className="sp_st_container"><RiStopFill/>
                      STOP</div>
                  : <div className="sp_st_container"><GiMicrophone/>
                    START</div>
                }
              </IconContext.Provider>
            </button>
            <button
              onClick={handleSaveBtn}
              style={{
              backgroundColor: isUserCaputure
                ? "#f6cf50"
                : "#d4af37",
              cursor: isUserCaputure
                ? "default"
                : "pointer",
              pointerEvents: isUserCaputure
                ? "none"
                : "visible"
            }}>
              <IconContext.Provider
                value={{
                className: "btn_sv_icon"
              }}>
                <GrSave/>
              </IconContext.Provider>
            </button>

            {isUserCaputure
              ? <section {...containerProps}>
                  {indicatorEl}
                </section>
              : null
            }
          </div>

          <div className="conv_text">
            {sentence}
          </div>
        </div>
        <div className="textContainer box">
          <div className="header">
            <p>Saved notes</p>
          </div>
          {sentences && sentences.map((sentence, index) => {
            return getSaveContainer(sentence, index)
          })
          }
        </div>
      </div>

       {/* Popup Section */}
       <section ref={popUpRef} className="popupContainer">
            <div className="popupinnerContainer">
                <textarea  type="text" value={changeValue.text} onChange={onChangeValue}/>
                <div className="popup_btn_container">
                  <input type="button" value="CANCEL" onClick={onChangeBtnClick}
                  />
                  <input type="button" value="CHANGE" onClick={onChangeBtnClick}
                          
                  />
                </div>
            </div>
        </section>
        {/* Ende Popup Section */}
    </div>
  );
}

export default App;
