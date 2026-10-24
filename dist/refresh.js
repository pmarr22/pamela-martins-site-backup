/* Pigment palette and interactive price list. Rendered in FR / PT / EN and re-rendered when the page language changes. */
(()=>{
const currentLang=()=>{const l=(document.documentElement.lang||'fr').toLowerCase();return l.startsWith('pt')?'pt':l.startsWith('en')?'en':'fr'};
const pick=(o,l)=>o[l]??o.fr;
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

/* ---------- Pigments ---------- */
const T={
  brows:{fr:'Sourcils',pt:'Sobrancelhas',en:'Brows'},
  lips:{fr:'Lèvres',pt:'Lábios',en:'Lips'},
  undertone:{fr:'Sous-ton',pt:'Subtom',en:'Undertone'},
  warm:{fr:'Chaud',pt:'Quente',en:'Warm'},neutral:{fr:'Neutre',pt:'Neutro',en:'Neutral'},cool:{fr:'Froid',pt:'Frio',en:'Cool'},
  heal:{fr:'Rendu indicatif une fois cicatrisé, selon la carnation.',pt:'Resultado indicativo após a cicatrização, conforme o tom de pele.',en:'Indicative healed result, depending on skin tone.'},
  shade:{fr:'Nuance',pt:'Tom',en:'Shade'}
};
const PIGMENTS=[
  ['brows','#b8935a','warm',{fr:'Blond doré',pt:'Loiro dourado',en:'Golden blonde'}],
  ['brows','#a89478','cool',{fr:'Blond cendré',pt:'Loiro acinzentado',en:'Ash blonde'}],
  ['brows','#8a6643','warm',{fr:'Châtain clair',pt:'Castanho claro',en:'Light brown'}],
  ['brows','#6e4a32','neutral',{fr:'Châtain naturel',pt:'Castanho natural',en:'Natural brown'}],
  ['brows','#4a2c20','neutral',{fr:'Chocolat',pt:'Chocolate',en:'Chocolate'}],
  ['brows','#2b1712','neutral',{fr:'Espresso',pt:'Espresso',en:'Espresso'}],
  ['brows','#1c1412','cool',{fr:'Noir doux',pt:'Preto suave',en:'Soft black'}],
  ['brows','#8a7264','cool',{fr:'Taupe',pt:'Taupe',en:'Taupe'}],
  ['brows','#7a3d2b','warm',{fr:'Auburn',pt:'Acobreado',en:'Auburn'}],
  ['brows','#6f6b66','cool',{fr:'Gris cendré',pt:'Grafite',en:'Ash grey'}],
  ['lips','#c99a8e','neutral',{fr:'Nude rosé',pt:'Nude rosado',en:'Rosy nude'}],
  ['lips','#d9906f','warm',{fr:'Pêche',pt:'Pêssego',en:'Peach'}],
  ['lips','#d9684f','warm',{fr:'Corail',pt:'Coral',en:'Coral'}],
  ['lips','#c47a86','cool',{fr:'Rose poudré',pt:'Rosa antigo',en:'Dusty rose'}],
  ['lips','#b03a5b','cool',{fr:'Framboise',pt:'Framboesa',en:'Raspberry'}],
  ['lips','#b3342f','neutral',{fr:'Rouge naturel',pt:'Vermelho natural',en:'Natural red'}],
  ['lips','#6e1f2e','cool',{fr:'Bordeaux',pt:'Bordô',en:'Burgundy'}],
  ['lips','#94606f','cool',{fr:'Mauve',pt:'Malva',en:'Mauve'}],
  ['lips','#a8573f','warm',{fr:'Terracotta',pt:'Terracota',en:'Terracotta'}],
  ['lips','#8a5444','warm',{fr:'Nude cacao',pt:'Nude cacau',en:'Cocoa nude'}]
].map(([group,hex,tone,name],i)=>({id:i,group,hex,tone,name}));
const SKINS=['#f1d3b8','#d9a679','#a86f47','#6b4128'];

const palette=document.querySelector('[data-pl-palette]');
const stage=document.querySelector('[data-pl-stage]');
const lab=document.querySelector('#pigments');
let selected=PIGMENTS[3];

const renderPalette=()=>{
  if(!palette)return;const l=currentLang();
  palette.innerHTML=['brows','lips'].map(g=>`<div class="pl-group"><h3>${esc(pick(T[g],l))}</h3><div class="pl-swatches">${PIGMENTS.filter(p=>p.group===g).map(p=>`<button type="button" class="pl-swatch${p.id===selected.id?' active':''}" data-id="${p.id}" style="--pg:${p.hex}" aria-pressed="${p.id===selected.id}"><i aria-hidden="true"></i><span>${esc(pick(p.name,l))}</span></button>`).join('')}</div></div>`).join('');
};
const renderStage=()=>{
  if(!stage)return;const l=currentLang();const p=selected;
  stage.style.setProperty('--pg',p.hex);
  stage.innerHTML=`<div class="pl-orb" aria-hidden="true"></div><div class="pl-info">
    <p class="pl-kicker">${esc(pick(T[p.group],l))} · ${esc(pick(T.shade,l))} ${String(p.id+1).padStart(2,'0')}</p>
    <h3 class="pl-name">${esc(pick(p.name,l))}</h3>
    <p class="pl-tone">${esc(pick(T.undertone,l))} · <b>${esc(pick(T[p.tone],l))}</b></p>
    <div class="pl-skins" aria-hidden="true">${SKINS.map(s=>`<span style="--skin:${s}"></span>`).join('')}</div>
    <p class="pl-heal">${esc(pick(T.heal,l))}</p></div>`;
};
const choose=p=>{
  if(p===selected)return;selected=p;
  palette.querySelectorAll('.pl-swatch').forEach(b=>{const on=Number(b.dataset.id)===p.id;b.classList.toggle('active',on);b.setAttribute('aria-pressed',String(on))});
  renderStage();renderDock();
};
if(palette){
  const fine=window.matchMedia('(hover:hover) and (pointer:fine)');
  palette.addEventListener('click',e=>{const b=e.target.closest('.pl-swatch');if(b)choose(PIGMENTS[Number(b.dataset.id)])});
  palette.addEventListener('pointerover',e=>{if(!fine.matches)return;const b=e.target.closest('.pl-swatch');if(b)choose(PIGMENTS[Number(b.dataset.id)])});
  palette.addEventListener('focusin',e=>{const b=e.target.closest('.pl-swatch');if(b)choose(PIGMENTS[Number(b.dataset.id)])});
}

/* ---------- Prices ---------- */
const E=(fr,pt,en)=>({fr,pt,en});
const S=(fr,pt,en,price,from)=>({name:E(fr,pt,en),price,from:!!from});
const CATS=[
  {id:'eyes',label:E('Cils & sourcils','Cílios e sobrancelhas','Lashes & brows'),items:[
    S('Épilation sourcils + teinture','Depilação de sobrancelhas + tintura','Brow shaping + tint',30),
    S('Browlift + entretien','Browlift + manutenção','Browlift + aftercare',40),
    S('Browlift + entretien + teinture','Browlift + manutenção + tintura','Browlift + aftercare + tint',50),
    S('Lash lift','Lash lift','Lash lift',45),
    S('Lash lift + coloration','Lash lift + tintura','Lash lift + tint',50),
    S('Lash lift + coloration + browlift','Lash lift + tintura + browlift','Lash lift + tint + browlift',80)]},
  {id:'face',label:E('Visage & beauté','Rosto e beleza','Face & beauty'),items:[
    S('Microneedling','Microagulhamento','Microneedling',120),
    S('Baby Glow','Baby Glow','Baby Glow',100),
    S('Hidragloss / Ultra Gloss','Hidragloss / Ultra Gloss','Hidragloss / Ultra Gloss',null),
    S('Nettoyage facial classique','Limpeza facial clássica','Classic facial cleansing',80),
    S('Nettoyage Hydra purifiant','Limpeza Hydra purificante','Purifying Hydra cleansing',100),
    S('Manucure flash + couleur','Manicure express + cor','Express manicure + colour',25),
    S('Soin complet maillot + vajacial','Cuidado completo do biquíni + vajacial','Full bikini care + vajacial',60),
    S('Maillot intégral + vajacial','Biquíni completo + vajacial','Full bikini + vajacial',80)]},
  {id:'sugar',label:E('Épilation au sucre','Depilação com açúcar','Sugaring'),items:[
    S('Lèvre supérieure','Lábio superior','Upper lip',10),
    S('Sourcils sans forme','Sobrancelhas sem design','Brows without shaping',15),
    S('Aisselles','Axilas','Underarms',15),
    S('Demi-bras','Meio braço','Half arms',25),
    S('Maillot classique','Biquíni clássico','Classic bikini',20),
    S('Maillot échancré','Biquíni cavado','High-cut bikini',30),
    S('Maillot intégral','Biquíni completo','Full bikini',40),
    S('Demi-jambes','Meia perna','Half legs',30),
    S('Jambes entières','Pernas inteiras','Full legs',45),
    S('Forfaits corps','Pacotes corporais','Body packages','79 – 120',true)]},
  {id:'wax',label:E('Cire chaude','Cera quente','Hot wax'),items:[
    S('Lèvre supérieure','Lábio superior','Upper lip',10),
    S('Aisselles','Axilas','Underarms',12),
    S('Demi-bras','Meio braço','Half arms',20),
    S('Bras entiers','Braços inteiros','Full arms',25),
    S('Maillot classique','Biquíni clássico','Classic bikini',20),
    S('Maillot échancré','Biquíni cavado','High-cut bikini',25),
    S('Maillot intégral','Biquíni completo','Full bikini',40),
    S('Demi-jambes','Meia perna','Half legs',25),
    S('Jambes entières','Pernas inteiras','Full legs',40)]},
  {id:'men',label:E('Épilation homme','Depilação masculina','Men’s waxing'),items:[
    S('Sourcils','Sobrancelhas','Brows',20),
    S('Torse / ventre','Tórax / abdômen','Chest / abdomen',30),
    S('Dos','Costas','Back',50),
    S('Bras entiers','Braços inteiros','Full arms',35),
    S('Maillot classique à intégral + SIF','Biquíni clássico a completo + interglúteo','Classic to full bikini + intergluteal','40 – 70',true),
    S('Jambes entières','Pernas inteiras','Full legs',50)]}
];
CATS.forEach(c=>c.items.forEach((it,i)=>{it.key=c.id+i;it.cat=c.id}));
const ALL=CATS.flatMap(c=>c.items);
const P={
  consult:E('Sur consultation','Sob consulta','On consultation'),
  yourPick:E('Ma sélection','Minha seleção','My selection'),
  services:{fr:['soin','soins'],pt:['serviço','serviços'],en:['treatment','treatments']},
  from:E('dès','a partir de','from'),
  ask:E('Demander sur WhatsApp','Pedir pelo WhatsApp','Ask on WhatsApp'),
  clear:E('Vider','Limpar','Clear'),
  hint:E('Touchez les soins qui vous intéressent pour composer votre sélection.','Toque nos serviços que lhe interessam para montar a sua seleção.','Tap the treatments you like to build your selection.'),
  select:E('Ajouter à ma sélection','Adicionar à minha seleção','Add to my selection'),
  remove:E('Retirer de ma sélection','Remover da minha seleção','Remove from my selection'),
  msg:E('Bonjour Pamela, je souhaite des informations sur :','Olá Pamela, gostaria de informações sobre:','Hello Pamela, I would like information about:'),
  quote:E('Estimation indicative','Estimativa indicativa','Indicative estimate')
};
const lab2=document.querySelector('[data-price-lab]');
const picked=new Set();let activeCat=CATS[0].id;
const fmt=n=>`${n} €`;
const priceText=(it,l)=>it.price==null?pick(P.consult,l):(it.from?`${pick(P.from,l)} ${it.price.replace(/^(\d+)\s*–.*$/,'$1')} €`:fmt(it.price));

const renderPrices=()=>{
  if(!lab2)return;const l=currentLang();
  const cat=CATS.find(c=>c.id===activeCat);
  lab2.innerHTML=`
    <div class="pr-tabs" role="tablist" aria-label="${esc(pick(E('Catégories de tarifs','Categorias de preços','Price categories'),l))}">
      ${CATS.map(c=>{const n=c.items.filter(i=>picked.has(i.key)).length;return `<button type="button" role="tab" class="pr-tab${c.id===activeCat?' active':''}" data-cat="${c.id}" aria-selected="${c.id===activeCat}">${esc(pick(c.label,l))}${n?`<em>${n}</em>`:''}</button>`}).join('')}
    </div>
    <div class="pr-meta"><h3>${esc(pick(cat.label,l))}</h3><span>${cat.items.length} ${esc(pick(P.services,l)[cat.items.length>1?1:0])} · ${esc(pick(P.from,l))} ${Math.min(...cat.items.map(i=>typeof i.price==='number'?i.price:parseInt(i.price,10)).filter(n=>n>0))} €</span></div>
    <p class="pr-hint">${esc(pick(P.hint,l))}</p>
    <div class="pr-grid" role="tabpanel">
      ${cat.items.map((it,i)=>{const on=picked.has(it.key);return `<button type="button" class="pr-card${on?' selected':''}${it.price==null?' consult':''}" data-key="${it.key}" aria-pressed="${on}" aria-label="${esc(pick(it.name,l))} — ${esc(priceText(it,l))}. ${esc(pick(on?P.remove:P.select,l))}" style="--i:${i}"><span class="pr-name">${esc(pick(it.name,l))}</span><span class="pr-price">${esc(priceText(it,l))}</span><span class="pr-check" aria-hidden="true"></span></button>`}).join('')}
    </div>
    <div class="pr-summary" data-pr-summary></div>`;
  renderSummary();
};
const renderSummary=()=>{
  const box=lab2&&lab2.querySelector('[data-pr-summary]');if(!box)return;const l=currentLang();
  const items=ALL.filter(i=>picked.has(i.key));
  box.classList.toggle('show',items.length>0);
  if(!items.length){box.innerHTML='';return}
  const fixed=items.filter(i=>typeof i.price==='number'&&!i.from).reduce((s,i)=>s+i.price,0);
  const variable=items.some(i=>i.price==null||i.from);
  const lowFrom=items.filter(i=>i.from).reduce((s,i)=>s+parseInt(i.price,10),0);
  const total=fixed+lowFrom;
  const word=pick(P.services,l)[items.length>1?1:0];
  const text=pick(P.msg,l)+'\n'+items.map(i=>`• ${pick(i.name,l)} (${priceText(i,l)})`).join('\n');
  box.innerHTML=`<div class="pr-total"><span>${esc(pick(P.yourPick,l))} · ${items.length} ${esc(word)}</span><strong>${variable?esc(pick(P.from,l))+' ':''}${fmt(total)}</strong></div>
    <div class="pr-actions"><button type="button" class="pr-clear" data-clear>${esc(pick(P.clear,l))}</button><a class="pr-wa" href="https://wa.me/33681029837?text=${encodeURIComponent(text)}" target="_blank" rel="noopener noreferrer">${esc(pick(P.ask,l))}</a></div>`;
};
if(lab2){
  lab2.addEventListener('click',e=>{
    const tab=e.target.closest('.pr-tab');
    if(tab){activeCat=tab.dataset.cat;renderPrices();return}
    const card=e.target.closest('.pr-card');
    if(card){
      const k=card.dataset.key;picked.has(k)?picked.delete(k):picked.add(k);
      const on=picked.has(k);card.classList.toggle('selected',on);card.setAttribute('aria-pressed',String(on));
      const it=ALL.find(i=>i.key===k);const l=currentLang();
      card.setAttribute('aria-label',`${pick(it.name,l)} — ${priceText(it,l)}. ${pick(on?P.remove:P.select,l)}`);
      const t=lab2.querySelector(`.pr-tab[data-cat="${it.cat}"]`);
      if(t){t.querySelector('em')?.remove();const n=CATS.find(c=>c.id===it.cat).items.filter(i=>picked.has(i.key)).length;if(n)t.insertAdjacentHTML('beforeend',`<em>${n}</em>`)}
      renderSummary();return;
    }
    if(e.target.closest('[data-clear]')){picked.clear();renderPrices()}
  });
  lab2.addEventListener('keydown',e=>{
    const tab=e.target.closest('.pr-tab');if(!tab||!['ArrowLeft','ArrowRight'].includes(e.key))return;
    const tabs=[...lab2.querySelectorAll('.pr-tab')];const i=tabs.indexOf(tab);
    const next=tabs[(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length];activeCat=next.dataset.cat;renderPrices();lab2.querySelector('.pr-tab.active').focus();
  });
}

/* Floating dock with the selected shade on phones */
const dock=document.createElement('div');dock.className='pl-dock';dock.setAttribute('aria-hidden','true');document.body.appendChild(dock);
const renderDock=()=>{const l=currentLang();dock.style.setProperty('--pg',selected.hex);dock.innerHTML=`<div class="pl-orb"></div><div class="pl-dock-txt"><b>${esc(pick(selected.name,l))}</b><span>${esc(pick(T[selected.group],l))} · ${esc(pick(T.undertone,l))} ${esc(pick(T[selected.tone],l))}</span></div>`};
let secIn=false,stageIn=true;const syncDock=()=>dock.classList.toggle('show',secIn&&!stageIn);
if(lab&&stage&&'IntersectionObserver' in window){
  new IntersectionObserver(e=>{secIn=e[0].isIntersecting;syncDock()},{threshold:0.05}).observe(lab);
  new IntersectionObserver(e=>{stageIn=e[0].isIntersecting;syncDock()},{rootMargin:'-80px 0px 0px 0px'}).observe(stage);
}
const faqBox=document.querySelector('.faq');
const renderFaqAsk=()=>{if(!faqBox)return;const l=currentLang();let box=faqBox.querySelector('.faq-ask');if(!box){box=document.createElement('div');box.className='faq-ask';faqBox.appendChild(box)}
  box.innerHTML=`<span>${esc(pick(E('Une autre question ? Pamela vous répond.','Outra dúvida? A Pamela responde.','Another question? Pamela will answer.'),l))}</span><a href="https://wa.me/33681029837" target="_blank" rel="noopener noreferrer">${esc(pick(E('Écrire sur WhatsApp','Escrever no WhatsApp','Write on WhatsApp'),l))}</a>`};
const renderAll=()=>{renderPalette();renderStage();renderDock();renderPrices();renderFaqAsk()};
renderAll();
new MutationObserver(renderAll).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
})();

/* Dark header band once the hero is scrolled past, so the light logo and menu stay readable on cream sections. */
(()=>{const bar=document.querySelector('.topbar'),hero=document.querySelector('.hero');if(!bar||!hero)return;
const update=()=>bar.classList.toggle('on-light',scrollY>Math.max(120,hero.offsetHeight-bar.offsetHeight));
addEventListener('scroll',update,{passive:true});update()})();

/* Phone: services as a swipeable carousel with dots */
(()=>{const sc=document.querySelector('.services .service-cards');if(!sc)return;
const cards=[...sc.querySelectorAll('.service-card')];if(cards.length<2)return;
const dots=document.createElement('div');dots.className='sc-dots';
const goTo=i=>{const c=cards[i];sc.scrollTo({left:c.getBoundingClientRect().left-sc.getBoundingClientRect().left+sc.scrollLeft-20,behavior:'smooth'})};
cards.forEach((c,i)=>{const b=document.createElement('button');b.type='button';b.setAttribute('aria-label',`${i+1} / ${cards.length}`);b.addEventListener('click',()=>goTo(i));dots.appendChild(b)});
sc.after(dots);
const sync=()=>{const left=sc.getBoundingClientRect().left+20;let best=0,d=1e9;cards.forEach((c,i)=>{const x=Math.abs(c.getBoundingClientRect().left-left);if(x<d){d=x;best=i}});[...dots.children].forEach((b,i)=>b.classList.toggle('on',i===best))};
sc.addEventListener('scroll',()=>requestAnimationFrame(sync),{passive:true});addEventListener('resize',sync);sync();})();

/* Products showcase: photo gallery with accordion list */
(()=>{const root=document.querySelector('[data-px]');if(!root)return;
const items=[...root.querySelectorAll('.px-item')],frame=root.querySelector('[data-px-frame]'),thumbs=root.querySelector('[data-px-thumbs]'),count=root.querySelector('[data-px-count]'),stage=root.querySelector('.px-stage');
const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
let cur=0,idx=0,imgs=[],timer=0,paused=false,visible=false;
const pad=n=>String(n).padStart(2,'0');
const lang=()=>{const l=(document.documentElement.lang||'fr').toLowerCase();return l.startsWith('pt')?'pt':l.startsWith('en')?'en':'fr'};
const build=()=>{const it=items[cur];const names=it.dataset.images.split(',');const alts=(it.dataset.alts||'').split('|');
  stage.style.setProperty('--tone',it.dataset.tone);
  frame.innerHTML=names.map((n,i)=>`<img src="assets/${n}.jpg" alt="${alts[i]||''}" width="800" height="800" class="${i===0?'on':''}">`).join('');
  thumbs.innerHTML=names.map((n,i)=>`<button type="button" class="${i===0?'on':''}" aria-label="${i+1}"><img src="assets/${n}.jpg" alt="" width="800" height="800"></button>`).join('');
  imgs=[...frame.children];idx=0;show(0)};
const show=i=>{idx=(i+imgs.length)%imgs.length;imgs.forEach((im,k)=>im.classList.toggle('on',k===idx));[...thumbs.children].forEach((b,k)=>b.classList.toggle('on',k===idx));count.textContent=`${pad(idx+1)} / ${pad(imgs.length)}`};
const activate=n=>{cur=(n+items.length)%items.length;items.forEach((it,k)=>{const on=k===cur;it.classList.toggle('is-active',on);it.querySelector('.px-head').setAttribute('aria-expanded',String(on))});build()};
const tick=()=>{if(paused||!visible||reduced)return;if(idx>=imgs.length-1)activate(cur+1);else show(idx+1)};
const start=()=>{clearInterval(timer);timer=setInterval(tick,3200)};
items.forEach((it,k)=>it.querySelector('.px-head').addEventListener('click',()=>{if(k===cur)return;activate(k);start()}));
root.querySelector('[data-px-prev]').addEventListener('click',()=>{show(idx-1);start()});
root.querySelector('[data-px-next]').addEventListener('click',()=>{show(idx+1);start()});
thumbs.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;show([...thumbs.children].indexOf(b));start()});
root.addEventListener('pointerenter',()=>{paused=true});root.addEventListener('pointerleave',()=>{paused=false});
root.addEventListener('focusin',()=>{paused=true});root.addEventListener('focusout',()=>{paused=false});
if('IntersectionObserver' in window)new IntersectionObserver(e=>{visible=e[0].isIntersecting},{threshold:.25}).observe(root);else visible=true;
activate(0);start();})();

/* FAQ: categories and filter chips */
(()=>{const faq=document.querySelector('.faq');if(!faq)return;
const cats=['pmu','rdv','rdv','rdv'];[...faq.querySelectorAll('details:not([data-cat])')].forEach((d,i)=>{d.dataset.cat=cats[i]||'rdv'});
const chips=[...faq.querySelectorAll('.faq-chip')];const items=[...faq.querySelectorAll('details')];
const apply=f=>{chips.forEach(c=>c.classList.toggle('on',c.dataset.filter===f));items.forEach(d=>{const show=f==='all'||d.dataset.cat===f;d.hidden=!show;if(!show)d.open=false})};
chips.forEach(c=>c.addEventListener('click',()=>apply(c.dataset.filter)));
const ask=faq.querySelector('.faq-feature-book');if(ask)ask.addEventListener('click',()=>{});
})();
