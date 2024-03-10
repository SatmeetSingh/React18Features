const url = "https://api.api-ninjas.com/v1/city?name=";

async function Geolocation(name) {
  const response = await fetch(url + name, {
    method: "GET",
    withCredentials: true,
    headers: {
      "X-Auth-Token": "V3mVvOLg7Qw0GTOYj3cEmA==9tXrUVEzU5YNzjZw",
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
}

export default Geolocation;
