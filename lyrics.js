var body = document.body;
body.style.cssText = 'font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background-color: brown; margin: 0;';

var container = document.createElement('div');
container.className = 'container';
container.style.cssText = 'text-align: center; background: white; padding: 20px; box-shadow: 0 0 10px rgba(0,0,0,0.1); border-radius: 8px; width: 400px;';

var title = document.createElement('h2');
title.textContent = 'Lyrics App';

var input = document.createElement('input');
input.type = 'text';
input.id = 'songName';
input.style.cssText = 'width: 80%; height: 25px; padding: 5px; margin: 10px 0; border-radius: 6px; outline: none;';
input.placeholder = 'Enter song name';

var button = document.createElement('button');
button.textContent = 'Get Lyrics'; 
button.style.cssText = 'width: 100px; height: 25px; border-radius: 6px; border: none; border-radius: 6px; background-color: black; color: white;';
button.onclick = displayLyrics;

var lyricsDiv = document.createElement('div');
lyricsDiv.id = 'lyrics'; 
lyricsDiv.style.cssText = 'margin-top: 20px; text-align: justify; white-space: pre-wrap; width: 400px; font-family: "Courier New", Courier, monospace; font-weight: bold; background-color: rgba(30, 91, 12, 0.195); padding: 5px; border-radius: 6px;';

container.appendChild(title);
container.appendChild(input);
container.appendChild(button);
container.appendChild(lyricsDiv);

document.body.appendChild(container);

var lyrics = {
    "hello": 'Youre the light, youre the night Youre the colour of my blood Youre the cure, youre the pain Youre the only thing I wanna touch Never knew that it could mean so much, so much Youre the fear, I dont care',
    "where": "Youre the light, youre the night  youre the pain Youre the only thing I wanna touch Never knew that it could mean so much, so much Youre the fear, I dont care",
    "now": "Youre the light, youre the night Youre the colour of my blood Youre the cure,I wanna touch Never knew that it could mean so much, so much Youre the fear, I dont care"
};

function displayLyrics() {
    var songName = document.getElementById('songName').value.toLowerCase();
    var lyricsText = lyrics[songName];

    if (lyricsText) {
        lyricsDiv.textContent = `Lyrics for ${songName}:\n\n${lyricsText}`;
    } else {
        lyricsDiv.textContent = `No lyrics found for ${songName}`;
    }
}