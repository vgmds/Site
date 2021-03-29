function init_map(){var myOptions = {zoom:15,center:new google.maps.LatLng(-3.2141649,-45.0036786),mapTypeId: google.maps.MapTypeId.ROADMAP};
        map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position:
        new google.maps.LatLng(-3.2141649,-45.0036786)});infowindow = new google.maps.InfoWindow({content:
        '<img src="img/faviconn.png" style="width:100% "/><h1 style="color:black; font-size:20px">Viana</h1>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);
        });infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);