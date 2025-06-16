JsBarcode("#BEPLVL1", "BEPLVL1.\xC9", {format: "CODE128", width: "2"});
JsBarcode("#BEPLVL2", "BEPLVL2.\xC9", {format: "CODE128"});
JsBarcode("#BEPLVL3", "BEPLVL3.\xC9", {format: "CODE128"});
JsBarcode("#BEPLVL0", "BEPLVL0.\xC9", {text: "Silent", format: "CODE128", fontOptions: "bold"});
JsBarcode("#grd", "DLYGRD0.\xC9");
JsBarcode("#bc15", "15");
JsBarcode("#bc20", "20");
JsBarcode("#bc25", "25");
var svgNode = DATAMatrix({

     msg :  "1361"
    ,dim :   256
    ,rct :   0
    ,pad :   2
    ,pal : ["#000000", "#f2f4f8"]
    ,vrb :   0

});

document.getElementById("1361").appendChild(svgNode);

function showSVG(){
  document.getElementById("svgCode").value= document.getElementById(event.target.id);
  console.log(event.target)
}



