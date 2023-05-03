var imgList = document.querySelectorAll("img");
var container = document.querySelector(".container");
var btnList = document.querySelectorAll("button");

// init data
var arr = [];
imgList.forEach((item) => {
  arr.push({
    src: item.src,
    type: item.getAttribute("type"),
  });
});

function activeButton(btnActive) {
  btnList.forEach((btn) => {
    btn.classList.remove("active");
  });

  btnActive.classList.add("active");
}

//
btnList.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // active button
    activeButton(e.currentTarget);
    // filter data
    let type = e.currentTarget.getAttribute("type");
    if (type == "all") {
      render(arr);
      return;
    }
    let filterData = arr.filter((food) => {
      return food.type == type;
    });

    render(filterData);
  });
});

function render(list) {
  container.innerHTML = "";
  list.forEach((item) => {
    let imgElement = document.createElement("img");
    imgElement.src = item.src;
    imgElement.setAttribute("type", item.type);
    container.append(imgElement);
  });
}
