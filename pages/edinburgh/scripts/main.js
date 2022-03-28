
//map variables
var map;
var tile = "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
//layer and tile booleans
var showLayers = true;
var color = false;
//layer variables
var wol;
var castle;
var royalMile;
var hills;


function init() {

    map = new ol.Map({
        target: 'myMap',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM({
                "url" : tile
            })
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([-3.188267,55.951251]),
          zoom: 13

        })
      });

      var mousePosition = new ol.control.MousePosition({
        coordinateFormat: function(coordinate) {
            return ol.coordinate.format(coordinate, 'Latitude: {y}, Longitude: {x}', 3);
          },
        projection: 'EPSG:4326',
        target: document.getElementById('mousePosition'),
        undefinedHTML: '&nbsp;'
      });
      
      edinburghLayers();
      addLayers();
      map.addControl(mousePosition);
}

//function to define all layers
function edinburghLayers() {
    //define water of leith styles
    const wolStyles = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'steelblue',
                width: 5
            }),
        })
    ]
    //define water of leith layer
    var wolFile = "geojson/wolGeoJSON.geojson"
    wol = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: wolFile,
            format: new ol.format.GeoJSON()
        }),
        style: wolStyles
    })

    //define castle styles
    const castleStyles = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'goldenrod',
                width: 2
            }),
            fill: new ol.style.Fill({
                color: 'gold'
            })
        })
    ]
    //define castle layer
    var castleFile = "geojson/castleGeoJSON.geojson"
    castle = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: castleFile,
            format: new ol.format.GeoJSON()
        }),
        style: castleStyles
    })

    //define royalMile styles
    const royalMileStyles = [
        new ol.style.Style({
            stroke: new ol.style.Stroke({
                color: 'firebrick',
                width: 3
            }),
        })
    ]
    //define royalMile layer
    var royalMileFile = "geojson/royalMileGeoJSON.geojson"
    royalMile = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: royalMileFile,
            format: new ol.format.GeoJSON()
        }),
        style: royalMileStyles
    })

    const hillStyles = [
        new ol.style.Style({
            image: new ol.style.Circle({
                radius: 5,
                fill: new ol.style.Fill({color: 'forestgreen'}),
                stroke: new ol.style.Stroke({
                  color: 'forestgreen', 
                  width: 2
                })
            })
        })
    ]

    var hillFile = "geojson/hillGeoJSON.geojson"
    hills = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: hillFile,
            format: new ol.format.GeoJSON()
        }),
        style: hillStyles
    })

    
}

function toggleLayers(tf) {
    var legend = document.getElementById('legend');

    if (tf) {
        addLayers();
        showLayers=true;
        legend.classList.remove('hide');

    }
    else {
        removeLayers();
        showLayers=false;
        legend.classList.add('hide');
    }
}

function changeMap (url) {
    console.log("triggered change event.");

    var replacementTileLayer = new ol.layer.Tile({
        source: new ol.source.OSM({
            "url": url
        })
    });

    map.setLayers([replacementTileLayer]);
};

function toggleTiles(tf) {

    var bwImg = document.getElementById('bwImg');
    var colImg = document.getElementById('colImg');
    var bkgrd  = document.getElementById('body');

    if (tf) {
        removeLayers()
        changeMap("https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}")
        color = false;
        bwImg.classList.remove('hide');
        colImg.classList.add('hide');
        bkgrd.style.backgroundColor = 'whitesmoke';


    }
    else {
        removeLayers()
        changeMap("https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png")
        color=true;
        bwImg.classList.add('hide');
        colImg.classList.remove('hide');
        bkgrd.style.backgroundColor = 'navy';


    }
    if (document.getElementById('layersOn').checked) {
        addLayers();
    }
}

function removeLayers() {
    map.removeLayer(wol);
    map.removeLayer(castle);
    map.removeLayer(royalMile);
    map.removeLayer(hills);
}

function addLayers() {
    map.addLayer(wol);
    map.addLayer(castle);
    map.addLayer(royalMile);
    map.addLayer(hills);
}