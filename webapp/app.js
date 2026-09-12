// APP.JS - LOGICA WEBAPP OPERAZIONE ARCA

let currentTab = 'enigmi';
let currentPhase = 1;
let timerInterval = null;
let seconds = 0;
const completedEnigmi = new Set();

// INIZIALIZZAZIONE
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadEnigmi();
    loadCodici();
    loadPercorsi();
    loadChecklist();
    loadAiuti();
    setupEventListeners();
}

// EVENT LISTENERS
function setupEventListeners() {
    // Timer buttons
    document.getElementById('startBtn').addEventListener('click', startTimer);
    document.getElementById('pauseBtn').addEventListener('click', pauseTimer);
    document.getElementById('resetBtn').addEventListener('click', resetTimer);

    // Tab buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.addEventListener('click', function() {
            switchTab(this.dataset.tab);
        });
    });

    // Phase buttons
    document.querySelectorAll('.btn-phase').forEach(btn => {
        btn.addEventListener('click', function() {
            switchPhase(this.dataset.phase);
        });
    });
}

// TIMER FUNCTIONS
function startTimer() {
    document.getElementById('startBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;
    timerInterval = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    clearInterval(timerInterval);
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateTimerDisplay();
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}`;
}

// PHASE SWITCHING
function switchPhase(phase) {
    currentPhase = parseInt(phase);
    document.querySelectorAll('.btn-phase').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-phase="${phase}"]`).classList.add('active');

    const phaseNames = ['', 'FASE 1 - INSIEME', 'FASE 2 - PERCORSI SEPARATI', 'FASE 3 - FINALE'];
    document.getElementById('phaseDisplay').textContent = phaseNames[phase];
}

// TAB SWITCHING
function switchTab(tab) {
    currentTab = tab;
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    event.target.classList.add('active');
    document.getElementById(`${tab}-tab`).classList.add('active');
}

// LOAD ENIGMI
function loadEnigmi() {
    const container = document.getElementById('enigmiContainer');
    const allEnigmi = [
        ...ESCAPE_ROOM_DATA.fase1.map(e => ({...e, fase: 1})),
        ...ESCAPE_ROOM_DATA.falco.map(e => ({...e, fase: 2, percorso: 'FALCO'})),
        ...ESCAPE_ROOM_DATA.lince.map(e => ({...e, fase: 2, percorso: 'LINCE'})),
        ...ESCAPE_ROOM_DATA.fase3.map(e => ({...e, fase: 3}))
    ];

    container.innerHTML = allEnigmi.map(enigma => `
        <div class="enigma-card fase${enigma.fase}" data-id="${enigma.id}">
            <div>
                <span class="enigma-numero">${enigma.numero}</span>
                <span class="enigma-title">${enigma.titolo}</span>
                ${enigma.percorso ? `<span style="background: ${enigma.percorso === 'FALCO' ? '#FFD700' : '#FF8C00'}; color: white; padding: 3px 8px; border-radius: 3px; font-size: 0.8em; margin-left: 10px;">${enigma.percorso}</span>` : ''}
            </div>
            <div class="enigma-contenitore"><strong>📦 Contenitore:</strong> ${enigma.contenitore}</div>
            <div class="enigma-codice">🔐 ${enigma.codice}</div>
            <div class="enigma-contenitore"><strong>📍 Dove:</strong> ${enigma.dove}</div>
            ${enigma.traccia ? `<div class="enigma-contenitore"><strong>💡 Traccia:</strong> ${enigma.traccia}</div>` : ''}
            ${enigma.output ? `<div class="enigma-contenitore"><strong>📤 Output:</strong> ${enigma.output}</div>` : ''}
            ${enigma.info ? `<div class="enigma-contenitore"><strong>📡 Trasmetti:</strong> ${enigma.info}</div>` : ''}
            ${enigma.nota ? `<div class="enigma-nota">⚠️ ${enigma.nota}</div>` : ''}
            <div class="enigma-checkbox">
                <input type="checkbox" id="enigma-${enigma.id}" onchange="toggleEnigma('${enigma.id}')">
                <label for="enigma-${enigma.id}">Completato</label>
            </div>
        </div>
    `).join('');
}

function toggleEnigma(id) {
    const card = document.querySelector(`[data-id="${id}"]`);
    if (completedEnigmi.has(id)) {
        completedEnigmi.delete(id);
        card.classList.remove('completato');
    } else {
        completedEnigmi.add(id);
        card.classList.add('completato');
    }
}

// LOAD CODICI
function loadCodici() {
    const tbody = document.getElementById('codiciBattleBody');
    tbody.innerHTML = ESCAPE_ROOM_DATA.codici.map(codice => `
        <tr>
            <td><strong>${codice.serratura}</strong></td>
            <td><span class="codice-value">${codice.codice}</span></td>
            <td>${codice.dove}</td>
            <td>
                <input type="checkbox" onchange="toggleCodice(this)">
            </td>
        </tr>
    `).join('');
}

function toggleCodice(checkbox) {
    checkbox.closest('tr').style.opacity = checkbox.checked ? '0.5' : '1';
}

// LOAD PERCORSI
function loadPercorsi() {
    const falcoContainer = document.getElementById('falcoEnigmi');
    const linceContainer = document.getElementById('linceEnigmi');

    falcoContainer.innerHTML = ESCAPE_ROOM_DATA.falco.map(enigma => `
        <div class="enigmi-list-item">
            <strong>F${enigma.numero}</strong> - ${enigma.titolo}
            <br><small>${enigma.codice}</small>
        </div>
    `).join('');

    linceContainer.innerHTML = ESCAPE_ROOM_DATA.lince.map(enigma => `
        <div class="enigmi-list-item">
            <strong>L${enigma.numero}</strong> - ${enigma.titolo}
            <br><small>${enigma.codice}</small>
        </div>
    `).join('');
}

// LOAD CHECKLIST
function loadChecklist() {
    const container = document.getElementById('checklistContainer');
    container.innerHTML = ESCAPE_ROOM_DATA.checklist.map(section => `
        <div class="checklist-section">
            <h3>${section.categoria}</h3>
            ${section.items.map(item => `
                <div class="checklist-item">
                    <input type="checkbox" id="check-${Math.random()}">
                    <label for="check-${Math.random()}">${item}</label>
                </div>
            `).join('')}
        </div>
    `).join('');
}

// LOAD AIUTI
function loadAiuti() {
    const container = document.getElementById('aiutiContainer');
    container.innerHTML = ESCAPE_ROOM_DATA.aiuti.map(aiuto => `
        <div class="aiuto-section">
            <h3>🆘 ${aiuto.enigma}</h3>
            <ul class="aiuto-list">
                ${aiuto.livelli.map((livello, idx) => `
                    <li class="aiuto-item">
                        <span class="aiuto-level">AIUTO ${idx + 1}</span>
                        <br>${livello}
                    </li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

console.log('✅ App.js caricato - OPERAZIONE ARCA pronto!');