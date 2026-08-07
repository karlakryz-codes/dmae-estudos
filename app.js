const PDF = 'apostila/Apostila-ICL-Lingua-Portuguesa.pdf';
const chapters = [
  {n:1,title:'Compreensão e interpretação de textos',start:250,end:258},
  {n:2,title:'Tipos e gêneros textuais',start:227,end:239},
  {n:3,title:'Sentido literal e figurado',start:213,end:220},
  {n:4,title:'Coesão e coerência',start:240,end:249},
  {n:5,title:'Concordância verbal e nominal',start:156,end:178},
  {n:6,title:'Crase',start:179,end:192},
  {n:7,title:'Formação de palavras',start:37,end:43},
  {n:8,title:'Colocação pronominal',start:106,end:120},
  {n:9,title:'Sinonímia, antonímia e polissemia',start:208,end:212},
  {n:10,title:'Fono-ortografia',start:5,end:36},
  {n:11,title:'Pontuação',start:193,end:207},
  {n:12,title:'Morfossintaxe e classes de palavras',start:44,end:105},
  {n:13,title:'Tempos e modos verbais',start:70,end:81},
  {n:14,title:'Sintaxe, coordenação e subordinação',start:121,end:155},
  {n:15,title:'Variação linguística',start:259,end:269}
];
const $ = s => document.querySelector(s);
const state = {
  current: Number(localStorage.getItem('dmae.current') || 0),
  done: JSON.parse(localStorage.getItem('dmae.done') || '[]'),
  theme: localStorage.getItem('dmae.theme') || 'light',
  scale: Number(localStorage.getItem('dmae.scale') || 1)
};
function save(){localStorage.setItem('dmae.current',state.current);localStorage.setItem('dmae.done',JSON.stringify(state.done));localStorage.setItem('dmae.theme',state.theme);localStorage.setItem('dmae.scale',state.scale)}
function pageUrl(ch){return `${PDF}#page=${ch.start}&zoom=page-width`}
function renderList(filter=''){
  const q=filter.trim().toLowerCase();
  $('#chapterList').innerHTML=chapters.map((ch,i)=>({ch,i})).filter(x=>x.ch.title.toLowerCase().includes(q)).map(({ch,i})=>`
  <button class="chapter-item ${i===state.current?'active':''} ${state.done.includes(i)?'done':''}" data-i="${i}">
    <span class="chapter-index">${String(ch.n).padStart(2,'0')}</span><span class="chapter-name">${ch.title}</span><span class="check">${state.done.includes(i)?'✓':''}</span>
  </button>`).join('') || '<p style="padding:10px;color:var(--muted)">Nenhum capítulo encontrado.</p>';
  document.querySelectorAll('.chapter-item').forEach(b=>b.onclick=()=>openChapter(Number(b.dataset.i)));
}
function updateProgress(){const count=state.done.length,p=Math.round(count/chapters.length*100);$('#progressText').textContent=`${p}%`;$('#progressFill').style.width=`${p}%`;$('#progressDetail').textContent=`${count} de ${chapters.length} capítulos concluídos`}
function openChapter(i){state.current=Math.max(0,Math.min(i,chapters.length-1));const ch=chapters[state.current];$('#chapterNumber').textContent=`Capítulo ${String(ch.n).padStart(2,'0')}`;$('#chapterTitle').textContent=ch.title;$('#readerTitle').textContent=ch.title;$('#readerPages').textContent=`Páginas ${ch.start}–${ch.end}`;$('#pdfFrame').src=pageUrl(ch);$('#fallbackLink').href=pageUrl(ch);$('#completeBtn').textContent=state.done.includes(state.current)?'✓ Capítulo concluído':'Marcar como concluído';$('#completeBtn').classList.toggle('is-done',state.done.includes(state.current));$('#prevBtn').disabled=state.current===0;$('#nextBtn').disabled=state.current===chapters.length-1;renderList($('#searchInput').value);save();closeMenu();window.scrollTo({top:0,behavior:'smooth'})}
function toggleDone(){const i=state.current;state.done=state.done.includes(i)?state.done.filter(x=>x!==i):[...state.done,i].sort((a,b)=>a-b);save();updateProgress();openChapter(i)}
function applyTheme(){document.body.classList.toggle('dark',state.theme==='dark');$('#themeBtn').textContent=state.theme==='dark'?'☀':'☾';document.documentElement.style.setProperty('--ui-scale',state.scale)}
function closeMenu(){$('#sidebar').classList.remove('open');$('#scrim').classList.remove('show')}
$('#searchInput').addEventListener('input',e=>renderList(e.target.value));
$('#completeBtn').onclick=toggleDone;$('#prevBtn').onclick=()=>openChapter(state.current-1);$('#nextBtn').onclick=()=>openChapter(state.current+1);$('#continueBtn').onclick=()=>openChapter(state.current);$('#openPdfBtn').onclick=()=>window.open(PDF,'_blank');
$('#themeBtn').onclick=()=>{state.theme=state.theme==='dark'?'light':'dark';save();applyTheme()};
$('#fontUp').onclick=()=>{state.scale=Math.min(1.25,+(state.scale+.05).toFixed(2));save();applyTheme()};$('#fontDown').onclick=()=>{state.scale=Math.max(.85,+(state.scale-.05).toFixed(2));save();applyTheme()};
$('#menuBtn').onclick=()=>{$('#sidebar').classList.add('open');$('#scrim').classList.add('show')};$('#scrim').onclick=closeMenu;
applyTheme();updateProgress();renderList();openChapter(state.current);
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}))}
