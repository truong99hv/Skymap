const p = document.querySelector("p");
const button = document.querySelector("button");
const handleClick = () => {
  p.classList.toggle("hide");
};

button.onclick = handleClick;

const fruid = document.querySelector(".fruid");
const fruidLists = document.querySelector(".fruid-lists");
const listFruid = ["Apple", "Orange", "Mango", "Lemon", "Pear"];

listFruid.forEach((item) => {
  console.log(item);
});

// listFruid.forEach((item, i) => {
//   results.push(item);
// });

// console.log(results);

// console.log(results);
var html = "<ul>";
for (var i = 0; i < listFruid.length; i++) {
  html += `<li>${listFruid[i]}</li>`;
}
html += "</ul>";

fruid.innerHTML = html;

// fruidLists.innerHTML += `
// <ul>
// ${listFruid.map((item, index) => {
//   return `<li>${item}</li>`;
// })}
// </ul>`;

window.addEventListener("DOMContentLoaded", function () {
  const showInHtml = listFruid.map((item, index) => {
    console.log(listFruid);
    return `
           <li>${item}</li>
        `;
  });

  fruidLists.innerHTML = showInHtml;
});

// const list = document.getElementById("list");

// list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;
