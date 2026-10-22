const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let language='fr';
const i18n={
fr:{navExpertise:'Expertise',navPrices:'Tarifs',navQuestions:'Questions',book:'Réserver',heroKicker:'International PMU · Le Cannet',heroTitle:'La couleur<br><em>juste.</em>',heroCopy:'Maquillage permanent pensé pour toutes les carnations, avec une expertise particulière des peaux mélaninées.',discover:'Découvrir',signaturesLabel:'01 / SIGNATURES',signaturesTitle:'Votre peau n’est pas une nuance secondaire.',signaturesLead:'Chaque pigment se choisit avec votre carnation et le résultat souhaité. Le diagnostic précède toujours le geste.',lipsTitle:'Neutralisation<br>des lèvres',lipsCopy:'Un protocole personnalisé pour les lèvres foncées ou irrégulièrement pigmentées.',askQuestion:'Poser une question +',browsTitle:'Sourcils<br>sur mesure',browsCopy:'Une forme construite pour votre visage et une teinte adaptée à votre peau.',askQuote:'Demander un devis +',resultsLabel:'02 / RÉSULTATS RÉELS',resultsTitle:'La technique se voit dans le résultat.',resultsCopy:'Des transformations documentées, pensées pour respecter la carnation, la morphologie et l’identité de chaque cliente.',resultLips:'Neutralisation labiale',resultBrows:'Sourcils sur mesure',positionLabel:'02 / POSITIONNEMENT & MARQUE',positionLine1:'Une expertise qui voyage.',positionLine2:'Une signature qui reste.',brandInternational:'Formation internationale',brandInternationalCopy:'Micropigmentatrice formée à l’international. Brésil, Londres et Portugal — parcours à confirmer avec Pamela.',brandSpecialist:'Spécialiste des peaux mélaninées',brandSpecialistCopy:'Expertise des peaux africaines, brunes et métissées, avec une spécialité en éclaircissement et neutralisation des lèvres foncées.',brandScience:'Beauté guidée par la science',brandScienceCopy:'Une approche à la croisée de la santé, de la cosmétologie et de l’esthétique.',brandProducts:'By Pamela Martins',brandProductsCopy:'Une ligne propre de sérums et de soins, dont le Sérum Botox Luxe, prolonge son univers au-delà de la cabine.',brandConfirm:'* Les villes et pays de formation seront validés avec Pamela avant la version définitive.',pigmentLead:'Le bon pigment ne se devine pas.',pigmentTitle:'Il s’observe.',pigmentHint:'Survolez une nuance ou touchez-la pour voir sa couleur.',journeyLabel:'03 / VOTRE PARCOURS',journeyTitle:'Du premier message au suivi',j1Title:'Vous expliquez votre besoin',j1Copy:'Quelques réponses sur WhatsApp ou Instagram.',j2Title:'Pamela étudie la demande',j2Copy:'Zone, historique, photo et résultat souhaité.',j3Title:'Vous recevez son conseil',j3Copy:'Recommandation, devis et préparation.',j4Title:'Le suivi continue',j4Copy:'Rappels et retouche au bon moment.',pricesLabel:'04 / TARIFS',pricesTitle:'Des prix clairs avant de réserver',priceNote:'Maquillage permanent lèvres et sourcils sur devis personnalisé.',priceEyes:'Cils & sourcils',priceFace:'Visage & beauté',priceSugaring:'Épilation au sucre',priceWax:'Cire chaude',priceMen:'Épilation homme',priceDisclaimer:'Tarifs issus du flyer actuel. La version finale sera publiée après confirmation de Pamela.',diversityLabel:'05 / BEAUTÉ PLURIELLE',diversityTitle:'Chaque peau mérite une lecture précise.',diversityCopy:'Pamela accueille toutes les carnations et possède une expertise particulière des peaux africaines, métissées et mélaninées.',faqLabel:'06 / QUESTIONS',faqTitle:'Avant de vous décider',faq1Q:'La neutralisation labiale me convient-elle ?',faq1A:'Envoyez une photo en lumière naturelle pour recevoir une première orientation personnalisée.',faq2Q:'Comment obtenir un devis ?',faq2A:'Répondez à quelques questions. Pamela vérifie ensuite votre demande et finalise le devis.',faq3Q:'Où réserver ?',faq3A:'Réservez directement sur Planity ou contactez Pamela par WhatsApp.',ctaLead:'Votre projet commence par une conversation.',ctaTitle:'Parlons de votre peau.',whatsapp:'WhatsApp · +33 6 81 02 98 37',planity:'Réserver sur Planity',assistant:'Assistant',assistantDemo:'Assistant de démonstration',demoLabel:'DÉMO · aucun message n’est envoyé'},
pt:{navExpertise:'Especialidades',navPrices:'Preços',navQuestions:'Dúvidas',book:'Agendar',heroKicker:'PMU Internacional · Le Cannet',heroTitle:'A cor<br><em>certa.</em>',heroCopy:'Maquiagem permanente pensada para todos os tons de pele, com experiência especial em peles com melanina.',discover:'Descobrir',signaturesLabel:'01 / ESPECIALIDADES',signaturesTitle:'A sua pele não é um tom secundário.',signaturesLead:'Cada pigmento é escolhido de acordo com a sua pele e o resultado desejado. O diagnóstico vem sempre antes do procedimento.',lipsTitle:'Neutralização<br>labial',lipsCopy:'Um protocolo personalizado para lábios escuros ou com pigmentação irregular.',askQuestion:'Fazer uma pergunta +',browsTitle:'Sobrancelhas<br>sob medida',browsCopy:'Um formato criado para o seu rosto e uma cor adaptada à sua pele.',askQuote:'Pedir orçamento +',resultsLabel:'02 / RESULTADOS REAIS',resultsTitle:'A técnica aparece no resultado.',resultsCopy:'Transformações documentadas, pensadas para respeitar o tom de pele, a morfologia e a identidade de cada cliente.',resultLips:'Neutralização labial',resultBrows:'Sobrancelhas sob medida',positionLabel:'02 / POSICIONAMENTO & MARCA',positionLine1:'Uma experiência que atravessa fronteiras.',positionLine2:'Uma assinatura que permanece.',brandInternational:'Formação internacional',brandInternationalCopy:'Micropigmentadora com formação internacional. Brasil, Londres e Portugal — percurso a confirmar com Pamela.',brandSpecialist:'Especialista em peles com melanina',brandSpecialistCopy:'Experiência em peles africanas, pardas e mestiças, com especialidade em clareamento e neutralização de lábios escuros.',brandScience:'Beleza guiada pela ciência',brandScienceCopy:'Uma abordagem que reúne saúde, cosmetologia e estética.',brandProducts:'By Pamela Martins',brandProductsCopy:'Uma linha própria de séruns e cuidados, incluindo o Sérum Botox Luxe, prolonga o seu universo para além do atendimento.',brandConfirm:'* As cidades e os países da formação serão validados com Pamela antes da versão definitiva.',pigmentLead:'O pigmento certo não se adivinha.',pigmentTitle:'Ele se observa.',pigmentHint:'Passe o cursor ou toque em um tom para ver sua cor.',journeyLabel:'03 / O SEU PERCURSO',journeyTitle:'Da primeira mensagem ao acompanhamento',j1Title:'Você explica o que procura',j1Copy:'Poucas respostas pelo WhatsApp ou Instagram.',j2Title:'Pamela analisa o pedido',j2Copy:'Área, histórico, foto e resultado desejado.',j3Title:'Você recebe a orientação',j3Copy:'Recomendação, orçamento e preparação.',j4Title:'O acompanhamento continua',j4Copy:'Lembretes e retoque no momento certo.',pricesLabel:'04 / PREÇOS',pricesTitle:'Preços claros antes de agendar',priceNote:'Maquiagem permanente de lábios e sobrancelhas sob orçamento personalizado.',priceEyes:'Cílios e sobrancelhas',priceFace:'Rosto e beleza',priceSugaring:'Depilação com açúcar',priceWax:'Cera quente',priceMen:'Depilação masculina',priceDisclaimer:'Valores baseados no flyer atual. A versão final será publicada após confirmação da Pamela.',diversityLabel:'05 / BELEZA PLURAL',diversityTitle:'Cada pele merece uma análise precisa.',diversityCopy:'Pamela atende todos os tons de pele e possui experiência especial em peles africanas, pardas, mestiças e com melanina.',faqLabel:'06 / DÚVIDAS',faqTitle:'Antes de decidir',faq1Q:'A neutralização labial é indicada para mim?',faq1A:'Envie uma foto com luz natural para receber uma primeira orientação personalizada.',faq2Q:'Como receber um orçamento?',faq2A:'Responda a algumas perguntas. Pamela verifica o seu pedido e finaliza o orçamento.',faq3Q:'Onde agendar?',faq3A:'Agende diretamente pelo Planity ou fale com a Pamela pelo WhatsApp.',ctaLead:'O seu projeto começa com uma conversa.',ctaTitle:'Vamos falar da sua pele.',whatsapp:'WhatsApp · +33 6 81 02 98 37',planity:'Agendar no Planity',assistant:'Assistente',assistantDemo:'Assistente demonstrativo',demoLabel:'DEMO · nenhuma mensagem é enviada'}
};
Object.assign(i18n.fr,{navExpertise:'Soins',signaturesLabel:'01 / LES SOINS',signaturesTitle:'Des soins pensés pour<br><em>révéler votre beauté.</em>',signaturesLead:'De la ligne du sourcil à l’éclat de la peau, chaque protocole est personnalisé pour respecter votre identité et votre carnation.',serviceBrows:'Sourcils',serviceBrowsCopy:'Design · Microblading · Brow Lift',serviceLips:'Lèvres',serviceLipsCopy:'Neutralisation · Éclaircissement · Lip Blush',serviceLashes:'Cils',serviceLashesCopy:'Lash Lift · Teinture · Soin du regard',serviceSkin:'Peau',serviceSkinCopy:'Nettoyage · Microneedling · Baby Glow · Hidragloss',serviceDiscover:'Découvrir ↗',brandInternationalCopy:'Plus de 35 certificats et diplômes obtenus autour du monde, au service d’une pratique précise et constamment actualisée.',brandConfirm:'Une sélection du parcours de Pamela est présentée ci-dessous.',positionLabel:'03 / POSITIONNEMENT & MARQUE',credentialsLabel:'04 / PARCOURS & CERTIFICATIONS',credentialsTitle:'Une expertise construite<br><em>formation après formation.</em>',credentialsCopy:'Des techniques internationales, une pratique exigeante et une spécialisation dédiée à la beauté de chaque carnation.',credentialsCount:'certificats et diplômes obtenus autour du monde',credentialsPortrait:'Précision, écoute et naturel.',credentialsPhi:'Formation certifiée en éclaircissement et neutralisation labiale.',credentialsProducts:'La technique prolongée par sa propre ligne de soins.',certificateEyebrow:'SÉLECTION DE CERTIFICATS',certificateTitle:'Un parcours visible, des compétences vérifiables.',pricesLabel:'05 / TARIFS',diversityLabel:'06 / BEAUTÉ PLURIELLE',faqLabel:'07 / QUESTIONS'});
Object.assign(i18n.pt,{navExpertise:'Serviços',signaturesLabel:'01 / SERVIÇOS',signaturesTitle:'Cuidados pensados para<br><em>revelar a sua beleza.</em>',signaturesLead:'Do desenho das sobrancelhas ao brilho da pele, cada protocolo é personalizado para respeitar a sua identidade e o seu tom de pele.',serviceBrows:'Sobrancelhas',serviceBrowsCopy:'Design · Microblading · Brow Lift',serviceLips:'Lábios',serviceLipsCopy:'Neutralização · Clareamento · Lip Blush',serviceLashes:'Cílios',serviceLashesCopy:'Lash Lift · Tintura · Cuidados do olhar',serviceSkin:'Pele',serviceSkinCopy:'Limpeza · Microagulhamento · Baby Glow · Hidragloss',serviceDiscover:'Descobrir ↗',brandInternationalCopy:'Mais de 35 certificados e diplomas obtidos ao redor do mundo, a serviço de uma prática precisa e sempre atualizada.',brandConfirm:'Uma seleção da trajetória da Pamela é apresentada abaixo.',positionLabel:'03 / POSICIONAMENTO & MARCA',credentialsLabel:'04 / TRAJETÓRIA & CERTIFICAÇÕES',credentialsTitle:'Uma expertise construída<br><em>formação após formação.</em>',credentialsCopy:'Técnicas internacionais, uma prática exigente e uma especialização dedicada à beleza de cada tom de pele.',credentialsCount:'certificados e diplomas obtidos ao redor do mundo',credentialsPortrait:'Precisão, escuta e naturalidade.',credentialsPhi:'Formação certificada em clareamento e neutralização labial.',credentialsProducts:'A técnica prolongada pela sua própria linha de cuidados.',certificateEyebrow:'SELEÇÃO DE CERTIFICADOS',certificateTitle:'Uma trajetória visível, competências verificáveis.',pricesLabel:'05 / PREÇOS',diversityLabel:'06 / BELEZA PLURAL',faqLabel:'07 / DÚVIDAS'});
function applyLang(){document.documentElement.lang=language==='fr'?'fr':'pt-BR';$$('[data-i18n]').forEach(e=>e.textContent=i18n[language][e.dataset.i18n]);$$('[data-i18n-html]').forEach(e=>e.innerHTML=i18n[language][e.dataset.i18nHtml]);$$('[data-fr][data-pt]').forEach(e=>e.innerHTML=e.dataset[language]);$$('[data-alt-fr][data-alt-pt]').forEach(e=>e.alt=e.dataset[`alt${language==='fr'?'Fr':'Pt'}`]);const legacyLanguageButton=$('.lang');if(legacyLanguageButton)legacyLanguageButton.textContent=language==='fr'?'🇫🇷 FR':'🇧🇷 PT';}
$$('.lang').forEach(button=>button.addEventListener('click',()=>{language=language==='fr'?'pt':'fr';applyLang()}));applyLang();
$$('[data-scroll]').forEach(b=>b.addEventListener('click',()=>$(b.dataset.scroll).scrollIntoView({behavior:'smooth'})));
const field=$('.intervention');field.addEventListener('pointermove',e=>{const r=field.getBoundingClientRect();field.style.setProperty('--x',`${(e.clientX-r.left)/r.width*100}%`);field.style.setProperty('--y',`${(e.clientY-r.top)/r.height*100}%`)});
const panel=$('.concierge'),messages=$('.messages'),choices=$('.choices');
const flows={fr:{start:['Bonjour 👋 Que souhaitez-vous savoir ?',[['Lèvres','lips'],['Sourcils','brows'],['Tarifs','prices'],['Réserver','book']]],lips:['Première pigmentation ou retouche ? Vous pouvez ensuite joindre une photo en lumière naturelle.',[['Première fois','done'],['Retouche','done']]],brows:['Première pigmentation ou retouche ? Une photo sans filtre aidera Pamela à vous conseiller.',[['Première fois','done'],['Retouche','done']]],prices:['Les tarifs principaux sont affichés sur le site. Le maquillage permanent reste sur devis.',[['Voir les tarifs','close'],['Parler à Pamela','whatsapp']]],book:['Réservez sur Planity ou contactez Pamela sur WhatsApp.',[['Planity','planity'],['WhatsApp','whatsapp']]],done:['Merci ✨ Pamela vérifiera personnellement votre demande avant de confirmer son conseil et le devis.',[['WhatsApp','whatsapp']]]},pt:{start:['Olá 👋 Como posso ajudar?',[['Lábios','lips'],['Sobrancelhas','brows'],['Preços','prices'],['Agendar','book']]],lips:['É a primeira pigmentação ou um retoque? Depois, envie uma foto com luz natural.',[['Primeira vez','done'],['Retoque','done']]],brows:['É a primeira pigmentação ou um retoque? Uma foto sem filtro ajuda a Pamela a orientar você.',[['Primeira vez','done'],['Retoque','done']]],prices:['Os principais preços estão no site. A maquiagem permanente é sob orçamento.',[['Ver preços','close'],['Falar com Pamela','whatsapp']]],book:['Agende pelo Planity ou fale com a Pamela no WhatsApp.',[['Planity','planity'],['WhatsApp','whatsapp']]],done:['Obrigada ✨ Pamela vai verificar o seu pedido antes de confirmar a orientação e o orçamento.',[['WhatsApp','whatsapp']]]}};
function add(text,type='bot'){const d=document.createElement('div');d.className=`bubble ${type}`;d.textContent=text;messages.appendChild(d);messages.scrollTop=messages.scrollHeight}
function show(key,answer){if(answer)add(answer,'user');if(key==='planity')return window.open('https://www.planity.com/pamela-martins-chez-diane-hair-beauty-06110-le-cannet','_blank');if(key==='whatsapp')return window.open('https://wa.me/33681029837','_blank');if(key==='close')return document.querySelector('#tarifs').scrollIntoView({behavior:'smooth'});const [msg,opts]=flows[language][key];setTimeout(()=>{add(msg);choices.innerHTML='';opts.forEach(([label,next])=>{const b=document.createElement('button');b.textContent=label;b.onclick=()=>show(next,label);choices.appendChild(b)})},answer?180:0)}
function openFlow(key){panel.classList.add('open');panel.setAttribute('aria-hidden','false');messages.innerHTML='';choices.innerHTML='';show(key)}
$$('.open-concierge').forEach(b=>b.addEventListener('click',()=>openFlow(b.dataset.topic||'start')));$('.close').onclick=()=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true')};
$$('.faq details').forEach(d=>d.addEventListener('toggle',()=>{$$('.faq details').filter(x=>x!==d).forEach(x=>x.open=false)}));

const instagramTrack=$('[data-instagram-track]');
const instagramPauseButton=$('[data-instagram-pause]');
let instagramDirection=1;
let instagramPauseUntil=0;
let instagramAutoplayPaused=false;
let instagramPointerPaused=false;
let instagramFocusPaused=false;
function moveInstagram(direction){
  if(!instagramTrack)return;
  const cards=$$('.instagram-card',instagramTrack);
  if(!cards.length)return;
  const gap=parseFloat(getComputedStyle(instagramTrack).gap)||0;
  const step=cards[0].getBoundingClientRect().width+gap;
  const maxScroll=Math.max(0,instagramTrack.scrollWidth-instagramTrack.clientWidth);
  const target=Math.max(0,Math.min(maxScroll,instagramTrack.scrollLeft+direction*step));
  instagramDirection=direction;
  instagramTrack.scrollTo({left:target,behavior:motionReduced?'auto':'smooth'});
}
$('[data-instagram-prev]')?.addEventListener('click',()=>{instagramPauseUntil=Date.now()+7000;moveInstagram(-1)});
$('[data-instagram-next]')?.addEventListener('click',()=>{instagramPauseUntil=Date.now()+7000;moveInstagram(1)});

const certificateBook=$('[data-certificate-book]');
const certificateTrack=$('[data-certificate-track]');
const certificateCards=$$('.certificate-card',certificateTrack||document);
let activeCertificateIndex=-1;
let certificateRotation=0;
let certificateTargetRotation=null;
let certificateVelocity=0;
let certificateRadius=0;
let certificatePointer={active:false,x:0};
let certificatePauseUntil=0;
const certificateAngle=certificateCards.length?360/certificateCards.length:0;
function updateCertificateRingSize(){
  if(!certificateBook||!certificateTrack||!certificateCards.length)return;
  const mobile=window.matchMedia('(max-width: 760px)').matches;
  const cardWidth=mobile?Math.min(210,Math.max(180,window.innerWidth*.52)):Math.min(290,Math.max(250,window.innerWidth*.22));
  const cardHeight=mobile?342:420;
  certificateRadius=(cardWidth*1.02)/(2*Math.tan(Math.PI/certificateCards.length));
  certificateBook.style.setProperty('--certificate-card-width',`${cardWidth}px`);
  certificateBook.style.setProperty('--certificate-card-height',`${cardHeight}px`);
  certificateCards.forEach((card,index)=>{
    card.style.transform=`rotateY(${index*certificateAngle}deg) translateZ(${certificateRadius}px)`;
    if(!card.querySelector('.certificate-card-face--front')){
      const front=document.createElement('div');
      front.className='certificate-card-face certificate-card-face--front';
      while(card.firstChild)front.append(card.firstChild);
      const back=front.cloneNode(true);
      back.className='certificate-card-face certificate-card-face--back';
      back.setAttribute('aria-hidden','true');
      back.querySelectorAll('img').forEach(image=>{image.alt='';image.loading='eager';image.draggable=false});
      card.append(front,back);
      front.querySelectorAll('img').forEach(image=>{image.loading='eager';image.draggable=false});
    }
    card.setAttribute('aria-roledescription','slide');
    card.setAttribute('aria-label',`${index+1} of ${certificateCards.length}`);
  });
  certificateTrack.style.transform=`translateZ(${-certificateRadius}px) rotateY(${certificateRotation}deg)`;
}
function setCurrentCertificateFromRotation(){
  if(!certificateCards.length||!certificateAngle)return;
  const nextIndex=((Math.round(-certificateRotation/certificateAngle)%certificateCards.length)+certificateCards.length)%certificateCards.length;
  if(nextIndex===activeCertificateIndex)return;
  activeCertificateIndex=nextIndex;
  certificateCards.forEach((card,index)=>card.classList.toggle('is-current',index===activeCertificateIndex));
}
function moveCertificates(direction){
  if(!certificateTrack||!certificateCards.length)return;
  const start=certificateTargetRotation??certificateRotation;
  certificateTargetRotation=start-direction*certificateAngle;
  certificateVelocity=0;
  certificatePauseUntil=Date.now()+1900;
}
if(certificateBook&&certificateTrack&&certificateCards.length){
  certificateTrack.setAttribute('role','region');
  certificateTrack.setAttribute('aria-roledescription','carousel');
  certificateTrack.setAttribute('aria-label','Carrousel des certificats');
  certificateTrack.tabIndex=0;
  updateCertificateRingSize();
  setCurrentCertificateFromRotation();
  certificateTrack.addEventListener('pointerdown',event=>{
    if(event.button!==undefined&&event.button!==0)return;
    certificatePointer={active:true,x:event.clientX};
    certificateTargetRotation=null;
    certificateVelocity=0;
    certificatePauseUntil=Date.now()+2600;
    certificateTrack.setPointerCapture?.(event.pointerId);
  });
  certificateTrack.addEventListener('pointermove',event=>{
    if(!certificatePointer.active)return;
    const delta=event.clientX-certificatePointer.x;
    certificatePointer.x=event.clientX;
    const movement=delta*.38;
    certificateRotation+=movement;
    certificateVelocity=movement*40;
    setCurrentCertificateFromRotation();
  });
  const releaseCertificatePointer=event=>{
    if(!certificatePointer.active)return;
    certificatePointer.active=false;
    certificatePauseUntil=Date.now()+2300;
    if(certificateTrack.hasPointerCapture?.(event.pointerId))certificateTrack.releasePointerCapture(event.pointerId);
  };
  certificateTrack.addEventListener('pointerup',releaseCertificatePointer);
  certificateTrack.addEventListener('pointercancel',releaseCertificatePointer);
  certificateTrack.addEventListener('keydown',event=>{
    if(event.key==='ArrowLeft'||event.key==='ArrowRight'){
      event.preventDefault();
      moveCertificates(event.key==='ArrowRight'?1:-1);
    }
  });
  window.addEventListener('resize',updateCertificateRingSize,{passive:true});
  const drawCertificateRing=now=>{
    const dt=certificateLastFrame?Math.min((now-certificateLastFrame)/1000,.1):0;
    certificateLastFrame=now;
    if(!document.hidden&&!certificatePointer.active){
      if(certificateTargetRotation!==null){
        const delta=certificateTargetRotation-certificateRotation;
        if(window.matchMedia('(prefers-reduced-motion: reduce)').matches||Math.abs(delta)<.08){
          certificateRotation=certificateTargetRotation;
          certificateTargetRotation=null;
        }else certificateRotation+=delta*(1-Math.exp(-11*dt));
      }else if(Math.abs(certificateVelocity)>.08){
        certificateRotation+=certificateVelocity*dt;
        certificateVelocity*=Math.pow(.94,dt*60);
      }else if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches&&Date.now()>=certificatePauseUntil){
        certificateRotation-=10*dt;
      }
    }
    certificateTrack.style.transform=`translateZ(${-certificateRadius}px) rotateY(${certificateRotation}deg)`;
    setCurrentCertificateFromRotation();
    window.requestAnimationFrame(drawCertificateRing);
  };
  let certificateLastFrame=0;
  window.requestAnimationFrame(drawCertificateRing);
}
$('[data-certificate-prev]')?.addEventListener('click',()=>moveCertificates(-1));
$('[data-certificate-next]')?.addEventListener('click',()=>moveCertificates(1));

// Motion Edition: progressive enhancement keeps the content fully usable without animation.
const motionReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionMobile=window.matchMedia('(max-width: 760px)').matches;
const instagramCarousel=$('.instagram-rail-wrap');
const updateInstagramPauseButton=()=>{
  if(!instagramPauseButton)return;
  const labels={
    fr:{pause:'Mettre le carrousel en pause',resume:'Reprendre le carrousel'},
    pt:{pause:'Pausar o carrossel',resume:'Retomar o carrossel'},
    en:{pause:'Pause carousel',resume:'Resume carousel'}
  };
  const languageLabels=labels[language]||labels.fr;
  instagramPauseButton.textContent=instagramAutoplayPaused?'▶':'Ⅱ';
  instagramPauseButton.setAttribute('aria-label',instagramAutoplayPaused?languageLabels.resume:languageLabels.pause);
  instagramPauseButton.setAttribute('aria-pressed',String(instagramAutoplayPaused));
};
if(instagramPauseButton){
  updateInstagramPauseButton();
  instagramPauseButton.addEventListener('click',()=>{
    instagramAutoplayPaused=!instagramAutoplayPaused;
    updateInstagramPauseButton();
  });
  $$('.lang-option').forEach(button=>button.addEventListener('click',()=>window.requestAnimationFrame(updateInstagramPauseButton)));
  if(motionReduced)instagramPauseButton.hidden=true;
}
if(instagramTrack&&instagramCarousel){
  instagramCarousel.addEventListener('pointerenter',()=>{instagramPointerPaused=true});
  instagramCarousel.addEventListener('pointerleave',()=>{instagramPointerPaused=false;instagramPauseUntil=Date.now()+1800});
  instagramCarousel.addEventListener('focusin',()=>{instagramFocusPaused=true});
  instagramCarousel.addEventListener('focusout',event=>{
    if(!instagramCarousel.contains(event.relatedTarget)){instagramFocusPaused=false;instagramPauseUntil=Date.now()+1800}
  });
  ['pointerdown','touchstart','wheel'].forEach(type=>instagramTrack.addEventListener(type,()=>{instagramPauseUntil=Date.now()+7000},{passive:true}));
  if(!motionReduced){
    window.setInterval(()=>{
      const bounds=instagramTrack.getBoundingClientRect();
      if(document.hidden||instagramAutoplayPaused||instagramPointerPaused||instagramFocusPaused||Date.now()<instagramPauseUntil||bounds.bottom<0||bounds.top>window.innerHeight)return;
      const cards=$$('.instagram-card',instagramTrack);
      if(cards.length<2)return;
      const gap=parseFloat(getComputedStyle(instagramTrack).gap)||0;
      const step=cards[0].getBoundingClientRect().width+gap;
      const maxScroll=Math.max(0,instagramTrack.scrollWidth-instagramTrack.clientWidth);
      if(maxScroll<2)return;
      const current=instagramTrack.scrollLeft;
      let target=current+instagramDirection*step;
      if(target>=maxScroll){target=maxScroll;instagramDirection=-1}
      else if(target<=0){target=0;instagramDirection=1}
      instagramTrack.scrollTo({left:target,behavior:'smooth'});
    },2200);
  }
}
const revealTargets=$$('main section:not(.hero) .section-index, main section:not(.hero) h2, main section:not(.hero) .lead, .service-card, .results-heading p, .brand-grid article, .credentials-lead, .credentials-stat, .credentials-story figure, .certificate-intro, .journey li, .price-note, .price-columns details, .about-copy, .diversity-image, .faq details, .cta p, .cta a, .gallery-intro, .gallery-tabs button');
revealTargets.forEach((element,index)=>{
  element.classList.add('reveal');
  if(element.matches('figure,.diversity-image'))element.classList.add('reveal-scale');
  if(element.matches('.results-heading p,.about-copy,.credentials-lead'))element.classList.add('reveal-left');
  element.style.setProperty('--reveal-delay',`${Math.min(index%4,3)*70}ms`);
});
if(!motionReduced&&'IntersectionObserver' in window){
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}
  }),{threshold:.12,rootMargin:'0px 0px -7%'});
  revealTargets.forEach(element=>revealObserver.observe(element));
}else revealTargets.forEach(element=>element.classList.add('is-visible'));

const galleryMedia=$('.gallery-media');
const galleryImage=$('.gallery-media img');
const galleryIndex=$('.gallery-current');
const galleryButtons=$$('.gallery-tabs button');
let galleryTimer;
function activateGallery(button){
  if(!galleryMedia||!galleryImage)return;
  if(button.classList.contains('active'))return;
  galleryButtons.forEach(item=>{item.classList.toggle('active',item===button);item.setAttribute('aria-selected',item===button?'true':'false')});
  galleryImage.classList.add('switching');
  clearTimeout(galleryTimer);
  galleryTimer=setTimeout(()=>{
    galleryImage.src=button.dataset.gallerySrc;
    galleryMedia.style.setProperty('--gallery-image',`url("${button.dataset.gallerySrc}")`);
    galleryImage.alt=button.textContent.trim();
    galleryIndex.textContent=button.dataset.galleryIndex;
    galleryImage.classList.remove('switching');
  },220);
}
if(galleryMedia&&galleryImage){
  galleryMedia.style.setProperty('--gallery-image',`url("${galleryImage.getAttribute('src')}")`);
  galleryButtons.forEach(button=>{
    button.addEventListener('click',()=>activateGallery(button));
    if(!motionMobile)button.addEventListener('pointerenter',()=>activateGallery(button));
  });
}

const topbar=$('.topbar');
const progress=$('.scroll-progress');
const heroImage=$('.hero-image');
const parallaxItems=$$('[data-parallax]');
let motionFrame=false;
function updateMotion(){
  const scrollTop=window.scrollY;
  const scrollRange=Math.max(document.documentElement.scrollHeight-window.innerHeight,1);
  document.documentElement.style.setProperty('--scroll-progress',`${Math.min(scrollTop/scrollRange*100,100)}%`);
  topbar.classList.toggle('scrolled',scrollTop>34);
  if(!motionReduced&&!motionMobile){
    heroImage.style.transform=`translate3d(0,${Math.min(scrollTop*.12,95)}px,0) scale(1.055)`;
    parallaxItems.forEach(item=>{
      const rect=item.getBoundingClientRect();
      const speed=Number(item.dataset.parallax||.04);
      const offset=(window.innerHeight/2-(rect.top+rect.height/2))*speed;
      item.style.transform=`translate3d(0,${offset}px,0)`;
    });
  }
  motionFrame=false;
}
function requestMotion(){if(!motionFrame){motionFrame=true;requestAnimationFrame(updateMotion)}}
window.addEventListener('scroll',requestMotion,{passive:true});
window.addEventListener('resize',requestMotion,{passive:true});
updateMotion();
Object.assign(i18n.fr,{positionLabel:'02 / POSITIONNEMENT & MARQUE'});
Object.assign(i18n.pt,{positionLabel:'02 / POSICIONAMENTO & MARCA'});
applyLang();

// Reposition hash links after responsive images and CSS-ordered sections settle.
if(location.hash){
  const settleHash=()=>setTimeout(()=>document.querySelector(location.hash)?.scrollIntoView({block:'start'}),650);
  document.readyState==='complete'?settleHash():addEventListener('load',settleHash,{once:true});
}
Object.assign(i18n.fr,{brandInternationalCopy:'Artiste formée à l’international et aux protocoles PhiAcademy, avec plus de 35 certificats et diplômes obtenus autour du monde.',brandProducts:'PhiAcademy & Utsukusy',brandProductsCopy:'Pamela représente l’exigence PhiAcademy et travaille avec les produits professionnels Utsukusy, sélectionnés pour la qualité et la sécurité des protocoles.',credentialsPhi:'Formation PhiAcademy certifiée en éclaircissement et neutralisation labiale.',credentialsProducts:'Des soins Utsukusy sélectionnés avec exigence.',pricesLabel:'09 / TARIFS',faqLabel:'08 / QUESTIONS'});
Object.assign(i18n.pt,{brandInternationalCopy:'Artista com formação internacional e nos protocolos PhiAcademy, com mais de 35 certificados e diplomas obtidos ao redor do mundo.',brandProducts:'PhiAcademy & Utsukusy',brandProductsCopy:'Pamela representa a exigência PhiAcademy e trabalha com produtos profissionais Utsukusy, selecionados pela qualidade e segurança dos protocolos.',credentialsPhi:'Formação PhiAcademy certificada em clareamento e neutralização labial.',credentialsProducts:'Cuidados Utsukusy escolhidos com rigor.',pricesLabel:'09 / PREÇOS',faqLabel:'08 / DÚVIDAS'});
applyLang();
Object.assign(i18n.fr,{diversityCopy:'Pamela accueille toutes les peaux, toutes les carnations, toutes les origines et toutes les ethnies — françaises, brésiliennes, capverdiennes, portugaises et bien d’autres.'});
Object.assign(i18n.pt,{diversityCopy:'Pamela atende todos os tipos de pele, todas as tonalidades, origens e etnias — francesas, brasileiras, cabo-verdianas, portuguesas e muitas outras.'});
applyLang();

// Ordem editorial final aprovada: beleza plural, Instagram, FAQ e, por último, tarifas.
// A movimentação preserva os listeners e os carrosséis já inicializados.
const mainContent=document.querySelector('main');
const instagramSection=document.querySelector('.instagram-showcase');
const faqSection=document.querySelector('.faq');
const pricesSection=document.querySelector('.prices');
const ctaSection=document.querySelector('.cta');
if(mainContent&&instagramSection&&faqSection)mainContent.insertBefore(instagramSection,faqSection);
if(mainContent&&pricesSection&&ctaSection)mainContent.insertBefore(pricesSection,ctaSection);

// Luxury refinement edition: complete FR / PT / EN content and accessible language cycling.
Object.assign(i18n.fr,{
  serviceBrowsCopy:'Architecture du regard, tracé personnalisé et techniques poil à poil adaptées à votre morphologie.',
  serviceLipsCopy:'Correction de la tonalité, neutralisation des lèvres foncées et couleur sur mesure au fini naturel.',
  serviceLashesCopy:'Courbure, teinture et soin pour ouvrir le regard avec élégance, sans l’alourdir.',
  serviceSkinCopy:'Protocoles ciblés pour purifier, lisser, hydrater et raviver l’éclat de chaque carnation.',
  credentialsLabel:'03 / PARCOURS & CERTIFICATIONS',
  pigmentNote:'Nuances de référence. Le pigment final est choisi après l’analyse professionnelle de la peau, du sous-ton et du résultat souhaité.'
});
Object.assign(i18n.pt,{
  serviceBrowsCopy:'Arquitetura do olhar, desenho personalizado e técnicas fio a fio adaptadas à sua fisionomia.',
  serviceLipsCopy:'Correção do tom, neutralização de lábios escuros e cor sob medida com acabamento natural.',
  serviceLashesCopy:'Curvatura, tintura e cuidado para abrir o olhar com elegância, sem pesar.',
  serviceSkinCopy:'Protocolos direcionados para purificar, suavizar, hidratar e devolver luminosidade a cada tom de pele.',
  credentialsLabel:'03 / TRAJETÓRIA & CERTIFICAÇÕES',
  pigmentNote:'Tons de referência. O pigmento final é escolhido após uma análise profissional da pele, do subtom e do resultado desejado.'
});
i18n.en={
  navExpertise:'Treatments',navPrices:'Prices',navQuestions:'Questions',book:'Book',
  heroKicker:'International PMU · Le Cannet',heroTitle:'The right<br><em>colour.</em>',heroCopy:'Permanent makeup designed for every skin tone, with specialist expertise in melanin-rich skin.',discover:'Discover',
  signaturesLabel:'01 / TREATMENTS',signaturesTitle:'Treatments designed to<br><em>reveal your beauty.</em>',signaturesLead:'From brow definition to radiant skin, every protocol is personalised to respect your identity and skin tone.',
  serviceBrows:'Brows',serviceBrowsCopy:'Eye-area architecture, bespoke mapping and hair-stroke techniques adapted to your features.',
  serviceLips:'Lips',serviceLipsCopy:'Tone correction, dark-lip neutralisation and bespoke colour with a natural finish.',
  serviceLashes:'Lashes',serviceLashesCopy:'Lift, tint and care to open the eyes elegantly without weighing them down.',
  serviceSkin:'Skin',serviceSkinCopy:'Targeted protocols to purify, smooth, hydrate and restore radiance to every skin tone.',serviceDiscover:'Discover ↗',
  positionLabel:'02 / POSITIONING & BRAND',positionLine1:'Expertise that travels.',positionLine2:'A signature that remains.',
  brandInternational:'International training',brandInternationalCopy:'Internationally trained, including PhiAcademy protocols, with more than 35 certificates and diplomas earned around the world.',
  brandSpecialist:'Melanin-rich skin specialist',brandSpecialistCopy:'Expertise in Black, brown and mixed-race skin, with a special focus on lightening and neutralising dark lips.',
  brandScience:'Beauty guided by science',brandScienceCopy:'An approach at the intersection of health, cosmetology and aesthetics.',
  brandProducts:'PhiAcademy & Utsukusy',brandProductsCopy:'Pamela embodies PhiAcademy standards and works with professional Utsukusy products selected for protocol quality and safety.',brandConfirm:'A selection of Pamela’s professional journey is presented below.',
  credentialsLabel:'03 / JOURNEY & CERTIFICATIONS',credentialsTitle:'Expertise built<br><em>course after course.</em>',credentialsCopy:'International techniques, exacting practice and a specialisation devoted to the beauty of every skin tone.',credentialsCount:'certificates and diplomas earned around the world',credentialsPortrait:'Precision, listening and natural results.',credentialsPhi:'PhiAcademy-certified training in lip lightening and neutralisation.',credentialsProducts:'Professional Utsukusy care, selected with care.',certificateEyebrow:'CERTIFICATE SELECTION',certificateTitle:'A visible journey. Verifiable expertise.',
  pigmentLead:'The right pigment is not guessed.',pigmentTitle:'It is observed.',pigmentHint:'Hover over or tap a shade to see its colour.',pigmentNote:'Reference shades. The final pigment is selected after a professional assessment of the skin, undertone and desired result.',
  pricesLabel:'09 / PRICES',pricesTitle:'Clear prices before you book',priceNote:'Permanent lip and brow makeup is quoted individually.',priceEyes:'Lashes & brows',priceFace:'Face & beauty',priceSugaring:'Sugaring',priceWax:'Hot wax',priceMen:'Men’s waxing',priceDisclaimer:'Prices are based on the current brochure. Pamela confirms the final quote before treatment.',
  diversityLabel:'06 / INCLUSIVE BEAUTY',diversityTitle:'Every skin deserves a precise reading.',diversityCopy:'Pamela welcomes every skin type, shade, origin and ethnicity — French, Brazilian, Cape Verdean, Portuguese and many more.',
  faqLabel:'08 / QUESTIONS',faqTitle:'Before you decide',faq1Q:'Is lip neutralisation right for me?',faq1A:'Send a photo in natural light to receive initial personalised guidance.',faq2Q:'How do I get a quote?',faq2A:'Answer a few questions. Pamela will review your request and finalise your quote.',faq3Q:'Where can I book?',faq3A:'Book directly on Planity or contact Pamela on WhatsApp.',
  j1Title:'Tell us what you need',j1Copy:'A few answers via WhatsApp or Instagram.',j2Title:'Pamela reviews your request',j2Copy:'Area, history, photo and desired result.',j3Title:'Receive her advice',j3Copy:'Recommendation, quote and preparation.',j4Title:'Follow-up continues',j4Copy:'Reminders and touch-up at the right time.',
  ctaLead:'Your project begins with a conversation.',ctaTitle:'Let’s talk about your skin.',whatsapp:'WhatsApp · +33 6 81 02 98 37',planity:'Book on Planity',assistant:'Assistant',assistantDemo:'Demo assistant',demoLabel:'DEMO · no message is sent'
};
flows.en={start:['Hello 👋 What would you like to know?',[['Lips','lips'],['Brows','brows'],['Prices','prices'],['Book','book']]],lips:['Is this your first pigmentation or a touch-up? You can then send a photo in natural light.',[['First time','done'],['Touch-up','done']]],brows:['Is this your first pigmentation or a touch-up? An unfiltered photo will help Pamela advise you.',[['First time','done'],['Touch-up','done']]],prices:['Main prices are shown on the site. Permanent makeup is quoted individually.',[['View prices','close'],['Talk to Pamela','whatsapp']]],book:['Book through Planity or contact Pamela on WhatsApp.',[['Planity','planity'],['WhatsApp','whatsapp']]],done:['Thank you ✨ Pamela will personally review your request before confirming her advice and quote.',[['WhatsApp','whatsapp']]]};
const translateEnglishHtml=value=>{
  const exact={
    '03 / INSTAGRAM':'03 / INSTAGRAM','Suivez son travail.<br><em>Découvrez sa signature.</em>':'Follow her work.<br><em>Discover her signature.</em>',
    'Conseils, coulisses et transformations : retrouvez l’univers de Pamela au quotidien.':'Tips, behind-the-scenes moments and transformations: discover Pamela’s world every day.',
    'Comment se déroule l’accompagnement ?':'How does the personalised journey work?','AVANT':'BEFORE','APRÈS':'AFTER',
    'Neutralisation labiale':'Lip neutralisation','Pigmentation des lèvres':'Lip pigmentation','Lip Blush naturel':'Natural Lip Blush','Design des sourcils':'Eyebrow design'
  };
  if(exact[value])return exact[value];
  return value
    .replace('Épilation sourcils + teinture','Brow shaping + tint')
    .replaceAll('entretien','maintenance').replaceAll('coloration','tint')
    .replace('Microneedling','Microneedling').replace('Nettoyage facial classique','Classic facial cleansing')
    .replace('Nettoyage Hydra purifiant','Purifying Hydra cleansing').replace('Manucure flash + couleur','Express manicure + colour')
    .replace('Soin complet maillot + vajacial','Complete bikini care + vajacial').replace('Maillot intégral + vajacial','Full bikini + vajacial')
    .replace('Lèvre supérieure','Upper lip').replace('Sourcils sans forme','Brows without shaping').replace('Sourcils','Brows')
    .replace('Aisselles','Underarms').replace('Demi-bras','Half arms').replace('bras entiers','full arms')
    .replace('Maillot classique / échancré / intégral','Classic / high-cut / full bikini')
    .replace('Demi-jambes / jambes entières','Half legs / full legs').replace('Forfaits corps','Body packages')
    .replace('Torse / ventre','Chest / abdomen').replace('Dos','Back').replace('Jambes entières','Full legs')
    .replace('Maillot classique à intégral + SIF','Classic to full bikini + intergluteal').replace('Sur consultation','On consultation').replaceAll(' à ',' to ');
};
applyLang=function(){
  document.documentElement.lang=language==='fr'?'fr':language==='pt'?'pt-BR':'en';
  certificateTrack?.setAttribute('aria-label',language==='fr'?'Carrousel des certificats':language==='pt'?'Carrossel de certificados':'Certificate carousel');
  $('[data-certificate-prev]')?.setAttribute('aria-label',language==='fr'?'Certificat précédent':language==='pt'?'Certificado anterior':'Previous certificate');
  $('[data-certificate-next]')?.setAttribute('aria-label',language==='fr'?'Certificat suivant':language==='pt'?'Próximo certificado':'Next certificate');
  $$('[data-i18n]').forEach(e=>{const value=i18n[language]?.[e.dataset.i18n]??i18n.fr[e.dataset.i18n];if(value!==undefined)e.textContent=value});
  $$('[data-i18n-html]').forEach(e=>{const value=i18n[language]?.[e.dataset.i18nHtml]??i18n.fr[e.dataset.i18nHtml];if(value!==undefined)e.innerHTML=value});
  $$('[data-fr][data-pt]').forEach(e=>{e.innerHTML=language==='en'?(e.dataset.en||translateEnglishHtml(e.dataset.fr)):e.dataset[language]});
  $$('[data-alt-fr][data-alt-pt]').forEach(e=>e.alt=language==='fr'?e.dataset.altFr:language==='pt'?e.dataset.altPt:(e.dataset.altEn||e.dataset.altFr));
  const languageControlLabel=language==='fr'?'Choisir la langue':language==='pt'?'Escolher idioma':'Choose language';
  $('.language-switch')?.setAttribute('aria-label',languageControlLabel);
  $$('.lang-option').forEach(option=>{
    const selected=option.dataset.language===language;
    option.classList.toggle('is-active',selected);
    option.setAttribute('aria-pressed',String(selected));
  });
};
$$('.lang-option').forEach(option=>option.addEventListener('click',()=>{language=option.dataset.language;applyLang()}));
applyLang();

const pigmentButtons=$$('[data-pigment]');
const selectPigment=button=>{
  pigmentButtons.forEach(item=>{
    const selected=item===button;
    item.classList.toggle('active',selected);
    item.setAttribute('aria-pressed',String(selected));
  });
  field.style.setProperty('--pigment-core',button.dataset.pigment);
  field.style.setProperty('--pigment-name',`"${button.textContent}"`);
};
pigmentButtons.forEach(button=>{
  button.setAttribute('aria-pressed','false');
  button.addEventListener('pointerenter',()=>selectPigment(button));
  button.addEventListener('focus',()=>selectPigment(button));
  button.addEventListener('click',()=>selectPigment(button));
});
if(pigmentButtons[0])selectPigment(pigmentButtons[0]);


// Accessible single-open treatment cards. Clicking the image reveals details; Découvrir jumps to treatment information.
$$('.service-card-image').forEach(button=>button.addEventListener('click',()=>{
  const card=button.closest('.service-card');
  const shouldOpen=!card.classList.contains('is-open');
  $$('.service-card').forEach(item=>{item.classList.remove('is-open');item.querySelector('.service-card-image')?.setAttribute('aria-expanded','false')});
  if(shouldOpen){card.classList.add('is-open');button.setAttribute('aria-expanded','true')}
}));

// Gently reveal each treatment card on phones so the horizontal sequence is discoverable.
const serviceCarouselTrack=$('.services .service-cards');
const serviceCarouselCards=$$('.service-card',serviceCarouselTrack);
const serviceCarouselMobile=window.matchMedia('(max-width:760px)');
const serviceCarouselReduced=window.matchMedia('(prefers-reduced-motion: reduce)');
if(serviceCarouselTrack&&serviceCarouselCards.length>1&&!serviceCarouselReduced.matches){
  let serviceCarouselDirection=1;
  let serviceCarouselIndex=0;
  let serviceCarouselTimer;
  let serviceCarouselResumeTimer;
  let serviceCarouselMoveTimer;
  let serviceCarouselPausedUntil=0;
  let serviceCarouselVisible=false;
  let serviceCarouselAutoMoving=false;
  const nearestServiceCard=()=>{
    const trackLeft=serviceCarouselTrack.getBoundingClientRect().left;
    const inset=parseFloat(getComputedStyle(serviceCarouselTrack).scrollPaddingLeft)||0;
    const snapLine=trackLeft+inset;
    return serviceCarouselCards.reduce((nearest,card,index)=>{
      const distance=Math.abs(card.getBoundingClientRect().left-snapLine);
      return distance<nearest.distance?{index,distance}:nearest;
    },{index:0,distance:Infinity}).index;
  };
  const moveToServiceCard=index=>{
    const trackBounds=serviceCarouselTrack.getBoundingClientRect();
    const cardBounds=serviceCarouselCards[index].getBoundingClientRect();
    const inset=parseFloat(getComputedStyle(serviceCarouselTrack).scrollPaddingLeft)||0;
    const target=serviceCarouselTrack.scrollLeft+cardBounds.left-trackBounds.left-inset;
    serviceCarouselAutoMoving=true;
    serviceCarouselTrack.scrollTo({left:Math.max(0,target),behavior:'smooth'});
    window.clearTimeout(serviceCarouselMoveTimer);
    serviceCarouselMoveTimer=window.setTimeout(()=>{
      serviceCarouselAutoMoving=false;
      serviceCarouselIndex=index;
    },850);
  };
  const pauseServiceCarousel=()=>{
    if(!serviceCarouselMobile.matches)return;
    serviceCarouselAutoMoving=false;
    window.clearTimeout(serviceCarouselMoveTimer);
    serviceCarouselPausedUntil=Date.now()+6500;
    window.clearTimeout(serviceCarouselResumeTimer);
    serviceCarouselResumeTimer=window.setTimeout(()=>{
      serviceCarouselPausedUntil=0;
      serviceCarouselIndex=nearestServiceCard();
    },6500);
  };
  serviceCarouselTrack.addEventListener('scroll',()=>{
    if(!serviceCarouselAutoMoving)serviceCarouselIndex=nearestServiceCard();
  },{passive:true});
  serviceCarouselTrack.addEventListener('pointerdown',pauseServiceCarousel,{passive:true});
  serviceCarouselTrack.addEventListener('touchstart',pauseServiceCarousel,{passive:true});
  serviceCarouselTrack.addEventListener('wheel',pauseServiceCarousel,{passive:true});
  serviceCarouselTrack.addEventListener('focusin',pauseServiceCarousel);
  const advanceServiceCarousel=()=>{
    if(!serviceCarouselVisible||!serviceCarouselMobile.matches||document.hidden||Date.now()<serviceCarouselPausedUntil){return;}
    if(serviceCarouselCards.some(card=>card.classList.contains('is-open')))return;
    if(serviceCarouselIndex>=serviceCarouselCards.length-1)serviceCarouselDirection=-1;
    else if(serviceCarouselIndex<=0)serviceCarouselDirection=1;
    serviceCarouselIndex+=serviceCarouselDirection;
    moveToServiceCard(serviceCarouselIndex);
  };
  if('IntersectionObserver' in window){
    const serviceCarouselObserver=new IntersectionObserver(entries=>{
      serviceCarouselVisible=entries.some(entry=>entry.isIntersecting);
      if(serviceCarouselVisible&&!serviceCarouselTimer){
        serviceCarouselTimer=window.setInterval(advanceServiceCarousel,3600);
      }else if(!serviceCarouselVisible&&serviceCarouselTimer){
        window.clearInterval(serviceCarouselTimer);
        serviceCarouselTimer=undefined;
      }
    },{threshold:.12});
    serviceCarouselObserver.observe(serviceCarouselTrack);
  }else{
    serviceCarouselVisible=true;
    serviceCarouselTimer=window.setInterval(advanceServiceCarousel,3600);
  }
}

// Pass a single lighter champagne spotlight across the brand cards, then loop.
const brandSequenceGrid=$('.positioning .brand-grid');
const brandSequenceCards=$$('.positioning .brand-grid article');
if(brandSequenceGrid&&brandSequenceCards.length&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  let brandSequenceIndex=-1;
  let brandSequenceTimer;
  const advanceBrandSequence=()=>{
    brandSequenceIndex=(brandSequenceIndex+1)%brandSequenceCards.length;
    brandSequenceCards.forEach((card,index)=>card.classList.toggle('is-active',index===brandSequenceIndex));
    if(window.matchMedia('(max-width: 760px)').matches){
      const activeCard=brandSequenceCards[brandSequenceIndex];
      const gridBounds=brandSequenceGrid.getBoundingClientRect();
      const cardBounds=activeCard.getBoundingClientRect();
      const inset=parseFloat(getComputedStyle(brandSequenceGrid).scrollPaddingLeft)||0;
      const target=brandSequenceGrid.scrollLeft+cardBounds.left-gridBounds.left-inset;
      brandSequenceGrid.scrollTo({left:Math.max(0,target),behavior:'smooth'});
    }
  };
  const startBrandSequence=()=>{
    if(brandSequenceTimer)return;
    advanceBrandSequence();
    brandSequenceTimer=window.setInterval(advanceBrandSequence,2400);
  };
  if('IntersectionObserver' in window){
    const brandSequenceObserver=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting)){
        startBrandSequence();
        brandSequenceObserver.disconnect();
      }
    },{threshold:.22});
    brandSequenceObserver.observe(brandSequenceGrid);
  }else{
    const checkBrandSequenceVisibility=()=>{
      const bounds=brandSequenceGrid.getBoundingClientRect();
      if(bounds.top<window.innerHeight*.8&&bounds.bottom>window.innerHeight*.2){
        startBrandSequence();
        window.removeEventListener('scroll',checkBrandSequenceVisibility);
        window.removeEventListener('hashchange',checkBrandSequenceVisibility);
        window.clearInterval(brandSequencePoll);
      }
    };
    const brandSequencePoll=window.setInterval(checkBrandSequenceVisibility,120);
    window.addEventListener('scroll',checkBrandSequenceVisibility,{passive:true});
    window.addEventListener('hashchange',checkBrandSequenceVisibility);
    checkBrandSequenceVisibility();
  }
}

// Accessible pointer and keyboard controls for the brow before/after comparison.
const compareSliders=$$('[data-compare-slider]');
const setComparePosition=(slider,value)=>{
  const range=$('[data-compare-range]',slider);
  if(!range)return;
  const position=Math.round(Math.max(0,Math.min(100,Number(value)||0)));
  range.value=String(position);
  slider.style.setProperty('--compare-position',`${position}%`);
};
const updateCompareLanguage=()=>{
  const suffix=language==='pt'?'Pt':language==='en'?'En':'Fr';
  compareSliders.forEach(slider=>{
    slider.setAttribute('aria-label',slider.dataset[`group${suffix}`]||slider.dataset.groupFr||'Before and after comparison');
    const range=$('[data-compare-range]',slider);
    if(range)range.setAttribute('aria-label',range.dataset[`aria${suffix}`]||range.dataset.ariaFr||'Slide to compare before and after');
  });
};
compareSliders.forEach(slider=>{
  const range=$('[data-compare-range]',slider);
  if(!range)return;
  const sync=()=>setComparePosition(slider,range.value);
  range.addEventListener('input',sync);
  range.addEventListener('change',sync);
  let dragging=false;
  const updateFromPointer=event=>{
    const bounds=slider.getBoundingClientRect();
    if(bounds.width) setComparePosition(slider,((event.clientX-bounds.left)/bounds.width)*100);
  };
  slider.addEventListener('pointerdown',event=>{
    if(event.pointerType==='mouse'&&event.button!==0)return;
    dragging=true;
    updateFromPointer(event);
    range.focus({preventScroll:true});
    try{slider.setPointerCapture(event.pointerId)}catch{}
    event.preventDefault();
  });
  slider.addEventListener('pointermove',event=>{if(dragging)updateFromPointer(event)});
  const endDrag=event=>{
    if(!dragging)return;
    dragging=false;
    try{if(slider.hasPointerCapture(event.pointerId))slider.releasePointerCapture(event.pointerId)}catch{}
  };
  slider.addEventListener('pointerup',endDrag);
  slider.addEventListener('pointercancel',endDrag);
  slider.addEventListener('lostpointercapture',()=>{dragging=false});
  sync();
});
$$('.lang-option').forEach(option=>option.addEventListener('click',updateCompareLanguage));
updateCompareLanguage();
