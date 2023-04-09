// async function getUser() {
//   try {
//     const response = await axios.get("http://localhost:3000/student");
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// }

// getUser();

async function doSomethingAsync() {
  try {
    // This async call may fail.
    await fetch("http://localhost:3000/student")
      .then((response) => response.json())
      .then((json) => console.log(json));
  } catch (error) {
    // If it does we will catch the error here.
    console.log(error);
  }
}

doSomethingAsync();

async function getResponse() {
  const response = await fetch("http://localhost:3000/student", {
    method: "GET",
    // headers: {
    //   "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
    //   "x-rapidapi-key": "your_api_key",
    // },
  });
  const data = await response.json(); // Extracting data as a JSON Object from the response

  console.log(data);
}

getResponse();
