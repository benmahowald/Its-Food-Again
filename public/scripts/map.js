console.log('map sourced');

google.charts.load('upcoming', {packages: ['map']});
    google.charts.setOnLoadCallback(drawMap);

    function drawMap () {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Address');
      data.addColumn('string', 'Location');

      data.addRows([
        ['9401 James Avenue S, Bloomington, MN 55431, United States', 'Prime Digital Academy'],
        ['1936 St. Clair Avenue, St. Paul, MN 55105, United States', "Widmer's Super Market" ],
        ['3445 5th ave s, mpls, mn', 'Home']
      ]);

      var options = {
        mapType: 'styledMap',
        zoomLevel: 10,
        showTooltip: true,
        showInfoWindow: true,
        tooltip: {isHtml: true},
        maps: {
          MapOptions: {
            streetViewControl: false
          },
          styledMap: {
            name: 'Styled Map', // This name will be displayed in the map type control.
            styles: [
              {featureType: 'poi.attraction',
               stylers: [{color: '#fce8b2'}]
              },
              {featureType: 'road.highway',
               stylers: [{hue: '#0277bd'}, {saturation: -50}]
              },
              {featureType: 'road.highway',
               elementType: 'labels.icon',
               stylers: [{hue: '#000'}, {saturation: 100}, {lightness: 50}]
              },
              {featureType: 'landscape',
               stylers: [{hue: '#259b24'}, {saturation: 10}, {lightness: -22}]
              }
        ]}}
      };

      var map = new google.visualization.Map(document.getElementById('map_div'));

      map.draw(data, options);
    }
