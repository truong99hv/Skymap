const apiEndpoint = "https://jsonplaceholder.typicode.com/users";
const dataPerPageSelect = document.getElementById("data-per-page-select");
const tableBody = document.getElementById("table-body");
const paginationContainer = document.getElementById("pagination-container");

let currentPage = 1;
let dataPerPage = parseInt(dataPerPageSelect.value);
let totalData = 0;
let totalPages = 0;
let data = [];

// Get data from API
async function getData() {
  try {
    const response = await fetch(apiEndpoint);
    const jsonData = await response.json();
    data = jsonData;
    totalData = data.length;
    totalPages = Math.ceil(totalData / dataPerPage);
    renderPageButtons();
    renderData();
  } catch (error) {
    // console.error(error);
  }
}

// Render data to table
function showData() {
  if (totalData === 0) {
    tableBody.innerHTML = '<tr><td colspan="4">No data found</td></tr>';
  } else {
    let html = "";
    const start = (currentPage - 1) * dataPerPage;
    const end = start + dataPerPage;
    data.slice(start, end).forEach((item) => {
      html += `
        <tr>
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.username}</td>
          <td>${item.email}</td>
        </tr>
      `;
    });
    tableBody.innerHTML = html;
  }
}

// Render pagination buttons
function renderPageButtons() {
  let html = "";
  if (totalPages > 1) {
    html += `
      <button class="page-btn" data-page="1">First</button>
      <button class="page-btn" data-page="${currentPage - 1}">Prev</button>
    `;
    for (let i = 1; i <= totalPages; i++) {
      html += `<button class="page-btn ${
        i === currentPage ? "active" : ""
      }" data-page="${i}">${i}</button>`;
    }
    html += `
      <button class="page-btn" data-page="${currentPage + 1}">Next</button>
      <button class="page-btn" data-page="${totalPages}">Last</button>
    `;
  }
  paginationContainer.innerHTML = html;
}

// Handle page button click
function handlePageButtonClick(event) {
  const button = event.target;
  if (button.tagName === "BUTTON") {
    const page = parseInt(button.getAttribute("data-page"));
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      currentPage = page;
      renderPageButtons();
      showData();
    }
  }
}

// Handle data per page select change
function handleDataPerPageSelectChange(event) {
  dataPerPage = parseInt(event.target.value);
  totalPages = Math.ceil(totalData / dataPerPage);
  currentPage = 1;
  renderPageButtons();
  showData();
}

// Initialize pagination
function pagination() {
  getData();
  dataPerPageSelect.addEventListener("change", handleDataPerPageSelectChange);
  paginationContainer.addEventListener("click", handlePageButtonClick);
}

pagination();
