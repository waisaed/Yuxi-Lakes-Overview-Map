const zoomLevel = {
  zoomStatus: [
    {
      subtitle: "The Yunnan Provence of China",
      text:
        "<p>The Yunnan Province is a mountainous region in Southwestern China.</p><p class='legend'>(Yunnan is outlined in red)</p><p class='directions'>&#128269; Click the right-arrow button to see the next view</p>",
      layer: ["yunnanOutline"], //
      zoom: 5,
      lat: 30.0,
      long: 104.0,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "Yunnan's Plateau Region",
      text:
        '<p>The region is home to many lakes, comprising a total surface area of 1,066 km<sup>2</sup>. </ br>Nine of these "plateau" lakes are recognized as having surface areas over 30 km<sup>2</sup>. The lakes span multiple watersheds.</p><p class="legend">(Watersheds are shown in red. Lakes are outlined in blue.)</p>',
      layer: ["subBasins", "nineLakes"],
      zoom: 7,
      lat: 26.199619,
      long: 101.967598,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "The Yuxi District",
      text:
        '<p>Three of these "plateau lakes" fall entirely within the Yuxi District of Yunnan. The Yuxi District is responsible for the restoration and protection of these lakes.</p><p class="legend">(Yuxi District is outlined in green)</p>',
      layer: ["yuxiOutline", "nineLakes"],
      zoom: 8,
      lat: 24.423742,
      long: 102.810943,
      tiles: "grayscale",
      polyColor: "red"
    },
    {
      subtitle: "Three Yuxi Lakes",
      text:
        "<p>Fuxian Lake is substantially larger and deeper that the Qilu and Xingyun Lakes.<p class='directions'><em>&#128269; Click the lakes to learn more about them</em></p>",
      layer: ["yuxiLakes"], //
      zoom: 10,
      lat: 24.423742,
      long: 102.810943,
      tiles: "satelliteStreets",
      polyColor: "#3388ff"
    },
    {
      subtitle: "Comparing lakes of the Yuxi with Lake Erie",
      text:
        "<p>Lake Erie (superimposed here below the Yuxi area lakes) faces similar threats to water quality despite it's larger volume and surface area.</p><p><em>(Click the lakes to learn more about them)</em></p>",
      layer: ["yuxiLakes", "lakeErie"],
      zoom: 8,
      lat: 23.609959,
      long: 104.34255,
      tiles: "noLabels",
      polyColor: "#3388ff"
    }
  ]
};
