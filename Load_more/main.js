var arr = [];
var six = document.querySelector(".six");
var twelve = document.querySelector(".twelve");
var count = 1;
async function getData() {
  try {
    const response = await fetch(
      `https://loainguycap.ceid.gov.vn/api/loaicongbo?paginate=true&page=${count}&perpage=18`
    );
    const result = await response.json();
    arr = result;
    return arr;
  } catch (error) {
    console.error("Error:", error);
  }
}

// getData();
var six = document.querySelector(".six");
var twelve = document.querySelector(".twelve");
async function showData() {
  await getData();
  let dataSix = arr.list.slice(0, 6);
  let dataTwelve = arr.list.slice(6, 18);
  six.innerHTML = "";
  twelve.innerHTML = "";
  dataSix.forEach((item) => {
    six.innerHTML += `
    <div class="item-six">
    <img
      src=https://loainguycap.ceid.gov.vn/${item.attachments[0].path}
      alt="a"
      class="img-six"
    />
    <div class="decs-six">
      <div class="species">
        <div class="classification">${item.kingdom.ten} - ${item.phylumn.ten}</div>
        <h2 class="name">${item.ten}</h2>
        <div class="subtitle">${item.ten_khoa_hoc}</div>
      </div>

      <div class="qr-code"></div>
    </div>
  </div>
    `;
  });

  dataTwelve.forEach((item) => {
    twelve.innerHTML += `
    <div class="item-twelve">
    <div class="decs-twelve">
      <div class="species">
        <div class="classification">${item.kingdom.ten} - ${item.phylumn.ten}</div>
        <h2 class="name">${item.ten}</h2>
        <div class="subtitle">${item.ten_khoa_hoc}</div>
      </div>

      <div class="qr-code"></div>
    </div>
  </div>
    `;
  });
}
showData();

var loadMore = document.querySelector(".btn-load-more");
var listItemLoad = document.querySelector(".list-item-load");
var loading = document.getElementById("loading");
async function load() {
  loading.style.display = "block";
  loadMore.style.display = "none";
  count++;
  await getData();
  let dataload = arr.list;
  dataload.forEach((item) => {
    const itemLoad = document.createElement("div");
    const descLoad = document.createElement("div");
    const species = document.createElement("div");
    const classification = document.createElement("div");
    const name = document.createElement("h2");
    const subtitle = document.createElement("div");
    const qrcode = document.createElement("div");

    // add class
    itemLoad.classList.add("item-load");
    descLoad.classList.add("decs-load");
    species.classList.add("species");
    classification.classList.add("classification");
    name.classList.add("name");
    subtitle.classList.add("subtitle");
    qrcode.classList.add("qr-coder");

    // appendChild DOM
    listItemLoad.appendChild(itemLoad);
    itemLoad.appendChild(descLoad);
    descLoad.appendChild(species);
    descLoad.appendChild(qrcode);
    species.appendChild(classification);
    species.appendChild(name);
    species.appendChild(subtitle);

    classification.textContent = `${item.kingdom.ten} - ${item.phylumn.ten}`;
    name.textContent = `${item.ten}`;
    subtitle.textContent = `${item.ten_khoa_hoc}`;
    loading.style.display = "none";
    loadMore.style.display = "";
  });
}

loadMore.addEventListener("click", load);
