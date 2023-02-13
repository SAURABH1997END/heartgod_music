console.log("Welcome god world");

// Prothamo kon song cholba

 let songIndex = 0; // prothama gan 0 mana ki6u na
 let audioElement = new Audio ('songs/1.mp3'); //1.mp3 means song name
 let masterPlay = document.getElementById('masterPlay'); // masterplay ta ho66a circle button ta 
 let myProgressbar = document.getElementById('myProgressbar');  // progressbar ta ho66a ganar length Lomba line Ta
 let gif = document.getElementById('gif');
 let mastersongname = document.getElementById('mastersongname'); // music pplay gif ta add kora holo jar id holo gif
 let songitems = Array.from(document.getElementsByClassName('songItems')); // akhana input kora holo songitem class ta

 let songs = [
     {songName: "All I Am - Dyalla", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"} ,//song name , filepath and cover image
     {songName: "Boom Bap Flick - Quincas Moreira", filePath: "songs/2.mp3", coverPath: "cover/2.jpg"} ,
     {songName: "Break Your Lock and Key - Mini Vandals", filePath: "songs/3.mp3", coverPath: "cover/3.jpg"} ,
     {songName: "Born a Rockstar - NEFFEX", filePath: "songs/4.mp3", coverPath: "cover/4.jpg"} ,
     {songName: "Cafe Regrette - Asher Fulero", filePath: "songs/5.mp3", coverPath: "cover/5.jpg"} ,
     {songName: "Read All Over - Nathan Moore", filePath: "songs/6.mp3", coverPath: "cover/6.jpg"} ,
     {songName: "Music", filePath: "songs/7.mp3", coverPath: "cover/6.jpg"} ,
     {songName: "Music", filePath: "songs/8.mp3", coverPath: "cover/6.jpg"} ,
    ]

     songitems.forEach((element, i)=>{ 
        element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
        element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
    })
    
 

 // masterplay ta ho66a circle button ta  , Akhana keu click korla play and pause hoba song

 masterPlay.addEventListener('click', ()=>{
     if(audioElement.paused || audioElement.currentTime<=0){   // ata mana audio play ho6a na 
     audioElement.play(); // Audio ta abar play hoba
     masterPlay.classList.remove('fa-play-circle'); // remove = fa-circle
     masterPlay.classList.add('fa-pause-circle'); // fa paused =  circle add
     gif.style.opacity =1;
  } 

  else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity = 0;
}

 })


 audioElement.addEventListener('timeupdate' , () =>{ // listener time update
    //  console.log('timeupdate');

//  Seekbar K Thik Kora
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); // Ganta kotpkhani choolo set duration ta dakhaba console bar ar modha .
     console.log(progress); 
     myProgressbar.value = progress; // Abara Ata ho66a seekbara ta show korba gantar duration kintu ganta modhikhana kata nila kono poribortan hoba na
 })


 myProgressbar.addEventListener('change', ()=>{ // Seekbara Ganta modhikhana kata dila gantar poribortan hoba
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
}) 

const makeAllPlays = ()=>{ // choto play button gulo ka song play hhota help korba Ai function
 
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{ // songitemplay class ar [ mana ganar namar pasa duration and tar pasa ja choto play buttom a6a ] satay click korla jano gan chola

    element.addEventListener('click', (e)=>{ // click mana hocha keu jodi ar opr click kora .... e mana jar opr click kora hoyacha ...
         // console.log(e.target);
         makeAllPlays();
         songIndex = parseInt(e.target.id);  // span ar modhay id="1" ka parseint kora naooo
         e.target.classList.remove('fa-play-circle'); //fa-circle-play aii item k remove korta hoba ai function use kora
         e.target.classList.add('fa-pause-circle'); //fa-pause-play aii item k add korta hoba ai function use
         audioElement.src = `songs/${songIndex+1}.mp3`;   // Ai function ta Run Korala boro play button ay gan cholta thakla  and gaan chola kalin oporar jakono akta gana click korla 3no mp3 gan cholba .... and nichaar ganta autometic pause hoya jaba .....
        
        //   audioElement.src = `songs/${songIndex+1}.mp3`;// All song click [ play and pause ] its function
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle'); // All song click and play its function end function
        
      })
  })


//  Next Section Here

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

//  Previous Section Here


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
 




 
  