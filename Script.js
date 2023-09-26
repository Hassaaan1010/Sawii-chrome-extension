// initializing elements for
// submit button
let buttonElement = document.getElementById("button");
// title input
let keyElement = document.getElementById("title");
// url input
let valueElement = document.getElementById("basic-url");
// list
let listElement = document.getElementById("list");
// complain
let complainElement = document.getElementById("complain");

// to globalize for future use
let key, value;

//allData contains objects representing all key-value pairs in localStorage
// initializing to itterate through and print out the list
let allData = Object.entries(localStorage);

// prints pre existing list items as list
for (let each of allData) {
  printToList(each[0], each[1]);
}

// checks for enter key press
document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addItem();
  }
});
// checks for submit button
buttonElement.onclick = function () {
  addItem();
};

// to add item to storage as well as page
function addItem() {
  // fetching input
  key = keyElement.value;
  value = valueElement.value;

  // if input is not repetative and not empty, else it will show a complain
  if (
    Object.keys(localStorage).includes(key) === false &&
    key != "" &&
    value != ""
  ) {
    localStorage.setItem(keyElement.value, valueElement.value);
    printToList(key, value);
  } else complain(key, value);
}

// appends item to to the html list
function printToList(aTitle, aUrl) {
  listElement.innerHTML += `<div id="${aTitle}" class="list-group-item list-group-item-action">
  <a class="group-item" href="${aUrl}" style="font-weight: 700;text-decoration: none;">${aTitle}</a>
  <span class="">
    <svg
      id="i-trash"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="16"
      height="16"
      style="float: right"
      fill="none"
      stroke="currentcolor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      onclick="deleteThis(document.getElementById('${aTitle}'),'${aTitle}')"
    >
      <path
        d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
      />
    </svg>
  </span>
  </div>`;
}

// to complain about input
function complain(aTitle, aUrl) {
  // for incomplete input
  console.log("reached complain");
  if (aTitle === "" || aUrl === "") {
    complainElement.textContent = "Incomplete input";
  }
  // for already existing input
  else if (Object.keys(localStorage).includes(aTitle) === true) {
    console.log("reach ekkada?");
    complainElement.textContent = `"${aTitle}" is already a tag. Chose another.`;
  }
}

//to stop complaining when user starts correcting input
keyElement.onclick = function () {
  complainElement.innerHTML = "";
};
valueElement.onclick = function () {
  complainElement.innerHTML = "";
};

// to delete an item
function deleteThis(element, aTitle) {
  // removes element form html
  element.remove();
  // removes Title from linkList
  console.log(element);
  console.log(aTitle);
  console.log(typeof aTitle);
  localStorage.removeItem(aTitle);
}
