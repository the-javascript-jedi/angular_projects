import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceTwo {
dataTwoX = [
  "11",
  "7",
  "0.759678101763",
  "1.6178351592",
  "1.87830282065",
  "0.809847170863",
  "0.268555760283",
  "2.30810416239",
  "0.282888011561",
  "1.75225768912",
  "-0.0858584825427",
  "-0.664926809221",
  "-0.548288732801",
  "0.935236191463",
  "-1.02421230779",
  "0.644847152488",
  "0.0793568349027",
  "0.376719868063",
  "0.462240513173",
  "0.973028103151",
  "-0.114269985428",
  "-0.033940830122",
  "0.811377010177",
  "0.173216762098",
  "1.13050378279",
  "0.553484661867",
  "0.440805181912",
  "0.148990837935",
  "-0.493219257424",
  "-0.40049507589",
  "0.624356936003",
  "-1.34714271255",
  "-1.33109047124",
  "0.580407752205",
  "1.31228189798",
  "1.16625104479",
  "0.372976659017",
  "0.33595979347",
  "-0.791263889586",
  "2.95679346521",
  "-1.44635853127",
  "0.802371733213",
  "2.69594639721",
  "-1.80577115012",
  "-0.585443782182",
  "1.74147234306",
  "0.0551660441537",
  "0.218995819792",
  "1.56944606413",
  "-0.947713487167",
  "0.21531704968",
  "0.283274664607",
  "-1.03433101051",
  "0.427567525355",
  "-0.29651815918",
  "1.71666047058",
  "-0.0124001672318",
  "1.25319441867",
  "-0.94507428328",
  "3.09647680347",
  "-0.287215190821",
  "1.45119951375",
  "1.69922212558",
  "2.69850672147",
  "-0.0289175063451",
  "1.21716676273",
  "2.46646810578",
  "-0.112577515009",
  "2.38520630018",
  "-0.894226360843",
  "1.38400031789",
  "-0.769002241532",
  "1.92561814496",
  "-0.296718019513",
  "-0.718227769059",
  "0.208753284183",
  "2.52782757368",
  "1.9361555668",
  "-0.754003559785",
  "2.14063096306",
  "0.779847993597",
  "0.502973381133",
  "0.798184138778",
  "-0.401231296439",
  "-0.758368669985",
  "0.44767244853",
  "-0.188431184199",
  "1.79497692012",
  "-0.625306719407",
  "-0.615724277639",
  "-2.06735998972",
  "1.06474596869",
  "-0.128866941481",
  "-0.452517179795",
  "0.0200862867444",
  "0.421379325457",
  "-1.0878312666",
  "3.09022738748",
  "0.0277330763081",
  "-1.59553907708",
  "3.02447398417",
];
dataTwoY = [
  "5",
  "20",
  "1.67084933716",
  "0.671663712413",
  "0.985942302305",
  "-0.115243084349",
  "1.33798679839",
  "-0.179934882508",
  "0.540179686408",
  "0.21604728214",
  "-0.0302080518868",
  "0.919135827055",
  "-0.528565328027",
  "1.83941068702",
  "1.04539009448",
  "-1.44498718643",
  "0.561038457617",
  "0.650872400394",
  "0.263067896694",
  "-0.0170236540958",
  "-1.08098614985",
  "-1.35846617243",
  "0.448653432745",
  "-1.21301578164",
  "0.941622525938",
  "1.18752171196",
  "1.07214906289",
  "0.219255727314",
  "-0.239453747229",
  "-0.988446275058",
  "0.133817727241",
  "1.65448647859",
  "1.27120897034",
  "-1.08102680178",
  "-0.419799996933",
  "-0.447175179695",
  "0.118451435332",
  "-0.0223066375921",
  "-0.425602183962",
  "-0.411493590312",
  "-0.719385329248",
  "0.362414702244",
  "0.743830525207",
  "2.8060588424",
  "-1.57681491722",
  "1.97829504919",
  "-0.485791255905",
  "-0.471516165045",
  "-0.970200509502",
  "0.144654488986",
  "-1.15546801186",
  "-0.798790321471",
  "1.07185451408",
  "-1.69763724423",
  "-0.369829035766",
  "-2.05203667702",
  "-0.42144791923",
  "2.43864496915",
  "-0.458928693116",
  "0.465013834345",
  "1.77172437663",
  "-0.724872420252",
  "2.17648511143",
  "-0.353001037496",
  "1.5056927257",
  "2.22417953478",
  "0.160718378447",
  "2.31296740201",
  "-0.447060221904",
  "-1.66314923766",
  "0.668404078716",
  "0.0834804524138",
  "0.134054278172",
  "-1.64041151051",
  "-0.0446653430143",
  "-1.85302061002",
  "-0.055267065248",
  "0.433094145689",
  "0.207978848661",
  "-1.14878803813",
  "-1.45781494301",
  "-0.064439571961",
  "-1.0163306583",
  "0.798775792381",
  "0.00880232461799",
  "-0.211813436686",
  "1.82388983829",
  "-1.16030310811",
  "0.810521891093",
  "-2.16242603901",
  "1.1679034155",
  "1.9541641911",
  "0.652116107186",
  "-0.834781733259",
  "0.415037109363",
  "-0.778352628036",
  "2.44136516868",
  "0.657706277588",
  "1.62865475296",
  "-0.238519154745",
  "0.151130784619",
  "-1.68728669985",
];

dataTwoZ = [
  "10",
  "6",
  "0.389506443363",
  "0.676541754404",
  "1.75657907672",
  "-0.958695112654",
  "0.225931050084",
  "-0.23357228432",
  "-1.33222052754",
  "0.162127715405",
  "-0.210695836441",
  "0.00243653681466",
  "-0.801092913329",
  "0.0206282397949",
  "0.204366050782",
  "0.505718797501",
  "0.325802711625",
  "-0.416340063844",
  "0.36065197589",
  "0.107801293861",
  "0.552783953522",
  "1.82133354725",
  "-0.69883818517",
  "-0.213115797791",
  "1.43330313383",
  "-0.344003528037",
  "1.1156507032",
  "1.77593503521",
  "0.558619347352",
  "0.862122886939",
  "0.897810621164",
  "1.45440281373",
  "-1.0706190343",
  "1.31692285243",
  "-1.3261700212",
  "0.922215687168",
  "2.50946592048",
  "-1.94369276491",
  "2.61258200886",
  "-0.791526109635",
  "1.64217000504",
  "-0.400760791538",
  "-0.573741315769",
  "-0.323618444674",
  "-0.315321944337",
  "1.51073967987",
  "-0.179071893477",
  "2.34244915564",
  "0.373867515259",
  "1.74822285426",
  "0.639409013862",
  "2.70923555876",
  "-0.68348860724",
  "1.45698446097",
  "2.83914020175",
  "1.33604407133",
  "0.382758415808",
  "0.268927845133",
  "0.040472439349",
  "1.15819311468",
  "-0.256698470962",
  "-0.216776394446",
  "0.536207606273",
  "1.33042276241",
  "2.07028190105",
  "-1.3907338399",
  "2.95329363383",
  "-1.93994516023",
  "-0.00397342728079",
  "0.886561343035",
  "1.18128852906",
  "-1.26208589704",
  "-1.44212442313",
  "-1.80275003038",
  "1.08303283603",
  "-0.856671487814",
  "0.49763381133",
  "-1.1435822743",
  "-1.76018384946",
  "0.969835721382",
  "-0.0611391938563",
  "-1.5751116183",
  "0.327935337024",
  "0.881562067938",
  "1.19007653035",
  "-1.36859674662",
  "0.0550245739563",
  "1.42790584536",
  "1.83541192886",
  "0.356235763069",
  "2.215492038",
  "0.0197273411395",
  "1.50596577113",
  "-1.11307083167",
  "2.14340450961",
  "-2.15135041067",
  "-0.575629455865",
  "-0.580296232071",
  "1.09139450776",
  "0.910539344661",
  "0.849165190864",
  "0.712024525326",
];
chartScatterData = {
   dataX:this.dataTwoX,
   dataY:this.dataTwoY,
   dataZ:this.dataTwoZ,
 }
  constructor() { }
}
