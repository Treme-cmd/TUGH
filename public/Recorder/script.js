const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const downloadBtn = document.getElementById('downloadBtn');
const videoElement = document.getElementById('screenVideo');

let mediaRecorder;
let recordedChunks = [];

startBtn.addEventListener('click', async () => {
  const displayMediaOptions = {
    video: {
      cursor: "always"
    },
    audio: {
      echoCancellation: true,
      noiseSuppression: true,
      sampleRate: 44100
    }
  };

  try {
    const stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    videoElement.srcObject = stream;

    mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });

    mediaRecorder.ondataavailable = function(event) {
      if (event.data.size > 0) {
        recordedChunks.push(event.data);
      }
    };

    mediaRecorder.onstop = function() {
      const blob = new Blob(recordedChunks, { type: 'video/webm' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = 'screen-recording.webm';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    };

    mediaRecorder.start();
    startBtn.disabled = true;
    stopBtn.disabled = false;
  } catch (err) {
    console.error('Error: ' + err);
  }
});

stopBtn.addEventListener('click', () => {
  mediaRecorder.stop();
  videoElement.srcObject.getTracks().forEach(track => track.stop());
  stopBtn.disabled = true;
  startBtn.disabled = false;
  downloadBtn.disabled = false;
});

downloadBtn.addEventListener('click', () => {
  const blob = new Blob(recordedChunks, { type: 'video/webm' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = 'screen-recording.webm';
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);
  downloadBtn.disabled = true;
});
