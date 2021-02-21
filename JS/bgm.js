const bgm1 = new Audio('./data/bgm/1.mp3');

bgm1.addEventListener('ended', function() { 
    bgm1.currentTime = 0;
    bgm1.play();
}, false);