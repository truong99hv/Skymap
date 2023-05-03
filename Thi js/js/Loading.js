import ListBtn from "./button.js";
import {
  emptyRenderTable,
  renOtherTableSpecies,
  renTableSpecies,
} from "./RenderData.js";
import getData from "./getData.js";
import { newApi } from "./app.js";

export function loadingData() {
  for (let i = 0; i < ListBtn.loadList.length; i++) {
    ListBtn.loadList[i].classList.add("loading");
  }
}
export function removeLoad() {
  for (let i = 0; i < ListBtn.loadList.length; i++) {
    ListBtn.loadList[i].classList.remove("loading");
  }
}

let Increase = true;
export function increase_decrease() {
  ListBtn.sort.addEventListener("click", async () => {
    let render;
    if (Increase == true) {
      ListBtn.sort.style.transform = "rotate(0deg)";
      emptyRenderTable();
      loadingData();
      render = await getData(newApi);
      render = render.list;
      render = render.sort((a, b) => a.ten.localeCompare(b.ten));
      Increase = false;
    } else if (Increase == false) {
      ListBtn.sort.style.transform = "rotate(180deg)";
      emptyRenderTable();
      loadingData();
      render = await getData(newApi);
      render = render.list;
      render = render.sort((a, b) => b.ten.localeCompare(a.ten));
      Increase = true;
    }
    renTableSpecies(render);
    renOtherTableSpecies(render);
    removeLoad();
    return Increase;
  });
}
