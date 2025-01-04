
window.addEventListener("scroll", () => {
    const star_1 = document.querySelector(".hero-section--img__star-1");
    const star_2 = document.querySelector(".hero-section--img__star-2");
    const star_3 = document.querySelector(".hero-section--img__star-3");
    const visa_img = document.querySelector(".hero-section--img__visa-img");
    const her_sec_txt = document.querySelector(".hero-section--text");
    const her_sec_img = document.querySelector(".hero-section--img");
    const scrollPosition = window.scrollY;

    if (window.innerWidth <= 426) return;

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

function showContent(event, index, button) {
    event.preventDefault();
    
    const contentDiv = document.getElementById('why-us-sec--context__r');
    const content = {
        1: '<img src="assets/images/why-us/services.png" alt="services...">',
        2: '<img src="assets/images/why-us/customer-needs.png" alt="customer-needs...">',
        3: '<img src="assets/images/why-us/transparency-trust.png" alt="transparency-trust...">',
        4: '<img src="assets/images/why-us/continuous-improvement.png" alt="continuous-improvement...">',
    };

    contentDiv.classList.remove('why-us-sec--context__r-animated');
    void contentDiv.offsetWidth;
    contentDiv.innerHTML = content[index];
    contentDiv.classList.add('why-us-sec--context__r-animated');

    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.button-box').forEach(box => box.classList.add('inactive'));
    
    button.classList.add('active');
    button.nextElementSibling.classList.remove('inactive');
}
const container = document.querySelector('.migration-countries-sec--content');
let isMouseDown = false;
let startX;
let scrollLeft;

// زمانی که موس بر روی کانتینر فشرده می‌شود
container.addEventListener('mousedown', (e) => {
  isMouseDown = true;
  container.style.cursor = 'grabbing'; // تغییر نشانه موس
  startX = e.pageX - container.offsetLeft; // موقعیت شروع موس
  scrollLeft = container.scrollLeft; // موقعیت اسکرول شروع
});

// زمانی که موس از کانتینر خارج می‌شود یا دکمه موس رها می‌شود
container.addEventListener('mouseleave', () => {
  isMouseDown = false;
  container.style.cursor = 'grab'; // تغییر نشانه موس به حالت اولیه
});

container.addEventListener('mouseup', () => {
  isMouseDown = false;
  container.style.cursor = 'grab'; // تغییر نشانه موس به حالت اولیه
});

// زمانی که موس حرکت می‌کند و موس پایین است
container.addEventListener('mousemove', (e) => {
  if (!isMouseDown) return; // اگر موس پایین نیست، اسکرول انجام نشود
  e.preventDefault(); // جلوگیری از رفتار پیش‌فرض
  const x = e.pageX - container.offsetLeft; // موقعیت جدید موس
  const walk = (x - startX) * 2; // سرعت حرکت اسکرول
  container.scrollLeft = scrollLeft - walk; // حرکت اسکرول به موقعیت جدید
});

function truncateText(element, wordLimit) {
  let text = element.textContent; // گرفتن متن از عنصر
  let words = text.split(' '); // تقسیم متن به کلمات
  if (words.length > wordLimit) {
      words = words.slice(0, wordLimit); // انتخاب فقط n کلمه
      element.textContent = words.join(' ') + '...'; // پیوستن کلمات و اضافه کردن سه نقطه
  }
}

const elements = document.querySelectorAll('.truncate-text');

if (window.innerWidth >= 768) {
  elements.forEach(element => {
    truncateText(element, 71);
  });
} else if (window.innerWidth >= 426) {
  elements.forEach(element => {
    truncateText(element, 79);
  });
} else {
  elements.forEach(element => {
    truncateText(element, 78);
  });
}