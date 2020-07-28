//layers control
let overlayLayers = {
  "Yunnan Boundary": yunnanOutline,
  "Nine Lakes": nineLakes,
  "Yuxi Lakes": yuxiLakes,
  "Sub-basins": subBasins,
  "Lake Erie": lakeErie
};
L.control.layers(null, overlayLayers).addTo(map);
