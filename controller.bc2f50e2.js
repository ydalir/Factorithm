parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Qd94":[function(require,module,exports) {
"use strict";var e,r,o;Object.defineProperty(exports,"__esModule",{value:!0}),function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(e=exports.Direction||(exports.Direction={})),function(e){e[e.Base=0]="Base",e[e.Mover=1]="Mover",e[e.Adder=2]="Adder",e[e.Subtractor=3]="Subtractor",e[e.MemoryAssigner=4]="MemoryAssigner",e[e.MemoryAdder=5]="MemoryAdder",e[e.MemorySubtractor=6]="MemorySubtractor",e[e.MemorySplitter=7]="MemorySplitter",e[e.Returner=8]="Returner"}(r=exports.Conveyors||(exports.Conveyors={})),function(e){e[e.A=0]="A",e[e.B=1]="B",e[e.C=2]="C"}(o=exports.MemoryType||(exports.MemoryType={}));
},{}],"MNmI":[function(require,module,exports) {
module.exports="blue_border.20e5025a.png";
},{}],"QP7T":[function(require,module,exports) {
module.exports="green_border.c35a3a42.png";
},{}],"KsOL":[function(require,module,exports) {
module.exports="red_border.b095c51b.png";
},{}],"G0hD":[function(require,module,exports) {
module.exports={blue:require("./blue_border.png"),green:require("./green_border.png"),red:require("./red_border.png")};
},{"./blue_border.png":"MNmI","./green_border.png":"QP7T","./red_border.png":"KsOL"}],"HPY7":[function(require,module,exports) {
module.exports="0.3fbf69ff.png";
},{}],"KlGt":[function(require,module,exports) {
module.exports="00.e723e37f.png";
},{}],"enX6":[function(require,module,exports) {
module.exports="1.2c088207.png";
},{}],"zM9x":[function(require,module,exports) {
module.exports="10.508af753.png";
},{}],"sM9q":[function(require,module,exports) {
module.exports="2.20df4293.png";
},{}],"Y2Pi":[function(require,module,exports) {
module.exports="20.f15d883b.png";
},{}],"h2V1":[function(require,module,exports) {
module.exports="3.6224e182.png";
},{}],"Jv84":[function(require,module,exports) {
module.exports="30.225c8954.png";
},{}],"kceh":[function(require,module,exports) {
module.exports="4.2edbd237.png";
},{}],"eNHK":[function(require,module,exports) {
module.exports="40.f242bd4a.png";
},{}],"NTHe":[function(require,module,exports) {
module.exports="5.ec225766.png";
},{}],"w9ho":[function(require,module,exports) {
module.exports="50.a5c5f921.png";
},{}],"zS4U":[function(require,module,exports) {
module.exports="6.56e9f635.png";
},{}],"zKpE":[function(require,module,exports) {
module.exports="60.0f058c69.png";
},{}],"fGte":[function(require,module,exports) {
module.exports="7.565d78a6.png";
},{}],"x18v":[function(require,module,exports) {
module.exports="70.4ae81deb.png";
},{}],"Ovud":[function(require,module,exports) {
module.exports="8.1659e37b.png";
},{}],"olXY":[function(require,module,exports) {
module.exports="80.2bfa8cfd.png";
},{}],"gkoM":[function(require,module,exports) {
module.exports="9.7acd8a02.png";
},{}],"CuPh":[function(require,module,exports) {
module.exports="90.1fac123d.png";
},{}],"WSta":[function(require,module,exports) {
module.exports="minus.95972073.png";
},{}],"F7yf":[function(require,module,exports) {
module.exports={0:require("./0.png"),1:require("./1.png"),2:require("./2.png"),3:require("./3.png"),4:require("./4.png"),5:require("./5.png"),6:require("./6.png"),7:require("./7.png"),8:require("./8.png"),9:require("./9.png"),10:require("./10.png"),20:require("./20.png"),30:require("./30.png"),40:require("./40.png"),50:require("./50.png"),60:require("./60.png"),70:require("./70.png"),80:require("./80.png"),90:require("./90.png"),"00":require("./00.png"),minus:require("./minus.png")};
},{"./0.png":"HPY7","./00.png":"KlGt","./1.png":"enX6","./10.png":"zM9x","./2.png":"sM9q","./20.png":"Y2Pi","./3.png":"h2V1","./30.png":"Jv84","./4.png":"kceh","./40.png":"eNHK","./5.png":"NTHe","./50.png":"w9ho","./6.png":"zS4U","./60.png":"zKpE","./7.png":"fGte","./70.png":"x18v","./8.png":"Ovud","./80.png":"olXY","./9.png":"gkoM","./90.png":"CuPh","./minus.png":"WSta"}],"yvjD":[function(require,module,exports) {
module.exports="box.e5c26a5b.png";
},{}],"ugIp":[function(require,module,exports) {
module.exports="base.78422e88.png";
},{}],"gLlW":[function(require,module,exports) {
module.exports="returner.6c87d729.png";
},{}],"qe1Z":[function(require,module,exports) {
module.exports="down_mover.1945f201.png";
},{}],"iZ0x":[function(require,module,exports) {
module.exports="left_mover.7c615b67.png";
},{}],"xKsc":[function(require,module,exports) {
module.exports="right_mover.a46334d8.png";
},{}],"w72g":[function(require,module,exports) {
module.exports="up_mover.87d3cfdb.png";
},{}],"BMKk":[function(require,module,exports) {
module.exports={down:require("./down_mover.png"),left:require("./left_mover.png"),right:require("./right_mover.png"),up:require("./up_mover.png")};
},{"./down_mover.png":"qe1Z","./left_mover.png":"iZ0x","./right_mover.png":"xKsc","./up_mover.png":"w72g"}],"zuYV":[function(require,module,exports) {
module.exports="down_adder.6e638103.png";
},{}],"JYZi":[function(require,module,exports) {
module.exports="left_adder.f3f7356d.png";
},{}],"AOZl":[function(require,module,exports) {
module.exports="right_adder.05c4bbcb.png";
},{}],"q1GP":[function(require,module,exports) {
module.exports="up_adder.b06c5afb.png";
},{}],"UwzB":[function(require,module,exports) {
module.exports={down:require("./down_adder.png"),left:require("./left_adder.png"),right:require("./right_adder.png"),up:require("./up_adder.png")};
},{"./down_adder.png":"zuYV","./left_adder.png":"JYZi","./right_adder.png":"AOZl","./up_adder.png":"q1GP"}],"I5YL":[function(require,module,exports) {
module.exports="down_subtractor.929af917.png";
},{}],"VCi9":[function(require,module,exports) {
module.exports="left_subtractor.2e4d274a.png";
},{}],"DIFs":[function(require,module,exports) {
module.exports="right_subtractor.5b77d1f3.png";
},{}],"bemA":[function(require,module,exports) {
module.exports="up_subtractor.2cc0e1a0.png";
},{}],"DCz6":[function(require,module,exports) {
module.exports={down:require("./down_subtractor.png"),left:require("./left_subtractor.png"),right:require("./right_subtractor.png"),up:require("./up_subtractor.png")};
},{"./down_subtractor.png":"I5YL","./left_subtractor.png":"VCi9","./right_subtractor.png":"DIFs","./up_subtractor.png":"bemA"}],"sJS8":[function(require,module,exports) {
module.exports="down_memory.aef9f87a.png";
},{}],"EsA0":[function(require,module,exports) {
module.exports="left_memory.edc3691f.png";
},{}],"u8Ku":[function(require,module,exports) {
module.exports="right_memory.31a77b4b.png";
},{}],"dprY":[function(require,module,exports) {
module.exports="up_memory.16a2d770.png";
},{}],"bOrH":[function(require,module,exports) {
module.exports={down:require("./down_memory.png"),left:require("./left_memory.png"),right:require("./right_memory.png"),up:require("./up_memory.png")};
},{"./down_memory.png":"sJS8","./left_memory.png":"EsA0","./right_memory.png":"u8Ku","./up_memory.png":"dprY"}],"qc3s":[function(require,module,exports) {
module.exports="down_memory_plus.ea1936c8.png";
},{}],"QJ0S":[function(require,module,exports) {
module.exports="left_memory_plus.a3708abb.png";
},{}],"RIsq":[function(require,module,exports) {
module.exports="right_memory_plus.aaaa7208.png";
},{}],"HuUN":[function(require,module,exports) {
module.exports="up_memory_plus.543809e5.png";
},{}],"CJE3":[function(require,module,exports) {
module.exports={down:require("./down_memory_plus.png"),left:require("./left_memory_plus.png"),right:require("./right_memory_plus.png"),up:require("./up_memory_plus.png")};
},{"./down_memory_plus.png":"qc3s","./left_memory_plus.png":"QJ0S","./right_memory_plus.png":"RIsq","./up_memory_plus.png":"HuUN"}],"Qcfh":[function(require,module,exports) {
module.exports="down_memory_minus.71bef81b.png";
},{}],"jK7t":[function(require,module,exports) {
module.exports="left_memory_minus.439b79e5.png";
},{}],"foNl":[function(require,module,exports) {
module.exports="right_memory_minus.aafe6b27.png";
},{}],"w9fx":[function(require,module,exports) {
module.exports="up_memory_minus.a1d3c8be.png";
},{}],"kFdr":[function(require,module,exports) {
module.exports={down:require("./down_memory_minus.png"),left:require("./left_memory_minus.png"),right:require("./right_memory_minus.png"),up:require("./up_memory_minus.png")};
},{"./down_memory_minus.png":"Qcfh","./left_memory_minus.png":"jK7t","./right_memory_minus.png":"foNl","./up_memory_minus.png":"w9fx"}],"M7NQ":[function(require,module,exports) {
module.exports="down_memory_splitter.cbaf6570.png";
},{}],"pJIP":[function(require,module,exports) {
module.exports="left_memory_splitter.3c828e3e.png";
},{}],"Ou2x":[function(require,module,exports) {
module.exports="right_memory_splitter.c602bdde.png";
},{}],"jz2n":[function(require,module,exports) {
module.exports="up_memory_splitter.1dc4a73b.png";
},{}],"ci8n":[function(require,module,exports) {
module.exports={down:require("./down_memory_splitter.png"),left:require("./left_memory_splitter.png"),right:require("./right_memory_splitter.png"),up:require("./up_memory_splitter.png")};
},{"./down_memory_splitter.png":"M7NQ","./left_memory_splitter.png":"pJIP","./right_memory_splitter.png":"Ou2x","./up_memory_splitter.png":"jz2n"}],"EvhF":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("./images/*_border.png")),t=e(require("./images/numbers/*.png")),u=e(require("./images/numbers/minus.png")),a=e(require("./images/box.png")),o=e(require("./images/base.png")),n=e(require("./images/returner.png")),s=e(require("./images/*_mover.png")),i=e(require("./images/*_adder.png")),d=e(require("./images/*_subtractor.png")),f=e(require("./images/*_memory.png")),l=e(require("./images/*_memory_plus.png")),m=e(require("./images/*_memory_minus.png")),g=e(require("./images/*_memory_splitter.png")),p=require("./types"),c=function(e){var r=new Image;return r.src=e,r};exports.getImage=function(e,r){var t;switch(r){case p.Conveyors.Base:return b.base;case p.Conveyors.Returner:return b.returner;case p.Conveyors.Mover:t=b.mover;break;case p.Conveyors.Adder:t=b.adder;break;case p.Conveyors.Subtractor:t=b.subtractor;break;case p.Conveyors.MemoryAssigner:t=b.memory;break;case p.Conveyors.MemoryAdder:t=b.adder;break;case p.Conveyors.MemorySubtractor:t=b.subtractor;break;case p.Conveyors.MemorySplitter:t=b.memory_splitter}switch(e){case p.Direction.Up:return t.up;case p.Direction.Down:return t.down;case p.Direction.Left:return t.left;case p.Direction.Right:return t.right}},exports.getBoxImage=function(){return b.box},exports.getNumberImage=function(e){var r=!1;e<0&&(r=!0);var t=Math.abs(e)%100,u=t%10,a=Math.floor(t/10),o=0==a?19:a+10-1;return{ones:b.numbers[u],tens:b.numbers[o],isNegative:r}},exports.getMinusImage=function(){return b.minus},exports.getBorderImage=function(e){switch(e){case p.MemoryType.A:return b.borders.A;case p.MemoryType.B:return b.borders.B;case p.MemoryType.C:return b.borders.C}};var b={numbers:Object.keys(t.default).map(function(e){return c(t.default[e])}),minus:c(u.default),box:c(a.default),base:c(o.default),returner:c(n.default),mover:{up:c(s.default.up),down:c(s.default.down),left:c(s.default.left),right:c(s.default.right)},adder:{up:c(i.default.up),down:c(i.default.down),left:c(i.default.left),right:c(i.default.right)},subtractor:{up:c(d.default.up),down:c(d.default.down),left:c(d.default.left),right:c(d.default.right)},memory:{up:c(f.default.up),down:c(f.default.down),left:c(f.default.left),right:c(f.default.right)},memory_adder:{up:c(l.default.up),down:c(l.default.down),left:c(l.default.left),right:c(l.default.right)},memory_subtractor:{up:c(m.default.up),down:c(m.default.down),left:c(m.default.left),right:c(m.default.right)},memory_splitter:{up:c(g.default.up),down:c(g.default.down),left:c(g.default.left),right:c(g.default.right)},borders:{A:c(r.default.green),B:c(r.default.red),C:c(r.default.blue)}};
},{"./images/*_border.png":"G0hD","./images/numbers/*.png":"F7yf","./images/numbers/minus.png":"WSta","./images/box.png":"yvjD","./images/base.png":"ugIp","./images/returner.png":"gLlW","./images/*_mover.png":"BMKk","./images/*_adder.png":"UwzB","./images/*_subtractor.png":"DCz6","./images/*_memory.png":"bOrH","./images/*_memory_plus.png":"CJE3","./images/*_memory_minus.png":"kFdr","./images/*_memory_splitter.png":"ci8n","./types":"Qd94"}],"f31C":[function(require,module,exports) {
"use strict";var e=this&&this.__extends||function(){var e=function(r,t){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)r.hasOwnProperty(t)&&(e[t]=r[t])})(r,t)};return function(r,t){function o(){this.constructor=r}e(r,t),r.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)}}();Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../types"),t=require("../image-loader");function o(e,t,o,v){switch(e){case r.Conveyors.Base:return new n(t);case r.Conveyors.Mover:return new i(t);case r.Conveyors.Adder:return new c(t);case r.Conveyors.Subtractor:return new y(t);case r.Conveyors.MemoryAssigner:return new s(t,o,v);case r.Conveyors.MemoryAdder:return new u(t,o,v);case r.Conveyors.MemorySubtractor:return new p(t,o,v);case r.Conveyors.MemorySplitter:return new m(t,o,v);case r.Conveyors.Returner:return new a(t);default:return new n(t)}}exports.ConveyorFactory=o;var n=function(){function e(e){this.type=r.Conveyors.Base,this.direction=e}return e.prototype.update=function(e){},e.prototype.draw=function(e,r,o,n,a,i){var c=t.getImage(this.direction,this.type);e.drawImage(c,r/n*a,o/n*i,r/n,o/n)},e}();exports.Base=n;var a=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=r.Conveyors.Returner,e}return e(o,t),o.prototype.update=function(e){e.returned=!0},o}(n);exports.Returner=a;var i=function(t){function o(e){var o=t.call(this,e)||this;return o.type=r.Conveyors.Mover,o}return e(o,t),o.prototype.update=function(e){switch(this.direction){case r.Direction.Right:e.x++;break;case r.Direction.Down:e.y++;break;case r.Direction.Left:e.x--;break;case r.Direction.Up:e.y--}},o}(n);exports.Mover=i;var c=function(t){function o(e){var o=t.call(this,e)||this;return o.type=r.Conveyors.Adder,o}return e(o,t),o.prototype.update=function(e){t.prototype.update.call(this,e),e.value++},o}(i);exports.Adder=c;var y=function(t){function o(){var e=null!==t&&t.apply(this,arguments)||this;return e.type=r.Conveyors.Subtractor,e.update=function(r){t.prototype.update.call(e,r),r.value--},e}return e(o,t),o}(i);exports.Subtractor=y;var s=function(t){function o(e,o,n){var a=t.call(this,e)||this;return a.type=r.Conveyors.MemoryAssigner,a.update=function(e){switch(t.prototype.update.call(a,e),a.memory_type){case r.MemoryType.A:a.memory.A=e.value;break;case r.MemoryType.B:a.memory.B=e.value;break;case r.MemoryType.C:a.memory.C=e.value}},a.memory_type=o,a.memory=n,a}return e(o,t),o}(i);exports.MemoryAssigner=s;var u=function(t){function o(e,o,n){var a=t.call(this,e)||this;return a.type=r.Conveyors.MemoryAdder,a.update=function(e){switch(t.prototype.update.call(a,e),a.memory_type){case r.MemoryType.A:a.memory.A++;break;case r.MemoryType.B:a.memory.B++;break;case r.MemoryType.C:a.memory.C++}},a.memory_type=o,a.memory=n,a}return e(o,t),o}(i);exports.MemoryAdder=u;var p=function(t){function o(e,o,n){var a=t.call(this,e)||this;return a.type=r.Conveyors.MemorySubtractor,a.update=function(e){switch(console.log(a.memory),t.prototype.update.call(a,e),a.memory_type){case r.MemoryType.A:a.memory.A--;break;case r.MemoryType.B:a.memory.B--;break;case r.MemoryType.C:a.memory.C--}},a.memory_type=o,a.memory=n,a}return e(o,t),o}(i);exports.MemorySubtractor=p;var m=function(t){function o(e,o,n){var a=t.call(this,e)||this;return a.type=r.Conveyors.MemorySplitter,a.update=function(e){switch(a.memory_type){case r.MemoryType.A:v(e,a.direction,a.memory.A);break;case r.MemoryType.B:v(e,a.direction,a.memory.B);break;case r.MemoryType.C:v(e,a.direction,a.memory.C)}},a.memory_type=o,a.memory=n,a}return e(o,t),o}(i);function v(e,t,o){if(o>0)switch(t){case r.Direction.Right:e.y--;break;case r.Direction.Down:e.x++;break;case r.Direction.Left:e.y++;break;case r.Direction.Up:e.x--}else if(o<0)switch(t){case r.Direction.Right:e.y++;break;case r.Direction.Down:e.x--;break;case r.Direction.Left:e.y--;break;case r.Direction.Up:e.x++}else switch(t){case r.Direction.Right:e.x++;break;case r.Direction.Down:e.y++;break;case r.Direction.Left:e.x--;break;case r.Direction.Up:e.y--}}exports.MemorySplitter=m;
},{"../types":"Qd94","../image-loader":"EvhF"}],"kM9h":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){return function(t,e,i,u){this.size=t,this.initialInput=e,this.expectedOutput=i,this.description=u,this.actualOutput=[],this.input=[]}}(),e=new t(3,[0,0,0],[0,0,0],"Get the boys up in there buddy"),i=new t(3,[0,0,0],[1,1,1],"Add em up fellas"),u={name:"Take it away",description:"Subtract three from each input using the subtract-conveyor",input:[3,8,0],output:[0,5,-3],size:3},n={name:"Null null null",description:"Turn the input into zeroes using the memory-conveyor",input:[3,8,0],output:[0,0,0],size:5},o={name:"Two and a half boxes",description:"Divide the input by two",input:[2,6,-4],output:[1,3,-2],size:5},p={name:"Two and a half boxes 2: Electric boogaloo",description:"Divide the input by two, round up for odd numbers",input:[2,3,7,-3,-4],output:[1,2,4,-2,-2],size:7},s={name:"Remember the last one",description:"Add the previous output to the input",input:[1,1,1],output:[1,2,3],size:5},r=[e,i];exports.default=r;
},{}],"PUau":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("./types"),t=require("./objects/conveyors"),o=e(require("./levels")),n=function(){return function(){var e=this;this.menu={selectedConveyor:r.Conveyors.Base,selectedMemory:r.MemoryType.A,selectedDirection:r.Direction.Down,selectedLevel:0},this.level=o.default[this.menu.selectedLevel],this.levelOperations={nextLevel:function(){e.menu.selectedLevel!=o.default.length-1&&(e.menu.selectedLevel+=1,e.levelOperations.updateLevel())},prevLevel:function(){0!=e.menu.selectedLevel&&(e.menu.selectedLevel-=1,e.levelOperations.updateLevel())},updateLevel:function(){e.level=o.default[e.menu.selectedLevel]}},this.box={x:0,y:0,value:0,returned:!1},this.boxOperations={},this.board={memory:{A:0,B:0,C:0},resetMemory:function(){e.board.memory.A=0,e.board.memory.B=0,e.board.memory.C=0},grid:[],createGrid:function(o){var n=Array(o).fill(void 0).map(function(){return Array(o).fill(void 0)});e.board.grid=n.map(function(e){return e.map(function(){return t.ConveyorFactory(r.Conveyors.Base,r.Direction.Up,void 0,void 0)})})},resetGrid:function(){e.board.createGrid(e.level.size),e.board.grid[0][0]=t.ConveyorFactory(r.Conveyors.Mover,r.Direction.Down,void 0,void 0)},updateGrid:function(r,o){e.board.grid[r][o]=t.ConveyorFactory(e.menu.selectedConveyor,e.menu.selectedDirection,e.menu.selectedMemory,e.board.memory)}},this.levelIndex=0,this.isRunning=!1,this.board.resetGrid(),this.box=void 0}}();exports.StateClass=n;
},{"./types":"Qd94","./objects/conveyors":"f31C","./levels":"kM9h"}],"KzVE":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../types");exports.stringToDirection=function(e){switch(e){case"up":return r.Direction.Up;case"down":return r.Direction.Down;case"left":return r.Direction.Left;case"right":return r.Direction.Right}},exports.stringToConveyor=function(e){switch(e){case"base":return r.Conveyors.Base;case"mover":return r.Conveyors.Mover;case"adder":return r.Conveyors.Adder;case"subtractor":return r.Conveyors.Subtractor;case"memory_assigner":return r.Conveyors.MemoryAssigner;case"memory_adder":return r.Conveyors.MemoryAdder;case"memory_subtractor":return r.Conveyors.MemorySubtractor;case"memory_splitter":return r.Conveyors.MemorySplitter;case"returner":return r.Conveyors.Returner}};
},{"../types":"Qd94"}],"CBC0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./types"),t=require("./image-loader"),n=require("./utils/stringTo"),r=function(){return function(r){var o=this;this.updateLevelView=function(e,t){document.querySelector("#level_name").innerHTML="Level: "+(e+1),document.querySelector("#level_description").innerHTML=t.description,document.querySelector("#input").innerHTML=t.initialInput.toString(),document.querySelector("#output").innerHTML=t.expectedOutput.toString()},this.updateMemoryView=function(e){document.querySelector("#memory_a_display").innerHTML=e.A.toString(),document.querySelector("#memory_b_display").innerHTML=e.B.toString(),document.querySelector("#memory_c_display").innerHTML=e.C.toString()},this.drawBox=function(e,n){if(null!=e){var r=o.canvas.width,i=o.canvas.height;o.ctx.fillStyle="#000000";var a=t.getBoxImage(),c=t.getNumberImage(e.value);if(o.ctx.drawImage(a,r/n*e.x,i/n*e.y,r/n,i/n),o.ctx.drawImage(c.ones,r/n*e.x,i/n*e.y,r/n,i/n),o.ctx.drawImage(c.tens,r/n*e.x,i/n*e.y,r/n,i/n),c.isNegative){var u=t.getMinusImage();o.ctx.drawImage(u,r/n*e.x,i/n*e.y,r/n,i/n)}}},this.drawCells=function(e,n){for(var r=o.canvas.width,i=o.canvas.height,a=0;a<e.length;a++)for(var c=0;c<e.length;c++){var u=e[a][c],s=t.getImage(u.direction,u.type);if(o.ctx.drawImage(s,r/n*a,i/n*c,r/n,i/n),null!=u.memory_type){var l=t.getBorderImage(u.memory_type);o.ctx.drawImage(l,r/n*a,i/n*c,r/n,i/n)}}},this.initializeCanvas=function(){o.canvas.setAttribute("height","384"),o.canvas.setAttribute("width","384"),o.clearCanvas()},this.clearCanvas=function(){o.ctx.fillStyle="#eeeeee",o.ctx.fillRect(0,0,o.canvas.width,o.canvas.height)},this.setConveyorButtonBorderColor=function(e){document.querySelectorAll(".conveyor_buttons").forEach(function(e){e.style.borderColor="#000000"}),e.style.borderColor="#00FF00"},this.initializeButtons=function(n){o.updateConveyorButtonImages(n),o.directionButtons.forEach(function(n){var r=void 0;switch(n.id){case"up":r=e.Direction.Up;break;case"down":r=e.Direction.Down;break;case"left":r=e.Direction.Left;break;case"right":r=e.Direction.Right}var o=t.getImage(r,e.Conveyors.Mover).src;n.setAttribute("src",o)}),document.querySelector("#base").style.borderColor="#00FF00",o.menuButtons.forEach(function(e){e.ondragstart=function(e){e.preventDefault()}})},this.updateConveyorButtonImages=function(e){o.conveyorButtons.forEach(function(r){var o=t.getImage(e,n.stringToConveyor(r.getAttribute("id"))).src;r.setAttribute("src",o)})},this.canvas=document.querySelector("#canvas"),this.ctx=this.canvas.getContext("2d"),this.initializeCanvas(),this.menuButtons=document.querySelectorAll(".menu_buttons"),this.conveyorButtons=document.querySelectorAll(".conveyor_buttons"),this.directionButtons=document.querySelectorAll(".direction_buttons"),this.initializeButtons(r)}}();exports.ViewClass=r;
},{"./types":"Qd94","./image-loader":"EvhF","./utils/stringTo":"KzVE"}],"yDl0":[function(require,module,exports) {
"use strict";var e=this&&this.__spreadArrays||function(){for(var e=0,t=0,o=arguments.length;t<o;t++)e+=arguments[t].length;var n=Array(e),a=0;for(t=0;t<o;t++)for(var i=arguments[t],l=0,s=i.length;l<s;l++,a++)n[a]=i[l];return n};Object.defineProperty(exports,"__esModule",{value:!0});var t=require("./state"),o=require("./view"),n=require("./utils/stringTo"),a=require("./types"),i=function(){var e=document.getElementById("grid"),t=e.parentElement.clientWidth,o=e.parentElement.clientHeight,n=t>o?o:t;e.style.height=n+"px",e.style.width=1.5*n+"px",t>1.5*o&&(e.style.height=o+"px",e.style.width=1.5*o+"px"),1.5*o>t&&(e.style.height=2*t/3+"px",e.style.width=t+"px")},l=function(){return function(){var i=this;this.gameLoop={timerId:void 0,isRunning:!1,update:function(){if(null==i.state.box)i.state.box={x:0,y:0,value:i.state.level.input.shift(),returned:!1};else{var e=i.state.box.x,t=i.state.box.y;i.state.board.grid[e][t].update(i.state.box)}return i.state.box.returned&&(i.state.level.actualOutput.push(i.state.box.value),i.state.box=void 0),i.gameLoop.failureStateDetector()?(i.gameLoop.stop(),void console.log("failed")):i.state.level.actualOutput.length===i.state.level.expectedOutput.length?(i.gameLoop.stop(),void console.log("ya did it")):void i.gameLoop.draw()},draw:function(){i.view.clearCanvas(),i.view.drawCells(i.state.board.grid,i.state.level.size),i.view.drawBox(i.state.box,i.state.level.size),i.view.updateMemoryView(i.state.board.memory)},failureStateDetector:function(){var e=!i.state.level.actualOutput.every(function(e,t){return e===i.state.level.expectedOutput[t]});return void 0===i.state.box?e:i.state.box.x<0||i.state.box.y<0||i.state.box.x>=i.state.level.size||i.state.box.y>=i.state.level.size},start:function(){i.gameLoop.isRunning||(i.gameLoop.isRunning=!0,i.state.level.input=e(i.state.level.initialInput),i.gameLoop.timerId=setInterval(i.gameLoop.update,300))},stop:function(){i.gameLoop.isRunning=!1,clearInterval(i.gameLoop.timerId),i.state.box=void 0,i.state.board.resetMemory(),i.state.level.actualOutput=[],i.gameLoop.draw()}},this.nextLevelOnClick=function(e){i.state.levelOperations.nextLevel(),i.view.updateLevelView(i.state.menu.selectedLevel,i.state.level),console.log("test")},this.prevLevelOnClick=function(e){i.state.levelOperations.prevLevel(),i.view.updateLevelView(i.state.menu.selectedLevel,i.state.level)},this.conveyorButtonOnClick=function(e){var t=e.target;i.state.menu.selectedConveyor=n.stringToConveyor(t.id),i.view.setConveyorButtonBorderColor(t)},this.directionButtonOnClick=function(e){var t=e.target;i.state.menu.selectedDirection=n.stringToDirection(t.id),i.view.updateConveyorButtonImages(i.state.menu.selectedDirection)},this.memoryOnClick=function(e){switch(e.target.value){case"a":i.state.menu.selectedMemory=a.MemoryType.A;break;case"b":i.state.menu.selectedMemory=a.MemoryType.B;break;case"c":i.state.menu.selectedMemory=a.MemoryType.C}},this.canvasOnClick=function(e){if(!i.gameLoop.isRunning){var t=e.target.clientHeight/i.state.level.size,o=Math.floor(e.offsetX/t),n=Math.floor(e.offsetY/t);0==o&&0==n||(i.state.board.updateGrid(o,n),i.gameLoop.draw())}},this.state=new t.StateClass,this.view=new o.ViewClass(this.state.menu.selectedDirection),document.querySelector("#canvas").onclick=this.canvasOnClick,document.querySelectorAll(".conveyor_buttons").forEach(function(e){e.onclick=i.conveyorButtonOnClick}),document.querySelectorAll(".direction_buttons").forEach(function(e){e.onclick=i.directionButtonOnClick}),document.querySelectorAll(".memory_buttons").forEach(function(e){e.onclick=i.memoryOnClick}),document.querySelector("#prev_level").onclick=this.prevLevelOnClick,document.querySelector("#next_level").onclick=this.nextLevelOnClick,document.querySelector("#play_button").onclick=this.gameLoop.start,document.querySelector("#stop_button").onclick=this.gameLoop.stop,document.querySelector("#mover").onload=this.gameLoop.draw,this.view.updateLevelView(this.state.menu.selectedLevel,this.state.level)}}();window.onload=i,window.onresize=i,new l;
},{"./state":"PUau","./view":"CBC0","./utils/stringTo":"KzVE","./types":"Qd94"}]},{},["yDl0"], null)
//# sourceMappingURL=controller.bc2f50e2.js.map