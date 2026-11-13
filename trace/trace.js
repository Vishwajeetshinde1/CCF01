$("sum").textContent=`${F(FARMERS.length)} farmers across ${LOTS.length} lots`;
const draw=q=>$("lots").innerHTML=LOTS.filter(l=>`${l.no} ${l.name}`.toLowerCase().includes(q)).map(l=>`<a class="card lot" href="lot.html?lot=${l.no}"><h3>Lot ${l.no} ${l.name}</h3><p>${l.farmers.length} farmers, ${F(l.farmers.reduce((a,x)=>a+x.qty,0))} quintal</p><p class=mut>${l.date}</p></a>`).join("")||'<div class=slot>No lot matches your search.</div>';
$("q").oninput=e=>draw(e.target.value.toLowerCase().trim());draw("");
