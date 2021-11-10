x=0;
y=0;
draw_rect = "";
draw_circle = "";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="Sysem is listening please speak:";
recognition.start();
}
recognition.onresult= function (event){
    console.log(event);
var Content=event.results[0][0].transcript;
console.log(content);
document.getElementById("status").innerHTML="The speech has been recognised as:"+content;
}
