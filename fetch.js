const url = "https://api.sampleapis.com/coffee/hot";

const getData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
};
getData();
