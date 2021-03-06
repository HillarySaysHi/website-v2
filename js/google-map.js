var marker,
  map,
  mapLocation = new google.maps.LatLng(53.324543, -6.253582);
function initialize() {
  var e = {
    zoom: 15,
    center: mapLocation,
    scrollwheel: !1,
    styles: [
      {
        featureType: "administrative",
        elementType: "labels.text.fill",
        stylers: [{ color: "#444444" }]
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ color: "#f2f2f2" }]
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [{ saturation: -100 }, { lightness: 45 }]
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [{ visibility: "simplified" }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [{ color: "#dbdbdb" }, { visibility: "on" }]
      }
    ]
  };
  map = new google.maps.Map(document.getElementById("map-canvas"), e);
  var a = new google.maps.InfoWindow({
    content:
      '<div class="map-info-box"><div class="map-head"><h3 style="color:black">Hilary</h3></div><p class="map-address"><i class="fa fa-map-marker"></i> 59 Ranelagh Dublin 6 D06 E2C2 <br><i class="fa fa-phone"></i> 01-123-4567<br><span class="map-email"><i class="fa fa-envelope"></i> info@hillary.ie</span></p><p><a href="https://goo.gl/maps/BxkMQeNcLhK2" target="_blank">Open on Google Maps</a></p></div>'
  });
  (marker = new google.maps.Marker({
    map: map,
    draggable: !0,
    title: "Site Name",
    icon: "img/marker.svg",
    animation: google.maps.Animation.DROP,
    position: mapLocation
  })),
    google.maps.event.addListener(marker, "click", function() {
      a.open(map, marker);
    });
}
google.maps.event.addDomListener(window, "load", initialize);
