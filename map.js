let n = 0; //sets which entry in zoom_level.js we're on

let map = L.map("mainmap").setView(
  [zoomLevel["zoomStatus"][n]["lat"], zoomLevel["zoomStatus"][n]["long"]],
  zoomLevel["zoomStatus"][n]["zoom"]
);

function polyStyle1() {
  return {
    weight: 2,
    opacity: 0.65,
    fillOpacity: 0.5,
    fillColor: "grey",
    color: "red"
  };
}

function polyStyle2() {
  return {
    weight: 3,
    opacity: 0.65,
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
    opacity: 0.65,
    color: "grey",
    fillColor: "red",
    fillOpacity: 0.1
  };
}

const grayscale = L.tileLayer(
    "https://api.mapbox.com/styles/v1/waisaed/ck02u1ysg6q8k1csdfu1rz6k0/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken:
        "pk.eyJ1Ijoid2Fpc2FlZCIsImEiOiJjanQzcjg4djgwdnBiNDNsbGg3eWhhbGtmIn0.OMUaek-cJfJhpH1z6Gg5gA"
    }
  ),
  satelliteStreets = L.tileLayer(
    "https://api.mapbox.com/styles/v1/waisaed/cjy64a0ag1aln1cqikvlq5mhx/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken:
        "pk.eyJ1Ijoid2Fpc2FlZCIsImEiOiJjanQzcjg4djgwdnBiNDNsbGg3eWhhbGtmIn0.OMUaek-cJfJhpH1z6Gg5gA"
    }
  ),
  noLabels = L.tileLayer(
    "https://api.mapbox.com/styles/v1/waisaed/ck05jwnmu1i771cs1ygwe4tf4/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      accessToken:
        "pk.eyJ1Ijoid2Fpc2FlZCIsImEiOiJjanQzcjg4djgwdnBiNDNsbGg3eWhhbGtmIn0.OMUaek-cJfJhpH1z6Gg5gA"
    }
  );

//create info window
let info = L.control();
info.onAdd = function(map) {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update(0);
  return this._div;
};

// update info window
info.update = function(n) {
  this._div.innerHTML = `<div class="info-inner"><h2>${
    zoomLevel["zoomStatus"][n]["subtitle"]
  } (${n + 1}/${zoomLevel["zoomStatus"].length})</h2>${
    zoomLevel["zoomStatus"][n]["text"]
  }</div>`;
};
info.addTo(map);

//Next zoom level
function nextZoom(z) {
  ++n;
  z = n;
  if (n > zoomLevel["zoomStatus"].length - 1) {
    z = n = 0;
  }
  updateMap(z);
}

//Previous zoom level
function previousZoom(z) {
  if (z > 0) {
    n--;
    z = n;
  } else {
    n = z = zoomLevel["zoomStatus"].length - 1;
  }
  updateMap(z);
}

//update map after clicking next or previous button

function updateMap(z) {
  map.setView(
    [zoomLevel["zoomStatus"][z]["lat"], zoomLevel["zoomStatus"][z]["long"]],
    zoomLevel["zoomStatus"][z]["zoom"]
  );

  info.update(z);

  map.eachLayer(function(layer) {
    map.removeLayer(layer);
  });
  map.addLayer(eval(zoomLevel["zoomStatus"][z]["tiles"]));

  /*   if (zoomLevel["zoomStatus"][z]["secondLayer"] != undefined) {
    map.addLayer(eval(zoomLevel["zoomStatus"][z]["secondLayer"]));
  } */
  console.log(zoomLevel["zoomStatus"][z]["layer"].length);
  for (i = 0; i < zoomLevel["zoomStatus"][z]["layer"].length; i++) {
    if (zoomLevel["zoomStatus"][z]["layer"][i] != undefined) {
      map.addLayer(eval(zoomLevel["zoomStatus"][z]["layer"][i])); //change to "for" loop to iterate through array
      /*  eval(zoomLevel["zoomStatus"][z]["layer"]).bringToFront(); */
    }
  }
}
//geoJson layers
yunnanOutline = L.geoJson(yunnanLayer, {
  style: polyStyle1(),
  onEachFeature: onEachFeature
});

nineLakes = L.geoJson(nineLayer, {
  style: polyStyle2(),
  onEachFeature: onEachFeature
});

yuxiLakes = L.geoJson(lakeLayer, {
  style: polyStyle3(),
  onEachFeature: onEachFeature
});

subBasins = L.geoJson(basinsOutline, {
  style: basinStyle()
});

lakeErie = L.geoJson(erieOutline, {
  style: polyStyle3(),
  onEachFeature: onEachFeature
});

//layers control
let overlayLayers = {
  // Sites: siteMarkers,
  "Yunnan Boundary": yunnanOutline,
  "Nine Lakes": nineLakes,
  "Yuxi Lakes": yuxiLakes,
  "Sub-basins": subBasins,
  "Lake Erie": lakeErie
};
L.control.layers(null, overlayLayers).addTo(map);

//listeners
function highlightFeature(e) {
  let layer = e.target;

  layer.setStyle({
    weight: 3,
    color: "#ffaa33",
    fillOpacity: 0.4
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  /* yuxiLakes.resetStyle(e.target); */
  e.target.setStyle(eval(e.target.feature.properties.style)());
}

function zoomToFeature(e) {
  // map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.bindPopup(
    "<h3>" +
      feature.properties.name +
      "</h3>" +
      (feature.properties.facts == undefined
        ? ""
        : "<p>" + feature.properties.facts + "</p>")
  );

  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature
  });
}

//start the map on the first zoom_levels entry
updateMap(0);
