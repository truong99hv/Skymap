const menubtn = document.querySelectorAll(".menu-btn");
const contentTab = document.querySelectorAll(".content");

const siListBtn = document.querySelectorAll(".side-list-title");
const sideIconRol = document.querySelectorAll(".side-list-title i");
const listUl = document.querySelectorAll(".list-ul");

const LoadMoreItem = document.querySelectorAll(".loadMore");
const loadBtn = document.querySelectorAll(".more-item-btn");

const keySearch = document.getElementById("ser-input");
const infoSearch = document.querySelector(".info-search");
const searchBtn = document.querySelector("#search-btn");
const searchMoreBtn = document.querySelector("#search-more-btn");

const loadList = document.querySelectorAll(".loadList");

const species_count = document.querySelectorAll(".count");
const sort = document.getElementById("sortItem");
const exportBtn = document.querySelector("#importExcel");

const ListBtn = {
  menubtn: menubtn,
  contentTab: contentTab,
  siListBtn: siListBtn,
  sideIconRol: sideIconRol,
  listUl: listUl,
  LoadMoreItem: LoadMoreItem,
  loadBtn: loadBtn,
  keySearch: keySearch,
  infoSearch: infoSearch,
  searchBtn: searchBtn,
  loadList: loadList,
  species_count: species_count,
  sort: sort,
  exportBtn: exportBtn,
  searchMoreBtn: searchMoreBtn,
};

export default ListBtn;
