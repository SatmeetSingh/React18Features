const url = "https://jsonplaceholder.typicode.com/users";

async function FetchData() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export default FetchData;
