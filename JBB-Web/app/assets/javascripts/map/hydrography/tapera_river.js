var taperaRiver;

function addTaperaRiver(){
    //set the path of the river
    var taperaRiverCoordinates = [
        //tapera river
        {lat: -15.912114320735952, lng: -47.90636281482875},
        {lat: -15.912093685248593, lng: -47.906319899484515},
        {lat: -15.912047255394297, lng: -47.90622333995998},
        {lat: -15.912005984403686, lng: -47.90615896694362},
        {lat: -15.912005984403686, lng: -47.90612678043544},
        {lat: -15.912016302152132, lng: -47.906094593927264},
        {lat: -15.912016302152132, lng: -47.906057043001056},
        {lat: -15.911933760149731, lng: -47.9059926699847},
        {lat: -15.911846059235057, lng: -47.90590683929622},
        {lat: -15.911799629323548, lng: -47.905842466279864},
        {lat: -15.911763517162736, lng: -47.90576200000942},
        {lat: -15.911742881639357, lng: -47.90569762699306},
        {lat: -15.911753199401314, lng: -47.90566007606685},
        {lat: -15.911753199401314, lng: -47.90562252514064},
        {lat: -15.911742881639357, lng: -47.905584974214435},
        {lat: -15.9117480405204, lng: -47.90552060119808},
        {lat: -15.91177383492362, lng: -47.90547232143581},
        {lat: -15.911789311563972, lng: -47.90545086376369},
        {lat: -15.911820264841097, lng: -47.90540258400142},
        {lat: -15.911820264841097, lng: -47.90538649074733},
        {lat: -15.911789311563972, lng: -47.90536503307521},
        {lat: -15.9117480405204, lng: -47.905359668657184},
        {lat: -15.911706769468356, lng: -47.905354304239154},
        {lat: -15.911686133939153, lng: -47.905348939821124},
        {lat: -15.911644862874398, lng: -47.905348939821124},
        {lat: -15.911608750685774, lng: -47.90537039749324},
        {lat: -15.91158811514651, lng: -47.905322117730975},
        {lat: -15.91158811514651, lng: -47.90527920238674},
        {lat: -15.91158811514651, lng: -47.90524165146053},
        {lat: -15.911598432916415, lng: -47.90521482937038},
        {lat: -15.911624227338834, lng: -47.90516654960811},
        {lat: -15.911634545106883, lng: -47.90513972751796},
        {lat: -15.911660339524673, lng: -47.90511826984584},
        {lat: -15.911696451704023, lng: -47.905096812173724},
        {lat: -15.911727404995434, lng: -47.905080718919635},
        {lat: -15.911784152684, lng: -47.905069990083575},
        {lat: -15.911840900356522, lng: -47.905048532411456},
        {lat: -15.911871853625696, lng: -47.90497879497707},
        {lat: -15.911871853625696, lng: -47.90493587963283},
        {lat: -15.911887330258503, lng: -47.90487150661647},
        {lat: -15.91183058259907, lng: -47.904817862436175},
        {lat: -15.911887330258503, lng: -47.90476958267391},
        {lat: -15.912000825529274, lng: -47.90476958267391},
        {lat: -15.91207304975911, lng: -47.90468911640346},
        {lat: -15.912067890886428, lng: -47.904592556878924},
        {lat: -15.91207820863169, lng: -47.90448526851833},
        {lat: -15.91207820863169, lng: -47.90443698875606},
        {lat: -15.91207820863169, lng: -47.90437798015773},
        {lat: -15.91209884412063, lng: -47.904318971559405},
        {lat: -15.91209884412063, lng: -47.90424386970699},
        {lat: -15.91208852637642, lng: -47.90419022552669},
        {lat: -15.91208852637642, lng: -47.90416340343654},
        {lat: -15.912067890886428, lng: -47.90414731018245},
        {lat: -15.912031778773805, lng: -47.9041204880923},
        {lat: -15.911990507780029, lng: -47.904109759256244},
        {lat: -15.911964713404606, lng: -47.904088301584125},
        {lat: -15.911949236777767, lng: -47.904061479493976},
        {lat: -15.911918283520512, lng: -47.9040292929858},
        {lat: -15.911907965767044, lng: -47.90398101322353},
        {lat: -15.91192344239705, lng: -47.90394346229732},
        {lat: -15.91195439565353, lng: -47.903857631608844},
        {lat: -15.911959554529124, lng: -47.903825445100665},
        {lat: -15.911975031155176, lng: -47.90378789417446},
        {lat: -15.911980190030262, lng: -47.90375034324825},
        {lat: -15.911964713404606, lng: -47.90362696163356},
        {lat: -15.911964713404606, lng: -47.903578681871295},
        {lat: -15.911933760149731, lng: -47.903525037691},
        {lat: -15.911907965767044, lng: -47.9034713935107},
        {lat: -15.911877012503428, lng: -47.90344993583858},
        {lat: -15.911871853625696, lng: -47.90339629165828},
        {lat: -15.91183058259907, lng: -47.903337283059955},
        {lat: -15.911696451704023, lng: -47.90327827446163},
        {lat: -15.911650021757946, lng: -47.9032729100436},
        {lat: -15.911629386222929, lng: -47.90325681678951},
        {lat: -15.911603591801157, lng: -47.90318171493709},
        {lat: -15.91158811514651, lng: -47.90314416401088},
        {lat: -15.911557161833647, lng: -47.903090519830585},
        {lat: -15.911515890742391, lng: -47.903085155412555},
        {lat: -15.911459142978105, lng: -47.903074426576495},
        {lat: -15.91142818964537, lng: -47.903079790994525},
        {lat: -15.911412712977208, lng: -47.903047604486346},
        {lat: -15.911412712977208, lng: -47.90301541797817},
        {lat: -15.911412712977208, lng: -47.90298323146999},
        {lat: -15.91142303075611, lng: -47.90297250263393},
        {lat: -15.91142303075611, lng: -47.90292958728969},
        {lat: -15.91142303075611, lng: -47.90289203636348},
        {lat: -15.911433348534478, lng: -47.902854485437274},
        {lat: -15.911464301866422, lng: -47.902811570093036},
        {lat: -15.911479778530602, lng: -47.90274719707668},
        {lat: -15.911490096306068, lng: -47.90272573940456},
        {lat: -15.911531367402603, lng: -47.90264527313411},
        {lat: -15.91156747960513, lng: -47.902602357789874},
        {lat: -15.911593274031532, lng: -47.902591628953815},
        {lat: -15.911639703990698, lng: -47.902570171281695},
        {lat: -15.911675816173762, lng: -47.902575535699725},
        {lat: -15.911691292821658, lng: -47.902602357789874},
        {lat: -15.911727404995434, lng: -47.90264527313411},
        {lat: -15.911753199401314, lng: -47.9026613663882},
        {lat: -15.911789311563972, lng: -47.90262917988002},
        {lat: -15.911809947082576, lng: -47.902591628953815},
        {lat: -15.911815105961912, lng: -47.902559442445636},
        {lat: -15.911809947082576, lng: -47.90252189151943},
        {lat: -15.91179447044383, lng: -47.90247897617519},
        {lat: -15.911784152684, lng: -47.90243606083095},
        {lat: -15.911758358282087, lng: -47.90238241665065},
        {lat: -15.911753199401314, lng: -47.902360958978534},
        {lat: -15.91172224611387, lng: -47.902323408052325},
        {lat: -15.911717087232168, lng: -47.902296585962176},
        {lat: -15.911706769468356, lng: -47.902264399454},
        {lat: -15.911665498407825, lng: -47.90224294178188},
        {lat: -15.911660339524673, lng: -47.90223221294582},
        {lat: -15.911634545106883, lng: -47.90218929760158},
        {lat: -15.911608750685774, lng: -47.90216247551143},
        {lat: -15.911582956261357, lng: -47.90213565342128},
        {lat: -15.911598432916415, lng: -47.902087373659015},
        {lat: -15.911598432916415, lng: -47.90202300064266},
        {lat: -15.911608750685774, lng: -47.90199081413448},
        {lat: -15.911629386222929, lng: -47.90195326320827},
        {lat: -15.911629386222929, lng: -47.90192107670009},
        {lat: -15.911619068454613, lng: -47.90186743251979},
        {lat: -15.91158811514651, lng: -47.901856703683734},
        {lat: -15.911557161833647, lng: -47.901829881593585},
        {lat: -15.911510731855383, lng: -47.901824517175555},
        {lat: -15.911433348534478, lng: -47.901803059503436},
        {lat: -15.9113714418563, lng: -47.90178696624935},
        {lat: -15.911257946230117, lng: -47.90177087299526},
        {lat: -15.911278581803275, lng: -47.9017064999789},
        {lat: -15.911294058481754, lng: -47.90166358463466},
        {lat: -15.911350806292669, lng: -47.901609940454364},
        {lat: -15.911350806292669, lng: -47.901561660692096},
        {lat: -15.911361124074752, lng: -47.90147583000362},
        {lat: -15.911355965183773, lng: -47.90141145698726},
        {lat: -15.911366282965588, lng: -47.901352448388934},
        {lat: -15.911392077417817, lng: -47.901304168626666},
        {lat: -15.911407554087567, lng: -47.90126661770046},
        {lat: -15.911433348534478, lng: -47.90123443119228},
        {lat: -15.911464301866422, lng: -47.90117542259395},
        {lat: -15.911433348534478, lng: -47.901100320741534},
        {lat: -15.911402395197786, lng: -47.901073498651385},
        {lat: -15.911381759637324, lng: -47.90102521888912},
        {lat: -15.911397236307865, lng: -47.901003761217},
        {lat: -15.911453984089647, lng: -47.90093938820064},
        {lat: -15.911479778530602, lng: -47.90091256611049},
        {lat: -15.911510731855383, lng: -47.90090183727443},
        {lat: -15.911526208516001, lng: -47.90090183727443},
        {lat: -15.911562320719444, lng: -47.90090720169246},
        {lat: -15.91158811514651, lng: -47.90095548145473},
        {lat: -15.911619068454613, lng: -47.9009501170367},
        {lat: -15.911660339524673, lng: -47.90095548145473},
        {lat: -15.911701610586245, lng: -47.90095548145473},
        {lat: -15.911717087232168, lng: -47.90091793052852},
        {lat: -15.911746750800159, lng: -47.90088991401717},
        {lat: -15.911746750800159, lng: -47.900856386404485},
        {lat: -15.911746750800159, lng: -47.90083358762786},
        {lat: -15.911754489121517, lng: -47.900809447746724},
        {lat: -15.91175577884172, lng: -47.90079067228362},
        {lat: -15.911754489121517, lng: -47.90074775693938},
        {lat: -15.911754489121517, lng: -47.90072629926726},
        {lat: -15.911754489121517, lng: -47.90070618269965},
        {lat: -15.911759648002253, lng: -47.90066594956443},
        {lat: -15.911759648002253, lng: -47.90063644526526},
        {lat: -15.911751909681099, lng: -47.90059755323455},
        {lat: -15.91176093772243, lng: -47.90057609556243},
        {lat: -15.911736433037872, lng: -47.900541226845235},
        {lat: -15.911723535834279, lng: -47.90051172254607},
        {lat: -15.911723535834279, lng: -47.9004808771424},
        {lat: -15.91172224611387, lng: -47.90046478388831},
        {lat: -15.911717087232168, lng: -47.900440644007176},
        {lat: -15.91172224611387, lng: -47.90042455075309},
        {lat: -15.911731274156526, lng: -47.900399069767445},
        {lat: -15.911740302198787, lng: -47.90037090657279},
        {lat: -15.9117480405204, lng: -47.900357495527714},
        {lat: -15.911759648002253, lng: -47.90034542558715},
        {lat: -15.911762227442583, lng: -47.90032799122855},
        {lat: -15.911762227442583, lng: -47.900309215765446},
        {lat: -15.911763517162736, lng: -47.90029312251136},
        {lat: -15.911771255483458, lng: -47.90026630042121},
        {lat: -15.911764806882875, lng: -47.90023947833106},
        {lat: -15.911777704083825, lng: -47.90023277280852},
        {lat: -15.911784152684, lng: -47.90022204397246},
        {lat: -15.911780283523925, lng: -47.90021265624091},
        {lat: -15.911771255483458, lng: -47.9001925396733},
        {lat: -15.911762227442583, lng: -47.900184493046254},
        {lat: -15.91175706856191, lng: -47.900179128628224},
        {lat: -15.911746750800159, lng: -47.90017242310569},
        {lat: -15.91174546107989, lng: -47.90015096543357},
        {lat: -15.911746750800159, lng: -47.90013487217948},
        {lat: -15.911746750800159, lng: -47.900126825552434},
        {lat: -15.911746750800159, lng: -47.90011475561187},
        {lat: -15.911746750800159, lng: -47.90010805008933},
        {lat: -15.911741591919078, lng: -47.90009732125327},
        {lat: -15.91173256387688, lng: -47.90009598014876},
        {lat: -15.91173256387688, lng: -47.90007184026763},
        {lat: -15.911735143317555, lng: -47.90006111143157},
        {lat: -15.911741591919078, lng: -47.90003831265494},
        {lat: -15.911740302198787, lng: -47.90002892492339},
        {lat: -15.9117480405204, lng: -47.900015513878316},
        {lat: -15.91174933024064, lng: -47.89997528074309},
        {lat: -15.91176093772243, lng: -47.899959187489},
        {lat: -15.911766096603014, lng: -47.899932365398854},
        {lat: -15.911777704083825, lng: -47.89991224883124},
        {lat: -15.911793180723867, lng: -47.899905543308705},
        {lat: -15.911802208763357, lng: -47.899880062323064},
        {lat: -15.911820264841097, lng: -47.89986128685996},
        {lat: -15.911833162038484, lng: -47.89984519360587},
        {lat: -15.911856376991707, lng: -47.899826418142766},
        {lat: -15.911871853625696, lng: -47.899811665993184},
        {lat: -15.911888619977853, lng: -47.89980361936614},
        {lat: -15.911905386328584, lng: -47.89978886721656},
        {lat: -15.911916993801366, lng: -47.89977143285796},
        {lat: -15.911932470430687, lng: -47.89975131629035},
        {lat: -15.911942788182909, lng: -47.899737905245274},
        {lat: -15.911953105934597, lng: -47.89972047088668},
        {lat: -15.911955685372435, lng: -47.89970303652808},
        {lat: -15.911958264810231, lng: -47.899685602169484},
        {lat: -15.911950526496724, lng: -47.89966816781089},
        {lat: -15.911940208744895, lng: -47.899658780079335},
        {lat: -15.911940208744895, lng: -47.8996346401982},
        {lat: -15.91192731155438, lng: -47.89962122915313},
        {lat: -15.91192731155438, lng: -47.8995984303765},
        {lat: -15.911940208744895, lng: -47.89957294939086},
        {lat: -15.91195697509134, lng: -47.89954612730071},
        {lat: -15.91196858256113, lng: -47.89953003404662},
        {lat: -15.91197761059273, lng: -47.899501870851964},
        {lat: -15.91197761059273, lng: -47.89947638986632},
        {lat: -15.911980190030262, lng: -47.89944152114913},
        {lat: -15.911984059186482, lng: -47.89940799353644},
        {lat: -15.911986638623922, lng: -47.899374465923756},
        {lat: -15.912011143277972, lng: -47.899308605119586},
        {lat: -15.912033713351432, lng: -47.899269660701975},
        {lat: -15.912043386239286, lng: -47.89925289689563},
        {lat: -15.912043386239286, lng: -47.8992287570145},
        {lat: -15.912044031098452, lng: -47.89920528768562},
        {lat: -15.912031778773805, lng: -47.89918047725223},
        {lat: -15.912029844196168, lng: -47.89916237234138},
        {lat: -15.912030489055386, lng: -47.89914627908729},
        {lat: -15.91202339560388, lng: -47.8991301858332},
        {lat: -15.912013077855804, lng: -47.89911878644489},
        {lat: -15.911999535810649, lng: -47.89910537539981},
        {lat: -15.911999535810649, lng: -47.89908324717544},
        {lat: -15.912000825529274, lng: -47.89906380116008},
        {lat: -15.91200147038858, lng: -47.89904502569698},
        {lat: -15.912005984403686, lng: -47.89903295575641},
        {lat: -15.912007274122274, lng: -47.89901485084556},
        {lat: -15.91200856384085, lng: -47.898997416486964},
        {lat: -15.912015657292876, lng: -47.89898400544189},
        {lat: -15.91201952644841, lng: -47.898967241635546},
        {lat: -15.912024040463123, lng: -47.89895316003822},
        {lat: -15.912024040463123, lng: -47.8989404195454},
        {lat: -15.912021461026152, lng: -47.89893706678413},
        {lat: -15.912020171307667, lng: -47.898920302977785},
        {lat: -15.912026619900056, lng: -47.89890890358947},
        {lat: -15.912035647929034, lng: -47.89890488027595},
        {lat: -15.912042096520942, lng: -47.8988954925444},
        {lat: -15.912051769408373, lng: -47.89888744591735},
        {lat: -15.912060797436233, lng: -47.89888342260383},
        {lat: -15.912067890886428, lng: -47.89887738763355},
        {lat: -15.912079498349808, lng: -47.898871352663264},
        {lat: -15.912080788067923, lng: -47.898857271065935},
        {lat: -15.91208401236317, lng: -47.89884386002086},
        {lat: -15.912083367504119, lng: -47.898831790080294},
        {lat: -15.912077563772613, lng: -47.89881837903522},
        {lat: -15.91207304975911, lng: -47.8988056385424},
        {lat: -15.912068535745519, lng: -47.898794239154086},
        {lat: -15.91206144229536, lng: -47.89877881645225},
        {lat: -15.912055638563219, lng: -47.89876406430267},
        {lat: -15.912052414267528, lng: -47.89874662994407},
        {lat: -15.912052414267528, lng: -47.898733218899},
        {lat: -15.912052414267528, lng: -47.89871712564491},
        {lat: -15.912053703985809, lng: -47.898702373495325},
        {lat: -15.912058217999745, lng: -47.898694997420534},
        {lat: -15.912065311450029, lng: -47.89868359803222},
        {lat: -15.912072404900032, lng: -47.8986708575394},
        {lat: -15.912082077786028, lng: -47.898660799255595},
        {lat: -15.912087236658355, lng: -47.898646717658266},
        {lat: -15.912094330107607, lng: -47.89862794219516},
        {lat: -15.912096909543624, lng: -47.89860782562755},
        {lat: -15.912102068415594, lng: -47.89858837961219},
        {lat: -15.91210851700535, lng: -47.89857899188064},
        {lat: -15.91210851700535, lng: -47.89856692194007},
        {lat: -15.912109806723265, lng: -47.89855552255176},
        {lat: -15.912117545030654, lng: -47.898547475924715},
        {lat: -15.91212528333775, lng: -47.89853741764091},
        {lat: -15.91212528333775, lng: -47.898518642177805},
        {lat: -15.91212528333775, lng: -47.898495172848925},
        {lat: -15.912122059043163, lng: -47.89847572683357},
        {lat: -15.912120769325316, lng: -47.89845628081821},
        {lat: -15.91211496559489, lng: -47.89843482314609},
        {lat: -15.912113675877004, lng: -47.89842007099651},
        {lat: -15.912098199261626, lng: -47.89839727221988},
        {lat: -15.912094974966623, lng: -47.8983912372496},
        {lat: -15.91207304975911, lng: -47.89835234521888},
        {lat: -15.912092395530554, lng: -47.898304065456614},
        {lat: -15.912096264684623, lng: -47.89827456115745},
        {lat: -15.912086591799326, lng: -47.898250421276316},
        {lat: -15.912071760040954, lng: -47.898226951947436},
        {lat: -15.912059507718002, lng: -47.89820817648433},
        {lat: -15.912040806802569, lng: -47.89818873046897},
        {lat: -15.91202339560388, lng: -47.89817062555812},
        {lat: -15.912007274122274, lng: -47.89815922616981},
        {lat: -15.911985348905208, lng: -47.89814447402023},
        {lat: -15.91196535826404, lng: -47.89813173352741},
        {lat: -15.9119414984639, lng: -47.89811382768676},
        {lat: -15.911929890992546, lng: -47.898093711119145},
        {lat: -15.911929890992546, lng: -47.89807493565604},
        {lat: -15.911918283520512, lng: -47.89805884240195},
        {lat: -15.911904096609348, lng: -47.898041408043355},
        {lat: -15.911895068574454, lng: -47.8980320203118},
        {lat: -15.911882171381023, lng: -47.89801860926673},
        {lat: -15.91187830222283, lng: -47.898003857117146},
        {lat: -15.91187830222283, lng: -47.8979958104901},
        {lat: -15.911884750819775, lng: -47.897983740549535},
        {lat: -15.911884750819775, lng: -47.89794887183234},
        {lat: -15.911891199416502, lng: -47.89793009636924},
        {lat: -15.911897648013028, lng: -47.89791266201064},
        {lat: -15.91190151717085, lng: -47.89790059207007},
        {lat: -15.911910545205465, lng: -47.89788047550246},
        {lat: -15.91192215267793, lng: -47.89785365341231},
        {lat: -15.91195439565353, lng: -47.89784828899428},
        {lat: -15.911971161998776, lng: -47.89784828899428},
        {lat: -15.911984059186482, lng: -47.89786170003936},
        {lat: -15.911996956373361, lng: -47.89786170003936},
        {lat: -15.912012432996535, lng: -47.89786170003936},
        {lat: -15.912018881589168, lng: -47.89783756015822},
        {lat: -15.912018881589168, lng: -47.897825490217656},
        {lat: -15.912011143277972, lng: -47.89780671475455},
        {lat: -15.911996956373361, lng: -47.8977798926644},
        {lat: -15.911981479749015, lng: -47.897753070574254},
        {lat: -15.91196600312346, lng: -47.897707473021},
        {lat: -15.91194407790189, lng: -47.8976712631993},
        {lat: -15.911933760149731, lng: -47.897647123318166},
        {lat: -15.911880881661633, lng: -47.89760823128745},
        {lat: -15.911882171381023, lng: -47.89757068036124},
        {lat: -15.91187830222283, lng: -47.897527765017},
        {lat: -15.91187830222283, lng: -47.897479485254735},
        {lat: -15.91187830222283, lng: -47.89742986438796},
        {lat: -15.911877012503428, lng: -47.89739767787978},
        {lat: -15.911877012503428, lng: -47.897348057013005},
        {lat: -15.911871853625696, lng: -47.89732391713187},
        {lat: -15.911824134000408, lng: -47.8973105060868},
        {lat: -15.911789311563972, lng: -47.89728770731017},
        {lat: -15.911751909681099, lng: -47.89726759074256},
        {lat: -15.911726115275053, lng: -47.89722333429381},
        {lat: -15.91171579751171, lng: -47.8971844422631},
        {lat: -15.911691292821658, lng: -47.89713616250083},
        {lat: -15.911662918966263, lng: -47.89708654163405},
        {lat: -15.911631965664926, lng: -47.89702485082671},
        {lat: -15.911637124548804, lng: -47.896985958795995},
        {lat: -15.911638414269756, lng: -47.89696584222838},
        {lat: -15.911659049803871, lng: -47.89691085694358},
        {lat: -15.911684844218504, lng: -47.89681429741904},
        {lat: -15.911678395615162, lng: -47.8967888164334},
        {lat: -15.911666788128601, lng: -47.89676199434325},
        {lat: -15.911660339524673, lng: -47.896749924402684},
        {lat: -15.911660339524673, lng: -47.89672042010352},
        {lat: -15.911661629245474, lng: -47.896707009058446},
        {lat: -15.911661629245474, lng: -47.8966801869683},
        {lat: -15.911661629245474, lng: -47.896665434818715},
        {lat: -15.911659049803871, lng: -47.89664263604209},
        {lat: -15.911655180641379, lng: -47.896626542788},
        {lat: -15.911647442316177, lng: -47.896618496160954},
        {lat: -15.911639703990698, lng: -47.89659972069785},
        {lat: -15.911639703990698, lng: -47.89658765075728},
        {lat: -15.911639703990698, lng: -47.896570216398686},
        {lat: -15.911655180641379, lng: -47.896544735413045},
        {lat: -15.911665498407825, lng: -47.896534006576985},
        {lat: -15.911735143317555, lng: -47.89647807832807},
        {lat: -15.911753199401314, lng: -47.89641638752073},
        {lat: -15.911753199401314, lng: -47.89636810775846},
        {lat: -15.911763517162736, lng: -47.896314463578165},
        {lat: -15.91179447044383, lng: -47.896287641488016},
        {lat: -15.91179189100392, lng: -47.89625009056181},
        {lat: -15.911742881639357, lng: -47.89625009056181},
        {lat: -15.911704190027326, lng: -47.89624740835279},
        {lat: -15.911673236732327, lng: -47.89625277277082},
        {lat: -15.911637124548804, lng: -47.89625277277082},
        {lat: -15.911598432916415, lng: -47.89623399730772},
        {lat: -15.911544264618538, lng: -47.89623667951673},
        {lat: -15.911484937418411, lng: -47.89624472614378},
        {lat: -15.911443666312323, lng: -47.89624472614378},
        {lat: -15.911412712977208, lng: -47.896199128590524},
        {lat: -15.91138691852764, lng: -47.89617498870939},
        {lat: -15.911350806292669, lng: -47.89617498870939},
        {lat: -15.911345647401438, lng: -47.89612939115614},
        {lat: -15.911363703520195, lng: -47.89612134452909},
        {lat: -15.911363703520195, lng: -47.8960864758119},
        {lat: -15.911355965183773, lng: -47.896056971512735},
        {lat: -15.911355965183773, lng: -47.89603819604963},
        {lat: -15.911363703520195, lng: -47.89600869175047},
        {lat: -15.911366282965588, lng: -47.895941636525095},
        {lat: -15.911381759637324, lng: -47.89590140338987},
        {lat: -15.911379180192121, lng: -47.89585044141859},
        {lat: -15.911381759637324, lng: -47.89581289049238},
        {lat: -15.91137660074688, lng: -47.895788750611246},
        {lat: -15.911363703520195, lng: -47.895783386193216},
        {lat: -15.911361124074752, lng: -47.89575656410307},
        {lat: -15.911361124074752, lng: -47.895689508877695},
        {lat: -15.911348226847073, lng: -47.895646593533456},
        {lat: -15.91133790906433, lng: -47.89558758493513},
        {lat: -15.911330170726929, lng: -47.89553394075483},
        {lat: -15.911350806292669, lng: -47.89549370761961},
        {lat: -15.911332750172752, lng: -47.895458838902414},
        {lat: -15.911306955712918, lng: -47.895405194722116},
        {lat: -15.911343067955764, lng: -47.89538373705},
        {lat: -15.911355965183773, lng: -47.895338139496744},
        {lat: -15.911374021301617, lng: -47.89531399961561},
        {lat: -15.911374021301617, lng: -47.89528717752546},
        {lat: -15.9113843390825, lng: -47.895273766480386},
        {lat: -15.911399815752837, lng: -47.89523621555418},
        {lat: -15.91142818964537, lng: -47.895212075673044},
        {lat: -15.911456563533882, lng: -47.895212075673044},
        {lat: -15.911461722422276, lng: -47.895158431492746},
        {lat: -15.911461722422276, lng: -47.89511283393949},
        {lat: -15.911469460754613, lng: -47.89509405847639},
        {lat: -15.911505572968261, lng: -47.89504577871412},
        {lat: -15.911575217933384, lng: -47.894954583607614},
        {lat: -15.911580376818739, lng: -47.894917032681406},
        {lat: -15.911539105732267, lng: -47.894911668263376},
        {lat: -15.911508152411848, lng: -47.894911668263376},
        {lat: -15.911482357974519, lng: -47.894906303845346},
        {lat: -15.911448825201047, lng: -47.8948982572183},
        {lat: -15.911448825201047, lng: -47.89485534187406},
        {lat: -15.911443666312323, lng: -47.89480437990278},
        {lat: -15.911500414080987, lng: -47.894774278393015},
        {lat: -15.91153588142828, lng: -47.89476220845245},
        {lat: -15.911568124465825, lng: -47.894747456302866},
        {lat: -15.911604881522328, lng: -47.89474075078033},
        {lat: -15.911633900246395, lng: -47.89473337470554},
        {lat: -15.911671302151225, lng: -47.89471728145145},
        {lat: -15.911675816173762, lng: -47.89471728145145},
        {lat: -15.911686133939153, lng: -47.89467771886848},
        {lat: -15.911688713380423, lng: -47.89462206303142},
        {lat: -15.911690647961345, lng: -47.894585182657465},
        {lat: -15.911691292821658, lng: -47.89454159676097},
        {lat: -15.911687423659789, lng: -47.89449935196899},
        {lat: -15.91167646103411, lng: -47.89444771944545},
        {lat: -15.911659694664271, lng: -47.89444436668418},
        {lat: -15.911643573153484, lng: -47.89442626177333},
        {lat: -15.911631965664926, lng: -47.89439742802642},
        {lat: -15.911624227338834, lng: -47.89437865256332},
        {lat: -15.911604236661736, lng: -47.894338419428095},
        {lat: -15.911579087097415, lng: -47.89430556236766},
        {lat: -15.91156618988372, lng: -47.894284104695544},
        {lat: -15.911552002947694, lng: -47.89426532923244},
        {lat: -15.911544264618538, lng: -47.89424320100807},
        {lat: -15.911532012263422, lng: -47.894228448858485},
        {lat: -15.911524918794335, lng: -47.89421906112693},
        {lat: -15.911505572968261, lng: -47.89419156848453},
        {lat: -15.911498479498233, lng: -47.89417949854396},
        {lat: -15.911519759907568, lng: -47.89414328872226},
        {lat: -15.911539105732267, lng: -47.89412853657268},
        {lat: -15.911550068365436, lng: -47.894113113870844},
        {lat: -15.911566834744423, lng: -47.89408226846717},
        {lat: -15.911570703908609, lng: -47.89404404698871},
        {lat: -15.911598432916415, lng: -47.89400776382536},
        {lat: -15.911577797376093, lng: -47.89395352243446},
        {lat: -15.911591984310286, lng: -47.89384958683513},
        {lat: -15.911606816104063, lng: -47.89379124878906},
        {lat: -15.911619068454613, lng: -47.893729557981715},
        {lat: -15.911626806780895, lng: -47.89366920827888},
        {lat: -15.911657760083045, lng: -47.89362629293464},
        {lat: -15.911662274105872, lng: -47.893565943231806},
        {lat: -15.911668077849365, lng: -47.89351565181278},
        {lat: -15.911671302151225, lng: -47.89346938370727},
        {lat: -15.911673881592689, lng: -47.89343518554233},
        {lat: -15.911673881592689, lng: -47.89341171621345},
        {lat: -15.911677105894462, lng: -47.89337014197372},
        {lat: -15.911673236732327, lng: -47.893311803927645},
        {lat: -15.911672591871964, lng: -47.89326821803115},
        {lat: -15.911674526453051, lng: -47.893225302686915},
        {lat: -15.911674526453051, lng: -47.89308985113166},
        {lat: -15.911657760083045, lng: -47.89305028854869},
        {lat: -15.911647442316177, lng: -47.893004020443186},
        {lat: -15.911639059130234, lng: -47.89296445786022},
        {lat: -15.911626161920392, lng: -47.89293763577007},
        {lat: -15.911626806780895, lng: -47.892886673798785},
        {lat: -15.91162745164141, lng: -47.89282163023017},
        {lat: -15.911615844151909, lng: -47.89278877316974},
        {lat: -15.911603591801157, lng: -47.89275993942283},
        {lat: -15.911606171243486, lng: -47.89273907896131},
        {lat: -15.911590694589025, lng: -47.89271493908018},
        {lat: -15.911624227338834, lng: -47.892586989328265},
        {lat: -15.911624227338834, lng: -47.89251188747585},
        {lat: -15.911624227338834, lng: -47.89244215004146},
        {lat: -15.91158811514651, lng: -47.892329497262836},
        {lat: -15.911572638490675, lng: -47.89226512424648},
        {lat: -15.911552002947694, lng: -47.89205054752529},
        {lat: -15.911500414080987, lng: -47.89191643707454},
        {lat: -15.911464301866422, lng: -47.89177696220577},
        {lat: -15.911438507423469, lng: -47.89148191921413},
        {lat: -15.911438507423469, lng: -47.89118151180446},
        {lat: -15.911438507423469, lng: -47.89103130809963},
        {lat: -15.91142303075611, lng: -47.89088646881282},
        {lat: -15.911381759637324, lng: -47.89078454487026},
        {lat: -15.911350806292669, lng: -47.89067189209163},
        {lat: -15.911309535159063, lng: -47.890569968149066},
        {lat: -15.911268264016957, lng: -47.89045731537044},
        {lat: -15.911252787336494, lng: -47.890360755845904},
        {lat: -15.91123215176069, lng: -47.89025883190334},
        {lat: -15.911216675077426, lng: -47.89015154354274},
        {lat: -15.911180562811886, lng: -47.890076441690326},
        {lat: -15.911175403916264, lng: -47.88997988216579},
        {lat: -15.911185721707355, lng: -47.88989941589534},
        {lat: -15.911185721707355, lng: -47.889824314042926},
        {lat: -15.911185721707355, lng: -47.889813585206866},
        {lat: -15.911193460050326, lng: -47.88986911531538},
        {lat: -15.911193460050326, lng: -47.88981547113508},
        {lat: -15.911198618945464, lng: -47.8896572208032},
        {lat: -15.911208936735358, lng: -47.88959552999586},
        {lat: -15.911283740696238, lng: -47.88949092384428},
        {lat: -15.911312114605156, lng: -47.88935949560255},
        {lat: -15.911322432389222, lng: -47.88925488945097},
        {lat: -15.911330170726929, lng: -47.889198563061655},
        {lat: -15.911345647401438, lng: -47.88911273237318},
        {lat: -15.911345647401438, lng: -47.88900007959455},
        {lat: -15.91133790906433, lng: -47.888919613324106},
        {lat: -15.911350806292669, lng: -47.88871844764799},
        {lat: -15.911348226847073, lng: -47.888562879525125},
        {lat: -15.911366282965588, lng: -47.888404629193246},
        {lat: -15.911397236307865, lng: -47.8883870691061},

        //tapera river arm
        {lat: -15.911397236307865, lng: -47.88830241188407},
        {lat: -15.911521049629274, lng: -47.888141479343176},
        {lat: -15.911665498407825, lng: -47.88798054680228},
        {lat: -15.911768676043241, lng: -47.88787325844169},
        {lat: -15.911861535869834, lng: -47.88771232590079},
        {lat: -15.911820264841097, lng: -47.887401189655066},
        {lat: -15.911995666654711, lng: -47.887143697589636},
        {lat: -15.91218138605522, lng: -47.88697203621268},
        {lat: -15.912336152091214, lng: -47.88683256134391},
        {lat: -15.912490918008029, lng: -47.886682357639074},
        {lat: -15.912583777500904, lng: -47.88653215393424},
        {lat: -15.91263536608953, lng: -47.886424865573645},
        {lat: -15.91264568380566, lng: -47.88634976372123},
        {lat: -15.912686954664899, lng: -47.88608154281974},
        {lat: -15.91284172031157, lng: -47.88595279678702},
        {lat: -15.912913944239227, lng: -47.88557728752494},
        {lat: -15.91300680353664, lng: -47.88536271080375},
        {lat: -15.913161568936982, lng: -47.88509448990226},
        {lat: -15.913244110435096, lng: -47.88485845550895},
        {lat: -15.913491734726033, lng: -47.88433274254203},
        {lat: -15.913543323081576, lng: -47.88425764068961},
        {lat: -15.913563958420072, lng: -47.88411816582084},
        {lat: -15.91365681741714, lng: -47.88382848724723},
        {lat: -15.913677452743993, lng: -47.883646097034216},
        {lat: -15.913739358711828, lng: -47.883452977985144},
        {lat: -15.913739358711828, lng: -47.88323840126395},
        {lat: -15.913729041051853, lng: -47.88310965523124},
        {lat: -15.913729041051853, lng: -47.88302382454276},
        {lat: -15.913687770406627, lng: -47.88287362083793},
        {lat: -15.913646499752929, lng: -47.88278779014945},
        {lat: -15.913574276088532, lng: -47.8826161287725},
        {lat: -15.913512370069837, lng: -47.8825624845922},
        {lat: -15.913471099380109, lng: -47.882423009723425},
        {lat: -15.913429828681906, lng: -47.882423009723425},
        {lat: -15.913367922618708, lng: -47.882390823215246},
        {lat: -15.913336969579957, lng: -47.88233717903495},
        {lat: -15.913316334218141, lng: -47.88225134834647},
        //end tapera river
    ];

    //add the river at the map in the position previously defined
    taperaRiver = new google.maps.Polyline({
        path: taperaRiverCoordinates,
        map: map,
        strokeColor: '#366ED4',
        strokeWidth: 0.3
    });

    //set the river on map
    taperaRiver.setMap(map);
}
