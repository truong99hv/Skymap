import { arr } from "../student";

// JavaScript Code

var tableBody = document.getElementById("tableBody");
var searchInput = document.getElementById("searchInput");
var page = document.querySelector(".page");
var listData = [];
//localStorage.setItem()

async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    listData = data;
    return listData;
  } catch (error) {
    console.log(error);
  }
}

async function init() {
  await getData();
  papinator(1, listData);
}

init();

async function papinator(currentPage = 1, data) {
  var perpage, pageCount, total;
  // perpagenode
  let result = [];
  result = [...data];
  console.log(result);
  perpage = document.querySelector(".per-page")
    ? document.querySelector(".per-page").value
    : 5;

  total = result.length;
  pageCount = total / perpage;

  if (!Number.isInteger(pageCount)) {
    pageCount = Math.ceil(pageCount);
  }
  // sinh html
  var paginationInnerHTML = "";
  if (data === "") {
    paginationInnerHTML += `<h2>Khong co du lieu</h2>`;
  } else {
    if (pageCount > 1) {
      paginationInnerHTML +=
        '<li class="page-item"><a class="page-link" href="javascript:papinator(1,' +
        [result] +
        ')" title="Trang đầu"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>';
      if (currentPage == 1) {
        paginationInnerHTML +=
          '<li class="page-item disabled"><a class="page-link" href="javascript:papinator(1,' +
          [result] +
          ')" title="Trang trước"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>';
      } else {
        paginationInnerHTML +=
          '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
          (currentPage - 1) +
          "," +
          [result] +
          ')" title="Trang trước"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>';
      }
      if (pageCount <= 3) {
        var i;
        for (var i = 1; i <= pageCount; i++) {
          if (i == currentPage) {
            paginationInnerHTML +=
              '<li class="page-item active"><a class="page-link" href="javascript:papinator(' +
              i +
              "," +
              [result] +
              ')">' +
              i +
              "</a></li>";
          } else {
            paginationInnerHTML +=
              '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
              i +
              "," +
              [result] +
              ')">' +
              i +
              "</a></li>";
          }
        }
      } else {
        var minPageIndex = currentPage - 3 > 0 ? currentPage - 3 + 1 : 1;
        var manPageIndex = currentPage - 3 > 0 ? currentPage : 3;
        if (currentPage == pageCount) {
          paginationInnerHTML +=
            '<li class="page-item"><a class="page-link" href="#">...</a></li>';
        }
        var i;
        for (var i = minPageIndex; i <= manPageIndex; i++) {
          if (i == currentPage) {
            paginationInnerHTML +=
              '<li class="page-item active"><a class="page-link" href="javascript:papinator(' +
              i +
              "," +
              [result] +
              ')">' +
              i +
              "</a></li>";
          } else {
            paginationInnerHTML +=
              '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
              i +
              "," +
              [result] +
              ')">' +
              i +
              "</a></li>";
          }
        }
        if (currentPage > 3 && currentPage != pageCount) {
          paginationInnerHTML +=
            '<li class="page-item"><a class="page-link" href="#">...</a></li>';
        }
      }
      if (currentPage == pageCount) {
        paginationInnerHTML +=
          '<li class="page-item disabled"><a class="page-link" href="javascript:papinator(' +
          currentPage +
          "," +
          [result] +
          ')" title="Trang sau"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>';
      } else {
        paginationInnerHTML +=
          '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
          (currentPage + 1) +
          "," +
          [result] +
          ')" title="Trang sau"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>';
      }
      paginationInnerHTML +=
        '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
        pageCount +
        "," +
        [result] +
        ')" title="Trang cuối"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>';
    }
  }
  document.querySelector(".pagination").innerHTML = paginationInnerHTML;

  var maxIndexShow =
    currentPage * perpage < total ? currentPage * perpage : total;
  var minIndexShow = (currentPage - 1) * perpage;
  document.getElementById("info-paginator").innerHTML =
    "Hiển thị: " +
    ((currentPage - 1) * perpage + 1) +
    " - " +
    maxIndexShow +
    " trên " +
    total;

  var txt = "";

  for (let i = minIndexShow; i < maxIndexShow; i++) {
    txt +=
      "<tr>" +
      "<td>" +
      result[i].id +
      "</td>" +
      "<td>" +
      result[i].name +
      "</td>" +
      "<td>" +
      result[i].email +
      "</td>" +
      "<td>" +
      result[i].address.city +
      "</td>" +
      "<td>" +
      result[i].company.name +
      "</td>" +
      "<td>" +
      "<button class='eidt' >Edit</button>" +
      "<button class='delete' >Delete</button>" +
      "</td>";
    ("</tr>");
  }

  // interhtml
  document.getElementsByTagName("tbody")[0].innerHTML = txt;
}

function searchData() {
  const filter = searchInput.value.toUpperCase();
  const rows = tableBody.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].getElementsByTagName("td");
    let isMatch = false;
    for (let j = 0; j < columns.length; j++) {
      const value = columns[j].innerText.toUpperCase();
      if (value.indexOf(filter) > -1) {
        isMatch = true;
        break;
      }
    }

    if (isMatch) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

searchInput.addEventListener("keyup", searchData);

async function sortData(key, order) {
  const tableBody = document.querySelector("#tableBody");
  const rows = Array.from(tableBody.querySelectorAll("tr"));

  rows.sort((rowA, rowB) => {
    const cellA = rowA.querySelector(`td:nth-child(${key})`).textContent;
    const cellB = rowB.querySelector(`td:nth-child(${key})`).textContent;

    if (order === "asc") {
      if (cellA < cellB) {
        return -1;
      } else if (cellA > cellB) {
        return 1;
      } else {
        return 0;
      }
    } else {
      if (cellA > cellB) {
        return -1;
      } else if (cellA < cellB) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  rows.forEach((row) => {
    tableBody.appendChild(row);
  });
}

const btndExport = document.querySelector("#export-csv-btn");
btndExport.addEventListener("click", async () => {
  const data = await getData();
  const csvData = Papa.unparse(data);
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", "sinhVien-list");
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

const add = document.querySelector(".add");
function addData() {
  let nameInput = document.querySelector(".name-input");
  let emailInput = document.querySelector(".email-input");
  let cityInput = document.querySelector(".city-input");
  let companyInput = document.querySelector(".company-input");

  if (
    nameInput === "" ||
    emailInput === "" ||
    cityInput === "" ||
    companyInput === ""
  ) {
    return alert("vui lòng điền đầy đủ thông tin !!!");
  } else {
    let id = listData.length + 1;
    let newUser = {
      id: id,
      name: nameInput.value,
      email: emailInput.value,
      address: { city: cityInput.value },
      company: {
        name: companyInput.value,
      },
    };

    // let index = data.findIndex((c) => c.id == data.id);
    // if (index >= 0) {
    //   data.splice(index, 1, newUser);
    // } else {
    //   data.push(newUser);
    // }

    listData.push(newUser);

    nameInput.value = "";
    emailInput.value = "";
    cityInput.value = "";
    companyInput.value = "";

    papinator(1, listData);
    // console.log(listData);
  }
}
add.addEventListener("click", addData);
