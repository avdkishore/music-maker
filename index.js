window.addEventListener('load', () => {
  const sounds = document.querySelectorAll('.sound');
  const pads = document.querySelectorAll('.pads > div');
  const visual = document.querySelector('.visual');
  const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#d34b0d',
    '#0badca',
  ];

  const keys = ['S','D', 'F', 'J', 'K', 'L'];

  function createBubbles(index) {
    const bubble = document.createElement('div');
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
  
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    });
  }

  function play(index) {
    sounds[index].currentTime = 0;
    sounds[index].play();

    createBubbles(index);
  }
  
  // sound
  pads.forEach((pad, i) => {
    pad.addEventListener('click', function() {
      play(i);
    });
  });

  addEventListener('keyup', (event) => {
    const key = event.key.toUpperCase();

    const keyIndex = keys.indexOf(key);

    if (keyIndex !== -1) {
      play(keyIndex);
    }
  })
});