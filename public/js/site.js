Array.from(document.getElementsByTagName('video')).forEach(function(el, i) {
  var video = videojs(el, {
    "autoplay": false,
    "loop": true,
    "controls": false,
    "controlBar": false,
    "bigPlayButton": false,
    'captionSettings': false
  });
  $(el).parents('.portfolio-box').hover(function(e) {
    video.play();
  }, function(e) {
    video.pause();
  });
});