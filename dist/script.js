const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
let language='fr';
const i18n={
fr:{navExpertise:'Expertise',navPrices:'Tarifs',navQuestions:'Questions',book:'Réserver',heroKicker:'International PMU · Le Cannet',heroTitle:'La couleur<br><em>juste.</em>',heroCopy:'Maquillage permanent pensé pour toutes les carnations, avec une expertise particulière des peaux mélaninées.',discover:'Découvrir',signaturesLabel:'01 / SIGNATURES',signaturesTitle:'Votre peau n’est pas une nuance secondaire.',signaturesLead:'Chaque pigment se choisit avec votre carnation et le résultat souhaité. Le diagnostic précède toujours le geste.',lipsTitle:'Neutralisation<br>des lèvres',lipsCopy:'Un protocole personnalisé pour les lèvres foncées ou irrégulièrement pigmentées.',askQuestion:'Poser une question +',browsTitle:'Sourcils<br>sur mesure',browsCopy:'Une forme construite pour votre visage et une teinte adaptée à votre peau.',askQuote:'Demander un devis +',resultsLabel:'02 / RÉSULTATS RÉELS',resultsTitle:'La technique se voit dans le résultat.',resultsCopy:'Des transformations documentées, pensées pour respecter la carnation, la morphologie et l’identité de chaque cliente.',resultLips:'Neutralisation labiale',resultBrows:'Sourcils sur mesure',positionLabel:'02 / POSITIONNEMENT & MARQUE',positionLine1:'Une expertise qui voyage.',positionLine2:'Une signature qui reste.',brandInternational:'Formation internationale',brandInternationalCopy:'Micropigmentatrice formée à l’international. Brésil, Londres et Portugal — parcours à confirmer avec Pamela.',brandSpecialist:'Spécialiste des peaux mélaninées',brandSpecialistCopy:'Expertise des peaux africaines, brunes et métissées, avec une spécialité en éclaircissement et neutralisation des lèvres foncées.',brandScience:'Beauté guidée par la science',brandScienceCopy:'Une approche à la croisée de la santé, de la cosmétologie et de l’esthétique.',brandProducts:'By Pamela Martins',brandProductsCopy:'Une ligne propre de sérums et de soins, dont le Sérum Botox Luxe, prolonge son univers au-delà de la cabine.',brandConfirm:'* Les villes et pays de formation seront validés avec Pamela avant la version définitive.',pigmentLead:'Le bon pigment ne se devine pas.',pigmentTitle:'Il s’observe.',pigmentHint:'Déplacez votre curseur pour explorer la matière.',journeyLabel:'03 / VOTRE PARCOURS',journeyTitle:'Du premier message au suivi',j1Title:'Vous expliquez votre besoin',j1Copy:'Quelques réponses sur WhatsApp ou Instagram.',j2Title:'Pamela étudie la demande',j2Copy:'Zone, historique, photo et résultat souhaité.',j3Title:'Vous recevez son conseil',j3Copy:'Recommandation, devis et préparation.',j4Title:'Le suivi continue',j4Copy:'Rappels et retouche au bon moment.',pricesLabel:'04 / TARIFS',pricesTitle:'Des prix clairs avant de réserver',priceNote:'Maquillage permanent lèvres et sourcils sur devis personnalisé.',priceEyes:'Cils & sourcils',priceFace:'Visage & beauté',priceSugaring:'Épilation au sucre',priceWax:'Cire chaude',priceMen:'Épilation homme',priceDisclaimer:'Tarifs issus du flyer actuel. La version finale sera publiée après confirmation de Pamela.',diversityLabel:'05 / BEAUTÉ PLURIELLE',diversityTitle:'Chaque peau mérite une lecture précise.',diversityCopy:'Pamela accueille toutes les carnations et possède une expertise particulière des peaux africaines, métissées et mélaninées.',faqLabel:'06 / QUESTIONS',faqTitle:'Avant de vous décider',faq1Q:'La neutralisation labiale me convient-elle ?',faq1A:'Envoyez une photo en lumière naturelle pour recevoir une première orientation personnalisée.',faq2Q:'Comment obtenir un devis ?',faq2A:'Répondez à quelques questions. Pamela vérifie ensuite votre demande et finalise le devis.',faq3Q:'Où réserver ?',faq3A:'Réservez directement sur Planity ou contactez Pamela par WhatsApp.',ctaLead:'Votre projet commence par une conversation.',ctaTitle:'Parlons de votre peau.',whatsapp:'WhatsApp · +33 6 81 02 98 37',planity:'Réserver sur Planity',assistant:'Assistant',assistantDemo:'Assistant de démonstration',demoLabel:'DÉMO · aucun message n’est envoyé'},
pt:{navExpertise:'Especialidades',navPrices:'Preços',navQuestions:'Dúvidas',book:'Agendar',heroKicker:'PMU Internacional · Le Cannet',heroTitle:'A cor<br><em>certa.</em>',heroCopy:'Maquiagem permanente pensada para todos os tons de pele, com experiência especial em peles com melanina.',discover:'Descobrir',signaturesLabel:'01 / ESPECIALIDADES',signaturesTitle:'A sua pele não é um tom secundário.',signaturesLead:'Cada pigmento é escolhido de acordo com a sua pele e o resultado desejado. O diagnóstico vem sempre antes do procedimento.',lipsTitle:'Neutralização<br>labial',lipsCopy:'Um protocolo personalizado para lábios escuros ou com pigmentação irregular.',askQuestion:'Fazer uma pergunta +',browsTitle:'Sobrancelhas<br>sob medida',browsCopy:'Um formato criado para o seu rosto e uma cor adaptada à sua pele.',askQuote:'Pedir orçamento +',resultsLabel:'02 / RESULTADOS REAIS',resultsTitle:'A técnica aparece no resultado.',resultsCopy:'Transformações documentadas, pensadas para respeitar o tom de pele, a morfologia e a identidade de cada cliente.',resultLips:'Neutralização labial',resultBrows:'Sobrancelhas sob medida',positionLabel:'02 / POSICIONAMENTO & MARCA',positionLine1:'Uma experiência que atravessa fronteiras.',positionLine2:'Uma assinatura que permanece.',brandInternational:'Formação internacional',brandInternationalCopy:'Micropigmentadora com formação internacional. Brasil, Londres e Portugal — percurso a confirmar com Pamela.',brandSpecialist:'Especialista em peles com melanina',brandSpecialistCopy:'Experiência em peles africanas, pardas e mestiças, com especialidade em clareamento e neutralização de lábios escuros.',brandScience:'Beleza guiada pela ciência',brandScienceCopy:'Uma abordagem que reúne saúde, cosmetologia e estética.',brandProducts:'By Pamela Martins',brandProductsCopy:'Uma linha própria de séruns e cuidados, incluindo o Sérum Botox Luxe, prolonga o seu universo para além do atendimento.',brandConfirm:'* As cidades e os países da formação serão validados com Pamela antes da versão definitiva.',pigmentLead:'O pigmento certo não se adivinha.',pigmentTitle:'Ele se observa.',pigmentHint:'Mova o cursor para explorar a matéria.',journeyLabel:'03 / O SEU PERCURSO',journeyTitle:'Da primeira mensagem ao acompanhamento',j1Title:'Você explica o que procura',j1Copy:'Poucas respostas pelo WhatsApp ou Instagram.',j2Title:'Pamela analisa o pedido',j2Copy:'Área, histórico, foto e resultado desejado.',j3Title:'Você recebe a orientação',j3Copy:'Recomendação, orçamento e preparação.',j4Title:'O acompanhamento continua',j4Copy:'Lembretes e retoque no momento certo.',pricesLabel:'04 / PREÇOS',pricesTitle:'Preços claros antes de agendar',priceNote:'Maquiagem permanente de lábios e sobrancelhas sob orçamento personalizado.',priceEyes:'Cílios e sobrancelhas',priceFace:'Rosto e beleza',priceSugaring:'Depilação com açúcar',priceWax:'Cera quente',priceMen:'Depilação masculina',priceDisclaimer:'Valores baseados no flyer atual. A versão final será publicada após confirmação da Pamela.',diversityLabel:'05 / BELEZA PLURAL',diversityTitle:'Cada pele merece uma análise precisa.',diversityCopy:'Pamela atende todos os tons de pele e possui experiência especial em peles africanas, pardas, mestiças e com melanina.',faqLabel:'06 / DÚVIDAS',faqTitle:'Antes de decidir',faq1Q:'A neutralização labial é indicada para mim?',faq1A:'Envie uma foto com luz natural para receber uma primeira orientação personalizada.',faq2Q:'Como receber um orçamento?',faq2A:'Responda a algumas perguntas. Pamela verifica o seu pedido e finaliza o orçamento.',faq3Q:'Onde agendar?',faq3A:'Agende diretamente pelo Planity ou fale com a Pamela pelo WhatsApp.',ctaLead:'O seu projeto começa com uma conversa.',ctaTitle:'Vamos falar da sua pele.',whatsapp:'WhatsApp · +33 6 81 02 98 37',planity:'Agendar no Planity',assistant:'Assistente',assistantDemo:'Assistente demonstrativo',demoLabel:'DEMO · nenhuma mensagem é enviada'}
};
Object.assign(i18n.fr,{navExpertise:'Soins',signaturesLabel:'01 / LES SOINS',signaturesTitle:'Des soins pensés pour<br><em>révéler votre beauté.</em>',signaturesLead:'De la ligne du sourcil à l’éclat de la peau, chaque protocole est personnalisé pour respecter votre identité et votre carnation.',serviceBrows:'Sourcils',serviceBrowsCopy:'Design · Microblading · Brow Lift',serviceLips:'Lèvres',serviceLipsCopy:'Neutralisation · Éclaircissement · Lip Blush',serviceLashes:'Cils',serviceLashesCopy:'Lash Lift · Teinture · Soin du regard',serviceSkin:'Peau',serviceSkinCopy:'Nettoyage · Microneedling · Baby Glow · Hidragloss',serviceDiscover:'Découvrir ↗',brandInternationalCopy:'Plus de 35 certificats et diplômes obtenus autour du monde, au service d’une pratique précise et constamment actualisée.',brandConfirm:'Une sélection du parcours de Pamela est présentée ci-dessous.',positionLabel:'03 / POSITIONNEMENT & MARQUE',credentialsLabel:'04 / PARCOURS & CERTIFICATIONS',credentialsTitle:'Une expertise construite<br><em>formation après formation.</em>',credentialsCopy:'Des techniques internationales, une pratique exigeante et une spécialisation dédiée à la beauté de chaque carnation.',credentialsCount:'certificats et diplômes obtenus autour du monde',credentialsPortrait:'Précision, écoute et naturel.',credentialsPhi:'Formation certifiée en éclaircissement et neutralisation labiale.',credentialsProducts:'La technique prolongée par sa propre ligne de soins.',certificateEyebrow:'SÉLECTION DE CERTIFICATS',certificateTitle:'Un parcours visible, des compétences vérifiables.',pricesLabel:'05 / TARIFS',diversityLabel:'06 / BEAUTÉ PLURIELLE',faqLabel:'07 / QUESTIONS'});
Object.assign(i18n.pt,{navExpertise:'Serviços',signaturesLabel:'01 / SERVIÇOS',signaturesTitle:'Cuidados pensados para<br><em>revelar a sua beleza.</em>',signaturesLead:'Do desenho das sobrancelhas ao brilho da pele, cada protocolo é personalizado para respeitar a sua identidade e o seu tom de pele.',serviceBrows:'Sobrancelhas',serviceBrowsCopy:'Design · Microblading · Brow Lift',serviceLips:'Lábios',serviceLipsCopy:'Neutralização · Clareamento · Lip Blush',serviceLashes:'Cílios',serviceLashesCopy:'Lash Lift · Tintura · Cuidados do olhar',serviceSkin:'Pele',serviceSkinCopy:'Limpeza · Microagulhamento · Baby Glow · Hidragloss',serviceDiscover:'Descobrir ↗',brandInternationalCopy:'Mais de 35 certificados e diplomas obtidos ao redor do mundo, a serviço de uma prática precisa e sempre atualizada.',brandConfirm:'Uma seleção da trajetória da Pamela é apresentada abaixo.',positionLabel:'03 / POSICIONAMENTO & MARCA',credentialsLabel:'04 / TRAJETÓRIA & CERTIFICAÇÕES',credentialsTitle:'Uma expertise construída<br><em>formação após formação.</em>',credentialsCopy:'Técnicas internacionais, uma prática exigente e uma especialização dedicada à beleza de cada tom de pele.',credentialsCount:'certificados e diplomas obtidos ao redor do mundo',credentialsPortrait:'Precisão, escuta e naturalidade.',credentialsPhi:'Formação certificada em clareamento e neutralização labial.',credentialsProducts:'A técnica prolongada pela sua própria linha de cuidados.',certificateEyebrow:'SELEÇÃO DE CERTIFICADOS',certificateTitle:'Uma trajetória visível, competências verificáveis.',pricesLabel:'05 / PREÇOS',diversityLabel:'06 / BELEZA PLURAL',faqLabel:'07 / DÚVIDAS'});
function applyLang(){document.documentElement.lang=language==='fr'?'fr':'pt-BR';$$('[data-i18n]').forEach(e=>e.textContent=i18n[language][e.dataset.i18n]);$$('[data-i18n-html]').forEach(e=>e.innerHTML=i18n[language][e.dataset.i18nHtml]);$$('[data-fr][data-pt]').forEach(e=>e.innerHTML=e.dataset[language]);$$('[data-alt-fr][data-alt-pt]').forEach(e=>e.alt=e.dataset[`alt${language==='fr'?'Fr':'Pt'}`]);$('.lang').textContent=language==='fr'?'🇫🇷 FR':'🇧🇷 PT';}
$('.lang').onclick=()=>{language=language==='fr'?'pt':'fr';applyLang()};applyLang();
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
function moveInstagram(direction){
  if(!instagramTrack)return;
  const cards=$$('.instagram-card',instagramTrack);
  if(!cards.length)return;
  const gap=parseFloat(getComputedStyle(instagramTrack).gap)||0;
  const step=cards[0].getBoundingClientRect().width+gap;
  const current=Math.round(instagramTrack.scrollLeft/step);
  const target=Math.max(0,Math.min(cards.length-1,current+direction));
  instagramTrack.scrollTo({left:target*step,behavior:motionReduced?'auto':'smooth'});
}
$('[data-instagram-prev]')?.addEventListener('click',()=>moveInstagram(-1));
$('[data-instagram-next]')?.addEventListener('click',()=>moveInstagram(1));

const certificateTrack=$('[data-certificate-track]');
function moveCertificates(direction){
  if(!certificateTrack)return;
  const cards=$$('.certificate-card',certificateTrack);
  if(!cards.length)return;
  const gap=parseFloat(getComputedStyle(certificateTrack).gap)||0;
  const step=cards[0].getBoundingClientRect().width+gap;
  certificateTrack.scrollBy({left:direction*step,behavior:motionReduced?'auto':'smooth'});
}
$('[data-certificate-prev]')?.addEventListener('click',()=>moveCertificates(-1));
$('[data-certificate-next]')?.addEventListener('click',()=>moveCertificates(1));

// Motion Edition: progressive enhancement keeps the content fully usable without animation.
const motionReduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const motionMobile=window.matchMedia('(max-width: 760px)').matches;
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
Object.assign(i18n.fr,{brandInternationalCopy:'Artiste formée à l’international et aux protocoles PhiAcademy, avec plus de 35 certificats et diplômes obtenus autour du monde.',brandProducts:'PhiAcademy & Utsukusy',brandProductsCopy:'Pamela représente l’exigence PhiAcademy et travaille avec les produits professionnels Utsukusy, sélectionnés pour la qualité et la sécurité des protocoles.',credentialsPhi:'Formation PhiAcademy certifiée en éclaircissement et neutralisation labiale.',credentialsProducts:'Des soins réalisés avec des produits Utsukusy sélectionnés pour leur performance professionnelle.',pricesLabel:'09 / TARIFS',faqLabel:'08 / QUESTIONS'});
Object.assign(i18n.pt,{brandInternationalCopy:'Artista com formação internacional e nos protocolos PhiAcademy, com mais de 35 certificados e diplomas obtidos ao redor do mundo.',brandProducts:'PhiAcademy & Utsukusy',brandProductsCopy:'Pamela representa a exigência PhiAcademy e trabalha com produtos profissionais Utsukusy, selecionados pela qualidade e segurança dos protocolos.',credentialsPhi:'Formação PhiAcademy certificada em clareamento e neutralização labial.',credentialsProducts:'Tratamentos realizados com produtos Utsukusy selecionados pelo desempenho profissional.',pricesLabel:'09 / PREÇOS',faqLabel:'08 / DÚVIDAS'});
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
