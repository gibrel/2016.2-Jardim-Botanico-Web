var caesb3;

function addCaesb3River(){

    var caesb3RiverCoordinates = [
        {lat: -15.887314095825971, lng: -47.84254711121321},
      {lat: -15.887479200004242, lng: -47.84292194992304},
      {lat: -15.887541114036193, lng: -47.843029238283634},
      {lat: -15.88762366604915, lng: -47.84320089966059},
      {lat: -15.887726856017764, lng: -47.84330818802118},
      {lat: -15.887788769973522, lng: -47.8434369340539},
      {lat: -15.887891959857496, lng: -47.84356568008661},
      {lat: -15.888015787648417, lng: -47.843758799135685},
      {lat: -15.888139615363185, lng: -47.8438875451684},
      {lat: -15.888180891251187, lng: -47.844037748873234},
      {lat: -15.888201529192001, lng: -47.84442398697138},
      {lat: -15.888201529192001, lng: -47.844724394381046},
      {lat: -15.888242805067307, lng: -47.845003344118595},
      {lat: -15.888242805067307, lng: -47.84521792083979},
      {lat: -15.888284080934138, lng: -47.84564707428217},
      {lat: -15.888284080934138, lng: -47.846011854708195},
      {lat: -15.888284080934138, lng: -47.84637663513422},
      {lat: -15.88830471886438, lng: -47.84659121185541},
      {lat: -15.888345994718527, lng: -47.84682724624872},
      {lat: -15.88840790848386, lng: -47.84721348434687},
      {lat: -15.888490460141355, lng: -47.84755680710077},
      {lat: -15.888655563354785, lng: -47.84785721451044},
      {lat: -15.888800028555444, lng: -47.84813616424799},
      {lat: -15.888861942181125, lng: -47.84835074096918},
      {lat: -15.889068320795868, lng: -47.848736979067326},
      {lat: -15.889212785700304, lng: -47.84905884414911},
      {lat: -15.889481077390569, lng: -47.849230505526066},
      {lat: -15.889708093156838, lng: -47.849466539919376},
      {lat: -15.890100210695532, lng: -47.849724031984806},
      {lat: -15.890409776633827, lng: -47.850024439394474},
      {lat: -15.890636791352627, lng: -47.850281931459904},
      {lat: -15.890781255131275, lng: -47.85060379654169},
      {lat: -15.890946356465605, lng: -47.850968576967716},
      {lat: -15.89102890708198, lng: -47.851268984377384},
      {lat: -15.89113209530484, lng: -47.851483561098576},
      {lat: -15.891255921102433, lng: -47.85182688385248},
      {lat: -15.891359109208883, lng: -47.852234579622746},
      {lat: -15.891462297262436, lng: -47.85264227539301},
      {lat: -15.89148293486681, lng: -47.852985598146915},
      {lat: -15.89148293486681, lng: -47.85332892090082},
      {lat: -15.89148293486681, lng: -47.85358641296625},
      {lat: -15.89148293486681, lng: -47.85390827804804},
      {lat: -15.891524210069187, lng: -47.85403702408075},
      {lat: -15.891534528868448, lng: -47.854050267487764},
      {lat: -15.891544847667186, lng: -47.85411464050412},
      {lat: -15.891544847667186, lng: -47.85411464050412},
    ];

    var lineSymbol = {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        strokeWeight: 4,
        strokeColor: '#393'
    };

    //add the river at the map in the position previously defined
    caesb3River = new google.maps.Polyline({
        path: caesb3RiverCoordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3,
        icons: [{
            icon: lineSymbol,
            offset: '100%'
        }]
    });

    google.maps.event.addListener(caesb3River, 'click', addCaesb3RiverInfowindow);

    caesb3River.setMap(map);
  }

  function addCaesb3RiverInfowindow(event){
      var caesb3RiverContentString =
      '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Captação da CAESB 3</h1>'+
      '<div id="bodyContent">'+
      '<p>O <b>Ribeirão Cabeça de Veado</b>, serve de ponto de captação de ' +
      'água para a CAESB. '+
      'Esse braço do ribeirão da na estação de captação de recursos hidricos Cabeça de Veado III'+
      '<p>Leia mais em: <a href="/jbb_spaces/rio">'+
      'Rio</a> '+
      '</div>'+
      '</div>';

      infoWindow.close();
      infoWindow.setContent(caesb3RiverContentString);
      infoWindow.setPosition(event.latLng);
      infoWindow.open(map);
  }