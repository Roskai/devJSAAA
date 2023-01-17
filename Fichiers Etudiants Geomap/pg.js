var tabDpt = new Array();
var tabPref = new Array();
function initialiserTableau (){
	tabDpt["Dordogne"]="Aquitaine"
	tabDpt["Landes"]="Aquitaine"
	tabDpt["Var"]="Paca"
	tabDpt["Vaucluse"]="Paca"
	tabDpt["Hautes-alpes"]="Paca"
	tabDpt["Charente"]="Poitou-charentes"
	tabDpt["Vienne"]="Poitou-charentes"
	console.log(tabDpt);

}


function getHTMLZoneDeListe(laRegion){
  var html = "<select name='dpt' id='dpt'>";
	var indice;
	initialiserTableau();
	for (var dpt in tabDpt) {
	 	if (tabDpt[dpt] === laRegion) {
		 	html += "<option value='" + dpt + "'>" + dpt + "</option>";
	 	}
 	}
  html += "</select>";
  return html;

}
function afficherZoneDeListe(){
	var laRegion;
	laRegion=document.getElementById("reg").value;
	document.getElementById("liste").innerHTML=getHTMLZoneDeListe(laRegion);
}
