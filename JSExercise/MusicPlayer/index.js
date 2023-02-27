const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const playList = $('.player .playlist')
const cd = $('.cd')
const dashboardSongName = $('.dashboard h2')
const cdImage = $('.cd .cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const playProgress = $('#progress')
const randomBtn = $('.btn-random')
const cdWidth = cd.offsetWidth
const repeatBtn = $('.btn-repeat')

const app = {
    currentIndex: 0,
    isRandom: randomBtn.classList.contains('active'),
    isRepeat: repeatBtn.classList.contains('active'),
    songs: [
        {
          name: "Click Pow Get Down",
          singer: "Raftaar x Fortnite",
          path: "./asset/music/music1.mp3",
          image: "https://i.ytimg.com/vi/jTLhQf5KJSc/maxresdefault.jpg"
        },
        {
          name: "Hạ Phỏm",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./asset/music/music2.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        },
        {
          name: "Naachne Ka Shaunq",
          singer: "Raftaar x Brobha V",
          path:
            "./asset/music/music3.mp3",
          image: "https://i.ytimg.com/vi/QvswgfLDuPg/maxresdefault.jpg"
        },
        {
          name: "Mantoiyat",
          singer: "Raftaar x Nawazuddin Siddiqui",
          path: "./asset/music/music4.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "Aage Chal",
          singer: "Raftaar",
          path: "./asset/music/music5.mp3",
          image:
            "https://a10.gaanacdn.com/images/albums/72/3019572/crop_480x480_3019572.jpg"
        },
        {
          name: "Damn",
          singer: "Raftaar x kr$na",
          path:
            "./asset/music/music6.mp3",
          image:
            "https://a10.gaanacdn.com/images/song/39/24225939/crop_480x480_1536749130.jpg"
        },
        {
          name: "Feeling You",
          singer: "Raftaar x Harjas",
          path: "./asset/music/music7.mp3",
          image:
            "https://a10.gaanacdn.com/gn_img/albums/YoEWlabzXB/oEWlj5gYKz/size_xxl_1586752323.webp"
        },
        {
          name: "Tu Phir Se Aana",
          singer: "Raftaar x Salim Merchant x Karma",
          path: "./asset/music/music8.mp3",
          image:
            "https://1.bp.blogspot.com/-kX21dGUuTdM/X85ij1SBeEI/AAAAAAAAKK4/feboCtDKkls19cZw3glZWRdJ6J8alCm-gCNcBGAsYHQ/s16000/Tu%2BAana%2BPhir%2BSe%2BRap%2BSong%2BLyrics%2BBy%2BRaftaar.jpg"
        }
    ],
    render: function() {
        // get songs from the array and render it
        const htmls = this.songs.map((song,index) => {
            if (index==this.currentIndex) {
              return `
              <div class="song active" data-index="${index}">
                  <div class="thumb" style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option">
                      <i class="fas fa-ellipsis-h"></i>
                  </div>
              </div>
              `
            }
            else {
              return `
              <div class="song" data-index="${index}">
                  <div class="thumb" style="background-image: url('${song.image}')">
                  </div>
                  <div class="body">
                      <h3 class="title">${song.name}</h3>
                      <p class="author">${song.singer}</p>
                  </div>
                  <div class="option">
                      <i class="fas fa-ellipsis-h"></i>
                  </div>
              </div>
              `
            }
        })
        playList.innerHTML = htmls.join('')
        app.chooseSong();
    },
    //create currentSong property that return the current song of the 
    defineProperties: function() {
      Object.defineProperty(this, 'currentSong', {
        get: function() {
          return this.songs[this.currentIndex]
        }
      })
    },
    handleEvent: function() {
        // Handle rotate cd image
        const cdAnimation = cdImage.animate([
          {transform: 'rotate(360deg)'}
        ], {
          duration: 10000,
          iterations: Infinity
        })
        cdAnimation.pause() 
        audio.onplay = function() {
          cdAnimation.play();
        }
        audio.onpause = function() {
          cdAnimation.pause();
        }
        audio.loop=app.isRepeat;

        // make the album pictures in playlist minimize when scrolling down
        document.onscroll = function(event) {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const newCdWidth = (cdWidth - scrollTop) 
            cd.style.width = newCdWidth > 0? newCdWidth + 'px': 0;
            const opacity = newCdWidth/cdWidth;
            cd.style.opacity = `${opacity}`
        }
        // cd play functionalities
        playBtn.onclick = function(event) {
          $('.player').classList.toggle('playing')
          if (audio.paused) {
            audio.play();
          }
          else {
            audio.pause();
          }
        }
        nextBtn.onclick = function(event) {
          const isPlaying = !audio.paused
          if (app.isRandom) {
            let change = Math.floor(Math.random()*app.songs.length);
            app.currentIndex+=(change!=0)?change:1;
          }else {
            app.currentIndex++;
          }
          if (app.currentIndex>=app.songs.length) {
            app.currentIndex-=app.songs.length;
          }
          app.loadCurrentSong();
          app.render();
          playProgress.value = 0;
          if (isPlaying) {
            audio.play();
          }
        }
        prevBtn.onclick = function(event) {
          const isPlaying = !audio.paused
          if (app.isRandom) {
            let change = Math.floor(Math.random()*app.songs.length);
            app.currentIndex-=(change!=0)?change:1;
          }else {
            app.currentIndex--;
          }
          if (app.currentIndex<0) {
            app.currentIndex+=app.songs.length;
          }
          
          app.loadCurrentSong();
          app.render();
          if (isPlaying) {
            audio.play();
          }
        }
        // progress bar running when playing video, seeking var is used for fixing error when seeking, the audio ontime udpate still change the progress bar
        let isSeeking = false;
        audio.ontimeupdate = function() {
          if (!isSeeking&&audio.duration){
            playProgress.value = Math.floor(audio.currentTime/audio.duration*100);
          }
        }
        // seeking audio
        playProgress.onmouseover = function(e) {
          isSeeking = true;
        }
        playProgress.onchange = function(e) {
          isSeeking = true;
          audio.currentTime = e.target.value*audio.duration/100;
        }
        playProgress.onmouseleave = function(e) {
          isSeeking = false;
        }
        // when the audio ended, changing to the next song
        audio.onended = function() {
          if (!app.isRepeat) {
            nextBtn.click();
            audio.play();
          }
        }
        

      },
    loadCurrentSong: function() {
      // load the current song to the playlist and cd for rendering
      dashboardSongName.textContent = this.currentSong.name;
      cdImage.style.backgroundImage = `url('${this.currentSong.image}')`
      audio.src = this.currentSong.path
    },
    // click on a song will highlight and play that song
    chooseSong: function() {
      const songLists = $$('.song')
      songLists.forEach((song,index)=>{
        song.onclick = function() {
          const isPlaying = !audio.paused
          app.currentIndex = index;
          app.loadCurrentSong();
          app.render();
          if (isPlaying) {
            audio.play();
          }
          playProgress.value =0;
          app.chooseSong();
        }
      })
    },
    start: function() {
      this.defineProperties();
      this.handleEvent();
      this.loadCurrentSong();
      this.render();
      this.chooseSong();

    }
}

app.start()




// effect
nextBtn.onmouseover = function(e) {
  this.classList.add("active")
}
nextBtn.onmouseleave = function(e) {
  this.classList.remove('active')
}
prevBtn.onmouseover = function(e) {
  this.classList.add("active")
}
prevBtn.onmouseleave = function(e) {
  this.classList.remove('active')
}
randomBtn.onclick = function(e) {
  this.classList.toggle('active')
  app.isRandom = this.classList.contains('active')
}
repeatBtn.onclick = function(e) {
  this.classList.toggle('active')
  app.isRepeat = this.classList.contains('active')
  audio.loop = !audio.loop
}
