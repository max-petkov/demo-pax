document.addEventListener("DOMContentLoaded",function(){const e=new Splide(".splide__vertical",{direction:"ttb",height:"100vh",arrows:!1,wheel:!0,speed:1e3,waitForTransition:!0,classes:{pagination:"splide__pagination splide__pagination--vertical",page:"splide__pagination__page splide__pagination__page--vertical"}});e.mount()});var canvas=document.querySelector(".js-bg-gradient"),ctx=canvas.getContext("2d");function Pixel(e,t){this.x=e,this.y=t,this.hue=Math.floor(360*Math.random());e=.5<Math.random()?-1:1;this.velocity=.01*(30*Math.random()+20)*e}Pixel.prototype.update=function(){this.hue+=this.velocity},Pixel.prototype.render=function(e){var t=Math.round(this.hue);e.fillStyle="hsl("+t+", 100%, 50% )",e.fillRect(this.x,this.y,1,1)};var pixels=[new Pixel(0,0),new Pixel(1,0),new Pixel(0,1),new Pixel(1,1)];function animate(){pixels.forEach(function(e){e.update(),e.render(ctx)}),requestAnimationFrame(animate)}animate();const resources=document.querySelector(".resources"),btnResources=document.querySelector(".resources > h3"),btnAddNoise=(btnResources.addEventListener("click",function(){resources.classList.toggle("resources--active")}),document.addEventListener("click",function(e){const t=e.target;t.closest(".resources")!==resources&&resources.classList.contains("resources--active")&&resources.classList.remove("resources--active")}),document.querySelector(".noise > button")),canvasContainer=document.querySelector(".canvas__container"),noiseControls=document.querySelector(".noise__controls"),ctaBtn1=(btnAddNoise.addEventListener("click",function(e){canvasContainer.classList.contains("canvas__container--noise")?btnAddNoise.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>Add Noise`:btnAddNoise.innerHTML=`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
    </svg>Remove Noise`,canvasContainer.classList.toggle("canvas__container--noise"),noiseControls.classList.toggle("noise__controls--active")}),noiseControls.addEventListener("change",function(e){const t=e.target;e=t.value;const n=document.querySelector("feTurbulence");function s(e,t){document.querySelectorAll("."+e).forEach(e=>{e.value=t,e.setAttribute("value",t)})}function a(){canvasContainer.classList.remove("canvas__container--noise"),setTimeout(()=>{canvasContainer.classList.add("canvas__container--noise")},50)}return t.classList.contains("js-numoctaves")?(s(t.getAttribute("class"),e),n.setAttribute("numOctaves",e),a()):t.classList.contains("js-basefrequency")?(s(t.getAttribute("class"),e),n.setAttribute("baseFrequency",e),a()):void 0}),document.querySelector(".js-cta-gsap-1")),svg1=document.querySelector(".js-cta-gsap-1 svg"),paths1=document.querySelectorAll(".js-cta-gsap-1 path"),timeline1=(gsap.to(svg1,{rotate:360,transformOrigin:"center",repeat:-1,ease:"linear",duration:30}),gsap.timeline({paused:!0,defaults:{ease:"none"}}).to(svg1,{scale:1.3,duration:1}).to(paths1,{scale:1.5,stagger:.01,duration:.02,transformOrigin:"center"},"-=1")),ctaBtn2=(ctaBtn1.addEventListener("mouseenter",function(){timeline1.tweenFromTo(timeline1.time(),timeline1.duration(),{duration:1.5,ease:"Bounce.easeOut"})}),ctaBtn1.addEventListener("mouseleave",function(){timeline1.tweenFromTo(timeline1.time(),0,{duration:1.5,ease:"Bounce.easeOut"})}),document.querySelector(".js-cta-gsap-2")),svg2=document.querySelector(".js-cta-gsap-2 svg"),paths2=document.querySelectorAll(".js-cta-gsap-2 path"),timeline2=(gsap.to(svg2,{rotate:360,transformOrigin:"center",repeat:-1,ease:"linear",duration:30}),gsap.timeline({paused:!0}).to(svg2,{scale:1.3,ease:"Power2.easeOut",duration:1}).to(paths2,{scale:1.5,stagger:{each:.01,from:"edges"},ease:"Power2.easeOut",duration:.02,transformOrigin:"center"},"-=1"));ctaBtn2.addEventListener("mouseenter",function(){timeline2.play()}),ctaBtn2.addEventListener("mouseleave",function(){timeline2.reverse()});