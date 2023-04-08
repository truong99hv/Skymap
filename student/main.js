// làm 3 hàm:
/*
    hàm getdata
    hàm hiển thị
    hàm phân trang
*/
var data = [
  {
    name: "Nguyen Van A",
    age: 20,
    birth: "01/01/2002",
    class: "Th24.12",
  },
  {
    name: "Tran Thi B",
    age: 21,
    birth: "02/02/2001",
    class: "Th24.13",
  },
  {
    name: "Le Van C",
    age: 22,
    birth: "03/03/2000",
    class: "Th24.14",
  },
  {
    name: "Dinh Bo Linh",
    age: 23,
    birth: "03/03/2000",
    class: "Th24.15",
  },
  {
    name: "Tran Van Tuan",
    age: 24,
    birth: "03/03/2000",
    class: "Th24.16",
  },
  {
    name: "Hoang Van Truong",
    age: 24,
    birth: "02/02/1999",
    class: "Th24.11",
  },
  {
    name: "Thomas Tuchel",
    age: 49,
    birth: "29/08/1973",
    class: "Th24.13",
  },
  {
    name: "Pep Guardiola",
    age: 52,
    birth: "18/01/1971",
    class: "Th24.12",
  },
  {
    name: "Jürgen Klopp",
    age: 55,
    birth: "16/06/1967",
    class: "Th24.15",
  },
  {
    name: "José Mário ",
    age: 60,
    birth: "26/01/1963",
    class: "Th24.16",
  },
  {
    name: "Carlo Ancelotti",
    age: 63,
    birth: "10/06/1959",
    class: "Th24.12",
  },
  {
    name: "Luis Enrique",
    age: 52,
    birth: "08/05/1970",
    class: "Th24.13",
  },
  {
    name: "Antonio Conte",
    age: 53,
    birth: "31/07/1969",
    class: "Th24.14",
  },
  {
    name: "Graham Potter",
    age: 47,
    birth: "20/05/1975",
    class: "Th24.15",
  },
  {
    name: "Julian Nagelsmann",
    age: 35,
    birth: "23/07/1987",
    class: "Th24.16",
  },
  {
    name: "Fabrizio Romano",
    age: 30,
    birth: "21/02/1993",
    class: "Th24.12",
  },
  {
    name: "Enzo Fernández",
    age: 22,
    birth: "17/01/2001",
    class: "Th24.13",
  },
  {
    name: "Mykhaylo Mudryk",
    age: 22,
    birth: "05/01/2001",
    class: "Th24.14",
  },
  {
    name: "João Félix",
    age: 23,
    birth: "10/11/1999",
    class: "Th24.15",
  },
  {
    name: "Noni Madueke",
    age: 21,
    birth: "19/03/2002",
    class: "Th24.16",
  },
  {
    name: "Malo Gusto",
    age: 19,
    birth: "19/05/2003",
    class: "Th24.12",
  },
  {
    name: "Andrey Santos",
    age: 18,
    birth: "03/05/2004",
    class: "Th24.13",
  },
  {
    name: "Benoît Badiashile",
    age: 22,
    birth: "26/03/2001",
    class: "Th24.14",
  },
  {
    name: "Wesley Fofana",
    age: 20,
    birth: "17/12/2000",
    class: "Th24.15",
  },
  {
    name: "Omari Hutchinson",
    age: 19,
    birth: "29/10/2003",
    class: "Th24.16",
  },
  {
    name: "Carney Chukwuemeka",
    age: 19,
    birth: "20/10/2003",
    class: "Th24.12",
  },
  {
    name: "Marc Cucurella",
    age: 24,
    birth: "22/07/1998",
    class: "Th24.13",
  },
  {
    name: "Conor Gallagher",
    age: 23,
    birth: "06/02/2000",
    class: "Th24.14",
  },
  {
    name: "Lewis Hall",
    age: 18,
    birth: "08/09/2004",
    class: "Th24.15",
  },
  {
    name: "Kai Havertz",
    age: 23,
    birth: "11/06/1999g",
    class: "Th24.16",
  },
];

// console.log(data[0].name.toLowerCase());
// console.log(data[0].name);
// console.log(typeof data[0].age);
function getData(val) {
  let result = [];
  // result = data;
  // console.log(result);
  // if(search != undefined){
  //     // loc trong mảng dư lieu tra ve cac phan tu thoa man
  //     for(data ){
  //         result.push (item);
  //     }
  // }
  let element = "";
  if (val) {
    for (let i = 0; i < val.lenght; i++) {
      result.push(val[i]);
    }
  } else {
    element += "<h2>Danh sách trống</h2>";
  }

  for (let i = 0; i < result.length; i++) {
    element +=
      "<tr>" +
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      result[i].name +
      "</td>" +
      "<td>" +
      result[i].age +
      "</td>" +
      "<td>" +
      result[i].class +
      "</td>" +
      "</tr>";
  }

  document.getElementsByTagName("table").innerHTML = element;

  // sort
  // if (sort) {
  //   // sap xep cai mang result truoc khi tra ve
  // }

  console.log(val);
  console.log(result);
  testSearch();
  return result;
}

function showData(students) {
  // lat tbody
  let perpage = 1;
  let total = students.lenght;
  let pageCount = Math.round(total / perpage);
  let table = document.querySelector(".table");

  // sinh html
  let element = "";

  if (students == "") {
    element += "<h2>Danh sách trống</h2>";
  } else {
    element += `
     <thead>
        <tr>
              <th >ID</th>
              <th >Name</th>
              <th >Age</th>
              <th >Class</th>
        </tr>
      </thead>`;

    students.map((student, index) => {
      element += `
          <tr class = "item">
              <td>${index + 1}</td>
              <td>${student.name}</td>
              <td>${student.age}</td>
              <td>${student.class}</td>
          </tr>
    `;
    });
  }
  table.innerHTML += element;

  // phan trang
  papinator(1);

  getData(testSearch());
}

showData(data);

function papinator(currentPage = 1) {
  var perpage, pageCount, total;
  // perpagenode
  let result = [];
  result = [...data];
  // console.log(result);
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
  if (pageCount > 1) {
    paginationInnerHTML +=
      '<li class="page-item"><a class="page-link" href="javascript:papinator(1)" title="Trang đầu"><i class="fa fa-angle-double-left" aria-hidden="true"></i></a></li>';
    if (currentPage == 1) {
      paginationInnerHTML +=
        '<li class="page-item disabled"><a class="page-link" href="javascript:papinator(1)" title="Trang trước"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>';
    } else {
      paginationInnerHTML +=
        '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
        (currentPage - 1) +
        ')" title="Trang trước"><i class="fa fa-angle-left" aria-hidden="true"></i></a></li>';
    }
    if (pageCount <= 3) {
      var i;
      for (var i = 1; i <= pageCount; i++) {
        if (i == currentPage) {
          paginationInnerHTML +=
            '<li class="page-item active"><a class="page-link" href="javascript:papinator(' +
            i +
            ')">' +
            i +
            "</a></li>";
        } else {
          paginationInnerHTML +=
            '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
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
            '<li class="page-item active"><a class="page-link" href="javascript:papinator(' +
            i +
            ')">' +
            i +
            "</a></li>";
        } else {
          paginationInnerHTML +=
            '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
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
        '<li class="page-item disabled"><a class="page-link" href="javascript:papinator(' +
        currentPage +
        ')" title="Trang sau"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>';
    } else {
      paginationInnerHTML +=
        '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
        (currentPage + 1) +
        ')" title="Trang sau"><i class="fa fa-angle-right" aria-hidden="true"></i></a></li>';
    }
    paginationInnerHTML +=
      '<li class="page-item"><a class="page-link" href="javascript:papinator(' +
      pageCount +
      ')" title="Trang cuối"><i class="fa fa-angle-double-right" aria-hidden="true"></i></a></li>';
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
  // "<tr>" +
  // "<th>ID</th>" +
  // "<th>Name</th>" +
  // "<th>Age</th>" +
  // "<th>Class</th>" +
  // "</tr>";

  for (let i = minIndexShow; i < maxIndexShow; i++) {
    txt +=
      "<tr>" +
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      result[i].name +
      "</td>" +
      "<td>" +
      result[i].age +
      "</td>" +
      "<td>" +
      result[i].class +
      "</td>" +
      "</tr>";
  }

  // interhtml
  document.getElementsByTagName("tbody")[0].innerHTML = txt;
}

function search(key, value, arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key].toLowerCase() === value) {
      result.push(arr[i]);
    }
  }
  // console.log("arr: ", result);
  // console.log(value);
  return result;
}

function testSearch() {
  let value = document.querySelector("#myInput").value;
  let filter = value.toLowerCase();

  if (filter != "") {
    search("name", filter, data);
    // search("age", value, data);
    // search("class", filter, data);
  }

  // console.log(filter);
}
