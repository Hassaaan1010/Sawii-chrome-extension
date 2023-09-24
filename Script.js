// input field element for Title and Url
titleElement = document.getElementById("title");
urlElement = document.getElementById("basic-url");
// Add Link button element
buttonElement = document.getElementById("button");

// error handling complain element altered for incomplete input or already existing input
complainElement = document.getElementById("complain");

// list element to add new items.
listElement = document.getElementById("list");

// to avoid repetition of tags. on creating a new item
// Title gets appended/delete to linkList on addToList() and deleteThis()
let linkList = [];

// to submit the input
buttonElement.onclick = function () {
  // onclick => fetches title and url values and stores it in title, url
  let title = titleElement.value;
  let url = urlElement.value;

  //to remove error message when proper input is given:
  complainElement.innerHTML = "";

  //   checks for incomplete input and already existing input
  if (title != "" && url != "" && linkList.includes(title) === false) {
    addToList(url, title);
  } else {
    complain(url, title);
  }
};

// to complain about input
function complain(aUrl, aTitle) {
  // for incomplete input
  if (aTitle === "" || aUrl === "") {
    complainElement.textContent = "Incomplete input";
  }
  // for already existing input
  else if (linkList.includes(aTitle) === true) {
    complainElement.textContent = `"${aTitle}" is already a tag. Chose another.`;
  }
}

//to stop complaining when user starts correcting input
titleElement.onclick = function () {
  complainElement.innerHTML = "";
};
urlElement.onclick = function () {
  complainElement.innerHTML = "";
};

// to create an item
function addToList(aUrl, aTitle) {
  // to add Title to linkList
  linkList.push(aTitle);

  // to add Title to linkList with a delete button
  listElement.innerHTML += `<div id="${aTitle}" class="list-group-item list-group-item-action">
  <a class="gourp-item" href="${aUrl}">${aTitle}</a>
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
      onclick="deleteThis(document.getElementById('${aTitle}'),${aTitle})"
    >
      <path
        d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6"
      />
    </svg>
  </span>
  </div>`;
}

// to delete an item
function deleteThis(element, aTitle) {
  // removes element form html
  element.remove();
  // removes Title from linkList
  linkList.splice(linkList.indexOf(aTitle), 1);
}
