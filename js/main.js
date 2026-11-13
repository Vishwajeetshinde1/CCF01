const $=i=>document.getElementById(i),R=document.body.dataset.root||"",C=CCF_COMPANY,RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const F=(n,d=0)=>isFinite(n)?(+n).toLocaleString("en-IN",{maximumFractionDigits:d}):"-";
const lg=(f,a)=>`<img src="${R}assets/logos/${f}" alt="${a}" onerror="this.outerHTML='<b>'+this.alt+'</b>'">`;
document.head.insertAdjacentHTML("beforeend",'<link rel=stylesheet href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;800&family=Sora:wght@600;800&display=swap">');
const P=[["home","index.html","Home"],["trace","trace/index.html","Traceability"],["tools","tools/index.html","Tools"]];
$("hdr").innerHTML=`<header><div class=wrap><a class=brand href="${R}index.html">${lg("ccf.png","CCF Collaborative Cotton Farming")}</a><button class=burger aria-label=Menu aria-expanded=false><i></i><i></i></button><nav><i class=pill></i>${P.map(p=>`<a href="${R}${p[1]}"${p[0]==document.body.dataset.page?" class=on":""}>${p[2]}</a>`).join("")}</nav></div></header>`;
$("ftr").innerHTML=`<footer><div class=wrap><div class="grid c3"><div><h4>Group Organizations</h4>${C.groups.map(g=>`<div>${g}</div>`).join("")}</div><div><h4>Traceability System</h4>${C.traceNote}</div><div><h4>${C.copyright}</h4>${C.version}</div></div>© ${C.year} ${C.copyright}</div></footer>`;
if($("stats")){
const h=$("h1");h.innerHTML=h.textContent.split(" ").map((w,i)=>`<span style=--w:${i}>${w}</span>`).join(" ");
$("stats").innerHTML=C.stats.map(s=>`<div><b data-n=${s.value} data-s="${s.suffix||""}">0</b><span>${s.label}</span></div>`).join("");
$("logos").innerHTML=lg("nsl.png","NSL Textiles Limited")+lg("nuziveedu.png","Nuziveedu Seeds Ltd.")+lg("ccf.png","CCF");
$("news").innerHTML=C.news.length?C.news.map(n=>`<div class=card><h3>${n.title}</h3><p>${n.text}</p><p class=mut>${n.date}</p></div>`).join(""):'<div class=slot>Announcements appear here. Add them in data/company.js.</div>'.repeat(3);
const B=document.querySelectorAll("[data-n]");
if(RM)B.forEach(e=>e.textContent=F(e.dataset.n));
else{const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;io.unobserve(e.target);const n=+e.target.dataset.n,t=performance.now(),f=x=>{const p=Math.max(0,Math.min((x-t)/1800,1));e.target.textContent=F(n*(1-(1-p)**3));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f)}));B.forEach(e=>io.observe(e))
// network of cotton dots (farmers) joined by gold thread
const cv=$("fx"),g=cv.getContext("2d"),N=46;let w,m,p=[];const fit=()=>{w=cv.width=cv.offsetWidth;m=cv.height=cv.offsetHeight};fit();addEventListener("resize",fit);
p=Array.from({length:N},()=>({x:Math.random()*w,y:Math.random()*m,vx:(Math.random()-.5)*.3,vy:-.1-Math.random()*.3,r:1+Math.random()*2.2}));
(function a(){g.clearRect(0,0,w,m);p.forEach((q,i)=>{q.x+=q.vx;q.y+=q.vy;if(q.y<-5){q.y=m+5;q.x=Math.random()*w}if(q.x<0||q.x>w)q.vx*=-1;g.fillStyle="#ffffffb0";g.beginPath();g.arc(q.x,q.y,q.r,0,7);g.fill();for(let j=i+1;j<N;j++){const o=p[j],d=Math.hypot(q.x-o.x,q.y-o.y);if(d<130){g.strokeStyle=`rgba(245,184,61,${.4*(1-d/130)})`;g.beginPath();g.moveTo(q.x,q.y);g.lineTo(o.x,o.y);g.stroke()}}});requestAnimationFrame(a)})()}
}else{const s=document.querySelector("main section"),h=s&&s.querySelector("h2");
if(h){const l=s.querySelector(".lead"),b=document.createElement("div");b.className="band";b.innerHTML="<div class=wrap></div>";b.firstChild.append(h);l&&b.firstChild.append(l);$("hdr").after(b)}}
addEventListener("DOMContentLoaded",()=>{const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&(e.target.classList.add("vis"),io.unobserve(e.target))),{threshold:.12});
document.querySelectorAll(".card,.stats div,.slot,.logos>*,h2").forEach((e,i)=>{e.classList.add("rv");e.style.setProperty("--d",(i%4)*.1+"s");io.observe(e)})});

document.head.insertAdjacentHTML("beforeend",`<link rel=icon href="${R}assets/logos/ccf.png">`);
const hd=document.querySelector("header"),nv=hd.querySelector("nav"),pl=nv.querySelector(".pill"),as=[...nv.querySelectorAll("a")],cur=nv.querySelector(".on"),bg=hd.querySelector(".burger");
as.forEach((a,i)=>a.style.setProperty("--k",i));
const to=a=>{as.forEach(x=>x.classList.toggle("hot",x==a));if(a)pl.style.cssText=`left:${a.offsetLeft}px;width:${a.offsetWidth}px;opacity:1`;else pl.style.opacity=0};
as.forEach(a=>a.onmouseenter=a.onfocus=()=>to(a));nv.onmouseleave=()=>to(cur);addEventListener("load",()=>to(cur));addEventListener("resize",()=>to(cur));to(cur);
bg.onclick=()=>bg.setAttribute("aria-expanded",hd.classList.toggle("open"));
addEventListener("scroll",()=>hd.classList.toggle("sm",scrollY>40),{passive:true});
document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}});
const ph=document.querySelector(".path");
if(ph){const up=()=>{const y=innerHeight*.62,r=ph.getBoundingClientRect();ph.style.setProperty("--p",Math.min(1,Math.max(0,(y-r.top)/r.height)));ph.querySelectorAll("li").forEach(l=>l.classList.toggle("lit",l.getBoundingClientRect().top<y))};addEventListener("scroll",up,{passive:true});up()}
