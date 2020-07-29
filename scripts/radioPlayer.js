export const radioPlayerInit = () => {
    const radio = document.querySelector('.radio');
    const radioNavigation = document.querySelector('.radio-navigation');
    const radioHeaderBig = document.querySelector('.radio-header__big');
    const radioItem = document.querySelectorAll('.radio-item');
    const radioStop = document.querySelector('.radio-stop');
    const radioCoverImg = document.querySelector('.radio-cover__img');

    const audio = new Audio();
    audio.type = 'audio/aac';

    radioStop.disabled = true;

    const toggleIcon = () => {
        if (audio.paused) {
            radio.classList.remove('play');
            radioStop.classList.remove('fa-pause');
            radioStop.classList.add('fa-play');
        } else {
            radio.classList.add('play');
            radioStop.classList.add('fa-pause');
            radioStop.classList.remove('fa-play');
        }
    }

    const selectItem = (elem) => {
        radioItem.forEach( item => item.classList.remove('select'));
        elem.classList.add('select');
    }

    radioNavigation.addEventListener('change', (event) => {
        const target = event.target;
        const parent = target.closest('.radio-item');
        selectItem(parent);
        const title = parent.querySelector('.radio-name').textContent;
        radioHeaderBig.textContent = title;
        const img = parent.querySelector('.radio-img').src;
        radioCoverImg.src = img;
        audio.src = target.dataset.radioStantion;
        audio.play();
        radioStop.disabled = false;
        toggleIcon();
    });

    radioStop.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        toggleIcon();
    });
}