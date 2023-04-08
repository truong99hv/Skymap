window.addEventListener("load", getListProvinces);

function getListProvinces() {
  var url = window.location.origin + "/wp-json/info/GetListProvinces";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "charset=utf-8");
  xhr.setRequestHeader(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
  );
  xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      var response = JSON.parse(xhr.responseText);
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(response.body, "text/xml");
      var result = xmlDoc.getElementsByTagName("ClaimList");
      var i = 0;
      var innerHTML = '<option value="0">-- Chọn tỉnh/thành phố --</option>';
      for (i = 0; i < result.length; i++) {
        if (result[i].childNodes.length == 2)
          innerHTML +=
            '<option value=" ' +
            result[i].childNodes[0].textContent +
            '">' +
            result[i].childNodes[1].textContent +
            "</option>";
      }
      document.getElementById("province-select").innerHTML = innerHTML;
    }
  };
  xhr.send();
}

// lấy danh sách của huyện, đại lý
function changeProvince(val) {
  getAgentByProvince(val);
  getListDistricts(val);
}

// lấy danh sách của huyện, đại lý
function getListDistricts(val) {
  var url = window.location.origin + "/wp-json/info/GetListDistricts";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?provinceId=" + val, true);
  xhr.setRequestHeader("Content-type", "charset=utf-8");
  xhr.setRequestHeader(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
  );
  xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      var response = JSON.parse(xhr.responseText);
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(response.body, "text/xml");
      var result = xmlDoc.getElementsByTagName("ClaimList");
      var i = 0;
      var innerHTML = '<option value="0">-- Chọn quận/huyện --</option>';
      for (i = 0; i < result.length; i++) {
        if (result[i].childNodes.length == 2)
          innerHTML +=
            '<option value=" ' +
            result[i].childNodes[0].textContent +
            '">' +
            result[i].childNodes[1].textContent +
            "</option>";
      }
      document.getElementById("district-select").innerHTML = innerHTML;
    }
  };
  xhr.send();
}

//
function getAgentByProvince(val) {
  var url = window.location.origin + "/wp-json/info/GetAgentByProvince2";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?provinceId=" + val, true);
  xhr.setRequestHeader("Content-type", "charset=utf-8");
  xhr.setRequestHeader(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
  );
  xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      var response = JSON.parse(xhr.responseText);
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(response.body, "text/xml");
      document.getElementById("table-result").style.display = "inline";
      var agents = xmlDoc.getElementsByTagName("AgentEx");
      if (agents.length > 0) {
        var hiddenData = JSON.stringify(transformXMLToArrayAgents(agents));
        document.getElementById("agents-data-hidden").value = hiddenData;
        document.getElementById("agents-data-hidden-show").value = hiddenData;
        showResult();
      } else {
        showNotFound();
      }
    }
  };
  xhr.send();
}

function changeDistrict(val) {
  var url = window.location.origin + "/wp-json/info/GetAgentByDistrict2";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url + "?districtId=" + val, true);
  xhr.setRequestHeader("Content-type", "charset=utf-8");
  xhr.setRequestHeader(
    "Access-Control-Allow-Headers",
    "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With"
  );
  xhr.setRequestHeader("Access-Control-Allow-Methods", "GET, PUT, POST");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.onload = function () {
    if (xhr.readyState == 4 && xhr.status == "200") {
      var response = JSON.parse(xhr.responseText);
      parser = new DOMParser();
      xmlDoc = parser.parseFromString(response.body, "text/xml");
      document.getElementById("table-result").style.display = "inline";
      var agents = xmlDoc.getElementsByTagName("AgentEx");
      if (agents.length > 0) {
        var hiddenData = JSON.stringify(transformXMLToArrayAgents(agents));
        document.getElementById("agents-data-hidden").value = hiddenData;
        document.getElementById("agents-data-hidden-show").value = hiddenData;
        showResult();
      } else {
        showNotFound();
      }
    }
  };
  xhr.send();
}

// search
function searchByNameAgent(val) {
  val = val.trim().toLowerCase();
  var data, dataShow;
  data = [];
  dataShow = [];
  if (document.getElementById("agents-data-hidden")) {
    data = JSON.parse(document.getElementById("agents-data-hidden").value);
  }
  var i;
  for (i = 0; i < data.length; i++) {
    if (
      data[i] &&
      data[i].AgentName &&
      data[i].AgentName.trim().toLowerCase().includes(val)
    ) {
      dataShow.push(data[i]); 
    }
  }
  var showHiddenData = JSON.stringify(dataShow);
  document.getElementById("agents-data-hidden-show").value = showHiddenData;
  showResult();
}

function transformXMLToArrayAgents(agents) {
  var i;
  var agentsArray = [];
  for (i = 0; i < agents.length; i++) {
    agentsArray.push({
      AgentName: agents[i].getElementsByTagName("AgentName")[0].childNodes[0]
        ? agents[i].getElementsByTagName("AgentName")[0].childNodes[0].nodeValue
        : "-",
      CommuneName: agents[i].getElementsByTagName("CommuneName")[0]
        .childNodes[0]
        ? agents[i].getElementsByTagName("CommuneName")[0].childNodes[0]
            .nodeValue
        : "-",
      DistrictName: agents[i].getElementsByTagName("DistrictName")[0]
        .childNodes[0]
        ? agents[i].getElementsByTagName("DistrictName")[0].childNodes[0]
            .nodeValue
        : "-",
    });
  }
  return agentsArray;
}

function showNotFound() {
  var txt =
    "<tr>" +
    "<th>Tên đại lý</th>" +
    "<th>Xã, Phường, Thị trấn</th>" +
    "<th>Quận, Huyện</th>" +
    "</tr>";
  txt += "<tr><td colspan='3'>Chưa có đại lý</td></tr>";
  var tableRef = (document
    .getElementById("table-result")
    .getElementsByTagName("tbody")[0].innerHTML = txt);
}

async function showResult(currentPage = 1) {
  var perPage, total, pageCount, agents;
  agents = [];
  if (document.getElementById("agents-data-hidden-show")) {
    agents = JSON.parse(
      document.getElementById("agents-data-hidden-show").value
    );
  }
  perPage = document.getElementById("per-page")
    ? document.getElementById("per-page").value
    : 10;
  total = agents.length;
  pageCount = total / perPage;
  if (!Number.isInteger(pageCount)) {
    pageCount = Math.ceil(pageCount);
  }
  var paginationInnerHTML = "";
  if (pageCount > 1) {
    paginationInnerHTML +=
      '<li class="page-item"><a class="page-link" href="javascript:showResult(1)" title="Trang đầu"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>';
    if (currentPage == 1) {
      paginationInnerHTML +=
        '<li class="page-item disabled"><a class="page-link" href="javascript:showResult(1)" title="Trang trước"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>';
    } else {
      paginationInnerHTML +=
        '<li class="page-item"><a class="page-link" href="javascript:showResult(' +
        (currentPage - 1) +
        ')" title="Trang trước"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>';
    }
    if (pageCount <= 3) {
      var i;
      for (var i = 1; i <= pageCount; i++) {
        if (i == currentPage) {
          paginationInnerHTML +=
            '<li class="page-item active"><a class="page-link" href="javascript:showResult(' +
            i +
            ')">' +
            i +
            "</a></li>";
        } else {
          paginationInnerHTML +=
            '<li class="page-item"><a class="page-link" href="javascript:showResult(' +
            i +
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
            '<li class="page-item active"><a class="page-link" href="javascript:showResult(' +
            i +
            ')">' +
            i +
            "</a></li>";
        } else {
          paginationInnerHTML +=
            '<li class="page-item"><a class="page-link" href="javascript:showResult(' +
            i +
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
        '<li class="page-item disabled"><a class="page-link" href="javascript:showResult(' +
        currentPage +
        ')" title="Trang sau"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>';
    } else {
      paginationInnerHTML +=
        '<li class="page-item"><a class="page-link" href="javascript:showResult(' +
        (currentPage + 1) +
        ')" title="Trang sau"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>';
    }
    paginationInnerHTML +=
      '<li class="page-item"><a class="page-link" href="javascript:showResult(' +
      pageCount +
      ')" title="Trang cuối"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>';
  }
  document.getElementById("pagination").innerHTML = paginationInnerHTML;
  var maxIndexShow =
    currentPage * perPage < total ? currentPage * perPage : total;
  var minIndexShow = (currentPage - 1) * perPage;
  document.getElementById("info-paginator").innerHTML =
    "Hiển thị: " +
    ((currentPage - 1) * perPage + 1) +
    " - " +
    maxIndexShow +
    " trên " +
    total;

  var txt =
    "<tr>" +
    "<th>Tên đại lý</th>" +
    "<th>Xã, Phường, Thị trấn</th>" +
    "<th>Quận, Huyện</th>" +
    "</tr>";
  var i;
  for (i = minIndexShow; i < maxIndexShow; i++) {
    txt +=
      "<tr>" +
      "<td>" +
      agents[i].AgentName +
      "</td>" +
      "<td>" +
      agents[i].CommuneName +
      "</td>" +
      "<td>" +
      agents[i].DistrictName +
      "</td>" +
      "</tr>";
  }
  document
    .getElementById("table-result")
    .getElementsByTagName("tbody")[0].innerHTML = txt;
}
