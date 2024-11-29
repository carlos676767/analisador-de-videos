
class DownloadAudioYoutube {
    
  static configDonwloads( audioUrl) {
    const ffmpegPath = require("ffmpeg-static");
    const configs = {
      audioOutput: `audio.mp3`,
    };

    const { audioOutput } = configs;
    return `yt-dlp -x --audio-format mp3 --ffmpeg-location "${ffmpegPath}" -o "${audioOutput}" "${audioUrl}"`;
  }

 static donwloadAudio(audio) {
  const  { exec } = require("child_process");
  console.log(`starting to download video to audio`);
  
    exec(this.configDonwloads(audio), (err, sucess) => {
        if (err) {
            console.log(`error downloading audio try again`);
            return false
        }

        console.log(`audio downloaded successfully`); 
    });
  }
}

DownloadAudioYoutube.donwloadAudio(`https://youtu.be/I-eyYCaHS0E?si=pveT5KHDOsxxQosS`)


