!function(t){var e={};function i(s){if(e[s])return e[s].exports;var r=e[s]={i:s,l:!1,exports:{}};return t[s].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(s,r,function(e){return t[e]}.bind(null,r));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";function s(t,e){return{x:t.x+e.x,y:t.y+e.y}}function r(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function h(t,e){return{x:t.x*Math.cos(e*Math.PI/180)-t.y*Math.sin(e*Math.PI/180),y:t.x*Math.sin(e*Math.PI/180)+t.y*Math.cos(e*Math.PI/180)}}function n(t,e){return{x:e*t.x,y:e*t.y}}function o(t,e,i,s){this.x=t,this.y=e,this.dir=i,this.v={x:s.x,y:s.y}}function a(t,e,i,s,r,h){return this.x=t,this.y=e,this.m=i,this.r=s,this.v={x:r,y:h},this}function u(t){var e=[],i=[],s=0;for(s=0;s<t;s++){for(var r=Math.floor(1200*Math.random()),h=Math.floor(700*Math.random());i.indexOf({x:r,y:h})>-1;)r=Math.floor(1200*Math.random()),h=Math.floor(700*Math.random());i.push({x:r,y:h});var n=Math.floor(20*Math.random())+10,o=Math.random()*(.01-.001)+.001,u=Math.random()*(.01-.001)+.001,c=new a(r,h,80*Math.pow(n/10,3)/3,n,o,u);e.push(c)}return e}function c(t){var e={x:t.x+20*Math.cos(t.dir*Math.PI/180),y:t.y+20*Math.sin(t.dir*Math.PI/180)};this.x=e.x,this.y=e.y,this.v=h({x:.3,y:0},t.dir)}function f(t,e){return[n(s(n(t.v,t.m-e.m),n(e.v,2*e.m)),1/(t.m+e.m)),n(s(n(e.v,e.m-t.m),n(t.v,2*e.m)),1/(t.m+e.m))]}function d(t){var e=h(t.v,90),i=h(t.v,270);return console.log("newAst",[e,i]),[e,i]}function l(t,e){var i=Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)),s=t.x+t.v.x,r=t.y+t.v.y,h=e.x+e.v.x,n=e.y+e.v.y,o=Math.sqrt((s-h)*(s-h)+(r-n)*(r-n));return i<t.r+e.r&&o<i}function y(t,e){return Math.sqrt((e.x-t.x)*(e.x-t.x)+(e.y-t.y)*(e.y-t.y))<e.r}function p(t,e){t.x,e.x,t.y,e.y;var i=1e3,s=180*function(t,e){return Math.acos(function(t,e){return t.x*e.x+t.y+e.y}(t,e)/(r(t)*r(e)))}(t,e)/Math.PI%120;return i=s<60?10/Math.cos((60-s)*Math.PI/180):s>60?10/Math.cos((s-60)*Math.PI/180):10,Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))<t.r+i}i.r(e),o.prototype.update=function(t){this.x+=this.v.x*t,this.y+=this.v.y*t,this.x<0&&(this.x+=1200),this.y<0&&(this.y+=700),this.x=this.x%1200,this.y=this.y%700},o.prototype.render=function(t){var e={x:this.x+20*Math.cos(this.dir*Math.PI/180),y:this.y+20*Math.sin(this.dir*Math.PI/180)},i={x:this.x+20*Math.cos((this.dir+120)*Math.PI/180),y:this.y+20*Math.sin((this.dir+120)*Math.PI/180)},s={x:this.x+20*Math.cos((this.dir+240)*Math.PI/180),y:this.y+20*Math.sin((this.dir+240)*Math.PI/180)};t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(i.x,i.y),t.lineTo(s.x,s.y),t.closePath(),t.fillStyle="red",t.fill()},a.prototype.update=function(t){this.x+=this.v.x*t,this.y+=this.v.y*t,this.x<0&&(this.x+=1200),this.y<0&&(this.y+=700),this.x=this.x%1200,this.y=this.y%700},a.prototype.render=function(t){t.beginPath(),t.arc(this.x,this.y,this.r,0,2*Math.PI),t.fillStyle="white",t.closePath(),t.fill()},c.prototype.update=function(t){this.x+=this.v.x*t,this.y+=this.v.y*t},c.prototype.render=function(t){var e=h({x:.5,y:0},90),i={x:this.x+e.x,y:this.y+e.y},s=h({x:.5,y:0},270),r={x:this.x+s.x,y:this.y+s.y},n=h({x:5,y:0},180);t.beginPath(),t.moveTo(i.x,i.y),t.lineTo(r.x,r.y),t.lineTo(r.x+n.x,r.y+n.y),t.lineTo(i.x+n.x,i.y+n.y),t.closePath(),t.fillStyle="pink",t.fill()};var x=new class{constructor(t,e){this._start=null,this.WIDTH=t,this.HEIGHT=e,this.fireCD=0,this.bullets=[],this.ship=new o(t/2,e/2,0,{x:0,y:0}),this.level=1,this.life=3,this.score=0,this.end=!0,this.asteroids=u(5+5*this.level),this.ship_explosion=new Audio("boom.mp3"),this.laser=new Audio("laser.mp3"),this.boom=new Audio("ship_explosion.mp3"),this.currentInput={space:!1,front:!1,left:!1,right:!1},this.priorInput={space:!1,front:!1,left:!1,right:!1},this.backBuffer=document.createElement("canvas"),this.backBuffer.width=this.WIDTH,this.backBuffer.height=this.HEIGHT,this.backBufferCtx=this.backBuffer.getContext("2d"),this.screenBuffer=document.createElement("canvas"),this.screenBuffer.width=this.WIDTH,this.screenBuffer.height=this.HEIGHT,this.screenBufferCtx=this.screenBuffer.getContext("2d"),document.body.append(this.screenBuffer)}update(t){this.currentInput.space&&!this.priorInput.space&&this.fireCD<=0&&(this.bullets.push(new c(this.ship)),this.fireCD=1e3,this.laser.play()),this.currentInput.left&&(this.ship.dir=function(t){var e=t.dir;return e>0?e-=5:e=355,e}(this.ship)),this.currentInput.right&&(this.ship.dir=function(t){var e=t.dir;return e<360?e+=5:e=5,e}(this.ship)),this.currentInput.front?this.ship.v=function(t){var e=h({x:.05,y:0},t.dir);return s(t.v,e)}(this.ship):r(this.ship.v)>0&&(this.ship.v=function(t){return{x:t.v.x/1.07,y:t.v.y/1.07}}(this.ship)),this.ship.update(t),this.bullets.forEach((e,i)=>{e.update(t),(e.y<=0||e.y>=700||e.x<=0||e.x>=1200)&&this.bullets.splice(i,1);for(var s=0;s<this.asteroids.length;s++){if(y(e,this.asteroids[s])&&this.asteroids[s].m>50){this.bullets.splice(i,1);var r=d(this.asteroids[s]);console.log("old mass",this.asteroids[s].m),this.asteroids[s].m=this.asteroids[s].m/2;var h=Math.cbrt(Math.pow(this.asteroids[s].r,3)/2);this.asteroids[s].r=Math.cbrt(Math.pow(this.asteroids[s].r,3)/2),this.asteroids[s].v=r[0],console.log("newvel",r[0]),console.log("new coor",this.asteroids[s]);var n=new a(this.asteroids[s].x,this.asteroids[s].y,this.asteroids[s].m/2,h,r[1].x,r[1].y);this.asteroids.push(n),this.score+=50}y(e,this.asteroids[s])&&this.asteroids[s].m<=50&&(this.bullets.splice(i,1),this.asteroids.splice(s,1),this.boom.play(),this.score+=200,0===this.asteroids.length&&(this.level++,this.asteroids=u(5+5*this.level)))}}),this.asteroids.forEach((e,i)=>{e.update(t),p(e,this.ship)&&(this.life--,this.ship_explosion.play(),this.asteroids.splice(i,1),0===this.life&&(this.end=!0),0===this.asteroids.length&&(this.level++,this.asteroids=u(5+5*this.level)));for(var s=0;s<this.asteroids.length;s++)if(Math.sqrt(Math.pow(e.x-this.asteroids[s].x,2)+Math.pow(e.y-this.asteroids[s].y,2)),e!==this.asteroids[s]&&l(e,this.asteroids[s])){var r=f(e,this.asteroids[s]);e.v=r[0],this.asteroids[s].v=r[1]}})}render(t){this.backBufferCtx.fillStyle="black",this.backBufferCtx.fillRect(0,0,this.WIDTH,this.HEIGHT),this.ship.render(this.backBufferCtx),this.asteroids.forEach(t=>{t.render(this.backBufferCtx)}),this.bullets.forEach(t=>{t.render(this.backBufferCtx)})}loop(t){var e=this._frame_start?t-this._frame_start:0;this.update(e),this.render(e),this.fireCD>0&&(this.fireCD-=e),function(t,e,i){document.getElementById("ui").innerHTML="Life: "+e+"<br />Level: "+i+"<br />Score: "+t}(this.score,this.life,this.level),this.priorInput=JSON.parse(JSON.stringify(this.currentInput)),this.screenBufferCtx.drawImage(this.backBuffer,0,0),this._frame_start=t,this.end||window.requestAnimationFrame(t=>{this.loop(t)})}}(1200,700);document.getElementById("hint").innerHTML="Hint: Use 'A' and 'D' to change direction and use 'W' to speed up. And you can use space bar to fire a laser to destory asteroids.",window.addEventListener("keydown",function(t){switch(t.key){case" ":x.currentInput.space=!0;break;case"ArrowLeft":case"a":x.currentInput.left=!0;break;case"ArrowRight":case"d":x.currentInput.right=!0;break;case"ArrowUp":case"w":x.currentInput.front=!0}}),window.addEventListener("keyup",function(t){switch(t.key){case" ":x.currentInput.space=!1;break;case"ArrowLeft":case"a":x.currentInput.left=!1;break;case"ArrowRight":case"d":x.currentInput.right=!1;break;case"ArrowUp":case"w":x.currentInput.front=!1}}),x.end&&function t(e){var i=document.createElement("BUTTON");i.onclick=function(){e.end=!1,e.loop(),e.end&&t(e)};var s=document.createTextNode("Start!");i.appendChild(s),document.getElementById("ui").appendChild(i)}(x)}]);