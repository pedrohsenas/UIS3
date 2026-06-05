'use strict';

const LOGO_B64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjQzMSIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTAwIDQzMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxnIHRyYW5zZm9ybT0ibWF0cml4KDUuOTQ3NSAwIDAgNS45NDc1IDEuMzMxZS02IC4yMzI1NykiPgogIDxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNzIuMjMgLTE5OC43OSkiIGQ9Im0yNzcuODUgMjI2LjY5YTMwLjg3OSAzMC44NzkgMCAwIDAtNS42MjExIDAuNSAxNC4wODQgMTQuMDg0IDAgMCAxIDAuMzY3MTkgMy41MjU0djM5Ljc3OWgxNi4yMjFjNS41OTIgMCA2LjE5OTItNC41MjkyIDYuMTk5Mi0xMC4xMTdoLTEwLjgxMnYtMzAuMWMtMC4wMTgtMi43ODctMS45MDI1LTMuNTg3OS02LjM1MzUtMy41ODc5em03NC4wNTUgOC45NDUzYy02LjYzMSAwLTguNDEyMSA0Ljg1NTUtOC40MTIxIDQuODU1NWgtMC4yMDExN2wtMS00LjE3MzhoLTguMTMyOHYzNC4xODRoMTEuMDkydi0yMy4zMTFzMS40MzI2LTEuOTc2NiA1LjgwNjYtMS45NzY2YTIyLjEzNyAyMi4xMzcgMCAwIDEgNC4wMzkxIDAuNTM5MDZsMC40Mzc1LTEuMzAwOGMyLjEwNi02LjQyNC0wLjQ4MzkxLTguODE2NC0zLjYyODktOC44MTY0em0tMzYuMTQ2IDRlLTNjLTExLjY4NyAwLTE3Ljk3MyA3Ljg1My0xNy45ODYgMTkgM2UtMyA5Ljc3NSAzLjc1MzEgMTYuNTQzIDExLjk1MyAxNi41NDNhMTEuNzc0IDExLjc3NCAwIDAgMCA5LjAxOTUtNC40NDczbDAuMTM4NjcgOGUtM2E1LjIzNCA1LjIzNCAwIDAgMCA1LjI5MSA0LjEwMTZjNC45MjMgMCA2LjYxNTYtMy41NTk0IDYuMDE1Ni02LjM1OTQtMS41NzYgMC0yLjIxNTItMS4xNjI5LTIuMTk5Mi0zLjk2Mjl2LTIyLjc2MmEzNC41NzUgMzQuNTc1IDAgMCAwLTEyLjIzMi0yLjEyMTF6bS0wLjczNjMzIDguODgwOWExNC41NzUgMTQuNTc1IDAgMCAxIDIuMTc5NyAwLjIwNTA4djE2LjMzNGE0LjQxOSA0LjQxOSAwIDAgMS0zLjE1ODIgMS4zNjkxYy0yLjUzMyAwLTUuNDQ4LTEuMjk0Mi01LjQ1Ny04LjIwMTIgMC4wMTctNS43NDIgMi44ODE2LTkuNzA3IDYuNDM1Ni05LjcwN3oiIGZpbGw9IiM0NDQzNDQiLz4KICA8cGF0aCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjYyLjM2IC0xNTYuODIpIiBkPSJtMzEyLjMgMTYzLjY5Yy00LjI4IDAtNy45MjcgMi0xMS4yIDYuOTgtMC4yODMgMC40MjctMC43NTUgMC4zODItMC45MTcgMC4wMTMtMS4wNzctMi40NjItNC40MzEtNy4wMDYtOC4yOTMtNy4wMDYtMy43IDAtOC41MjggMy4wNDQtOC41MjggMTEuMTUxYTE0LjA1MSAxNC4wNTEgMCAwIDAgNC4zMjkgMTAuMDI2YzAuMzggMC4zMzQtMC4wNDYgMC44NTEtMC42MjggMC40NzVhMTYuMjY0IDE2LjI2NCAwIDAgMS03LjgyMy0xNC4yODRjMC04LjIyOSA1Ljc1OS0xNC4xMTQgMTEuODU2LTE0LjExNCA0LjM1MiAwIDcuOTk1IDMuMyA5Ljk1NSA3LjQ5MiAzLjUzOC00LjkzOCA4LjYzLTcuNiAxMy4yNjctNy42IDYuNjY0IDAgMTIuNjMgMy45MjMgMTIuNjMgMTIuNCAwIDExLjYyNy03LjEgMTguMjQtMjEuMzA1IDIwLjMxNy02LjI4NSAwLjkyMi0xNS42MTQgMi4zMzMtMjAuMDE1IDExLjM2My0wLjI1OCAwLjUzMS0xLjI0MS0wLjExOC0xLjAxMi0wLjc2NyAzLjE0Ny04LjgxMiAxMS4zLTEzLjU0MSAyMC4wMDgtMTUuMzMxIDkuNTA3LTEuOTU3IDE0LjUxNS03LjgzNCAxNC41MTUtMTMuMzM5IDAtNC4yMDYtMi4xMzctNy43NjktNi44MzMtNy43NjkiIGZpbGw9IiNlNTFhNDEiIGRhdGEtbmFtZT0iQ2FtaW5obyAxNTciLz4KIDwvZz4KPC9zdmc+Cg==';

// ─── Texto de ajuda ───────────────────────────────────────────────────────────
const AJUDA_HTML = `
<h2>Como usar o Coleta de Campo</h2>

<h3>Antes de começar</h3>
<p>Identifique-se tocando em <strong>"+ Identificar técnico"</strong> no topo da tela. Seu nome aparecerá em todos os ZIPs exportados, facilitando a organização pela equipe.</p>

<h3>Ritmo de trabalho recomendado</h3>
<p>Levante e salve <strong>no máximo 5 equipamentos por sessão</strong> antes de exportar e enviar o ZIP. Esse ritmo é importante por três motivos:</p>

<div class="ajuda-item">
  <div class="ajuda-num">1</div>
  <div><strong>Os dados ficam em memória temporária do celular.</strong> O aplicativo armazena tudo localmente no aparelho — sem conexão com servidor. Dependendo do modelo do celular, o sistema operacional pode limpar esse armazenamento automaticamente se precisar de espaço, se o celular ficar sem bateria, ou se o navegador for fechado de forma forçada. Enviar o ZIP regularmente é sua garantia contra perda de dados.</div>
</div>

<div class="ajuda-item">
  <div class="ajuda-num">2</div>
  <div><strong>Há limite de espaço disponível.</strong> O armazenamento local suporta aproximadamente <strong>50 a 150 MB</strong> dependendo do aparelho. Como cada foto ocupa em média 300 a 500 KB após compressão, sessões com muitas fotos atingem o limite mais rapidamente. Ultrapassar esse limite pode causar falha silenciosa ao salvar novas fotos — elas parecem salvas mas não aparecem no ZIP.</div>
</div>

<div class="ajuda-item">
  <div class="ajuda-num">3</div>
  <div><strong>O aplicativo funciona sem internet.</strong> A página continua funcionando normalmente mesmo offline, inclusive se for atualizada sem conexão. O ZIP pode ser encaminhado para a equipe via WhatsApp mesmo sem internet — ao reconectar, o próprio WhatsApp sincroniza o envio automaticamente. No momento em que o arquivo é exportado para o WhatsApp, o backup já está feito. Há ainda a possibilidade de salvar o ZIP diretamente na memória do celular para encaminhamento posterior.</div>
</div>

<h3>Passo a passo</h3>
<ol>
  <li>Toque em <strong>"Novo Registro"</strong> e preencha os dados do equipamento</li>
  <li>Adicione as fotos diretamente pela câmera</li>
  <li>Toque em <strong>"Salvar e continuar"</strong> — o formulário abre automaticamente para o próximo</li>
  <li>Após 5 registros (ou ao fim de cada área), toque em <strong>"Exportar ZIP"</strong></li>
  <li>O sistema abrirá o menu de compartilhamento — selecione <strong>WhatsApp</strong> e envie para o grupo da equipe</li>
  <li>Repita o ciclo para os próximos equipamentos</li>
</ol>

<h3>Atenção às fotos</h3>
<ul>
  <li>Prefira no máximo <strong>5 fotos por equipamento</strong>: placa de identificação, vista geral, detalhe do ponto crítico e demais registros relevantes</li>
  <li>As imagens são comprimidas automaticamente, mas fotos em excesso aceleram o consumo do espaço disponível</li>
  <li>Após o envio do ZIP confirmado no WhatsApp, os dados continuam no celular — você pode exportar novamente se necessário. Caso já haja o limite de 5 lançamentos exportados, exclua-os individualmente pela lista para reiniciar o ciclo de coleta e manter a organização dos registros.</li>
</ul>

<h3>Nome do arquivo ZIP</h3>
<p>O arquivo gerado segue o padrão:</p>
<div class="ajuda-code">TTTTT_EEEEE_LLLLL_AAAAMMDD.zip</div>
<ul>
  <li><strong>TTTTT</strong> — 5 primeiros caracteres do nome do técnico (ex: PEDRO)</li>
  <li><strong>EEEEE</strong> — 5 primeiros caracteres da TAG do primeiro equipamento (ex: MTR-E)</li>
  <li><strong>LLLLL</strong> — 5 primeiros caracteres da TAG do último equipamento (ex: BMB-0)</li>
  <li><strong>AAAAMMDD</strong> — data da exportação (ex: 20260604)</li>
</ul>
<p>Exemplo: <span class="ajuda-code-inline">PEDRO_MTR-E_BMB-0_20260604.zip</span></p>
<p>Isso facilita localizar o arquivo na pasta de destino e evita duplicidade entre lotes enviados por diferentes técnicos no mesmo dia.</p>

<h3>Em caso de dúvida</h3>
<p>Se um registro não aparecer na lista após salvar, ou se o ZIP sair sem fotos, <strong>feche e reabra o aplicativo</strong> pelo atalho na tela inicial e tente exportar novamente. Se o problema persistir, comunique ao responsável pela coleta.</p>
`;

// ─── IndexedDB ────────────────────────────────────────────────────────────────
const IDB_NAME  = 'coleta_db';
const IDB_VER   = 1;
const IDB_STORE = 'fotos';

function abrirDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(IDB_NAME, IDB_VER);
    req.onupgradeneeded = e => e.target.result.createObjectStore(IDB_STORE);
    req.onsuccess = e => resolve(e.target.result);
    req.onerror   = e => reject(e.target.error);
  });
}
async function salvarFotosIDB(id, arr) {
  const db = await abrirDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).put(arr, id);
    tx.oncomplete = () => res();
    tx.onerror    = e => rej(e.target.error);
  });
}
async function lerFotosIDB(id) {
  const db = await abrirDB();
  return new Promise((res, rej) => {
    const tx  = db.transaction(IDB_STORE, 'readonly');
    const req = tx.objectStore(IDB_STORE).get(id);
    req.onsuccess = e => res(e.target.result || []);
    req.onerror   = e => rej(e.target.error);
  });
}
async function deletarFotosIDB(id) {
  const db = await abrirDB();
  return new Promise((res, rej) => {
    const tx = db.transaction(IDB_STORE, 'readwrite');
    tx.objectStore(IDB_STORE).delete(id);
    tx.oncomplete = () => res();
    tx.onerror    = e => rej(e.target.error);
  });
}
async function lerTodasFotosIDB() {
  const db = await abrirDB();
  return new Promise((res, rej) => {
    const tx    = db.transaction(IDB_STORE, 'readonly');
    const store = tx.objectStore(IDB_STORE);
    const result = {};
    const reqKeys = store.getAllKeys();
    reqKeys.onsuccess = e => {
      const keys = e.target.result;
      if (!keys.length) { res(result); return; }
      let done = 0;
      keys.forEach(k => {
        const r = store.get(k);
        r.onsuccess = ev => { result[k] = ev.target.result || []; if (++done === keys.length) res(result); };
        r.onerror   = ev => rej(ev.target.error);
      });
    };
    reqKeys.onerror = e => rej(e.target.error);
  });
}

// ─── localStorage ─────────────────────────────────────────────────────────────
const DB_KEY   = 'coleta_v3_registros';
const META_KEY = 'coleta_v3_meta';
function loadRegistros() { try { return JSON.parse(localStorage.getItem(DB_KEY) || '[]'); } catch { return []; } }
function saveRegistros(list) {
  const limpos = list.map(r => { const c = {...r}; delete c.fotos; return c; });
  localStorage.setItem(DB_KEY, JSON.stringify(limpos));
}
function loadMeta() { try { return JSON.parse(localStorage.getItem(META_KEY) || '{}'); } catch { return {}; } }
function saveMeta(m) { localStorage.setItem(META_KEY, JSON.stringify(m)); }

// ─── Estado ───────────────────────────────────────────────────────────────────
let registros = loadRegistros();
let fotos     = [];
let editingId = null;

// ─── Constantes ───────────────────────────────────────────────────────────────
const AREAS = [
  'ARMAZÉM 01','ARMAZÉM 02','ARMAZÉM DE CAVACO',
  'CALDEIRA ICAVI','CALDEIRA MEPPAN',
  'CASA DE MÁQUINAS 01','CASA DE MÁQUINAS 02',
  'ETE','EXPEDIÇÃO DE FARELO',
  'EXTRAÇÃO','PELETIZAÇÃO','PREPARAÇÃO'
];
const TIPOS = {
  motor_eletrico:'Motor elétrico', bomba:'Bomba', redutor:'Redutor',
  ventilador:'Ventilador', compressor:'Compressor',
  transportador:'Transportador', outro:'Outro'
};
const STATUS = { ok:'OK', atencao:'Atenção', critico:'Crítico' };
const SERVICOS_LISTA = [
  'Troca de rolamento','Alinhamento','Balanceamento',
  'Megagem (isolamento)','Limpeza interna','Reaperto de conexões elétricas',
  'Troca de vedação / retentor','Lubrificação','Revisão de acoplamento',
  'Pintura / tratamento externo','Inspeção termográfica','Outros'
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2,7); }
function esc(v) {
  if (v == null) return '';
  return String(v).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function formatDate(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString('pt-BR',{day:'2-digit',month:'2-digit',year:'2-digit'})
       + ' ' + d.toLocaleTimeString('pt-BR',{hour:'2-digit',minute:'2-digit'});
}
function calcCorrente(potencia, unidade, tensao, ligacao) {
  const P_kW = unidade==='cv' ? potencia*0.7355 : unidade==='HP' ? potencia*0.7457 : potencia;
  const V = parseFloat(tensao);
  if (!P_kW || !V || isNaN(V) || V===0) return null;
  const fp=0.85, eff=0.92;
  const I = ligacao==='monofasico'
    ? (P_kW*1000)/(V*fp*eff)
    : (P_kW*1000)/(Math.sqrt(3)*V*fp*eff);
  return I.toFixed(2);
}
function atualizarCorrenteEstimada() {
  const pot     = parseFloat(document.getElementById('f-potencia')?.value)||0;
  const unidade = document.getElementById('f-unidade')?.value||'kW';
  const tensao  = document.getElementById('f-tensao')?.value||'';
  const ligacao = document.getElementById('f-ligacao')?.value||'trifasico';
  const el      = document.getElementById('corrente-estimada');
  if (!el) return;
  const est = calcCorrente(pot, unidade, tensao, ligacao);
  el.textContent = est ? 'Estimada: '+est+' A' : '';
}

// Nome do ZIP: TTTTT_EEEEE_LLLLL_AAAAMMDD.zip
function nomeZip(tecnico, regs) {
  const tec  = (tecnico||'TECNI').toUpperCase().replace(/\s+/g,'').slice(0,5).padEnd(5,'_');
  const tags  = regs.map(r => (r.tag||'').replace(/[^A-Z0-9\-]/g,''));
  const primeiro = (tags[tags.length-1]||'XXXXX').slice(0,5).padEnd(5,'-');
  const ultimo   = (tags[0]||'XXXXX').slice(0,5).padEnd(5,'-');
  const data = new Date().toISOString().slice(0,10).replace(/-/g,'');
  return `${tec}_${primeiro}_${ultimo}_${data}.zip`;
}

// ─── Toast ────────────────────────────────────────────────────────────────────
function toast(msg, dur=2600) {
  let t = document.getElementById('toast');
  if (!t) { t=document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(()=>t.classList.remove('show'), dur);
}

// ─── Modal Ajuda ──────────────────────────────────────────────────────────────
function abrirAjuda() {
  const overlay = document.createElement('div');
  overlay.id = 'ajuda-overlay';
  overlay.innerHTML = `
    <div class="ajuda-modal" role="dialog" aria-label="Ajuda">
      <div class="ajuda-header">
        <img src="${LOGO_B64}" class="logo-sm" alt="Lar" />
        <span class="ajuda-titulo">Ajuda</span>
        <button class="ajuda-fechar" onclick="fecharAjuda()" aria-label="Fechar">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      </div>
      <div class="ajuda-body">${AJUDA_HTML}</div>
    </div>
  `;
  overlay.addEventListener('click', e => { if (e.target===overlay) fecharAjuda(); });
  document.body.appendChild(overlay);
  requestAnimationFrame(()=>overlay.classList.add('show'));
}
function fecharAjuda() {
  const el = document.getElementById('ajuda-overlay');
  if (!el) return;
  el.classList.remove('show');
  setTimeout(()=>el.remove(), 250);
}

// ─── LISTA ────────────────────────────────────────────────────────────────────
function showLista() {
  const meta     = loadMeta();
  const total    = registros.length;
  const criticos = registros.filter(r=>r.status==='critico').length;
  const atencao  = registros.filter(r=>r.status==='atencao').length;

  document.getElementById('app').innerHTML = `
    <div class="header">
      <div class="header-row">
        <img src="${LOGO_B64}" class="logo" alt="Lar Cooperativa" />
        <div class="header-text">
          <div class="eyebrow">MANUTENÇÃO GERAL UIS3 2026</div>
          <h1 class="page-title">Coleta de Campo</h1>
        </div>
        <div class="counter">${total}<span>reg.</span></div>
      </div>
      ${criticos>0?`<div class="alert-bar crit"><span class="pulse-dot"></span>${criticos} crítico${criticos>1?'s':''}</div>`:''}
      ${atencao >0?`<div class="alert-bar warn"><span class="warn-dot"></span>${atencao} com atenção</div>`:''}
      ${meta.tecnico
        ?`<div class="meta-bar">Técnico: <strong>${esc(meta.tecnico)}</strong> <span class="link" onclick="pedirTecnico()">(alterar)</span></div>`
        :`<div class="meta-bar link" onclick="pedirTecnico()">+ Identificar técnico</div>`}
    </div>

    <div class="list-body">
      ${total===0?`
        <div class="empty">
          <div class="empty-icon">⚙️</div>
          <p class="empty-title">Nenhum registro ainda</p>
          <p class="empty-sub">Toque em "Novo Registro" para iniciar o levantamento</p>
        </div>`:registros.map(renderCard).join('')}
      <div style="height:150px"></div>
    </div>

    <div class="bottom-bar">
      <button class="btn-primary" onclick="showForm(null)">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 5v14M5 12h14"/></svg>
        Novo Registro
      </button>
      <div class="side-btns">
        <button class="btn-side btn-help" onclick="abrirAjuda()" title="Ajuda">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17" stroke-width="3" stroke-linecap="round"/></svg>
        </button>
        ${total>0?`<button class="btn-side btn-zip" onclick="gerarZip()" title="Exportar ZIP">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        </button>`:''}
      </div>
    </div>
  `;
}

function renderCard(r) {
  const sc = r.status||'ok';
  return `
    <div class="card" onclick="showForm('${r.id}')">
      <div class="card-head">
        <div>
          <div class="card-tag">${esc(r.tag)||'—'}${r.ex?' <span class="ex-badge">EX</span>':''}</div>
          <div class="card-sub">${TIPOS[r.tipo]||r.tipo||'—'}${r.area?' · '+esc(r.area):''}${r.localizacao?' / '+esc(r.localizacao):''}</div>
        </div>
        <span class="badge ${sc}">${STATUS[sc]}</span>
      </div>
      <div class="card-foot">
        ${r.potencia?`<span class="chip">${esc(r.potencia)} ${esc(r.unidade_pot||'kW')}</span>`:''}
        ${r.tensao  ?`<span class="chip">${esc(r.tensao)} V${r.ligacao==='monofasico'?' 1F':' 3F'}</span>`:''}
        ${r.rpm     ?`<span class="chip">${esc(r.rpm)} RPM</span>`:''}
        ${r.qtd_fotos>0?`<span class="chip foto-chip">📷 ${r.qtd_fotos}</span>`:''}
        <span class="chip date-chip">${formatDate(r.updatedAt||r.createdAt)}</span>
      </div>
    </div>`;
}

function pedirTecnico() {
  const meta = loadMeta();
  const nome = prompt('Nome do técnico:', meta.tecnico||'');
  if (nome&&nome.trim()) { meta.tecnico=nome.trim(); saveMeta(meta); showLista(); }
}

// ─── FORM ─────────────────────────────────────────────────────────────────────
async function showForm(id) {
  editingId = id;
  const r = id ? registros.find(x=>x.id===id) : null;
  fotos = id ? await lerFotosIDB(id) : [];
  const servicosSalvos = r?.servicos_check||[];
  const checkboxesHTML = SERVICOS_LISTA.map((s,i)=>`
    <label class="check-item">
      <input type="checkbox" name="servico_check" value="${i}" ${servicosSalvos.includes(i)?'checked':''}/>
      <span class="check-box"></span>
      <span class="check-label">${s}</span>
    </label>`).join('');

  document.getElementById('app').innerHTML = `
    <div class="form-header">
      <button class="icon-btn" onclick="showLista()" aria-label="Voltar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      </button>
      <div class="fh-center">
        <img src="${LOGO_B64}" class="logo-sm" alt="Lar"/>
        <span class="form-title">${id?'Editar Registro':'Novo Registro'}</span>
      </div>
      ${id?`<button class="icon-btn danger" onclick="confirmarDelete('${id}')" aria-label="Excluir">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
      </button>`:'<div style="width:36px"></div>'}
    </div>

    <div class="form-body" id="form-body">
      <div class="section">Identificação</div>
      <div class="field">
        <label>TAG do equipamento *</label>
        <input id="f-tag" type="text" placeholder="Ex: MTR-EX-0042" value="${esc(r?.tag)}"
          autocomplete="off" inputmode="text"
          oninput="this.value=this.value.replace(/[^A-Z0-9\-]/g,'').toUpperCase()"
          onkeypress="return /[A-Z0-9\-]/i.test(event.key)"
          style="font-family:var(--mono);letter-spacing:.05em" />
        <div class="field-hint">Somente letras maiúsculas, números e traço ( - )</div>
      </div>
      <div class="row2">
        <div class="field"><label>Tipo</label>
          <select id="f-tipo">${Object.entries(TIPOS).map(([v,l])=>`<option value="${v}"${r?.tipo===v?' selected':''}>${l}</option>`).join('')}</select>
        </div>
        <div class="field"><label>Equipamento EX?</label>
          <label class="toggle-ex">
            <input type="checkbox" id="f-ex" ${r?.ex?'checked':''}/>
            <span class="toggle-track"><span class="toggle-thumb"></span></span>
            <span class="toggle-lbl" id="ex-lbl">${r?.ex?'Sim — EX':'Não'}</span>
          </label>
        </div>
      </div>
      <div class="row2">
        <div class="field"><label>Área</label>
          <select id="f-area">
            <option value="">— selecione —</option>
            ${AREAS.map(a=>`<option value="${a}"${r?.area===a?' selected':''}>${a}</option>`).join('')}
          </select>
        </div>
        <div class="field">
          <label>Localização <span class="field-hint-inline" id="loc-count">${r?.localizacao?r.localizacao.length:0}/30</span></label>
          <input id="f-localizacao" type="text" placeholder="EX: NIVEL 2 PAINEL A"
            value="${esc(r?.localizacao)}" maxlength="30"
            oninput="this.value=this.value.toUpperCase();document.getElementById('loc-count').textContent=this.value.length+'/30'"/>
        </div>
      </div>

      <div class="section">Dados de placa</div>
      <div class="row2">
        <div class="field"><label>Potência</label>
          <div class="input-row">
            <input id="f-potencia" type="number" placeholder="0" value="${esc(r?.potencia)}" step="any"
              style="flex:1;min-width:0" oninput="atualizarCorrenteEstimada()"/>
            <select id="f-unidade" style="width:68px;flex-shrink:0" onchange="atualizarCorrenteEstimada()">
              <option value="kW"${(r?.unidade_pot||'kW')==='kW'?' selected':''}>kW</option>
              <option value="cv"${r?.unidade_pot==='cv'?' selected':''}>cv</option>
              <option value="HP"${r?.unidade_pot==='HP'?' selected':''}>HP</option>
            </select>
          </div>
        </div>
        <div class="field"><label>Tensão (V)</label>
          <input id="f-tensao" type="text" placeholder="380" value="${esc(r?.tensao)}"
            maxlength="3" inputmode="numeric"
            oninput="this.value=this.value.replace(/[^0-9]/g,'');atualizarCorrenteEstimada()"/>
        </div>
      </div>
      <div class="row2">
        <div class="field">
          <label>Corrente (A) <span class="corrente-est" id="corrente-estimada"></span></label>
          <input id="f-corrente" type="number" placeholder="0.0" value="${esc(r?.corrente)}" step="any"/>
        </div>
        <div class="field"><label>Ligação</label>
          <select id="f-ligacao" onchange="atualizarCorrenteEstimada()">
            <option value="trifasico"${r?.ligacao!=='monofasico'?' selected':''}>Trifásico</option>
            <option value="monofasico"${r?.ligacao==='monofasico'?' selected':''}>Monofásico</option>
          </select>
        </div>
      </div>
      <div class="row2">
        <div class="field"><label>Rotação (RPM)</label>
          <input id="f-rpm" type="number" placeholder="1750" value="${esc(r?.rpm)}"/>
        </div>
        <div class="field"><label>Fator de potência</label>
          <input id="f-fp" type="number" placeholder="0.85" value="${esc(r?.fp)}" step="0.01" min="0" max="1"/>
        </div>
      </div>
      <div class="row2">
        <div class="field"><label>Grau de proteção</label>
          <input id="f-ip" type="text" placeholder="IP55" value="${esc(r?.ip)}"/>
        </div>
        <div class="field"><label>Classe isolamento</label>
          <select id="f-classe">
            <option value="">—</option>
            ${['A','B','F','H'].map(v=>`<option value="${v}"${r?.classe===v?' selected':''}>${v}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="row2">
        <div class="field"><label>Frequência</label>
          <select id="f-freq">
            <option value="60"${r?.freq!=='50'?' selected':''}>60 Hz</option>
            <option value="50"${r?.freq==='50'?' selected':''}>50 Hz</option>
          </select>
        </div>
        <div class="field"><label>Fabricante</label>
          <input id="f-fabricante" type="text" placeholder="WEG, ABB..." value="${esc(r?.fabricante)}"/>
        </div>
      </div>
      <div class="row2">
        <div class="field"><label>Nº de série</label>
          <input id="f-serie" type="text" placeholder="Número de série" value="${esc(r?.serie)}"/>
        </div>
        <div class="field"><label>Modelo</label>
          <input id="f-modelo" type="text" placeholder="Modelo do equipamento" value="${esc(r?.modelo)}"/>
        </div>
      </div>

      <div class="section">Estado observado</div>
      <div class="status-group">
        ${['ok','atencao','critico'].map(s=>`
          <label class="status-opt ${s}">
            <input type="radio" name="status" value="${s}" ${(r?.status||'ok')===s?'checked':''}/>
            <span class="status-dot"></span><span>${STATUS[s]}</span>
          </label>`).join('')}
      </div>

      <div class="section">Serviços previstos</div>
      <div class="check-grid">${checkboxesHTML}</div>
      <div class="field" style="margin-top:12px"><label>Anotações de serviços</label>
        <textarea id="f-obs" rows="3" placeholder="Detalhes adicionais sobre os serviços...">${esc(r?.obs)}</textarea>
      </div>

      <div class="section">Dimensões do motor (cm)</div>

      <div class="dim-diagram">
        <svg viewBox="0 0 280 160" xmlns="http://www.w3.org/2000/svg" class="dim-svg">
          <!-- Sombra do corpo -->
          <rect x="54" y="44" width="148" height="76" rx="6" fill="rgba(0,0,0,0.06)"/>
          <!-- Corpo principal do motor -->
          <rect x="50" y="40" width="148" height="76" rx="8" fill="#e4e8ef" stroke="#6b7589" stroke-width="2"/>
          <!-- Tampa frontal -->
          <rect x="50" y="52" width="14" height="52" rx="4" fill="#d4dae5" stroke="#6b7589" stroke-width="1.5"/>
          <!-- Tampa traseira -->
          <rect x="184" y="52" width="14" height="52" rx="4" fill="#d4dae5" stroke="#6b7589" stroke-width="1.5"/>
          <!-- Eixo -->
          <rect x="24" y="73" width="26" height="10" rx="3" fill="#9ca3af" stroke="#6b7589" stroke-width="1.5"/>
          <!-- Caixa de ligação (terminal box) -->
          <rect x="104" y="28" width="40" height="18" rx="4" fill="#d4dae5" stroke="#6b7589" stroke-width="1.5"/>
          <!-- Aletas do dissipador -->
          <line x1="80"  y1="40" x2="80"  y2="116" stroke="#9ca3af" stroke-width="1"/>
          <line x1="97"  y1="40" x2="97"  y2="116" stroke="#9ca3af" stroke-width="1"/>
          <line x1="114" y1="40" x2="114" y2="116" stroke="#9ca3af" stroke-width="1"/>
          <line x1="131" y1="40" x2="131" y2="116" stroke="#9ca3af" stroke-width="1"/>
          <line x1="148" y1="40" x2="148" y2="116" stroke="#9ca3af" stroke-width="1"/>
          <line x1="165" y1="40" x2="165" y2="116" stroke="#9ca3af" stroke-width="1"/>
          <!-- ── Cota COMPRIMENTO (C) ── -->
          <line x1="24" y1="128" x2="198" y2="128" stroke="#1a5fd4" stroke-width="1.5" stroke-dasharray="4,2"/>
          <line x1="24" y1="124" x2="24" y2="132" stroke="#1a5fd4" stroke-width="2"/>
          <line x1="198" y1="124" x2="198" y2="132" stroke="#1a5fd4" stroke-width="2"/>
          <text x="111" y="143" text-anchor="middle" font-size="11" font-weight="700" fill="#1a5fd4" font-family="IBM Plex Sans,sans-serif">C — Comprimento</text>
          <!-- ── Cota LARGURA (L) ── -->
          <line x1="212" y1="40" x2="212" y2="116" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4,2"/>
          <line x1="208" y1="40" x2="216" y2="40" stroke="#d97706" stroke-width="2"/>
          <line x1="208" y1="116" x2="216" y2="116" stroke="#d97706" stroke-width="2"/>
          <text x="236" y="82" text-anchor="middle" font-size="11" font-weight="700" fill="#d97706" font-family="IBM Plex Sans,sans-serif" transform="rotate(90,236,82)">L — Largura</text>
          <!-- ── Cota ALTURA (A) ── -->
          <line x1="232" y1="116" x2="232" y2="155" stroke="#166534" stroke-width="1.5" stroke-dasharray="4,2"/>
          <line x1="228" y1="116" x2="237" y2="116" stroke="#166534" stroke-width="1.5"/>
          <!-- linha chão -->
          <line x1="50" y1="155" x2="240" y2="155" stroke="#6b7589" stroke-width="1.5" stroke-dasharray="3,2"/>
          <line x1="228" y1="151" x2="236" y2="159" stroke="#166534" stroke-width="2"/>
          <line x1="236" y1="151" x2="228" y2="159" stroke="#166534" stroke-width="2"/>
          <text x="245" y="140" text-anchor="start" font-size="11" font-weight="700" fill="#166534" font-family="IBM Plex Sans,sans-serif">P</text>
          <text x="246" y="153" text-anchor="start" font-size="9" fill="#166534" font-family="IBM Plex Sans,sans-serif">Prof.</text>
        </svg>
      </div>

      <div class="row3">
        <div class="field">
          <label class="dim-label dim-a">P — Profundidade (cm)</label>
          <input id="f-alt" type="number" placeholder="0" value="${esc(r?.dim_alt)}" step="0.1" min="0" inputmode="decimal" />
        </div>
        <div class="field">
          <label class="dim-label dim-l">L — Largura (cm)</label>
          <input id="f-lar" type="number" placeholder="0" value="${esc(r?.dim_lar)}" step="0.1" min="0" inputmode="decimal" />
        </div>
        <div class="field">
          <label class="dim-label dim-c">C — Comprimento (cm)</label>
          <input id="f-comp" type="number" placeholder="0" value="${esc(r?.dim_comp)}" step="0.1" min="0" inputmode="decimal" />
        </div>
      </div>

      <div class="section">Fotos</div>
      <div class="foto-grid" id="foto-grid">${renderFotos()}</div>
      <label class="add-foto-btn" id="add-foto-label">
        <input type="file" accept="image/*" multiple id="foto-input" style="display:none" onchange="adicionarFotos(this)"/>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
        Adicionar fotos
      </label>
      <div style="height:110px"></div>
    </div>

    <div class="bottom-bar">
      <button class="btn-primary full" onclick="salvar()">
        Salvar e continuar
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  `;

  document.getElementById('f-ex').addEventListener('change', function() {
    document.getElementById('ex-lbl').textContent = this.checked ? 'Sim — EX' : 'Não';
  });
  atualizarCorrenteEstimada();
}

// ─── Fotos ────────────────────────────────────────────────────────────────────
function renderFotos() {
  if (!fotos.length) return '';
  return fotos.map((f,i)=>`
    <div class="foto-item">
      <img src="${f.dataUrl}" alt="foto ${i+1}" loading="lazy"/>
      <button class="foto-del" onclick="removerFoto(${i})" aria-label="Remover foto ${i+1}">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
      </button>
      <div class="foto-num">${i+1}</div>
    </div>`).join('');
}
function atualizarFotoGrid() { document.getElementById('foto-grid').innerHTML = renderFotos(); }
function adicionarFotos(input) {
  const files = Array.from(input.files);
  if (!files.length) return;
  const label = document.getElementById('add-foto-label');
  label.style.opacity='0.5'; label.style.pointerEvents='none';
  let done=0;
  files.forEach(file=>{
    const img=new Image(), reader=new FileReader();
    reader.onload=e=>{
      img.onload=()=>{
        const MAX=1400; let w=img.width,h=img.height;
        if(w>MAX||h>MAX){ if(w>h){h=Math.round(h*MAX/w);w=MAX;}else{w=Math.round(w*MAX/h);h=MAX;} }
        const cv=document.createElement('canvas'); cv.width=w; cv.height=h;
        cv.getContext('2d').drawImage(img,0,0,w,h);
        fotos.push({dataUrl:cv.toDataURL('image/jpeg',0.85),name:file.name.replace(/[^a-zA-Z0-9._-]/g,'_')});
        if(++done===files.length){
          atualizarFotoGrid();
          label.style.opacity=''; label.style.pointerEvents='';
          toast(`${done} foto${done>1?'s':''} adicionada${done>1?'s':''}`);
        }
      };
      img.src=e.target.result;
    };
    reader.readAsDataURL(file);
  });
  input.value='';
}
function removerFoto(idx){ fotos.splice(idx,1); atualizarFotoGrid(); }

// ─── Salvar ───────────────────────────────────────────────────────────────────
async function salvar() {
  const tag = document.getElementById('f-tag').value.trim();
  if (!tag) {
    const el=document.getElementById('f-tag');
    el.focus(); el.classList.add('shake');
    setTimeout(()=>el.classList.remove('shake'),400);
    toast('Informe a TAG do equipamento'); return;
  }
  const btn=document.querySelector('.btn-primary.full');
  btn.disabled=true; btn.textContent='Salvando…';
  const agora=new Date().toISOString();
  const novoId=editingId||uid();
  try { await salvarFotosIDB(novoId, fotos); }
  catch(e){ toast('Erro ao salvar fotos: '+e.message); btn.disabled=false; return; }
  const checkeds=Array.from(document.querySelectorAll('input[name="servico_check"]:checked')).map(el=>parseInt(el.value));
  const reg={
    id:novoId, tag,
    tipo:       document.getElementById('f-tipo').value,
    ex:         document.getElementById('f-ex').checked,
    area:       document.getElementById('f-area').value,
    localizacao:document.getElementById('f-localizacao').value.trim(),
    potencia:   document.getElementById('f-potencia').value,
    unidade_pot:document.getElementById('f-unidade').value,
    tensao:     document.getElementById('f-tensao').value.trim(),
    ligacao:    document.getElementById('f-ligacao').value,
    corrente:   document.getElementById('f-corrente').value,
    rpm:        document.getElementById('f-rpm').value,
    fp:         document.getElementById('f-fp').value,
    ip:         document.getElementById('f-ip').value.trim(),
    classe:     document.getElementById('f-classe').value,
    freq:       document.getElementById('f-freq').value,
    fabricante: document.getElementById('f-fabricante').value.trim(),
    serie:      document.getElementById('f-serie').value.trim(),
    modelo:     document.getElementById('f-modelo').value.trim(),
    status:     document.querySelector('input[name="status"]:checked')?.value||'ok',
    servicos_check:checkeds,
    servicos_nomes:checkeds.map(i=>SERVICOS_LISTA[i]).join('; '),
    obs:        document.getElementById('f-obs').value.trim(),
    dim_alt:    document.getElementById('f-alt').value,
    dim_lar:    document.getElementById('f-lar').value,
    dim_comp:   document.getElementById('f-comp').value,
    qtd_fotos:  fotos.length,
    createdAt:  editingId?(registros.find(r=>r.id===editingId)?.createdAt||agora):agora,
    updatedAt:  agora
  };
  if(editingId){ const idx=registros.findIndex(r=>r.id===editingId); registros[idx]=reg; }
  else { registros.unshift(reg); }
  saveRegistros(registros);
  toast('✓ Salvo! Próximo equipamento.');
  showForm(null);
}
async function confirmarDelete(id){
  if(!confirm('Excluir este registro?')) return;
  await deletarFotosIDB(id);
  registros=registros.filter(r=>r.id!==id);
  saveRegistros(registros);
  toast('Registro excluído');
  showLista();
}

// ─── Gerar ZIP ────────────────────────────────────────────────────────────────
async function gerarZip(){
  if(!registros.length){ toast('Nenhum registro para exportar'); return; }
  if(typeof JSZip==='undefined'){ toast('Aguarde, carregando biblioteca…'); return; }
  toast('Gerando ZIP…',8000);
  const meta=loadMeta();
  const arquivo=nomeZip(meta.tecnico, registros);
  const nomePasta=arquivo.replace('.zip','');
  try{
    const todasFotos=await lerTodasFotosIDB();
    const zip=new JSZip();
    const pasta=zip.folder(nomePasta);
    const cabecalho=['TAG','EX','Tipo','Área','Localização','Potência','Unidade',
      'Tensão (V)','Ligação','Corrente (A)','RPM','FP','IP','Classe','Freq (Hz)',
      'Fabricante','Nº Série','Modelo','Status','Serviços (checks)',
      'Anotações','Profundidade (cm)','Largura (cm)','Comprimento (cm)','Qtd Fotos','Criado em','Atualizado em'];
    const campos=['tag','ex','tipo','area','localizacao','potencia','unidade_pot',
      'tensao','ligacao','corrente','rpm','fp','ip','classe','freq',
      'fabricante','serie','modelo','status','servicos_nomes',
      'obs','dim_alt','dim_lar','dim_comp','qtd_fotos','createdAt','updatedAt'];
    const linhas=registros.map(r=>
      campos.map(c=>{
        const v=c==='ex'?(r[c]?'SIM':'NÃO'):(r[c]??'');
        return `"${String(v).replace(/"/g,'""')}"`;
      }).join(';')
    );
    pasta.file('dados.csv','\uFEFF'+[cabecalho.join(';'),...linhas].join('\r\n'));
    let totalFotos=0;
    for(const r of registros){
      const flist=todasFotos[r.id]||[];
      if(!flist.length) continue;
      const tagSafe=(r.tag||'sem_tag').replace(/[^a-zA-Z0-9_-]/g,'_');
      const sub=pasta.folder('fotos').folder(tagSafe);
      flist.forEach((f,i)=>{
        const ext=f.name?.split('.').pop()?.toLowerCase()||'jpg';
        const b64=f.dataUrl?.split(',')[1];
        if(b64){ sub.file(`${tagSafe}_${String(i+1).padStart(2,'0')}.${ext}`,b64,{base64:true}); totalFotos++; }
      });
    }
    pasta.file('LEIAME.txt',[
      'Coleta de Campo — MANUTENÇÃO GERAL UIS3 2026',
      `Técnico   : ${meta.tecnico||'não identificado'}`,
      `Exportado : ${new Date().toLocaleString('pt-BR')}`,
      `Registros : ${registros.length}`,
      `Fotos     : ${totalFotos}`,
      '','Estrutura:',
      '  dados.csv      → todos os campos',
      '  fotos/<TAG>/   → fotos por equipamento',
    ].join('\n'));
    const blob=await zip.generateAsync({type:'blob',compression:'DEFLATE',compressionOptions:{level:5}});
    if(navigator.share&&navigator.canShare){
      const file=new File([blob],arquivo,{type:'application/zip'});
      if(navigator.canShare({files:[file]})){
        try{
          await navigator.share({
            title:'Coleta de Campo',
            text:`${arquivo} · ${registros.length} equip. · ${totalFotos} fotos`,
            files:[file]
          });
          return;
        }catch(e){ if(e.name==='AbortError') return; }
      }
    }
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a');
    a.href=url; a.download=arquivo;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    setTimeout(()=>URL.revokeObjectURL(url),4000);
    toast(`ZIP gerado! ${registros.length} registros, ${totalFotos} fotos.`);
  }catch(e){ console.error(e); toast('Erro ao gerar ZIP: '+e.message); }
}

// ─── Service Worker ───────────────────────────────────────────────────────────
if('serviceWorker' in navigator){
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('./sw.js')
      .then(r=>console.log('SW ok:',r.scope))
      .catch(e=>console.warn('SW erro:',e));
  });
}

showLista();
