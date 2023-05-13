// Import data
import data from "./data.json" assert { type: "json" };

// The list element
const summaryList = document.getElementById("summary-list");
// create a list item for each data point (categories)
data.forEach((item) => {
  // li element
  const listItem = document.createElement("li");
  listItem.classList.add(`summary-${item.category}`);
  // create category element
  const categoryElt = document.createElement("span");
  categoryElt.classList.add("category");
  // icon image
  const imgElt = document.createElement("img");
  imgElt.src = item.icon;
  imgElt.alt = `${item.category} icon`;
  categoryElt.appendChild(imgElt);
  // add text to the category element
  categoryElt.textContent = item.category;
  // create a span to display score
  const scoreElt = document.createElement("span");
  scoreElt.classList.add("rate");
  scoreElt.textContent = item.score;
  // create a span for the "/ 100" styling
  const hundredElt = document.createElement("span");
  hundredElt.classList.add("hundred");
  hundredElt.textContent = "/ 100";
  // appending elements to their parents and the items to the list
  scoreElt.appendChild(hundredElt);

  listItem.appendChild(categoryElt);

  listItem.appendChild(scoreElt);

  summaryList.appendChild(listItem);
});
