import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function YoungRightAnswer({answer}) {
  const clickButton=()=>{

  }
  return (
    <div>
      {answer === "2" ? <h1>😃정답입니다!</h1> : <div><h1>😲오답입니다! 정답은 2번(토큰) 입니다!</h1></div>}
      <img src="token.png" style={styles.img}></img>
      <h2><label style={styles.hightlight}>버스 토큰</label>&nbsp;👉주화 형태로 만든 대체 승차권</h2>
      <br/>
      <button onClick={clickButton} style={Object.assign({}, styles.button, true && styles.buttonEnabled)}>확인</button>
    </div>
  )
}

function OldRightAnswer({answer}) {
  const clickButton=()=>{

  }
  return (
    <div>
      {answer === "4" ? <h1>😃정답입니다!</h1> : <div><h1>😲오답입니다! 정답은 '저메추' 입니다!</h1></div>}
      <h2>저녁을 먹고 싶은데 뭘 먹을지 선택하기 어려울 때 쓰는 말로,<br />'<label style={styles.hightlight}>저녁 메뉴 추천 좀</label>' 의 줄임말</h2>
      <h3>📍유사어 : 점메추👉점심 메뉴 추천</h3>
      <button onClick={clickButton} style={Object.assign({}, styles.button, true && styles.buttonEnabled)}>확인</button>
    </div>
  )
}
function YoungQuiz() {
  const [answer, setAnswer] = useState(0);
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [disable, checkDisable] = useState(false);
  const checkAnswer=()=>{
    if (disable) {
      setChecked(true);
      setVisible(false);
    }
  }
  const handleRadioButton=(e)=>{
    if (e.target.value != "0") {
    setAnswer(e.target.value);
    checkDisable(true);
    }
  }
  return (
    <div>
      {visible ? <div><h1>퀴즈를 풀어보세요</h1>
      <h1>다음 중 물건과 그의 이름이 알맞지 않은 것은?</h1>
          <label><input type="radio" checked={answer==="1"} value="1" onChange={handleRadioButton}/><img src="disk.png" style={styles.img}></img>
          <div>플로피 디스크</div></label>
          <label><input type="radio" checked={answer==="2"} value="2" onChange={handleRadioButton}/><img src="token.png" style={styles.img}></img>
          <div>엽전</div></label>
          <label><input type="radio" checked={answer==="3"} value="3" onChange={handleRadioButton}/><img src="bbibbi.png" style={styles.img}></img>
          <div>삐삐</div></label>
          <label><input type="radio" checked={answer==="4"} value="4" onChange={handleRadioButton}/><img src="tape.png" style={styles.img}></img>
          <div>카세트 테이프</div></label>
          <label><input type="radio" checked={answer==="5"} value="5" onChange={handleRadioButton}/><img src="roll.png" style={styles.img}></img>
          <div>굴렁쇠</div></label>
      <br /><br />
      <button type="submit" onClick={checkAnswer} style={Object.assign({}, styles.button, disable && styles.buttonEnabled)}>선택</button></div>
      : <YoungRightAnswer answer={answer}/>}
    </div>
  )
}
function OldQuiz() {
  const [answer, setAnswer] = useState("0");
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(true);
  const [disable, checkDisable] = useState(false);
  const checkAnswer=()=>{
    if (disable) {
      setChecked(true);
      setVisible(false);
    }
  }
  const handleRadioButton=(e)=>{
    if (e.target.value != "0") {
      setAnswer(e.target.value);
      checkDisable(true);
    }
  }
  return (
    <div>
      {visible ? <div><h1>퀴즈를 풀어보세요</h1>
        <h1>다음 신조어 중 의미가 올바르지 않은 것은?</h1>
      <label><input type="radio" checked={answer==="1"} value="1" onChange={handleRadioButton}/>알잘딱깔센-알아서 잘 딱 깔끔하고 센스있게</label>
      <br /><br />
      <label><input type="radio" checked={answer==="2"} value="2" onChange={handleRadioButton}/>웃안웃-웃긴데 안 웃김</label>
      <br /><br />
      <label><input type="radio" checked={answer==="3"} value="3" onChange={handleRadioButton}/>힘순찐-힘을 숨기고 있는 찐따</label>
      <br /><br />
      <label><input type="radio" checked={answer==="4"} value="4" onChange={handleRadioButton}/>저메추-저녁은 메추리알장조림</label>
      <br /><br />
      <label><input type="radio" checked={answer==="5"} value="5" onChange={handleRadioButton}/
      >억텐-억지 텐션</label>
      <br /><br />
      <button type="submit" onClick={checkAnswer} style={Object.assign({}, styles.button, disable && styles.buttonEnabled)}>선택</button>
      </div>
      : <OldRightAnswer answer={answer}/>}
    </div>
  )
}
function Quiz({age}) {
  return (
    <div>
    {age<=30 ? <YoungQuiz /> : <OldQuiz />}
    </div>
  )
}

function App() {
  const [visible, setVisible] = useState(true);
  const [age, setAge] = useState(0); /*true: 젊은 세대, false:옛 세대 */
  const [disable, checkDisable] = useState(false);
  const checkQuiz=()=>{
    if (disable) {
      setVisible(false);
      setAge(Number(document.getElementById("age").value));
    }
  }
  const checkAge=(e)=>{
    const length = e.target.value.length;
    {length>0 ? checkDisable(true) : checkDisable(false)}
  }
  return (
    <div className="App">
    {visible ? <div>
    <h1>🔮&nbsp;당신의 나이는?</h1>
    <input id="age" type="text" size="10" onChange={checkAge} style={styles.input}></input>
    <button type="submit" onClick={checkQuiz} style={Object.assign({}, styles.button, disable && styles.buttonEnabled)}>선택</button></div> : <Quiz age={age}/>}
    </div>
  )
}

const styles = {
  input: {
    width: 200,
    outline: 'none',
    fontSize: 20,
    padding: 10,
    border: 'none',
    backgroundColor: '#ddd',
    marginTop: 10,
    marginRight: 10
  },
  hightlight: {
    backgroundColor: '#ffc107'
  },
  button: {
    width: 180,
    height: 50,
    border: 'none',
    borderRadius: 4,
    fontSize: 20,
    cursor: 'pointer',
    transition: '.25s all'
  },
  buttonEnabled: {
    backgroundColor: '#ffc107',
    width: 220
  },
  img: {
    width: 200,
    height: 150
  }
}
export default App;
