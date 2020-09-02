const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt user to select media, pass video to element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (e) {
        console.log('oops, error here', e)
    }
}

button.addEventListener('click', async () => {
    //Disable button
    button.disabled = true;
    //Start PIP
    await videoElement.requestPictureInPicture();
    //Reset Button
    button.disabled = false;
});

//On Load
selectMediaStream();