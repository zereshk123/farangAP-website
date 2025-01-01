
window.addEventListener("scroll", () => {
    const star_1 = document.querySelector(".hero-section--img__star-1");
    const star_2 = document.querySelector(".hero-section--img__star-2");
    const star_3 = document.querySelector(".hero-section--img__star-3");
    const scrollPosition = window.scrollY;

    const rotateValue_s1 = Math.min(scrollPosition / 1.7, 360);
    const opacityValue_s1 = Math.max(1 - scrollPosition / 200, 0.1);
    star_1.style.transform = `rotate(${rotateValue_s1}deg)`;
    star_1.style.opacity = opacityValue_s1;
    
    const rotateValue_s2 = Math.min(scrollPosition / 3, 360);
    const opacityValue_s2 = Math.max(1 - scrollPosition / 200, 0.1);
    star_2.style.transform = `rotate(${rotateValue_s2}deg)`;
    star_2.style.opacity = opacityValue_s2;

    const rotateValue_s3 = Math.min(scrollPosition / 2, 360);
    const opacityValue_s3 = Math.max(1 - scrollPosition / 200, 0.1);
    star_3.style.transform = `rotate(${rotateValue_s3}deg)`;
    star_3.style.opacity = opacityValue_s3;
});
