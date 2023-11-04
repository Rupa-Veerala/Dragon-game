score = 0;
cross = true;

audio = new Audio(music.mp3);
audiofo = new Audio(gameover.mp3);

setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown=function(e){
    console.log("key code is:", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelecto('.dino');
        dino.classList.add('.animateDino');
        setTimeout(() => {
            dino.classList.remove('.animateDino');
        },700)
    }
    //right key its 39
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    } 
    //left key its 37
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX - 112 + "px";
    } 
}