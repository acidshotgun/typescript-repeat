/*
  fetchData ожидает два аргумента
  url - string
  method - "GET" | "POST" (литеральный тип)
*/
const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log(method);
};

const reqOptions = {
  url: "https://someurl.com",
  method: "GET",
} as const;

fetchData("https://my-api/v2/users", "GET");
fetchData(reqOptions.url, reqOptions.method);
