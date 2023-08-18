const arrayOfNames = ["Bryan", "Axel", "Daniel", "Chelsea", "Ethan"];

const search = document.querySelector("#inputSearch");
const buttonSearch = document.querySelector(".search");

function searching() {
  for (let i = 0; i < arrayOfNames.length; i++) {
    if (arrayOfNames.includes(search.value)) {
      console.log("Ada");
    } else {
      console.log("Tidak ada");
    }
  }
}

///////////////////////////////////////////////////////////////

const asc = document.querySelector(".asc");

function ascending() {
  const sorting = arrayOfNames.sort();
  console.log(sorting);
}

///////////////////////////////////////////////////////////////

const desc = document.querySelector(".desc");

function descending() {
  const reversing = arrayOfNames.sort().reverse();
  console.log(reversing);
}
