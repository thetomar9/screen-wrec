const videoElement = document.querySelector('video');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const videoSelectBtn = document.getElementById('videoSelectBtn');

const { desktopCapturer, remote} = require('electron');
const { Menu } = remote;

async function getVideoSources() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window','screen']
    });

    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source => {
            return {
                label: source.name,
                click: () => selectSource(source)
            };
        })
    );
    
    videoOptionsMenu.popup();
}

async function selectSource(source){
    videoSelectBtn.innerText = source.name;

    const constraints = {
        audio:false,
        video: {
            mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: source.id
            }
        }
    };
}