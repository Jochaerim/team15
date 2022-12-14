import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function YoungRightAnswer({answer}) {
  const clickButton=()=>{
    window.location.href="index.html";
  }
  return (
    <div>
      {answer === "2" ? <h3>πμ λ΅μλλ€!</h3> : <div><h3>π²μ€λ΅μλλ€! μ λ΅μ 2λ²(ν ν°) μλλ€!</h3></div>}
      <img src="token.png" style={styles.img}></img>
      <h3><label style={styles.hightlight}>λ²μ€ ν ν°</label>&nbsp;πμ£Όν ννλ‘ λ§λ  λμ²΄ μΉμ°¨κΆ</h3>
      <br/>
      <button onClick={clickButton} style={Object.assign({}, styles.button, true && styles.buttonEnabled)}>νμΈ</button>
    </div>
  )
}

function OldRightAnswer({answer}) {
  const clickButton=()=>{
    window.location.href="index.html";
  }
  return (
    <div>
      {answer === "4" ? <h3>πμ λ΅μλλ€!</h3> : <div><h3>π²μ€λ΅μλλ€! μ λ΅μ 'μ λ©μΆ' μλλ€!</h3></div>}
      <h3>μ λμ λ¨Ήκ³  μΆμλ° λ­ λ¨Ήμμ§ μ ννκΈ° μ΄λ €μΈ λ μ°λ λ§λ‘,<br />'<label style={styles.hightlight}>μ λ λ©λ΄ μΆμ² μ’</label>' μ μ€μλ§</h3>
      <h4>πμ μ¬μ΄ : μ λ©μΆπμ μ¬ λ©λ΄ μΆμ²</h4>
      <button onClick={clickButton} style={Object.assign({}, styles.button, true && styles.buttonEnabled)}>νμΈ</button>
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
      {visible ? <div><h3>ν΄μ¦λ₯Ό νμ΄λ³΄μΈμ</h3>
      <h3>λ€μ μ€ λ¬Όκ±΄κ³Ό κ·Έμ μ΄λ¦μ΄ μλ§μ§ μμ κ²μ?</h3>
          <label><input type="radio" checked={answer==="1"} value="1" onChange={handleRadioButton}/><img src="disk.png" style={styles.img}></img>
          <div>νλ‘νΌ λμ€ν¬</div></label>
          <label><input type="radio" checked={answer==="2"} value="2" onChange={handleRadioButton}/><img src="token.png" style={styles.img}></img>
          <div>μ½μ </div></label>
          <label><input type="radio" checked={answer==="3"} value="3" onChange={handleRadioButton}/><img src="bbibbi.png" style={styles.img}></img>
          <div>μμ</div></label>
          <label><input type="radio" checked={answer==="4"} value="4" onChange={handleRadioButton}/><img src="tape.png" style={styles.img}></img>
          <div>μΉ΄μΈνΈ νμ΄ν</div></label>
          <label><input type="radio" checked={answer==="5"} value="5" onChange={handleRadioButton}/><img src="roll.png" style={styles.img}></img>
          <div>κ΅΄λ μ </div></label>
      <br /><br />
      <button type="submit" onClick={checkAnswer} style={Object.assign({}, styles.button, disable && styles.buttonEnabled)}>μ ν</button></div>
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
      {visible ? <div><h3>ν΄μ¦λ₯Ό νμ΄λ³΄μΈμ</h3>
        <h3>λ€μ μ μ‘°μ΄ μ€ μλ―Έκ° μ¬λ°λ₯΄μ§ μμ κ²μ?</h3>
      <label><input type="radio" checked={answer==="1"} value="1" onChange={handleRadioButton}/>μμλ±κΉμΌ-μμμ μ λ± κΉλνκ³  μΌμ€μκ²</label>
      <br /><br />
      <label><input type="radio" checked={answer==="2"} value="2" onChange={handleRadioButton}/>μμμ-μκΈ΄λ° μ μκΉ</label>
      <br /><br />
      <label><input type="radio" checked={answer==="3"} value="3" onChange={handleRadioButton}/>νμμ°-νμ μ¨κΈ°κ³  μλ μ°λ°</label>
      <br /><br />
      <label><input type="radio" checked={answer==="4"} value="4" onChange={handleRadioButton}/>μ λ©μΆ-μ λμ λ©μΆλ¦¬μμ₯μ‘°λ¦Ό</label>
      <br /><br />
      <label><input type="radio" checked={answer==="5"} value="5" onChange={handleRadioButton}/
      >μ΅ν-μ΅μ§ νμ</label>
      <br /><br />
      <button type="submit" onClick={checkAnswer} style={Object.assign({}, styles.button, disable && styles.buttonEnabled)}>μ ν</button>
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
  const [age, setAge] = useState(0); /*true: μ μ μΈλ, false:μ μΈλ */
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
    <h3>π?&nbsp;λΉμ μ λμ΄λ?</h3>
    <input id="age" type="text" size="10" onChange={checkAge} style={styles.input}></input>
    <button type="submit" onClick={checkQuiz} style={Object.assign({}, styles.button, disable && styles.buttonEnabled)}>μ ν</button></div> : <Quiz age={age}/>}
    </div>
  )
}

function Promise() {
  return (
    <div id='promise'>
      <h1>Movie Review</h1>
      <div className='movie-container'>
        <h2>μ λͺ©</h2>
        <div>
          λ΄μ©
        </div>
      </div>
      <div className='form-wrapper'>
        <input className="title-input" type='text' placeholder='μ λͺ©' />
        <textarea className="text-area" placeholder='λ΄μ©'></textarea>
      </div>
      <button className="submit-button">μλ ₯</button>
    </div>
  );
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
