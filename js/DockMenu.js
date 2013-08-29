(function (window) {
function DockMenu(xml, menuIconMin, menuIconMax) {
//passe les paramètres au constructeur
this.initialize(xml, menuIconMin, menuIconMax);
}
//Héritage de Container();
DockMenu.prototype = new createjs.Container();
DockMenu.prototype.Container_initialize = DockMenu.prototype.initialize;
DockMenu.prototype.Container_tick = DockMenu.prototype._tick; 
DockMenu.prototype.initialize = function (xml, menuIconMin, menuIconMax) {
this.Container_initialize(); //obligatoire
this.icons = new Array(); //tableau qui contiendra les icones du menu
this._data = xml;
this._menuIconMin = menuIconMin; //Taille minimale des icones 
this._menuIconMax = menuIconMax; //Taille maximale des icones
this._space = this._menuIconMin*0.5; //Espace entre les icones
this._numIcons = $(this._data).find('item').length;//extraction du nombre d'icones
var root = this; //Création d'une référence à la racine de la classe
var num = 0;
//Boucle de création des icones
$(this._data).find('item').each(function(){
//Extraction des paramètres de chaque icone dans le xml
var title = $(this).find('title').text();
var color = $(this).find('color').text();
var source = $(this).find('source').text();
var link = $(this).find('link').text();
//Creation d'une icone avec ces paramètres
var icon = new Icon(root._menuIconMin,source,color,title,link);
//Placement et ajout à la liste d'affichage
icon.x = num*( root._space + root._menuIconMin);
icon.y = root._menuIconMax;
root.addChild(icon);
//ajout de l'icone dans le tableau icons
root.icons.push(icon);
//incrémentation
num++;
}); 
}
DockMenu.prototype._tick = function () {
this.Container_tick();
//console.log("Icon Ticked");
}
window.DockMenu= DockMenu;
} (window));
