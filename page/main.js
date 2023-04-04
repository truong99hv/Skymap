const table = document.querySelector(".table");

let students = [
  {
    name: "Nguyen Van Huong",
    class: "1a",
  },
  {
    name: "Hoang Van Truong",
    class: "2b",
  },
  {
    name: "Dng Tien Hoang",
    class: "3c",
  },
  {
    name: "Thomas Tuchel",
    class: "4d",
  },
  {
    name: "Iron man",
    class: "5e",
  },
  {
    name: "Phan Manh Quynh",
    class: "6a",
  },
  {
    name: "Hoang Van Long",
    class: "7b",
  },
  {
    name: "Tran Tien Tri",
    class: "8c",
  },
  {
    name: "Thomas Tuchel",
    class: "9d",
  },
  {
    name: "Iron man",
    class: "10e",
  },
];

let element = `
<thead>

   <tr>
        <th>STT</th>
        <th>Name</th>
        <th>Class</th>
    </tr></thead>`;

students.map((student, index) => {
  element += `
        <tr class = "item">
            <td>${index + 1}</td>
            <td>${student.name}</td>
            <td>${student.class}</td>
        </tr>
  `;
});
table.innerHTML += element;

let thisPage = 1;
let limit = 2;
let list = document.querySelectorAll(".item");

function loadItem() {
  let beginGet = limit * (thisPage - 1);
  let endGet = limit * thisPage - 1;
  list.forEach((item, key) => {
    if (key >= beginGet && key <= endGet) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
  listPage();
}
loadItem();
function listPage() {
  let count = Math.ceil(list.length / limit);
  document.querySelector(".listPage").innerHTML = "";

  if (thisPage != 1) {
    let prev = document.createElement("li");
    prev.innerText = "PREV";
    prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
    document.querySelector(".listPage").appendChild(prev);
  }

  for (i = 1; i <= count; i++) {
    let newPage = document.createElement("li");
    newPage.innerText = i;
    if (i == thisPage) {
      newPage.classList.add("active");
    }
    newPage.setAttribute("onclick", "changePage(" + i + ")");
    document.querySelector(".listPage").appendChild(newPage);
  }

  if (thisPage != count) {
    let next = document.createElement("li");
    next.innerText = "NEXT";
    next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
    document.querySelector(".listPage").appendChild(next);
  }
}
function changePage(i) {
  thisPage = i;
  loadItem();
}
