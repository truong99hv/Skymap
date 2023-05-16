export const getData = async (url) => {
  try {
    const response = await fetch(url);

    let data = await response.json();
    return data;
    // console.log(data);
    // let arr = data.list;
    // let arrResult = data.pagination;
  } catch (error) {
    console.log("error: ", error);
  }
  //   }
};
