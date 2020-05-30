const api = "https://superheroapi.com/api.php/3199093936795488/search";

export const getHeros = (queryParams) =>
  fetch(`${api}` + `/${queryParams}`, {
    method: "GET",
  })
  .then((response) => response.json())
  .then((data) => {
    return data.results;
  })
  .catch((error) => {
    console.log(error);
    return error;
  });
