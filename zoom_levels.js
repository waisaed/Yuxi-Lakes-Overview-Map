const zoomLevel = {
  zoomStatus: [
    {
      subtitle: "The Yunnan Provence of China",
      text:
        "<p>Yuxi is located in China's Yunnan province.</p><p><em>(Click the right-arrow button to see the next view)</em></p>",
      layer: ["yunnanOutline"], //
      zoom: 5,
      lat: 30.0,
      long: 104.0,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "The Nine Plateau Lakes Region",
      text:
        '<p>Yunnan\'s Plateau Region has 1,066 km<sup>2</sup> total lake surface area. </ br>Nine of these "plateau" lakes are recognized as having surface areas over 30 km<sup>2</sup>.</p><p><em>(Drainage sub-basins are shown in red)</em>',
      layer: ["subBasins", "nineLakes"],
      secondLayer: "subBasins",
      zoom: 7,
      lat: 26.199619,
      long: 101.967598,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "Three Yuxi Lakes",
      text:
        "<p>The Yuxi District government is responsible for the restoration and protection of three lakes surrounding Yuxi City.</p><p><em>(Click the lakes to learn more about them)</em></p>",
      layer: ["yuxiLakes"], //
      zoom: 10,
      lat: 24.423742,
      long: 102.810943,
      tiles: "satelliteStreets",
      polyColor: "#3388ff"
    },
    {
      subtitle: "Comparing lakes of the Yuxi District with Lake Erie",
      text:
        "<p>Lake Erie (superimposed here below the Yuxi District lakes) faces similar threats to water quality despite it's larger volume and surface area.</p><p><em>(Click the lakes to learn more about them)</em></p>",
      layer: ["yuxiLakes", "lakeErie"],
      secondLayer: "lakeErie",
      zoom: 8,
      lat: 23.609959,
      long: 104.34255,
      tiles: "noLabels",
      polyColor: "#3388ff"
    }
  ]
};
