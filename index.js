//! DOM ACCESS
const heroTitle = document.getElementById("hero-animate");
const returnTop = document.getElementById("return-top");
const navbar = document.getElementById("navbar");
const screenLeft = document.getElementsByClassName("screen-left")[0];
const sidebar = document.getElementById("side-bar");
//! DOM ACCESS
const title = "I'am Göktuğ Gezer";
let index = 0;
let animate;
let toggleClick = false;

//! Herodaki isim yazısı için animasyon
const heroAnimation = () => {
  heroTitle.textContent = heroTitle.textContent.replace("_", "");
  heroTitle.innerHTML += `${title[index]}_`;
  if (index == 17) {
    index = 0;
    heroTitle.innerHTML = title + "_";
    clearInterval(animate);
    setTimeout(() => {
      animate = setInterval(heroAnimation, 200);
      heroTitle.innerHTML = "_";
    }, 5000);
  } else {
    index++;
  }
};

animate = setInterval(heroAnimation, 200);

//! Belli bir yükseklik kaydırıldığında navbarın tekrar gözükmesi animasyonu...
//! ve sol ekran sosyal medya ve başa dön butonlarının ortaya çıkması
const scrollFunction = () => {
  if (
    document.body.scrollTop > 650 ||
    document.documentElement.scrollTop > 650
  ) {
    returnTop.style.display = "flex";
    screenLeft.style.display = "flex";
    screenLeft.style.animation = "screenleftAnimateStart 0.3s linear";
    returnTop.style.animation = "returnTopAnimateStart 0.3s linear";
    navbar.classList.add("fixedNavbar");
  } else {
    screenLeft.style.animation = "screenleftAnimateClose 0.3s linear";
    returnTop.style.animation = "returnTopAnimateClose 0.3s linear";
    navbar.classList.remove("fixedNavbar");

    setTimeout(() => {
      returnTop.style.display = "none";
      screenLeft.style.display = "none";
    }, 300);
  }
};
window.addEventListener("scroll", scrollFunction);

//! Mobilde sol navigasyon side bar eventleri
const screenSideBarHandle = (event) => {
  if (event.target.classList.contains("side-bar"))
    toggleSideBar();
};
const toggleSideBar = () => {
  !toggleClick
    ? ((sidebar.style.display = "flex"),
      (toggleClick = true),
      window.addEventListener("click", screenSideBarHandle))
    : ((sidebar.style.display = "none"),
      (toggleClick = false),
      window.removeEventListener("click", screenSideBarHandle));
};
