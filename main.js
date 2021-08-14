var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start() {
document.getElementById("textbox").innerHTML="";
Recognition.start();
}
Recognition.onresult= function(event) {
console.log(event);
var Content = event.results[0][0].transcript;
console.log(Content);
document.getElementById("textbox").innerHTML=Content;
if (Content == "take my selfie") {
    console.log("taking selfie!");
    speak();  
}
}
function speak() {
    var synth = window.speechSynthesis;
    speakdata = "Taking your selfie in 5 seconnds!!";
    var utterThis = new SpeechSynthesisUtterance(speakdata);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takesnapshot();
        save();
    }, 5000);
}
Webcam.set({
    width:360,
    height:250,
    image_format: "png",
    png_quality:90
});
camera = document.getElementById("camera");
function takesnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='take_selfie' src='"+data_uri+"'>";
    });
}
function save() {
    link=document.getElementById("link");
    image=document.getElementById("take_selfie").src;
    link.href=image;
    link.click();
}