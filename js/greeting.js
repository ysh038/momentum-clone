const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const weather = document.querySelector("#weather");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const FADEOUT_CLASSNAME = "disappear";
const FADEIN_CLASSNAME = "appear"

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 저장되어 있던 이름이 없다면 
// input에 입력한 정보를 받아옴
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(FADEOUT_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    // 시계, 명언, 날씨 모두 greeting.js에서 그린다
    setTimeout(()=>{
        paintGreetings(username);
    },1001);
    setTimeout(startClock,1001);
    setTimeout(writeQuotes,1001);
    setTimeout(writeWeather,1001);
    setTimeout(writetoToForm,1001);
}

// input에 입력한 이름을 받아와 화면에 표시
function paintGreetings(username){
    const date = new Date();
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.classList.add(FADEIN_CLASSNAME);
    if(date.getHours()<12 && date.getHours()>=6){
        greeting.innerText = `Good morning, ${username}`;
    }else if(date.getHours()<18 && date.getHours()>=12){
        greeting.innerText = `Good afternoon, ${username}`;
    }else if(date.getHours()<24 && date.getHours()>=18){
        greeting.innerText = `Good evening, ${username}`;
    }else{
        greeting.innerText = `Good night, ${username}`;
    }
}

// localStorage에 저장되어 있는 이름이 있나 확인
// 확인 후 저장되어 있다면 바로 표시하거나 
// 저장된 이름이 없다면 form을 표시한 후 submit을 기다림
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    // 저장된 사용자의 이름이 있다면 시계, 명언, 인사말, 날씨, ToDoList를 표시
    paintGreetings(savedUsername);
    startClock();
    writeQuotes();
    weather.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
}