//Navigation buttons
let viewListLength = mapViewList["views"].length;

let next = {
  text: "&#8250",
  id: "btn-next",
  action: function nextView() {
    ++currentView;
    if (currentView > viewListLength - 1) {
      currentView = 0;
    }
    updateMap(currentView);
  }
};

let previous = {
  text: "&#8249;",
  id: "btn-previous",
  action: function previousView() {
    if (currentView > 0) {
      currentView--;
    } else {
      currentView = viewListLength - 1;
    }
    updateMap(currentView);
  }
};

let mapId = document.getElementById("mainmap");

function addButton(btn) {
  let button = document.createElement("button");
  button.innerHTML = btn.text;
  button.setAttribute("id", btn.id);
  button.setAttribute("class", "btn-style");
  button.addEventListener("click", btn.action);
  mapId.appendChild(button);
}

addButton(next);
addButton(previous);
