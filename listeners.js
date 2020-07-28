//Listeners

function highlightFeature(e) {
  let layer = e.target;
  layer.setStyle(highlightedStyle());

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
}

function resetHighlight(e) {
  e.target.setStyle(eval(e.target.feature.properties.style)());
}
