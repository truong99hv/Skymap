// const tableBody = document.querySelector("#tableBody");
// const pagination = document.querySelector("#pagination");
// const perPageSelect = document.querySelector("#perPageSelect");
// let currentPage = 1;
// let perPage = parseInt(perPageSelect.value);

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => resolve(data))
//       .catch((error) => reject(error));
//   });
// };

// const showData = (data, page = 1, limit = perPage) => {
//   currentPage = page;
//   const startIndex = (page - 1) * limit;
//   const endIndex = page * limit;
//   const paginatedData = data.slice(startIndex, endIndex);
//   tableBody.innerHTML = "";
//   paginatedData.forEach((item) => {
//     const tr = document.createElement("tr");
//     tr.innerHTML = `
//       <td>${item.id}</td>
//       <td>${item.name}</td>
//       <td>${item.username}</td>
//       <td>${item.email}</td>
//       <td>${item.phone}</td>
//     `;
//     tableBody.appendChild(tr);
//   });
//   showPagination(data.length);
// };

// const showPagination = (totalItems) => {
//   const totalPages = Math.ceil(totalItems / perPage);
//   pagination.innerHTML = "";
//   for (let i = 1; i <= totalPages; i++) {
//     const li = document.createElement("li");
//     li.innerHTML = `<a href="#" data-page="${i}">${i}</a>`;
//     if (i === currentPage) {
//       li.classList.add("active");
//     }
//     pagination.appendChild(li);
//   }
// };

// const paginate = (event) => {
//   if (event.target.tagName === "A") {
//     const page = parseInt(event.target.getAttribute("data-page"));

//     showData(users, page);
//   }
// };

// getData()
//   .then((data) => {
//     showData(data);
//     perPageSelect.addEventListener("change", () => {
//       perPage = parseInt(perPageSelect.value);
//       showData(data);
//     });
//     pagination.addEventListener("click", paginate);
//   })
//   .catch((error) => console.error(error));

// const perPage = document.querySelector("#per-page").value;
// const url = "https://jsonplaceholder.typicode.com/users";

// const getData = async () => {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// };

// const showData = (data) => {
//   const tableBody = document.querySelector("#table-body");
//   tableBody.innerHTML = "";
//   data.forEach((user) => {
//     const row = `
//       <tr>
//         <td>${user.name}</td>
//         <td>${user.username}</td>
//         <td>${user.email}</td>
//         <td>${user.phone}</td>
//         <td>${user.website}</td>
//       </tr>
//     `;
//     tableBody.innerHTML += row;
//   });
// };

// const pagination = (data) => {
//   const totalPages = Math.ceil(data.length / perPage);
//   let currentPage = 1;

//   const renderPage = (page) => {
//     const start = (page - 1) * perPage;
//     const end = start + perPage;
//     const pageData = data.slice(start, end);
//     showData(pageData);

//     const paginationInfo = document.querySelector("#pagination-info");
//     paginationInfo.innerText = `Showing ${start + 1} to ${end} of ${
//       data.length
//     } entries`;

//     const pagination = document.querySelector("#pagination");
//     pagination.innerHTML = "";

//     let buttons = `
//       <li class="page-item ${currentPage === 1 ? "disabled" : ""}">
//         <a class="page-link" href="#" data-page="${
//           currentPage - 1
//         }">Previous</a>
//       </li>
//     `;

//     for (let i = 1; i <= totalPages; i++) {
//       buttons += `
//         <li class="page-item ${i === currentPage ? "active" : ""}">
//           <a class="page-link" href="#" data-page="${i}">${i}</a>
//         </li>
//       `;
//     }

//     buttons += `
//       <li class="page-item ${currentPage === totalPages ? "disabled" : ""}">
//         <a class="page-link" href="#" data-page="${currentPage + 1}">Next</a>
//       </li>
//     `;

//     pagination.innerHTML = buttons;

//     const pageLinks = document.querySelectorAll(".page-link");
//     pageLinks.forEach((link) => {
//       link.addEventListener("click", (e) => {
//         e.preventDefault();
//         currentPage = parseInt(e.target.getAttribute("data-page"));
//         renderPage(currentPage);
//       });
//     });
//   };

//   renderPage(currentPage);
// };

// const init = async () => {
//   const data = await getData();
//   pagination(data);
// };

// init();

let data = [];
let currentPage = 1;
const rowsPerPageSelect = document.getElementById("rowsPerPageSelect");
const tableBody = document.getElementById("tableBody");

// Hàm lấy dữ liệu từ API
const getData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonData = await response.json();
    data = jsonData;
    pagination(data, currentPage, rowsPerPageSelect.value);
  } catch (error) {
    console.log(error);
  }
};

// Hàm hiển thị dữ liệu trên màn hình
const showData = (data) => {
  tableBody.innerHTML = "";
  data.forEach((item) => {
    tableBody.innerHTML += `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>
      </tr>
    `;
  });
};

// Hàm phân trang và hiển thị dữ liệu
const pagination = (data, currentPage, rowsPerPage) => {
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);
  showData(paginatedData);

  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginationEl = document.getElementById("pagination");

  let pageHtml = "";

  if (currentPage > 1) {
    pageHtml += `<button onclick="pagination(data, ${
      currentPage - 1
    }, ${rowsPerPage})">Prev</button>`;
  }

  for (let i = 1; i <= totalPages; i++) {
    if (i === currentPage) {
      pageHtml += `<button class="active" onclick="pagination(data, ${i}, ${rowsPerPage})">${i}</button>`;
    } else {
      pageHtml += `<button onclick="pagination(data, ${i}, ${rowsPerPage})">${i}</button>`;
    }
  }

  if (currentPage < totalPages) {
    pageHtml += `<button onclick="pagination(data, ${
      currentPage + 1
    }, ${rowsPerPage})">Next</button>`;
  }

  paginationEl.innerHTML = pageHtml;
};

// Sự kiện khi thay đổi số item trên 1 trang
rowsPerPageSelect.addEventListener("change", () => {
  pagination(data, currentPage, rowsPerPageSelect.value);
});

// Lấy dữ liệu khi trang web được tải lên
getData();
