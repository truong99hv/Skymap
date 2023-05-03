import { Api } from "./router.js";

export function emptyRender() {
  const html = "";
  document.getElementById("table-other-list").innerHTML = html;
  document.getElementById("table-list").innerHTML = html;
  document.getElementById("grid-list").innerHTML = html;
  document.getElementById("grid-other-list").innerHTML = html;
}

export function emptyRenderTable() {
  const html = "";
  document.getElementById("table-other-list").innerHTML = html;
  document.getElementById("table-list").innerHTML = html;
}
// dia gioi hanh chinh
function renListProvinces(data) {
  const html = data.map((data, index) => {
    if (index >= 0) {
      return `
    <li><input class="inCheck" type="checkbox" value="${data.id}" /> ${data.name}</li>`;
    }
  });
  const htmls = html.join("");
  document.getElementById("provinces").innerHTML = htmls;
}

// trang thai
function renCurrentStatus(data) {
  const html = data.map((data, index) => {
    if (index >= 0) {
      return `
    <li><input class="inCheck" type="checkbox" value="${data.id}" /> ${data.ten}</li>`;
    }
  });
  const htmls = html.join("");
  document.getElementById("currentStatus").innerHTML = htmls;
}

// sach do
function renListRedBook(data) {
  const arr = data[0].childs;

  const html = arr.map((data, index) => {
    if (index >= 0) {
      return `
    <li><input class="inCheck" type="checkbox" value="${data.id}" /> ${data.ma_danh_muc} ${data.ten}</li>`;
    }
  });
  const htmls = html.join("");
  document.getElementById("redBook").innerHTML = htmls;
}

// IUCN
function renListIUCNS(data) {
  const arr = data[1].childs;

  const html = arr.map((data, index) => {
    if (index >= 0) {
      return `
        <li><input class="inCheck" type="checkbox" value="${data.id}" /> ${data.ma_danh_muc} ${data.ten}</li>`;
    }
  });
  const htmls = html.join("");
  document.getElementById("IUCN").innerHTML = htmls;
}

// danh sach dang luoi
export function renderGridSpieces(data) {
  const html = data.map((data, index) => {
    if (index >= 0 && index < 6) {
      let id = "species" + data.id;
      let code_sach_dos = "NE";
      let code_iucns = "NE";
      let classRedbook = "";
      let classIUCN = "";
      let srcImg = Api.domain + "/static/img/image4.5aecb9b5.png";
      let status = `<p>
      <i class="fa-solid fa-circle-question"></i>Chưa xác định
    </p>`;
      if (data.loai_hien_trang != null) {
        status = `<p>
        <i class="fa-solid fa-arrow-down"></i>${data.loai_hien_trang.ten}
        </p>`;
      }
      if (data.attachments.length > 0) {
        srcImg = Api.domain + data.attachments[0].path;
      }
      if (data.sach_dos.length > 0) {
        code_sach_dos = data.sach_dos[0].ma_danh_muc;
        classRedbook = "VN-code";
      }
      if (data.iucns.length > 0) {
        code_iucns = data.iucns[0].ma_danh_muc;
        classIUCN = "IUNC-code";
      }
      return `
      <div class="notice-item">
      <div class="divImg">
      <img
        src="${srcImg}"
        alt="${data.ten} - ${data.phylumn.ten}"
      />
      </div>
      <div class="info-item">
        <div class="animal-info">
          <p>${data.kingdom.ten} - ${data.phylumn.ten}</p>
          <h4>${data.ten}</h4>
          <p><i>${data.ten_khoa_hoc}</i></p>
          ${status}
          
        </div>
        <div class="animal-code">
          <div id="${id}" class="qr-code"></div>
          <div class="red-book-code">
          <span class="${classRedbook}">${code_sach_dos}</span>
          <span class="${classIUCN}">${code_iucns}</span>
          </div>
        </div>
      </div>
    </div>`;
    }
  });
  const htmls = html.join("");
  document.getElementById("grid-list").innerHTML = htmls;
}

// dang luoi khac
export function renderOtherListSpecies(data) {
  const html = data.map((data, index) => {
    if (index >= 6) {
      let id = "species" + data.id;
      let code_sach_dos = "";
      let classRedbook = "";
      let classIUCN = "";
      let code_iucns = "";
      let status = `<p>
      <i class="fa-solid fa-circle-question"></i>Chưa xác định
    </p>`;
      if (data.loai_hien_trang != null) {
        status = `<p>
        <i class="fa-solid fa-arrow-down"></i>${data.loai_hien_trang.ten}
        </p>`;
      }
      if (data.sach_dos.length > 0) {
        code_sach_dos = data.sach_dos[0].ma_danh_muc;
        classRedbook = "VN-code";
      }
      if (data.iucns.length > 0) {
        code_iucns = data.iucns[0].ma_danh_muc;
        classIUCN = "IUNC-code";
      }
      return `
    <div class="notice-item">
    <div class="info-item">
      <div class="animal-info">
        <p>${data.kingdom.ten} - ${data.phylumn.ten}</p>
        <h4>${data.ten}</h4>
        <p><i>${data.ten_khoa_hoc}</i></p>
          ${status}
      </div>
      <div class="animal-code">
        <div id="${id}" class="qr-code"></div>
        <div class="red-book-code">
          <span class="${classRedbook}">${code_sach_dos}</span>
          <span class="${classIUCN}">${code_iucns}</span>
        </div>
      </div>
    </div>
  </div>`;
    }
  });
  const htmlsGrid = html.join("");
  document.getElementById("grid-other-list").innerHTML = htmlsGrid;
}

// danh sach dang bang
export function renTableSpecies(data) {
  const html = data.map((data, index) => {
    if (index >= 0 && index < 6) {
      let status = "Chưa xác định";
      if (data.loai_hien_trang != null) {
        status = data.loai_hien_trang.ten;
      }
      return `<li>
    <span>${data.ten}</span>
    <span>${data.ten_khoa_hoc}</span>
    <span>${status}</span>
    <span> </span>
  </li>`;
    }
  });
  const htmls = html.join("");
  document.getElementById("table-list").innerHTML = htmls;
}

// dangj bang other
export function renOtherTableSpecies(data) {
  const html = data.map((data, index) => {
    if (index >= 6) {
      let status = "Chưa xác định";
      if (data.loai_hien_trang != null) {
        status = data.loai_hien_trang.ten;
      }
      return `<li>
    <span>${data.ten}</span>
    <span>${data.ten_khoa_hoc}</span>
    <span>${status}</span>
    <span> </span>
  </li>`;
    }
  });
  const htmlsTable = html.join("");
  document.getElementById("table-other-list").innerHTML = htmlsTable;
}

// render List Side Menu
export function renderSideMenu(data1, data2, data3) {
  renCurrentStatus(data1);
  renListProvinces(data2);
  renListRedBook(data3);
  renListIUCNS(data3);
}

