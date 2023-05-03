import { Api } from "./router.js";
import getData from "./getData.js";
import { removeLoad, increase_decrease } from "./Loading.js";
import {
  renderSideMenu,
  renOtherTableSpecies,
  renTableSpecies,
  renderGridSpieces,
  renderOtherListSpecies,
  emptyRender,
} from "./RenderData.js";
import ListBtn from "./button.js";
import drawChart from "./Charts.js";
import exportExcel from "./ExportExcel.js";
import { getSearch } from "./Search.js";

var perPage;
export var api = Api.listSpecies;
export var newApi = "";

async function App() {
  try {
    let currentStatus = await getData(Api.ListCurrent);
    let provinces = await getData(Api.ListProvince);
    let redBook = await getData(Api.ListRedBook);
    let data = await getData(Api.listSpecies);
    renderSideMenu(currentStatus, provinces, redBook);
    Render(data);
    removeLoad();
    increase_decrease();
    const listStatus = document.querySelectorAll("#currentStatus .inCheck");
    const listProvince = document.querySelectorAll("#provinces .inCheck");
    const listRedBook = document.querySelectorAll("#redBook .inCheck");
    const listIUCN = document.querySelectorAll("#IUCN .inCheck");
    getSearch();
    filterDataCheckBox(listStatus, "&loaihientrang_ids[]=");
    filterDataCheckBox(listProvince, "&province_ids[]=");
    filterDataCheckBox(listRedBook, "&sach_do_ids[]=");
    filterDataCheckBox(listIUCN, "&iucn_ids[]=");

    exportExcel();

    document
      .querySelector(".uncheckAll")
      .addEventListener("click", async () => {
        var check = document.querySelectorAll(".inCheck");
        for (var i = 0; i < check.length; i++) {
          check[i].checked = false;
        }
        api = Api.listSpecies;
        emptyRender();
        let reRender = await getData(api);
        document.querySelector(".uncheckAll").classList.remove("active");
        Render(reRender);
        removeLoad();
      });
  } catch (error) {
    console.log("ERROR", error);
  }
}
App();

async function Render(data) {
  perPage = 18;
  newApi = api;

  let total = data.pagination.total;
  let newArr = data.list;
  renOtherTableSpecies(newArr);
  renTableSpecies(newArr);
  renderGridSpieces(newArr);
  renderOtherListSpecies(newArr);
  ListBtn.species_count.forEach((count) => {
    count.innerHTML = `Kết quả(${total})`;
  });
}

for (let i = 0; i < ListBtn.menubtn.length; i++) {
  ListBtn.menubtn[i].addEventListener("click", function () {
    for (let j = 0; j < ListBtn.menubtn.length; j++) {
      ListBtn.menubtn[j].classList.remove("current-tab");
      ListBtn.contentTab[j].classList.remove("active");
    }
    ListBtn.menubtn[i].classList.add("current-tab");
    ListBtn.contentTab[i].classList.add("active");
    if (i == ListBtn.menubtn.length - 1) {
      drawChart();
    }
  });
}

for (let i = 0; i < ListBtn.siListBtn.length; i++) {
  ListBtn.siListBtn[i].addEventListener("click", function () {
    ListBtn.sideIconRol[i].classList.toggle("ro-90");
    ListBtn.listUl[i].classList.toggle("active");
  });
}

function filterDataCheckBox(checkBox, string) {
  for (let i = 0; i < checkBox.length; i++) {
    checkBox[i].addEventListener("click", async () => {
      let str1 = string + checkBox[i].value;
      emptyRender();
      if (checkBox[i].checked == true) {
        document.querySelector(".uncheckAll").classList.add("active");
        api += str1;
        let respone = await getData(api);
        Render(respone);
      } else {
        api = api.replace(str1, "");
        let respone = await getData(api);
        Render(respone);
      }
      removeLoad();
    });
  }
}

ListBtn.keySearch.addEventListener("click", () => {
  ListBtn.infoSearch.classList.add("active");
});

ListBtn.infoSearch.addEventListener("mouseleave", () => {
  ListBtn.infoSearch.classList.remove("active");
});
let key = "";
ListBtn.searchBtn.addEventListener("click", async () => {
  api = api.replace(key, "");
  key = "&search=" + ListBtn.keySearch.value;
  api = api + key;
  emptyRender();
  let newData = await getData(api);
  Render(newData);
  removeLoad();
  console.log(api);
});

ListBtn.searchMoreBtn.addEventListener("click", async () => {
  api = api.replace(key, "");
  key = "&search=" + ListBtn.keySearch.value;
  api = api + key;
  emptyRender();
  let newData = await getData(api);
  Render(newData);
  removeLoad();
  console.log(api);
});

ListBtn.loadBtn.forEach((btn) => {
  btn.addEventListener("click", async () => {
    perPage += 12;
    for (let i = 0; i < ListBtn.loadBtn.length; i++) {
      ListBtn.loadBtn[i].classList.add("loading");
      ListBtn.LoadMoreItem[i].classList.add("hidden");
    }
    let start = api.slice(0, 76);
    let end = api.slice(78);
    newApi = start + perPage + end;
    let data = await getData(newApi);
    for (let i = 0; i < ListBtn.loadBtn.length; i++) {
      ListBtn.loadBtn[i].classList.remove("loading");
      ListBtn.LoadMoreItem[i].classList.remove("hidden");
    }
    data = data.list;
    renderOtherListSpecies(data);
    renOtherTableSpecies(data);
  });
});
