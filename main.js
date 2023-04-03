let imagesItems = [...document.querySelectorAll(".img-wrap")];
console.log(imagesItems);

let titles = [...document.querySelectorAll("h2")];
let texts = [...document.querySelectorAll("p")];
let titleMessage = document.querySelector(".title");

// 監視対象になった瞬間、activeを付与する関数
let setItemActive = (entries) => {
  // console.log(entries);
  entries.forEach((entry) => {
    if(entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
};

let options = {
  rootMargin: "0px",
  threshold: 0.5,
};

// 位置監視、特定の位置に来たら表示する
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

// img-wrapの出現を偶数と奇数で分ける/pythonist19/status/1642399825701539840
imagesItems.map((item, index) => {
  console.log(item, index);
  item.children[0].style.backgroundImage = `url(./images/${index + 1}.jpg)`;
  index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
  observer.observe(item);
});

titles.map((title, index) => {
  index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
  observer.observe(title);
});

texts.map((text, index) => {
  index % 2 == 0 ? (text.style.left = "45%") : (text.style.left = "35%");
  observer.observe(text);
})
