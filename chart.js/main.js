var arr = [];

async function getData() {
  try {
    const response = await fetch(
      "https://apis.sashi.vn/api/hanoiclubtest/Product"
    );
    const result = await response.json();
    const firstProducts = result.value.slice(0, 5); // lấy 8 phần tử đầu tiên

    arr = firstProducts; // log kết quả từ API
    // console.log(arr);
  } catch (error) {
    console.error("Error:", error);
  }
}

// getData();

async function chart() {
  const ctx = document.getElementById("myChart");

  await getData();
  var data = arr;
  var nameData = [];
  var price = [];
  var barColors = ["#b91d47", "#00aba9", "#2b5797", "#e8c3b9", "#1e7145"];
  data.forEach((item) => {
    nameData.push(item.name);
    price.push(item.price);
  });
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: nameData,
      datasets: [
        {
          label: " Price  products",
          data: price,
          backgroundColor: barColors,
        },
      ],
    },
    // options: {
    //   title: {
    //     display: true,
    //     text: "aaaa",
    //   },
    // },
  });
}

chart();
