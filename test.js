const student = {
  firstName: "George",
  lastName: "Molly",
  Nationality: "African",
  Age: "33",
  img:
    "https://images.pexels.com/photos/3118214/pexels-photo-3118214.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
};

// grab the template
const template = document.querySelector("template").content;

// clone
const copy = template.cloneNode(true);

copy.querySelector("h1 span").textContent =
  student.firstName + " " + student.lastName;
copy.querySelector("p span").textContent = student.Nationality;
copy.querySelector("img").src = student.img;

const parent = document.querySelector("main");

// append
parent.appendChild(copy);
