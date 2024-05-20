

// let progress = document.getElementById("progress");
// let song = document.querySelector("audio");
// let ctrlIcon = document.getElementById("ctrlIcon");

// song.onloadedmetadata = function(){
//     progress.max= song.duration;
//     progress.value= song.currentTime;
// }
// function playPause(){
//     if(song.paused){
//         song.play();
//         ctrlIcon.classList.remove("fa-play");
//         ctrlIcon.classList.add("fa-pause");

//     }else{
//         song.pause();
//         ctrlIcon.classList.remove("fa-pause");
//         ctrlIcon.classList.add("fa-play");
//     }

// }if(song.play()){
//     setInterval(()=>{
//         progress.value=song.currentTime;
//     },500);
// }
// progress.onchange=function(){
//     song.play();
//     song.currentTime=progress.value;
//     ctrlIcon.classList.add("fa-pause");
//     ctrlIcon.classList.remove("fa-play");

// }

let song = document.querySelector("audio");
let ctrlIcon = document.getElementById("ctrlIcon");
let progress = document.getElementById("progress");
let forwardButton = document.getElementById("forwardButton");
let backwardButton = document.getElementById("backwardButton");


song.onloadedmetadata = function() {
    progress.max = song.duration;
    progress.value = song.currentTime;

}
 function playPause() {
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    } else {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
}
song.addEventListener('timeupdate', function() {
    progress.value = song.currentTime;
});
forwardButton.addEventListener('click', function() {
    song.currentTime += 10; // Skip forward by 10 seconds
});

backwardButton.addEventListener('click', function() {
    song.currentTime -= 10; // Skip backward by 10 seconds
});
progress.oninput = function() {
    song.currentTime = progress.value;
};




