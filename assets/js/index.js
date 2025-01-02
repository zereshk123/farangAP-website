
window.addEventListener("scroll", () => {
    const star_1 = document.querySelector(".hero-section--img__star-1");
    const star_2 = document.querySelector(".hero-section--img__star-2");
    const star_3 = document.querySelector(".hero-section--img__star-3");
    const visa_img = document.querySelector(".hero-section--img__visa-img");
    const her_sec_txt = document.querySelector(".hero-section--text");
    const her_sec_img = document.querySelector(".hero-section--img");
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

    const tranlateX_visa = Math.min(scrollPosition / 25, 25);
    visa_img.style.transform = `translateX(${tranlateX_visa}px)`;


    const traslateX_hero_sec_txt = Math.min(scrollPosition / 10, 150);
    const opacity_hero_sec_txt = Math.max(1 - scrollPosition / 500, 0);
    her_sec_txt.style.transform = `translateX(${traslateX_hero_sec_txt}px)`;
    her_sec_txt.style.opacity = opacity_hero_sec_txt;

    const traslateX_hero_sec_img = Math.min(scrollPosition / 10, 150);
    const opacity_hero_sec_img = Math.max(1 - scrollPosition / 500, 0);
    her_sec_img.style.transform = `translateX(-${traslateX_hero_sec_img}px)`;
    her_sec_img.style.opacity = opacity_hero_sec_img;
});