var redentorCristRiver;

function addRedentorCristRiver(){
    var redentorCristRiverCoordinates = [
        {lat: -15.92413929053089, lng: -47.904003728181124},
        {lat: -15.924170241905255, lng: -47.90388571098447},
        {lat: -15.92418055902899, lng: -47.90381060913205},
        {lat: -15.92418055902899, lng: -47.903724778443575},
        {lat: -15.924170241905255, lng: -47.90362821891904},
        {lat: -15.924170241905255, lng: -47.9035316593945},
        {lat: -15.92420119327485, lng: -47.90342437103391},
        {lat: -15.92420119327485, lng: -47.90331708267331},
        {lat: -15.924170241905255, lng: -47.90326343849301},
        {lat: -15.92413929053089, lng: -47.903209794312716},
        {lat: -15.924118656278667, lng: -47.90312396362424},
        {lat: -15.924118656278667, lng: -47.90303813293576},
        {lat: -15.92413929053089, lng: -47.902941573411226},
        {lat: -15.924159924780989, lng: -47.90282355621457},
        {lat: -15.924149607656215, lng: -47.902716267853975},
        {lat: -15.924108339151744, lng: -47.90266262367368},
        {lat: -15.92404643637916, lng: -47.90255533531308},
        {lat: -15.923984533587491, lng: -47.902448046952486},
        {lat: -15.923984533587491, lng: -47.90231930091977},
        {lat: -15.923984533587491, lng: -47.90216909721494},
        {lat: -15.923984533587491, lng: -47.90208326652646},
        {lat: -15.923984533587491, lng: -47.901965249329805},
        {lat: -15.9239535821845, lng: -47.90185796096921},
        {lat: -15.923943265049102, lng: -47.90177213028073},
        {lat: -15.923881362225643, lng: -47.901697028428316},
        {lat: -15.923819459383086, lng: -47.90161119773984},
        {lat: -15.923829776524833, lng: -47.90152536705136},
        {lat: -15.923850410806736, lng: -47.901460994035006},
        {lat: -15.923881362225643, lng: -47.90135370567441},
        {lat: -15.923912313639764, lng: -47.901235688477755},
        {lat: -15.923943265049102, lng: -47.90107475593686},
        {lat: -15.923943265049102, lng: -47.900967467576265},
        {lat: -15.923943265049102, lng: -47.90087090805173},
        {lat: -15.923943265049102, lng: -47.90079580619931},
        {lat: -15.923922630776728, lng: -47.900699246674776},
        {lat: -15.923912313639764, lng: -47.90064560249448},
        {lat: -15.923912313639764, lng: -47.90059195831418},
        {lat: -15.923963899319364, lng: -47.90051685646176},
        {lat: -15.923994850720767, lng: -47.90040956810117},
        {lat: -15.923974216453695, lng: -47.90031300857663},
        {lat: -15.9239535821845, lng: -47.900259364396334},
        {lat: -15.923932947913181, lng: -47.900194991379976},
        {lat: -15.923912313639764, lng: -47.90011988952756},
        {lat: -15.923912313639764, lng: -47.9000555165112},
        {lat: -15.923922630776728, lng: -47.899969685822725},
        {lat: -15.9239535821845, lng: -47.89987312629819},
        {lat: -15.923974216453695, lng: -47.89981948211789},
        {lat: -15.92404643637916, lng: -47.899755109101534},
        {lat: -15.924087704896339, lng: -47.899701464921236},
        {lat: -15.924118656278667, lng: -47.89962636306882},
        {lat: -15.924056753509252, lng: -47.89959417656064},
        {lat: -15.923994850720767, lng: -47.89952980354428},
        {lat: -15.923963899319364, lng: -47.899443972855806},
        {lat: -15.924005167853506, lng: -47.89935814216733},
        {lat: -15.924118656278667, lng: -47.899091178551316},
        {lat: -15.924082546332158, lng: -47.89902680553496},
        {lat: -15.924077387767849, lng: -47.89893561042845},
        {lat: -15.924072229203386, lng: -47.898871237412095},
        {lat: -15.92404643637916, lng: -47.8988175932318},
        {lat: -15.923969057886588, lng: -47.89872639812529},
        {lat: -15.92392778934503, lng: -47.898645931854844},
        {lat: -15.923881362225643, lng: -47.89853327907622},
        {lat: -15.923850410806736, lng: -47.89846890605986},
        {lat: -15.923809142240792, lng: -47.89841526187956},
        {lat: -15.923788507954638, lng: -47.898345524445176},
        {lat: -15.923762715093973, lng: -47.89826505817473},
        {lat: -15.923716287936418, lng: -47.89824896492064},
        {lat: -15.923664702193207, lng: -47.89816313423216},
        {lat: -15.923664702193207, lng: -47.89806657470763},
        {lat: -15.923721446510015, lng: -47.89797001518309},
        {lat: -15.923762715093973, lng: -47.897905642166734},
        {lat: -15.923819459383086, lng: -47.89781981147826},
        {lat: -15.923865886516788, lng: -47.89773398078978},
        {lat: -15.923917472208323, lng: -47.897653514519334},
        {lat: -15.923917472208323, lng: -47.89747648872435},
        {lat: -15.923886520794989, lng: -47.89743357338011},
        {lat: -15.923809142240792, lng: -47.89733701385558},
        {lat: -15.923773032238634, lng: -47.89724581874907},
        {lat: -15.923721446510015, lng: -47.897122437134385},
        {lat: -15.92375239794878, lng: -47.89701514877379},
        {lat: -15.923788507954638, lng: -47.89695614017546},
        {lat: -15.923834935095503, lng: -47.89675229229033},
        {lat: -15.923809142240792, lng: -47.896591359749436},
        {lat: -15.923773032238634, lng: -47.89650552906096},
        {lat: -15.923633750740917, lng: -47.89632313884795},
        {lat: -15.923633750740917, lng: -47.89623730815947},
        {lat: -15.923633750740917, lng: -47.89617167785764},
        {lat: -15.92358216497651, lng: -47.8960214741528},
        {lat: -15.923478993407938, lng: -47.89578543975949},
        {lat: -15.923406773278396, lng: -47.8956781513989},
        {lat: -15.923355187455694, lng: -47.89558159187436},
        {lat: -15.923355187455694, lng: -47.895485032349825},
        {lat: -15.92328296728164, lng: -47.89535628631711},
        {lat: -15.923159161208538, lng: -47.89528118446469},
        {lat: -15.923066306603628, lng: -47.89513098075986},
        {lat: -15.923055989422659, lng: -47.894980777055025},
        {lat: -15.922983769140997, lng: -47.89493786171079},
        {lat: -15.922890914454996, lng: -47.89479838684201},
        {lat: -15.922756790943872, lng: -47.894615996629},
        {lat: -15.922674253354046, lng: -47.894476521760225},
        {lat: -15.922602032935124, lng: -47.89440141990781},
        {lat: -15.92254012969823, lng: -47.89428340271115},
        {lat: -15.922478226442266, lng: -47.89414392784238},
        {lat: -15.922406005952851, lng: -47.8941117413342},
        {lat: -15.922271882117885, lng: -47.893982995301485},
        {lat: -15.922199661554274, lng: -47.89386497810483},
        {lat: -15.922117123735488, lng: -47.893746960908175},
        {lat: -15.922003634179267, lng: -47.893704045563936},
        {lat: -15.922003634179267, lng: -47.89361821487546},
        {lat: -15.921910779040113, lng: -47.893489468842745},
        {lat: -15.921817923858033, lng: -47.893489468842745},
        {lat: -15.921766337627227, lng: -47.89337145164609},
        {lat: -15.921745703131183, lng: -47.893264163285494},
        {lat: -15.921632213365086, lng: -47.893199790269136},
        {lat: -15.921508406274397, lng: -47.89316760376096},
        {lat: -15.921415550906293, lng: -47.89307104423642},
        {lat: -15.921271109137264, lng: -47.892985213547945},
        {lat: -15.92112666726437, lng: -47.892974484711885},
        {lat: -15.921075080856001, lng: -47.89287792518735},
        {lat: -15.92091000426024, lng: -47.89284573867917},
        {lat: -15.92081714861549, lng: -47.89281355217099},
        {lat: -15.920755244828486, lng: -47.89278136566281},
        {lat: -15.92067270641613, lng: -47.89278136566281},
        {lat: -15.920548898734, lng: -47.892759907990694},
        {lat: -15.920466360236862, lng: -47.892706263810396},
        {lat: -15.920383821705808, lng: -47.89268480613828},
        {lat: -15.920383821705808, lng: -47.89268480613828},
        {lat: -15.920342552427545, lng: -47.89267407730222},
        {lat: -15.920290965817824, lng: -47.89266334846616},
        {lat: -15.92022906186865, lng: -47.89266334846616},
        {lat: -15.920136205909117, lng: -47.89262043312192},
        {lat: -15.920063984577594, lng: -47.8925453312695},
        {lat: -15.919960811201792, lng: -47.89238439872861},
        {lat: -15.919898907150879, lng: -47.892266381531954},
        {lat: -15.919888589807204, lng: -47.89213763549924},
        {lat: -15.919816368386652, lng: -47.892094720155},
        {lat: -15.919651290756446, lng: -47.892008889466524},
        {lat: -15.919579069250563, lng: -47.891955245286226},
        {lat: -15.919465578260308, lng: -47.89183722808957},
        {lat: -15.91934176983417, lng: -47.89179431274533},
        {lat: -15.919269548217006, lng: -47.89168702438474},
        {lat: -15.919083835367957, lng: -47.89157973602414},
        {lat: -15.919011613658077, lng: -47.891461718827486},
        {lat: -15.918887804952147, lng: -47.89133297279477},
        {lat: -15.918743361365456, lng: -47.89116131141782},
        {lat: -15.918578282853497, lng: -47.891021836549044},
        {lat: -15.91842352162532, lng: -47.89093600586057},
        {lat: -15.91827907770481, lng: -47.89087163284421},
        {lat: -15.918134633680435, lng: -47.890764344483614},
        {lat: -15.918000506993387, lng: -47.8906892426312},
        {lat: -15.91784574532012, lng: -47.89061414077878},
        {lat: -15.917721935895681, lng: -47.8905819542706},
        {lat: -15.917536221615967, lng: -47.890517581254244},
        {lat: -15.917484634285568, lng: -47.890506852418184},
        {lat: -15.917484634285568, lng: -47.890506852418184},
    ];

    //add the river at the map in the position previously defined
    redentorCristRiver = new google.maps.Polyline({
        path: redentorCristRiverCoordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3
    });

    redentorCristRiver.setMap(map);
  }
