document.addEventListener('DOMContentLoaded', () => {

    const headerDropdown = document.querySelector('.header-bottom__dropdown'),
        headerMenu = document.querySelector('.header-bottom__navigation'),
        modalWindow = document.querySelector('.modal'),
        modalImage = document.querySelector('.modal__img'),
        modalClose = document.querySelector('.modal__close');

    headerDropdown.addEventListener('click', () => {
        headerMenu.classList.toggle('open');
    });


    let skillsCircles = Array.from(document.querySelectorAll('.skills-cards__circle')),
        expirienceCircles = Array.from(document.querySelectorAll('.experience-cards__circle')),
        gallaryImages = Array.from(document.querySelectorAll('.portfolio-gallary__img'));


    gallaryImages.forEach(el => el.addEventListener('click', () => {
        modalWindow.style.display = "flex";
        modalImage.src = el.src;
    }));

    modalClose.addEventListener('click', () => {
        modalWindow.style.display = "none";
    });

    function radians(percent) {
        return 360 * percent / 100 * Math.PI / 180;
    }

    skillsCircles.forEach(el => {
        let endAngle = el.id,
            canv = el.children[1],
            ctx = canv.getContext('2d');

        ctx.lineWidth = 20;
        ctx.beginPath();
        ctx.arc(canv.height / 2, canv.height / 2, canv.height / 2 - ctx.lineWidth / 2, -Math.PI / 2, Math.PI * 3 / 2, false);
        ctx.strokeStyle = "#ffffffb3";
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(canv.height / 2, canv.height / 2, canv.height / 2 - ctx.lineWidth / 2, -Math.PI / 2, radians(endAngle) - Math.PI / 2, false);
        ctx.strokeStyle = "#2c3e50";
        ctx.stroke();
    });

    expirienceCircles.forEach(el => {
        let canv = el.children[1],
            ctx = canv.getContext('2d');

        ctx.beginPath();
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.arc(canv.height / 2, canv.height / 2, canv.height / 2 - ctx.lineWidth, -Math.PI / 2, Math.PI * 3 / 2, false);
        ctx.stroke();
        ctx.fill();
    });

});