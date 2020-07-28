//polygon styles assignable to geoJSON layers

function polyStyle1() {
  return {
    weight: 2,
    opacity: 0.65,
    fillOpacity: 0.2,
    fillColor: "grey",
    color: "red"
  };
}

function polyStyle2() {
  return {
    weight: 2,
    opacity: 1,
    fillOpacity: 0,
    color: "rgb(51, 136, 255)"
  };
}

function polyStyle3() {
  return {
    weight: 3,
    opacity: 0.65,
    fillOpacity: 0.5,
    fillColor: "grey",
    color: "rgb(51, 136, 255)"
  };
}

function basinStyle() {
  return {
    weight: 1,
    opacity: 1,
    color: "#3f3f3f",
    fillColor: "red",
    fillOpacity: 0.1
  };
}

function districtStyle() {
  return {
    weight: 1,
    opacity: 1,
    color: "green",
    fillColor: "green",
    fillOpacity: 0.2
  };
}

function highlightedStyle() {
  return {
    weight: 3,
    color: "#ffaa33",
    fillOpacity: 0.4
  };
}
