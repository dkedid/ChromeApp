const bgm1 = new Audio('C:/vs/kokoa-clone-2021/ChromeApp/JS/data/bgm/1.mp3');

bgm1.addEventListener('ended', function() { 
    bgm1.currentTime = 0;
    bgm1.play();
}, false);