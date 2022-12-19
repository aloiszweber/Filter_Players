const users = [
  {
    team: "Spirit Wizards",
    login: "Alena_21",
    age: 17,
    img: "./images/fille.png",
  },

  {
    team: "Flashes of genius",
    login: "Valery",
    age: 28,
    img: "./images/ours.png",
  },

  {
    team: "Majestic Heroes",
    login: "Thunder",
    age: 24,
    img: "./images/viking.png",
  },

  {
    team: "Spirit Wizards",
    login: "Tanya",
    age: 19,
    img: "./images/panda.png",
  },

  {
    team: "Majestic Heroes",
    login: "Bistri_37",
    age: 17,
    img: "./images/sangoku.png",
  },

  {
    team: "Majestic Heroes",
    login: "ZeroSky",
    age: 26,
    img: "./images/masque.png",
  },

  {
    team: "Flashes of genius",
    login: "WarriorCyber",
    age: 24,
    img: "./images/basketteur.png",
  },

  {
    team: "Spirit Wizards",
    login: "BladeMiss",
    age: 20,
    img: "./images/poing.png",
  },

  {
    team: "Majestic Heroes",
    login: "FrostStorm",
    age: 19,
    img: "./images/champignon.png",
  },

  {
    team: "Spirit Wizards",
    login: "FantasyNight",
    age: 26,
    img: "./images/dragon.png",
  },
];

/* Logique used to create the filter function
let newList = [];

for (const user of users) {
  if (user.team.includes("Heroes") == true) newList.push(user);
}

//console.log(newList);

let newList2 = [];

for (const user of newList) {
  if (String(user.age).includes("17") == true) newList2.push(user);
}

//console.log(newList2);

*/

function filter(arr, prop, value) {
  let result = [];
  copy = [...arr];

  for (const item of copy) {
    if (String(item[prop]).includes(value) == true) result.push(item);
  }
  return result;
}

/* Test of the filter function

let array = filter(users, "team", "Wizards");
array = filter(users, "age", 20);

console.log(array);

*/

function render(arr) {
  const list = document.querySelector(".users-list");
  list.innerHTML = "";

  const teamValue = document.getElementById("input-team").value;
  const ageValue = document.getElementById("input-age").value;

  let newArr = [...arr];

  if (teamValue !== "") newArr = filter(newArr, "team", teamValue);
  if (ageValue !== "") newArr = filter(newArr, "age", ageValue);

  console.log(filter(newArr, "age", ageValue));

  for (const user of newArr) {
    const div = document.createElement("div");
    const li = document.createElement("li");
    const li_login = document.createElement("p");
    const li_team = document.createElement("p");
    const li_age = document.createElement("p");
    const li_img = document.createElement("img");

    li_login.textContent = user.login;
    li_team.textContent = "Team: " + user.team;
    li_age.textContent = "Age: " + user.age + " ans";
    li_img.src = user.img;
    li_img.setAttribute("width", "200px");
    li_img.setAttribute("height", "auto");

    list.append(li);
    li.append(div);
    div.append(li_login);
    div.append(li_team);
    div.append(li_age);
    li.append(li_img);
  }
}

document.getElementById("filter-form").addEventListener("submit", function (e) {
  e.preventDefault();
  render(users);
});

render(users);
