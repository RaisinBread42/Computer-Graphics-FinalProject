
var SceneManager = {

/* List of all objects in the scene*/

Objects: new Array(),
SelectedObjects : new Array(),

ObjectsBuffer: new Array(),
SelectedObjectsBuffer: new Array(),

/* Get/Set variables */

AmbientLight: new Array(),
DirectionLightPosition: new Array(),
DirectionLightColor: new Array(),

SetDirLightPosition: function(arr){
this.DirectionLightPosition = arr;
},

InitializeVariables: function(){

  ControlManager.ctx = document.getElementById("xlocalpos").value;
  ControlManager.cty = document.getElementById("ylocalpos").value;
  ControlManager.ctz = document.getElementById("zlocalpos").value;
  ControlManager.csx = document.getElementById("xlocalscale").value;
  ControlManager.csy = document.getElementById("ylocalscale").value;
  ControlManager.csz = document.getElementById("zlocalscale").value;
  ControlManager.cxrot = document.getElementById("xlocalrotation").value;
  ControlManager.cyrot = document.getElementById("ylocalrotation").value;
  ControlManager.czrot = document.getElementById("zlocalrotation").value;

var i;
while( i=0 < this.SelectedObjects.length){

	var o=SelectedObjects[i];

  	o.tx = ControlManager.ctx; o.ty = ControlManager.cty; o.tz = ControlManager.ctz;
  	o.sx = ControlManager.csx; o.sy = ControlManager.csy; o.sz = ControlManager.csz;
  	o.xrot = ControlManager.cxrot; o.yrot = ControlManager.cyrot; o.zrot = ControlManager.czrot;
}

},

LoadObject: function(verts, vindexes, vnormals){

var o = {
vertices : verts,
verticeIndexes: vindexes,
verticenormals: vnormals,
isActive : true,
isSelected : true,
}
this.Objects.push(o);
this.SelectedObjects.push(o);
this.SelectedObjectsBuffer.push(o);
this.ObjectsBuffer.push(o);

},

ClearBuffers: function(){

SelectedObjectsBuffer = new Array();
ObjectsBuffer = new Array();
}


}; // End of SceneManager Object