let markers, map;

function initMap() {
  const posicion = {
    lat: -25.363,
    lng: 131.044,
  };

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: posicion,
  });

  markers.push(
    new google.maps.Marker({
      position: {
        lat: 51.50724,
        lng: -0.12133,
      },
      map,
      title: "Big Ben",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 37.391598885054556, 
        lng: -5.983896477107515,
      },
      map,
      title: "Sevilla",
    })
  );
  markers.push(
    new google.maps.Marker({
      position: {
        lat: 50.89505447481777,
        lng: 4.341554715826982,
      },
      map,
      title: "Atomium",
    })
  );
}
