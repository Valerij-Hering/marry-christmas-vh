function ChristmasCountdawn() {
    const marryChristmasDate = new Date('December 24, 2023 00:00');
    const naw = new Date();
    const diff = marryChristmasDate - naw;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    let displayDay = Math.floor(diff/msInDay);
    

    let displayHour = Math.floor((diff%msInDay)/msInHour);
    

    let displayMinute = Math.floor((diff%msInHour)/msInMinute);
    

    let displaySecond = Math.floor((diff%msInMinute)/msInSecond);
    
  
    if(displayHour < 10) {
        displayHour = "0" + displayHour;
    }

    if(displayMinute < 10) {
        displayMinute = "0" + displayMinute;
    }

    if(displaySecond < 10) {
        displaySecond = "0" + displaySecond;
    }
  
    document.querySelector('.days').textContent = displayDay;
    document.querySelector('.hours').textContent = displayHour;
    document.querySelector('.minutes').textContent = displayMinute;
    document.querySelector('.seconds').textContent = displaySecond;


    let h3Days = document.querySelector('.h3Days');
    if (displayDay === 1) {
        h3Days.textContent = 'DAY';
    }
    else {
        h3Days.textContent = 'DAYS';
    }

    
    let h3Hours = document.querySelector('.h3Hours');
    if (displayHour === "01") {
        h3Hours.textContent = 'HOUR';
    }
    else {
        h3Hours.textContent = 'HOURS';
    }

    
    let h3Minutes = document.querySelector('.h3Minutes');
    if (displayMinute === "01") {
        h3Minutes.textContent = 'MINUTE';
    }
    else {
        h3Minutes.textContent = 'MINUTES';
    }


    let h3Seconds = document.querySelector('.h3Seconds');
    if (displaySecond === "01") {
        h3Seconds.textContent = 'SECOND';
    }
    else {
        h3Seconds.textContent = 'SECONDS';
    }
  
  
  
 
  
    


    if (diff<= 0) {
        document.querySelector('.days').textContent = 0;
        document.querySelector('.hours').textContent = 0;
        document.querySelector('.minutes').textContent = 0;
        document.querySelector('.seconds').textContent = 0;
        marryChristmas();
        clearInterval(timerId);
    }
}



let timerId = setInterval(ChristmasCountdawn,1000);

function marryChristmas() {
    const heading = document.querySelector('h1');
    heading.textContent = 'Marry Christmas!';
    heading.classList.add('marryCristmas');
}




//audio player

const prev = document.querySelector('.prev');
const play = document.querySelector('.play');
const next = document.querySelector('.next');
const audio = document.querySelector('.audio');
const songName = document.querySelector('.songName');

const songs = [
    {name: `Jingle Bells Rock - Bobby Helms`,
    path: 'Jingle Bell Rock - Bobby Helms.mp3'},
    
    {name: `Let it snow! Let it snow! Let it snow! - Dean Martin`,
    path: 'Let it snow.mp3'},
    
    {name: `Run Rudolph Run - Chuck Berry`,
    path: 'Run Rudolph Run - Chuck Berry.mp3'},
    
    {name: `It's the Most Wonderful Time of the Year - Andy Williams`,
    path: 'Andy Williams - Its The Most Wonderful Time Of The Year.mp3'},
    
    {name: `Happy New Year - ABBA`,
    path: 'Happy New Year - Abba.mp3'}
];

let i = 0;

play.addEventListener('click', () => {
        
    if(audio.paused) {
        audio.play();
        play.innerHTML = `<i class="fas fa-pause"></i>`;
        //play.classList.toggle('pause');
    }

    else{
        audio.pause();
        play.innerHTML = `<i class="fas	fa-play"></i>`;
    }
})

next.addEventListener('click', () => {
    i++;
    if(i > songs.length - 1) {
        i = 0;
    }

    audio.src = songs[i].path;
    songName.textContent = songs[i].name;
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    //play.classList.add('pause');
    playSong();
})

prev.addEventListener('click', () => {
    i--;
    if(i < 0) {
        i = songs.length - 1;
    }

    audio.src = songs[i].path;
    songName.textContent = songs[i].name;
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    //play.classList.add('pause');
    playSong();
})

function playSong() {
    if(audio.paused){
        audio.play();
    }
}

audio.addEventListener('ended', () => {
    i++;

    audio.src = songs[i].path;
    songName.textContent = songs[i].name;

    if(i > songs.length) {
        i = 0;
    }
    else if(audio.paused) {
        audio.play();
        play.innerHTML = `<i class="fas fa-pause"></i>`;
        //play.classList.toggle('pause');
    }
    
    play.innerHTML = `<i class="fas fa-pause"></i>`;
    //play.classList.toggle('pause');
})

//progress bar

const progressBar = document.querySelector('.progressBar');
const progress = document.querySelector('.progress');

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

progressBar.addEventListener('click', setProgress);

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


//snow
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 400,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 3,
                "color": "#fff"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "snow.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.7,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 5,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 50,
            "color": "#ffffff",
            "opacity": 0.6,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "bottom",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": true,
                "rotateX": 300,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode":  "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 150,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 200,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.2
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
})