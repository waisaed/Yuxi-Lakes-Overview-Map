let currentView = 0; //set which entry in map_views.js we're on
let view = mapViewList["views"][currentView]; //shorten long path name, updated in updateMap

//create main map
let map = L.map("mainmap");

//create info window
let info = L.control();
info.onAdd = function(map) {
  this._div = L.DomUtil.create("div", "info");
  return this._div;
};

//set map tile layers
const accessToken =
    "pk.eyJ1Ijoid2Fpc2FlZCIsImEiOiJjanQzcjg4djgwdnBiNDNsbGg3eWhhbGtmIn0.OMUaek-cJfJhpH1z6Gg5gA",
  attribution =
    'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const grayscale = L.tileLayer(
    "https://api.mapbox.com/styles/v1/waisaed/ck02u1ysg6q8k1csdfu1rz6k0/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}",
    {
      accessToken: accessToken,
      attribution: attribution,
      maxZoom: 18
    }
  ),
  satelliteStreets = L.tileLayer(
    "https://api.mapbox.com/styles/v1/waisaed/cjy64a0ag1aln1cqikvlq5mhx/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}",
    {
      accessToken: accessToken,
      attribution: attribution,
      maxZoom: 18
    }
  ),
  noLabels = L.tileLayer(
    "https://api.mapbox.com/styles/v1/waisaed/ck05jwnmu1i771cs1ygwe4tf4/tiles/256/{z}/{x}/{y}@2x?access_token={accessToken}",
    {
      accessToken: accessToken,
      attribution: attribution,
      maxZoom: 18
    }
  );

//get geoJson layers
yunnanOutline = L.geoJson(yunnanLayer, {
  style: polyStyle1()
});

yuxiOutline = L.geoJson(yuxiDistrict, {
  style: districtStyle()
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

//bind popups
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
    mouseout: resetHighlight
  });
}

// update info window
info.update = function(n) {
  this._div.innerHTML = `<div class="info-inner"><h2>${view.subtitle} (${n +
    1}/${mapViewList.views.length})</h2>${
    mapViewList["views"][currentView]["text"]
  }</div>`;
};
info.addTo(map);

//update map with current view
function updateMap(z) {
  view = mapViewList.views[z];
  let layers = view.layers;

  map.setView([view.lat, view.long], view.zoom);

  info.update(z);

  map.eachLayer(function(layer) {
    map.removeLayer(layer);
  });
  map.addLayer(eval(view.tiles));

  for (i = 0; i < layers.length; i++) {
    if (layers[i] != undefined) {
      map.addLayer(eval(layers[i]));
    }
  }
}

updateMap(currentView); //initialize map
