const music =new Audio('Audio/Sơn Tùng M-TP/19.mp3');
// music.play();

const songs =[
    {
        id: 1,
        songname:'Âm Thầm Bên Em<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/1.jpg'
    },
    {
        id: 2,
        songname:'Buông Đôi Tay Nhau Ra<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/2.jpg'
    },
    {
        id: 3,
        songname:'Chắc Ai Đó Sẽ về<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/3.jpg'
    },
    {
        id: 4,
        songname:'Chạy Ngay Đi - Onionn Remix<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/4.jpg'
    },
    {
        id: 5,
        songname:'Chúng Ta Của Hiện Tại<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/5.jpg'
    },
    {
        id: 6,
        songname:'Chúng Ta Không Thuộc Về Nhau<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/6.jpg'
    },
    {
        id: 7,
        songname:'Có Chắc Yêu Là Đây<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/7.jpg'
    },
    {
        id: 8,
        songname:'Cơn Mưa Ngang Qua<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/8.jpg'
    },
    {
        id: 9,
        songname:'Hãy Trao Cho Anh<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/9.jpg'
    },
    {
        id: 10,
        songname:'Không Phải Dạng Vừa Đâu<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/10.jpg'
    },
    {
        id: 11,
        songname:'Khuôn Mặt Đáng Thương<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/11.jpg'
    },
    {
        id: 12,
        songname:'Lạc Trôi<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/12.jpg'
    },
    {
        id: 13,
        songname:'Muộn Rồi Mà Sao Còn<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/13.jpg'
    },
    {
        id: 14,
        songname:'Nắng Ấm Xa Dần<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/14.jpg'
    },
    {
        id: 15,
        songname:'Như Ngày Hôm Qua<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/15.jpg'
    },
    {
        id: 16,
        songname:'Nơi Này Có Anh<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/16.jpg'
    },
    {
        id: 17,
        songname:'Remember Me - SlimV remix<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/17.jpg'
    },
    {
        id: 18,
        songname:'Thái Bình Mồ Hôi Rơi<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/18.jpg'
    },
    {
        id: 19,
        songname:`THERE'S NO ONE AT ALL<br> <div class="subtite">Sơn Tùng M-TP</div>`,
        poster:'Image/Sơn Tùng M-TP/19.jpg'
    },
    {
        id: 20,
        songname:'Tiến Lên Việt Nam ƠI<br> <div class="subtite">Sơn Tùng M-TP</div>',
        poster:'Image/Sơn Tùng M-TP/20.jpg'
    },
]

Array.from(document.getElementsByClassName('songItem')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songname;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');

masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
})
const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
        
    })
}
const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)';
    })
}

let index =0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        //console.log(index);
        music.src=`Audio/Sơn Tùng M-TP/${index}.mp3`;
        poster_master_play.src=`Image/Sơn Tùng M-TP/${index}.jpg`;
        music.play();

        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        document
            .getElementById('masterPlay')
            .classList.replace('bi-play-fill', 'bi-pause-fill');
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songname}=elss;
            title.innerHTML = songname;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.remove('active1');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];
music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);
    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);
    if(sec1<10){
        sec1=`0${sec1}`;
    }
    currentEnd.innerText=`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);
    if(sec2<10){
        sec2=`0${sec2}`;
    }
    currentStart.innerText=`${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur)*100);
    seek.value=progressBar;
    // console.log(seek.value);
    let seekbar = seek.value;
    bar2.style.width=`${seekbar}%`;
    dot.style.left =`${seekbar}%`;
});

seek.addEventListener('change',()=>{
    music.currentTime=seek.value * music.duration/100;
});

let vol_icon= document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar =document.getElementsByClassName('vol_bar')[0];
let vol_dot =document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value ==0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
    }
    if(vol.value>0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    if(vol.value>50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;

});

let back = document.getElementById('back');
let next =  document.getElementById('next');

back.addEventListener('click',()=>{
    index -=1;
    music.src=`Audio/Sơn Tùng M-TP/${index}.mp3`;
        poster_master_play.src=`Image/Sơn Tùng M-TP/${index}.jpg`;
        music.play();

        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        document
            .getElementById('masterPlay')
            .classList.replace('bi-play-fill', 'bi-pause-fill');
        let songTitles = songs.filter((els)=>{
            return els.id == index;
        });
        songTitles.forEach(elss =>{
            let {songname}=elss;
            title.innerHTML = songname;
        });
        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background="rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.remove('active1');
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click', () => {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click', () => {
    item.scrollLeft -= 330;
});