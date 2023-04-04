// let arr = [1, 2, 3, 4, 5];

// let i = 0;
// while (i < arr.length) {
//   if (arr[i] % 2 == 0) {
//     console.log(arr[i]);
//   }
//   i++;
// }

// var newArr = [];
// arr.forEach((element) => {
//   if (element % 2 == 0) {
//     console.log(element);
//     newArr.push(element + 2);
//     console.log(newArr);
//   }
// });

// let obj = {
//   name: "hvt",
//   class: "js",
// };

// const table = document.querySelector(".table");

// let students = [
//   {
//     name: "a",
//     class: "1a",
//   },
//   {
//     name: "b",
//     class: "2b",
//   },
//   {
//     name: "c",
//     class: "3c",
//   },
//   {
//     name: "d",
//     class: "4d",
//   },
//   {
//     name: "e",
//     class: "5e",
//   },
// ];

// table.innerHTML = students
//   .map(
//     (use, index) =>
//       `
//         <tr class = "item">
//             <td>${index + 1}</td>
//             <td>${use.name}</td>
//             <td>${use.class}</td>
//         </tr>
//    `
//   )
//   .join("");

// let thisPage = 1;
// let limit = 1;
// let list = document.querySelectorAll(".table .item");

// var loadItem = () => {
//   let beginGet = limit * (thisPage - 1);
//   let endGet = limit * (thisPage - 1);
//   list.forEach((item, key) => {
//     if (key >= beginGet && key <= endGet) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });

//   listPage();
// };

// loadItem();

// var listPage = () => {
//   // Math. ceil() làm tròn một số đến số nguyên lớn nhất tiếp theo
//   let count = Math.ceil(list.length / limit);
//   document.querySelector(".list-page").innerHTML = "";

//   if (thisPage != 1) {
//     let prev = document.createElement("li");
//     prev.innerText = "PREV";
//     prev.setAttribute("onclick", "changePage(" + (thisPage - 1) + ")");
//     document.querySelector(".list-page").appendChild(prev);
//   }

//   for (i = 1; i <= count; i++) {
//     let newPage = document.createElement("li");
//     newPage.innerText = i;
//     if (i == thisPage) {
//       newPage.classList.add("active");
//     }
//     newPage.setAttribute("onclick", "changePage(" + i + ")");
//     document.querySelector(".list-page").appendChild(newPage);
//   }

//   if (thisPage != count) {
//     let next = document.createElement("li");
//     next.innerText = "NEXT";
//     next.setAttribute("onclick", "changePage(" + (thisPage + 1) + ")");
//     document.querySelector(".list-page").appendChild(next);
//   }
// };

// var changePage = (i) => {
//   thisPage = i;
//   loadItem();
// };

let users = [];
let currentPage = 1;
let perPage = 2;
let totalPage = 0;
let perUser = [];

async function getUser() {
  try {
    let data = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(data);
    users = data.data;
    // console.log(users);
    perUser = users.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );
    rederPageNumber();
    rederUser();
  } catch (e) {
    console.log(e);
  }

  function handlePageNumber(num) {
    currentPage = num;
    // console.log(currentPage);
    perUser = users.slice(
      (currentPage - 1) * perPage,
      (currentPage - 1) * perPage + perPage
    );

    rederUser();
  }

  function rederPageNumber() {
    totalPage = users.length / perPage;

    for (let i = 1; i <= totalPage; i++) {
      document.getElementById(
        "pagination"
      ).innerHTML += ` <li onclick="handlePageNumber(${i})" >${i}</li>`;
    }
  }

  function rederUser() {
    let element = `<tr>
        <th>ID</th>
        <th>Name</th>
    </tr>`;

    perUser.map((value) => {
      element += `<tr>
            <td>${value.id}</td>
            <td>${value.name}</td>
        </tr>`;
    });
    document.getElementById("table").innerHTML += element;
  }
}
