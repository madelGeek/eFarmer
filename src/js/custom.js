;(function () {
  'use strict';
  var domPlayVideoButton;

  domPlayVideoButton = document.getElementById('play-video');

  domPlayVideoButton.addEventListener('click', function () {
    var domVideoWrapper, domYouTubeIframe;

    domVideoWrapper = document.getElementById('video');
    domYouTubeIframe = document.createElement('iframe');

    // Reset wrapper's content
    domVideoWrapper.innerHTML = '';

    domYouTubeIframe.src = 'https://www.youtube.com/embed/djwJMigvqxE?autoplay=1&showinfo=0&controls=0';
    domYouTubeIframe.width = '100%';
    domYouTubeIframe.height = '100%';
    domYouTubeIframe.setAttribute('allowfullscreen', '');
    domYouTubeIframe.setAttribute('frameborder', '0');

    domVideoWrapper.appendChild(domYouTubeIframe);
  });
})();