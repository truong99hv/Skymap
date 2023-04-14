async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    (error) => {
      console.error("Error:", error);
    };
  }
}

function showData(data) {
  const tableContainer = document.querySelector("#table-container");
  if (data.length === 0) {
    tableContainer.innerHTML = "<p>Danh sách trống</p>";

    return;
  }

  let html = `
  <table>
       <thead>
            <tr>
                 <th>ID</th>
                 <th>Name</th>
                 <th>Username</th>
                 <th>Email</th>
            </tr>
       </thead>
    <tbody>
  `;
  data.forEach((user) => {
    html += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
        </tr>

    `;
  });
  html += `
     </tbody>
   </table>  `;
  tableContainer.innerHTML = html;
}

getData().then((data) => {
  showData(data);
});

// Hàm để tạo phân trang
function Pagination(currentPage, pageSize, totalItems) {
  // Tính số trang dựa trên kích thước trang và tổng số mục
  const totalPages = Math.ceil(totalItems / pageSize);

  // Xác định trang đầu tiên và trang cuối cùng
  let startPage, endPage;
  if (totalPages <= 10) {
    // Hiển thị tất cả các trang nếu tổng số trang ít hơn hoặc bằng 10
    startPage = 1;
    endPage = totalPages;
  } else {
    // Hiển thị các trang xung quanh trang hiện tại
    if (currentPage <= 6) {
      startPage = 1;
      endPage = 10;
    } else if (currentPage + 4 >= totalPages) {
      startPage = totalPages - 9;
      endPage = totalPages;
    } else {
      startPage = currentPage - 5;
      endPage = currentPage + 4;
    }
  }
  // Tạo một mảng các trang để hiển thị
  const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
    (i) => startPage + i
  );

  // Tạo các phần tử điều hướng trang
  const prevPage = currentPage - 1;
  const nextPage = currentPage + 1;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = currentPage < totalPages;

  // Hiển thị các phần tử điều hướng trang
  const pagination = document.getElementById("pagination");
  pagination.innerHTML = "";
  const firstButton = document.createElement("button");
  firstButton.textContent = "First";

  pageButton.textContent = page;
  pageButton.className = "page-button";
  pageButton.classList.add("active");
  if (page !== currentPage) {
    pageButton.addEventListener("click", () => onPageChange(page));
  } else {
    pageButton.disabled = true;
  }
  pagination.appendChild(pageButton);
}

const nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.disabled = !hasNextPage;
nextButton.addEventListener("click", () => onPageChange(nextPage));
pagination.appendChild(nextButton);

const lastButton = document.createElement("button");
lastButton.textContent = "Last";
lastButton.disabled = currentPage === totalPages;
lastButton.addEventListener("click", () => onPageChange(totalPages));
pagination.appendChild(lastButton);

// Hàm để thêm mới một mục dữ liệu vào DOM và render lại
function addData(item) {
  userData.push(item);
  showData(userData);
}

// Gọi hàm getData để lấy dữ liệu từ API và render lần đầu tiên
getData().then(() => {
  showData(userData);
});

// Sử dụng các hàm đã viết để vẽ trang phân trang và render lại khi trang thay đổi
function onPageChange(page) {
  const pageSize = document.getElementById("page-size-select").value;
  const start = (page - 1) * pageSize;
  const end = start + parseInt(pageSize);
  const data = userData.slice(start, end);
  showData(data);
  Pagination(page, parseInt(pageSize), userData.length);
}

// Thêm sự kiện cho phần tử select để render lại khi kích thước trang thay đổi
document.getElementById("page-size-select").addEventListener("change", () => {
  onPageChange(1);
});
