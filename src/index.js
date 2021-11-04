import ReactDOM from 'react-dom';


function handleClick() {
  console.log("가위바위보!");
}


ReactDOM.render(
  <>
    <h1>가위바위보</h1>
    <h2>승리</h2>
    <button onClick={handleClick}>가위</button>
    <button onClick={handleClick}>바 위</button>
    <button onClick={handleClick}>보</button>
  </>,
  document.getElementById('root')
);
