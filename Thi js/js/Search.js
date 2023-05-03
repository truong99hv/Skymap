import getData from "./getData.js";
import { api } from "./app.js";
import ListBtn from "./button.js";

export function getSearch() {
  ListBtn.keySearch.addEventListener("keyup", async function () {
    let key = "&search=" + ListBtn.keySearch.value;
    let newApi = api + key;
    let newData = await getData(newApi);
    newData = newData.list;
    const html = newData.map((data, index) => {
      if (index >= 0 && index < 3) {
        return `<p class="search-item">${data.ten}<i>${data.ten_khoa_hoc}</i></p>`;
      }
    });
    const htmls = html.join("");
    document.querySelector(".more-info").innerHTML = htmls;
  });
}
