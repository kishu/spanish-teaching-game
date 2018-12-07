!function(t){function e(e){for(var n,i,r=e[0],u=e[1],d=e[2],p=0,f=[];p<r.length;p++)i=r[p],a[i]&&f.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);for(c&&c(e);f.length;)f.shift()();return s.push.apply(s,d||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,r=1;r<o.length;r++){var u=o[r];0!==a[u]&&(n=!1)}n&&(s.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},a={0:0},s=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var r=window.webpackJsonp=window.webpackJsonp||[],u=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var c=u;s.push([1158,1]),o()}({1158:function(t,e,o){"use strict";o.r(e);o(476);var n,a=(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),s=function(t){function e(e){return t.call(this,e)||this}return a(e,t),e}(Phaser.Game),i=o(465),r=o.n(i),u=o(466),d=o.n(u),c=o(467),p=o.n(c),f=o(468),h=o.n(f),l=o(469),b=o.n(l),g=o(470),y=o.n(g),m=o(471),w=o.n(m),v=o(472),x=o.n(v),O=o(473),_=o.n(O),A=o(474),P=o.n(A),S=o(475),j=o.n(S),D=function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),G=function(t){function e(){return t.call(this,{key:"Game"})||this}return D(e,t),e.prototype.preload=function(){this.load.image("background",r.a),this.load.image("building",d.a),this.load.image("car",p.a),this.load.image("house",h.a),this.load.image("tree",b.a),this.load.audio("treeAudio",y.a),this.load.audio("carAudio",w.a),this.load.audio("houseAudio",x.a),this.load.audio("buildingAudio",_.a),this.load.audio("correctAudio",P.a),this.load.audio("wrongAudio",j.a)},e.prototype.create=function(){var t=this;this.add.sprite(0,0,"background").setOrigin(0,0);var e=this.add.sprite(100,240,"building"),o=this.add.sprite(240,280,"house").setScale(.8),n=this.add.sprite(410,300,"car").setScale(.8),a=this.add.sprite(550,250,"tree");e.setData("audio",this.sound.add("buildingAudio")),e.setData("spanish","edificio"),o.setData("audio",this.sound.add("houseAudio")),o.setData("spanish","casa"),n.setData("audio",this.sound.add("carAudio")),n.setData("spanish","automóvil"),a.setData("audio",this.sound.add("treeAudio")),a.setData("spanish","árbol"),this.correctSound=this.sound.add("correctAudio"),this.wrongSound=this.sound.add("wrongAudio"),this.itemGroup=this.add.group(),this.itemGroup.addMultiple([e,o,n,a]),this.questionText=this.add.text(30,20,"",{font:"28px Open Sans",fill:"#ffffff"}),this.itemGroup.getChildren().forEach(function(e){var o=t.tweens.add({targets:e,scaleX:1.5,scaleY:1.5,duration:300,paused:!0,yoyo:!0,ease:"Quad.easeInOut"}),n=t.tweens.add({targets:e,scaleX:1.5,scaleY:1.5,duration:300,angle:90,paused:!0,yoyo:!0,ease:"Quad.easeInOut"}),a=t.tweens.add({targets:e,alpha:.7,duration:200,paused:!0});e.setInteractive(),e.on("pointerover",function(){a.restart()}),e.on("pointerdown",function(){t.processAnswer(e)?o.restart():n.restart(),t.showNextQuestion()}),e.on("pointerout",function(){a.stop(),e.alpha=1})}),this.showNextQuestion()},e.prototype.processAnswer=function(t){return this.questionItem==t?(this.correctSound.play(),!0):(this.wrongSound.play(),!1)},e.prototype.showNextQuestion=function(){this.questionItem=Phaser.Math.RND.pick(this.itemGroup.getChildren()),this.questionItem.getData("audio").play(),this.questionText.setText(this.questionItem.getData("spanish"))},e}(Phaser.Scene),I={type:Phaser.AUTO,title:"Spanish Learning Game",width:640,height:360,scene:G,pixelArt:!1};window.onload=function(){new s(I)}},465:function(t,e,o){t.exports=o.p+"assets/abc043ce0681c49c241140158a354c6c.png"},466:function(t,e,o){t.exports=o.p+"assets/36f72b8bc636d8680c2862ca1f2ecf90.png"},467:function(t,e,o){t.exports=o.p+"assets/b0335b36441099dc895bb8f150f83570.png"},468:function(t,e,o){t.exports=o.p+"assets/bc5be77d273d179792e66b3b72d68d58.png"},469:function(t,e,o){t.exports=o.p+"assets/b76101c1debcffc8bbd5786044d32fde.png"},470:function(t,e,o){t.exports=o.p+"assets/fa0295dde2ad66750799380d5843a0a0.mp3"},471:function(t,e,o){t.exports=o.p+"assets/5f8f900f1f64c59ee0de396f2a3e14eb.mp3"},472:function(t,e,o){t.exports=o.p+"assets/c9f898010f989ca40ea73f1f6dedb0b7.mp3"},473:function(t,e,o){t.exports=o.p+"assets/32cdd99e9fd3638678e1f8604390fc89.mp3"},474:function(t,e,o){t.exports=o.p+"assets/8e3d6124f258a1690567f02ade38cd2d.mp3"},475:function(t,e,o){t.exports=o.p+"assets/e919c515ac20d5d6397b1bcd26897c17.mp3"}});