(function (window) {
function Icon(iconWidth,imgSrc,color,titleText,link) {
//Passe les paramètres au constructeur
this.initialize(iconWidth,imgSrc,color,titleText,link);
}
//Héritage de container
Icon.prototype = new createjs.Container();
Icon.prototype.Container_initialize = Icon.prototype.initialize;
Icon.prototype.Container_tick = Icon.prototype._tick; 
//Constructeur
Icon.prototype.initialize = function (iconWidth,imgSrc,color,titleText,link) {
this.Container_initialize();//Execute le contructeur de la class Container
this._iconWidth = iconWidth;//Taille de l'icone
this._link = link;//Lien URL
this._imgSrc = imgSrc;//Source de l'image
this._color = color;//Couleur du fond
this._titleText = titleText;//Texte
//Placement du point d'origine au centre de l'icone
this.regX = this._iconWidth*0.5;
this.regY = this._iconWidth*0.5;
//Création du fond
this.graphic = new createjs.Graphics();
this.graphic.beginFill("#777");
this.graphic.drawRoundRect(0,0,this._iconWidth,this._iconWidth,this._iconWidth*.1);
this.roundRectangle= new createjs.Shape(this.graphic);
this.addChild(this.roundRectangle);
//Création du texte 
this.text = new createjs.Text(this._titleText, "bold 16px Courier",this._color);
this.text.textAlign ="center";
this.text.y = this._iconWidth+5;
this.text.x = (this._iconWidth*0.5);
this.text.alpha = 0; //Le texte est masqué 
this.addChild(this.text);
//Ajout de l'image 
this.bitmap = new createjs.Bitmap(this._imgSrc);
this.bitmap.regX = this._iconWidth*0.5;
this.bitmap.regY = this._iconWidth*0.5;
this.bitmap.x = this._iconWidth*0.5;
this.bitmap.y = this._iconWidth*0.5;
this.addChild(this.bitmap);
//En cas de click : ouverture d'une nouvelle fenetre
this.roundRectangle.onClick = function(){
console.log("click "+this.graphics + this._link);
//window.open(this._link);
}
//En cas de survol
this.roundRectangle.onMouseOver = function(){
//console.log("mouseOver ");
//On rafraichit le graphics du fond 
this.parent.graphic.clear();
this.parent.graphic.beginFill(this.parent._color);
this.parent.graphic.beginStroke(createjs.Graphics.getRGB(255,255,255));
this.parent.graphic.drawRoundRect(0,0,this.parent._iconWidth,this.parent._iconWidth,this.parent._iconWidth*.1);
this.parent.roundRectangle.graphics = this.parent.graphic;
//On aggrandis l'icone
this.parent.scaleX = 1.2;
this.parent.scaleY = 1.2;
//On montre le texte
this.parent.text.alpha = 1;
}
//Si le pointeur quitte l'icone
this.roundRectangle.onMouseOut = function(){
console.log("mouseOut ");
//On rafraichit le graphics du fond 
this.parent.graphic.clear();
this.parent.graphic.beginFill("#777");
this.parent.graphic.drawRoundRect(0,0,this.parent._iconWidth,this.parent._iconWidth,this.parent._iconWidth*.1);
this.parent.roundRectangle.graphics = this.parent.graphic;
//L'icone reprends sa taille d'origine
this.parent.scaleX = 1;
this.parent.scaleY = 1;
//Le texte est masqué
this.parent.text.alpha = 0;
}
}
Icon.prototype._tick = function () {
this.Container_tick();
}
window.Icon= Icon;
} (window));
