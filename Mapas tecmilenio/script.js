function iniciarMap(){
    var coord = {lat:25.6281431 ,lng: -100.304329418};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}