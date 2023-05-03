async function getData(url) {
  return await fetch(url).then((data) => data.json());
}
export default getData;
