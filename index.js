const fs = require('fs');
const ytdl = require('ytdl-core');
function lol(){
    document.getElementById("download").setAttribute("href", ytdl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
    .pipe(fs.createWriteStream('video.mp4')));
}
