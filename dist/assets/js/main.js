document.addEventListener("DOMContentLoaded",function(){const e=new Splide(".splide__vertical",{direction:"ttb",height:"100vh",arrows:!1,wheel:!0,speed:1e3,classes:{pagination:"splide__pagination splide__pagination--vertical",page:"splide__pagination__page splide__pagination__page--vertical"}});e.mount()});var canvas=document.querySelector(".js-bg-gradient"),ctx=canvas.getContext("2d");function Pixel(e,t){this.x=e,this.y=t,this.hue=Math.floor(360*Math.random());e=.5<Math.random()?-1:1;this.velocity=.01*(30*Math.random()+20)*e}Pixel.prototype.update=function(){this.hue+=this.velocity},Pixel.prototype.render=function(e){var t=Math.round(this.hue);e.fillStyle="hsl("+t+", 100%, 50% )",e.fillRect(this.x,this.y,1,1)};var pixels=[new Pixel(0,0),new Pixel(1,0),new Pixel(0,1),new Pixel(1,1)];function animate(){pixels.forEach(function(e){e.update(),e.render(ctx)}),requestAnimationFrame(animate)}animate();const resources=document.querySelector(".resources"),btnResources=document.querySelector(".resources > h3"),btnAddNoise=(btnResources.addEventListener("click",function(){resources.classList.toggle("resources--active")}),document.addEventListener("click",function(e){const t=e.target;t.closest(".resources")!==resources&&resources.classList.contains("resources--active")&&resources.classList.remove("resources--active")}),document.querySelector(".noise > button")),canvasContainer=document.querySelector(".canvas__container"),noiseControls=document.querySelector(".noise__controls");btnAddNoise.addEventListener("click",function(e){canvasContainer.classList.contains("canvas__container--noise")?btnAddNoise.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>Add Noise`:btnAddNoise.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>Remove Noise`,canvasContainer.classList.toggle("canvas__container--noise"),noiseControls.classList.toggle("noise__controls--active")}),noiseControls.addEventListener("change",function(e){const t=e.target;e=t.value;const n=document.querySelector("feTurbulence");function s(e,t){document.querySelectorAll("."+e).forEach(e=>{e.value=t,e.setAttribute("value",t)})}function i(){canvasContainer.classList.remove("canvas__container--noise"),setTimeout(()=>{canvasContainer.classList.add("canvas__container--noise")},50)}return t.classList.contains("js-numoctaves")?(s(t.getAttribute("class"),e),n.setAttribute("numOctaves",e),i()):t.classList.contains("js-basefrequency")?(s(t.getAttribute("class"),e),n.setAttribute("baseFrequency",e),i()):void 0});