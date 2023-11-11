document.addEventListener('DOMContentLoaded', function () {
    const $btnAcc = document.querySelector('.js-accept');
    const $btnDec = document.querySelector('.js-decline');
    const $imgContainer = document.querySelector('.js-picture');
    const $audio = document.getElementById('audio');

    $btnAcc.addEventListener('click', function () {
        // Hide confirmation and display image
        document.querySelector('.js-confirm').style.display = 'none';
        $imgContainer.style.display = 'block';

        // Set image source
        document.querySelector('.js-picture img').src = "picture/400212074_644061487931950_6352502514546400698_n.jpg";

        // Play or pause the audio
        if ($audio && $audio.paused) {
            $audio.play()
                .then(() => {
                    // Playback started successfully
                })
                .catch((error) => {
                    console.log('Error playing audio:', error);
                });
        } else if ($audio) {
            $audio.pause();
            $audio.currentTime = 0;
        }
    });

    let counter = 0;

    $btnDec.addEventListener('click', function () {
        // Move the "DECLINE" button to random positions
        const randomTop = Math.random() * (window.innerHeight - $btnDec.clientHeight);
        const randomRight = Math.random() * (window.innerWidth - $btnDec.clientWidth);

        $btnDec.style.position = 'absolute';
        $btnDec.style.top = `${randomTop}px`;
        $btnDec.style.right = `${randomRight}px`;

        // Update button text based on counter
        if (counter === 4) {
            $btnDec.innerHTML = '*omiyak';
        } else if (counter >= 7) {
            $btnDec.innerHTML = 'ok lang rezel';
        }

        counter += 1;
    });
});

    
    
    
    
    
      
    