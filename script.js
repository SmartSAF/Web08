$(document).ready(function() {
  // Inisialisasi flipbook dengan turn.js
  $("#flipbook").turn({
    width: $("#flipbook").width(),
    height: $("#flipbook").height(),
    autoCenter: true,
    duration: 1000,        // Durasi animasi dalam milidetik
    gradients: true,
    acceleration: true,
    when: {
      turning: function(event, page, view) {
        // Mainkan efek suara flip
        var audio = document.getElementById('pageTurnSound');
        if (audio) {
          audio.pause();
          audio.currentTime = 0;
          audio.play().catch(function(e) {
            console.log("Audio tidak bisa diputar:", e);
          });
        }
      }
    }
  });

  // Sesuaikan ukuran flipbook saat jendela diubah
  $(window).resize(function() {
    var newWidth = $("#flipbook").width();
    var newHeight = $("#flipbook").height();
    $("#flipbook").turn("size", newWidth, newHeight);
  });
});
