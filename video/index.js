if (
  !('mediaDevices' in navigator) ||
  !('getUserMedia' in navigator.mediaDevices)
) {
  throw new Error('Your browser does not support video');
}

const videoStream = navigator.mediaDevices.getUserMedia({ video: true });

videoStream.then((video) => {
  const videoNode = document.querySelector('video');
  videoNode.srcObject = video;
  videoNode.play();
  //setTimeout(() => videoNode.pause(), 5000);
});

video.srcObject = videoStream;
