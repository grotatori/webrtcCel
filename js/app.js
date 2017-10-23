'use strict';

// Referencia a los elementos del DOM
const video = document.getElementById('video');
const qvga = document.getElementById('qvga');
// Reproducir el video
function play(constraints) {
    navigator.mediaDevices.enumerateDevices()
    .then(function(devices) {
      devices.forEach(function(device) {
        alert(device.kind + ": " + device.label +
          " id = " + device.deviceId);
      });
    })
    .catch(function(err) {
      console.log(err.name + ": " + error.message);
    });
    if (video.srcObject)
        video.srcObject.getTracks().forEach(track => track.stop());

    navigator.mediaDevices.getUserMedia(constraints)
        .then(mediaStream => video.srcObject = mediaStream)
        .catch(e => console.log(e));
}

// Agregamos listeners a los eventos
qvga.addEventListener('click', function() {
    play({video: {width: 320, height: 240}});
});