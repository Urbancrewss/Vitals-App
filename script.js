        const API_URL = "https://script.google.com/macros/s/AKfycbwVrFAO7Ca7twZ_FZ1Y1tiLAWjKnpLTEd_FAOG4nQPY4EHJh74e7j-PU3cjLykjZnc/exec";

        const configBiomarcatori = {
        	"Tempo Quick Plasma Controllo": {
        		unita: "sec",
        		noRange: true
        	},
        	"Tempo Quick Plasma Esame": {
        		unita: "sec",
        		noRange: true
        	},
        	"Attività Protrombinica": {
        		unita: "%",
        		min: 70.0,
        		max: 120.0
        	},
        	"Tempo TromboPlastina (PTT)": {
        		unita: "sec",
        		min: 20.0,
        		max: 38.0
        	},
        	"Fibrogeno": {
        		unita: "mg/dL",
        		min: 200,
        		max: 400
        	},
        	"Glicemia": {
        		unita: "mg/dL",
        		min: 60,
        		max: 110
        	},
        	"Creatina": {
        		unita: "mg/dL",
        		min: 0.70,
        		max: 1.40
        	},
        	"Trigliceridi": {
        		unita: "mg/dL",
        		min: 60,
        		max: 170
        	},
        	"Colesterolo Totale": {
        		unita: "mg/dL",
        		isColesterolo: true
        	},
        	"HDL Colesterolo": {
        		unita: "mg/dL",
        		isHDL: true
        	},
        	"Gamma - GT": {
        		unita: "IU/l",
        		min: 11,
        		max: 50
        	},
        	"Bilirubina Totale": {
        		unita: "mg/dL",
        		maxSoglia: 1.25
        	},
        	"Bilirubina Diretta": {
        		unita: "mg/dL",
        		maxSoglia: 0.30
        	},
        	"Bilirubina Indiretta": {
        		unita: "mg/dL",
        		maxSoglia: 0.95
        	},
        	"G.O.T.": {
        		unita: "IU/l",
        		maxSoglia: 37
        	},
        	"G.P.T.": {
        		unita: "IU/l",
        		maxSoglia: 45
        	},
        	"Ultra-TSH": {
        		unita: "μIU/ml",
        		min: 0.3000,
        		max: 4.5000
        	},
        	"Prolattina": {
        		unita: "ng/ml",
        		min: 2.00,
        		max: 18.00
        	},
        	"Testosterone Totale": {
        		unita: "ng/ml",
        		min: 2.2,
        		max: 10.5
        	},
        	"Globuli Bianchi (WBC)": {
        		unita: "migliaia/mmc",
        		min: 4.00,
        		max: 10.00
        	},
        	"Neutrofili %": {
        		unita: "%",
        		min: 50.0,
        		max: 65.0
        	},
        	"Linfociti %": {
        		unita: "%",
        		min: 20.0,
        		max: 40.0
        	},
        	"Monociti %": {
        		unita: "%",
        		min: 0.0,
        		max: 8.0
        	},
        	"Eosinofili %": {
        		unita: "%",
        		min: 0.0,
        		max: 4.0
        	},
        	"Basofili %": {
        		unita: "%",
        		min: 0.0,
        		max: 1.0
        	},
        	"Neutrofili #": {
        		unita: "10^3/μl",
        		min: 2.00,
        		max: 7.50
        	},
        	"Linfociti #": {
        		unita: "10^3/μl",
        		min: 1.50,
        		max: 3.50
        	},
        	"Monociti #": {
        		unita: "10^3/μl",
        		min: 0.00,
        		max: 0.80
        	},
        	"Eosinofili #": {
        		unita: "10^3/μl",
        		min: 0.00,
        		max: 0.70
        	},
        	"Basofili #": {
        		unita: "10^3/μl",
        		min: 0.00,
        		max: 0.10
        	},
        	"Globuli Rossi (RBC)": {
        		unita: "milioni/mmc",
        		min: 4.50,
        		max: 6.00
        	},
        	"Emoglobina (HGB)": {
        		unita: "g/dl",
        		min: 14.0,
        		max: 17.5
        	},
        	"Ematocrito (HCT)": {
        		unita: "%",
        		min: 42.0,
        		max: 54.0
        	},
        	"Volume Globulare Medio (MCV)": {
        		unita: "fl",
        		min: 82.0,
        		max: 98.0
        	},
        	"Contenuto Emoglobinico Medio (MCH)": {
        		unita: "pg",
        		min: 27.0,
        		max: 33.0
        	},
        	"Concentrazione Emoglobinica Media (MCHC)": {
        		unita: "%",
        		min: 32.0,
        		max: 38.0
        	},
        	"RDW-CV": {
        		unita: "%",
        		min: 10.0,
        		max: 14.5
        	},
        	"RDW-SD": {
        		unita: "fl",
        		min: 39.0,
        		max: 45.0
        	},
        	"Piastrine (PLT)": {
        		unita: "migliaia/mmc",
        		min: 150,
        		max: 500
        	},
        	"Volume Piastrinico Medio (MPV)": {
        		unita: "fl",
        		min: 8.2,
        		max: 12.3
        	},
        	"Ampiezza distribuzione Piastrine (PDW)": {
        		unita: "fl",
        		min: 10.0,
        		max: 16.5
        	},
        	"PCT": {
        		unita: "%",
        		min: 0.000,
        		max: 0.999
        	},
        	"Omocisteina": {
        		unita: "μmol/L",
        		noRange: true
        	},
        	"Azotemia": {
        		unita: "mg/dL",
        		min: 15,
        		max: 50
        	},
        	"Sodiemia": {
        		unita: "mEq/l",
        		min: 135,
        		max: 150
        	},
        	"Potassiemia": {
        		unita: "mEq/l",
        		min: 3.60,
        		max: 5.40
        	},
        	"Colinesterasi": {
        		unita: "U/l",
        		min: 2500,
        		max: 9400
        	},
        	"LH": {
        		unita: "mIU/ml",
        		min: 1.10,
        		max: 25.00
        	},
        	"FSH": {
        		unita: "mIU/ml",
        		min: 1.50,
        		max: 11.80
        	},
        	"Estradiolo": {
        		unita: "pg/ml",
        		maxSoglia: 87.0
        	}
        };

        let databaseEsami = [];
        let databaseAllegati = [];
        let currentOpenYear = null;
        let isEditingModeActive = false;
        let istanzeGrafici = {};

        window.onload = function() {
        	// FORZA IL CARICAMENTO DEL TEMA SALVATO IMMEDIATAMENTE
        	if (typeof inizializzaTemaAllAvvio === 'function') {
        		inizializzaTemaAllAvvio();
        	}
        	const select = document.getElementById('addBioNome');
        	select.innerHTML = "";
        	Object.keys(configBiomarcatori).forEach(key => {
        		const opt = document.createElement('option');
        		opt.value = key;
        		opt.innerText = key;
        		select.appendChild(opt);
        	});

        	document.getElementById('addDocFile').addEventListener('change', function() {
        		if (this.files.length > 0) {
        			document.getElementById('uploadFileLabel').innerText = "Selezionato: " + this.files[0].name;

        			inizializzaTemaAllAvvio();
        		}
        	});

        	fetchDatiCloud();

        	// Attiva il calendario personalizzato sui due input
        	flatpickr("#addBioData", {
        		locale: "it",
        		dateFormat: "d-m-Y",
        		defaultDate: "today"
        	});

        	flatpickr("#addDocData", {
        		locale: "it",
        		dateFormat: "d-m-Y",
        		defaultDate: "today"
        	});

        	flatpickr("#addPromemoriaData", {
        		locale: "it",
        		dateFormat: "d-m-Y",
        		defaultDate: "today"
        	});

        	flatpickr("#inputTerapiaDataInizio", {
        		locale: "it",
        		dateFormat: "d-m-Y",
        		defaultDate: "today"
        	});

        	renderPromemoria();
        };

        // ==================== LOGICA PROMEMORIA ANALISI (VERSIONE BLINDATA ANTI-CONFLITTO) ====================

        function renderPromemoria() {
        	const container = document.getElementById('promemoriaContainer');
        	if (!container) return;

        	if (!databasePromemoria || databasePromemoria.length === 0) {
        		container.innerHTML = `<p class="text-[11px] font-medium text-gray-400 italic text-center py-4">Nessun esame pianificato per il futuro.</p>`;
        		return;
        	}

        	// Paracadute di sicurezza per scartare date non valide
        	databasePromemoria = databasePromemoria.filter(pro => pro && pro.data && !isNaN(new Date(pro.data).getTime()));

        	// Ordina i promemoria dal più vicino al più lontano
        	databasePromemoria.sort((a, b) => new Date(a.data) - new Date(b.data));

        	container.innerHTML = "";
        	// [Cerca questo blocco dentro renderPromemoria() e sostituiscilo]
        	container.innerHTML = "";
        	databasePromemoria.forEach((pro, index) => {
        		//  IL TRUCCO: Convertiamo la stringa della data in un oggetto Data Locale pulito
        		const partiData = pro.data.split("-"); // Divide la stringa AAAA-MM-GG o GG-MM-AAAA
        		let dataEsame;

        		if (partiData[0].length === 4) {
        			// Se formato AAAA-MM-GG
        			dataEsame = new Date(partiData[0], partiData[1] - 1, partiData[2]);
        		} else {
        			// Se formato GG-MM-AAAA
        			dataEsame = new Date(partiData[2], partiData[1] - 1, partiData[0]);
        		}

        		// Azzeriamo completamente l'orario dell'esame
        		dataEsame.setHours(0, 0, 0, 0);

        		// Azzeriamo completamente l'orario di oggi
        		const oggi = new Date();
        		oggi.setHours(0, 0, 0, 0);

        		// CALCOLO MATEMATICO BLINDATO (Converte i millisecondi in giorni precisi)
        		const diffTempo = dataEsame.getTime() - oggi.getTime();
        		const diffGiorni = Math.round(diffTempo / (1000 * 60 * 60 * 24)); // Usiamo Math.round al posto di Math.ceil

        		let testoGiorni = "";
        		let coloreBadge = "bg-purple-50 text-[var(--colore-principale)]";

        		if (diffGiorni < 0) {
        			testoGiorni = "Scaduto";
        			coloreBadge = "bg-red-50 text-red-500";
        		} else if (diffGiorni === 0) {
        			testoGiorni = "Oggi!"; // ✨ Ora se selezioni oggi scriverà finalmente OGGI!
        			coloreBadge = "bg-amber-50 text-amber-500 animate-pulse";
        		} else if (diffGiorni === 1) {
        			testoGiorni = "Domani";
        			coloreBadge = "bg-amber-50 text-amber-500";
        		} else {
        			testoGiorni = `- ${diffGiorni} giorni`;
        		}


        		const dataFormattata = dataEsame.toLocaleDateString('it-IT', {
        			day: '2-digit',
        			month: 'short'
        		});

        		const row = document.createElement('div');
        		// 💡 FORZATO LO SFONDO GRIGIO CHIARO E IL BORDO PER FARLI STACCARE
        		row.className = "flex justify-between items-center bg-gray-50 border border-gray-100 p-3 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer group mt-1.5 shadow-2xs";

        		// Colleghiamo la funzione di eliminazione sicura per nome che abbiamo creato
        		row.onclick = () => eliminaPromemoriaPerNome(pro.nome);

        		// 🌟 AGGIORNATE LE CLASSI DEL TESTO: text-gray-800 e text-gray-700 (Mai più testi invisibili o bianchi!)
        		row.innerHTML = `
            <div class="flex items-center gap-3 overflow-hidden max-w-[75%]">
                <span class="text-[10px] font-black bg-white text-gray-800 border border-gray-100 px-2 py-1 rounded-lg whitespace-nowrap shadow-2xs">${dataFormattata}</span>
                <span class="text-xs font-black text-gray-700 truncate uppercase tracking-wide" style="font-variant: small-caps;">${pro.nome}</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-[9px] font-black uppercase px-2 py-1 rounded-md ${coloreBadge}">${testoGiorni}</span>
                <span class="text-[10px] text-red-500 font-bold opacity-0 group-hover:opacity-100 transition-opacity pl-1">✕</span>
            </div>
        `;
        		container.appendChild(row);
        	});
        }


        function apriModalNuovoPromemoria() {
        	const modal = document.getElementById('modalPromemoria');
        	if (modal) {
        		modal.classList.remove('hidden');
        		document.getElementById('addPromemoriaData').valueAsDate = new Date();
        	}
        }

        function chiudiModalPromemoria() {
        	const modal = document.getElementById('modalPromemoria');
        	if (modal) {
        		modal.classList.add('hidden');
        		document.getElementById('formPromemoria').reset();
        	}
        }

        function salvaPromemoria(e) {
        	e.preventDefault();

        	// Recupera la stringa della data dall'input Flatpickr
        	const dataInput = document.getElementById('addPromemoriaData').value;
        	const nome = document.getElementById('addPromemoriaNome').value.trim();

        	if (!dataInput || !nome) {
        		alert("Compila tutti i campi!");
        		return;
        	}

        	// Convertiamo la data da formato italiano (GG-MM-AAAA) a formato standard se necessario per il database
        	let dataFormattata = dataInput;
        	if (dataInput.includes("-") && dataInput.split("-")[0].length === 2) {
        		const parti = dataInput.split("-");
        		dataFormattata = `${parti[2]}-${parti[1]}-${parti[0]}`; // Diventa AAAA-MM-GG
        	}

        	// Inseriamo l'oggetto nel database locale
        	databasePromemoria.push({
        		data: dataFormattata,
        		nome: nome
        	});
        	localStorage.setItem('health-app-promemoria', JSON.stringify(databasePromemoria));

        	// Reset e rinfresco interfaccia
        	chiudiModalPromemoria();
        	renderPromemoria();
        }


        // ✨ NUOVA FUNZIONE DI ELIMINAZIONE SICURA SENZA L'USO DI INDEX NUMERICI
        function eliminaPromemoriaPerNome(nomeEsame) {
        	if (confirm(`Hai eseguito queste analisi o vuoi rimuovere il promemoria "${nomeEsame}"?`)) {
        		// Filtra l'array rimuovendo l'esame che ha quel nome specifico
        		databasePromemoria = databasePromemoria.filter(item => item.nome !== nomeEsame);
        		localStorage.setItem('health-app-promemoria', JSON.stringify(databasePromemoria));
        		renderPromemoria();
        	}
        }

        function fetchDatiCloud() {
        	document.getElementById('loadingOverlay').style.opacity = "1";
        	document.getElementById('loadingOverlay').classList.remove('hidden');

        	fetch(API_URL)
        		.then(response => response.json())
        		.then(data => {
        			databaseEsami = data.esami || [];
        			databaseAllegati = data.allegati || [];

        			// Recupera il nome dal LocalStorage del browser
        			const nomePersonalizzato = localStorage.getItem('user-custom-name') || 'Utente';
        			document.getElementById('mainGreeting').innerText = `Ciao, ${nomePersonalizzato}`;

        			// Carica il nome anche dentro la casella delle impostazioni, così lo vedi già scritto
        			document.getElementById('inputNomeUtente').value = localStorage.getItem('user-custom-name') || '';

        			renderFolders();
        			if (currentOpenYear) refreshTimeline();
        		})
        		.catch(err => alert("Errore nel caricamento dati dal cloud: " + err))
        		.finally(() => {
        			document.getElementById('loadingOverlay').style.opacity = "0";
        			setTimeout(() => document.getElementById('loadingOverlay').classList.add('hidden'), 300);
        		});
        }

        // ==================== RESET TOTALE APPLICAZIONE ====================

        function piallaTuttiIDatiDellApp() {
        	// Prima Conferma di sicurezza
        	if (!confirm("Sei sicuro di voler eliminare DEFINITIVAMENTE tutti i dati? Questa azione non si può annullare.")) {
        		return;
        	}

        	// Seconda Conferma (Per evitare click per errore)
        	if (!confirm("Confermi davvero? Verranno cancellati tutti i file, gli esami, i promemoria e le terapie sia da questo dispositivo che dal Cloud.")) {
        		return;
        	}

        	// Mostra la schermata di caricamento per dare feedback all'utente
        	document.getElementById('loadingOverlay').classList.remove('hidden');

        	// 🌐 1. INVIAMO IL COMANDO DI CANCELLAZIONE A GOOGLE SHEETS
        	fetch(API_URL, {
        			method: "POST",
        			body: JSON.stringify({
        				azione: "eliminaBiomarcatore",
        				svuotaTutto: true
        			})
        		})
        		.then(res => res.json())
        		.then(res => {
        			console.log("Risposta cloud svuotamento:", res);
        		})
        		.catch(err => {
        			console.warn("Impossibile raggiungere il cloud per svuotare, procedo in locale:", err);
        		})
        		.finally(() => {
        			// 💾 2. PIALLIAMO TUTTO IL LOCAL STORAGE DEL BROWSER
        			localStorage.clear();

        			// Svuotiamo anche gli array in memoria per sicurezza prima del riavvio
        			databaseEsami = [];
        			databaseAllegati = [];
        			databaseTerapie = [];
        			databasePromemoria = [];

        			// Messaggio finale e riavvio dell'applicazione per ritornare alla schermata di benvenuto pulita
        			alert("Applicazione resettata con successo! 😀 La pagina verrà ricaricata.");
        			window.location.reload();
        		});
        }


        let touchstartY = 0,
        	touchendY = 0;
        const welcomeScreen = document.getElementById('welcomeScreen');
        welcomeScreen.addEventListener('touchstart', e => {
        	touchstartY = e.changedTouches[0].screenY;
        });
        welcomeScreen.addEventListener('touchend', e => {
        	touchendY = e.changedTouches[0].screenY;
        	if (touchstartY - touchendY > 80) goToHome();
        });

        function goToHome() {
        	const welcomeScreen = document.getElementById('welcomeScreen');
        	// Spinge lo schermo verso l'alto proprio come nell'animazione
        	welcomeScreen.style.transform = 'translateY(-100%)';
        	setTimeout(() => {
        		welcomeScreen.classList.add('hidden');
        		document.getElementById('floatingAddBtn').classList.remove('hidden');
        		document.getElementById('bottomNavBar').classList.remove('hidden');
        		// Rende visibile la home
        		switchTab('home', document.querySelector('.navigation ul li'));
        	}, 600);
        }

        // Database terapie
        let databaseTerapie = JSON.parse(localStorage.getItem('health-app-terapie')) || [];
        // Variabile per tenere traccia di quale tab di terapia è attualmente selezionata
        let terapiaAttivaId = null;
        // Database locale per le prossime analisi da fare
        let databasePromemoria = JSON.parse(localStorage.getItem('health-app-promemoria')) || [];

        // ==================== LOGICA DI SWITCH TAB ED ELEMENTO ATTIVO ====================
        function switchTab(targetPageId, element) {
        	// Rimuove lo stato attivo da tutte le voci del menu
        	document.querySelectorAll('.navigation ul li').forEach(btn => btn.classList.remove('active'));
        	// Attiva la voce cliccata
        	if (element) element.classList.add('active');

        	const pagine = {
        		'home': document.getElementById('page-home'),
        		'search': document.getElementById('page-search'),
        		'therapies': document.getElementById('page-therapies'),
        		'settings': document.getElementById('page-settings')
        	};

        	document.getElementById('statsPage').classList.add('hidden');

        	Object.keys(pagine).forEach(key => {
        		if (pagine[key]) {
        			if (key === targetPageId) {
        				pagine[key].classList.remove('hidden');
        			} else {
        				pagine[key].classList.add('hidden');
        			}
        		}
        	});

        	// 💡 LA CORREZIONE: Quando torni sulla Home, forza il rinfresco pulito del database locale
        	if (targetPageId === 'home') {
        		backToFolders();
        		// Disegna le cartelle basandosi sui dati reali e aggiornati dell'app
        		renderFolders();
        		document.getElementById('floatingAddBtn').classList.remove('hidden');
        	} else {
        		document.getElementById('floatingAddBtn').classList.add('hidden');
        	}

        	if (targetPageId === 'search') setTimeout(() => document.getElementById('searchInput').focus(), 50);

        	if (targetPageId === 'therapies') {
        		if (typeof renderTerapie === 'function') renderTerapie();
        	}
        }


        function eseguiRicerca() {
        	const query = document.getElementById('searchInput').value.toLowerCase().trim();
        	const container = document.getElementById('searchResultsContainer');
        	container.innerHTML = "";

        	if (!query) {
        		container.innerHTML = `<p class="text-center text-xs font-semibold text-gray-400 py-10">Inserisci una parola chiave per avviare la ricerca.</p>`;
        		return;
        	}

        	// 1. Filtra i biomarcatori che corrispondono alla ricerca
        	const esamiFiltrati = databaseEsami
        		.filter(e => e.biomarcatore.toLowerCase().includes(query))
        		.map(e => ({
        			...e,
        			tipo: 'esame'
        		})); // Aggiungiamo un'etichetta per riconoscerli dopo

        	// 2. Filtra gli allegati (cerca nel titolo e nell'etichetta salvata)
        	const allegatiFiltrati = databaseAllegati
        		.filter(a => a.titolo.toLowerCase().includes(query))
        		.map(a => ({
        			...a,
        			tipo: 'allegato'
        		})); // Aggiungiamo un'etichetta per riconoscerli dopo

        	// 3. Unisce i due gruppi in un unico grande array e li ordina per data decrescente (dal più recente)
        	const risultati = [...esamiFiltrati, ...allegatiFiltrati].sort((a, b) => new Date(b.data) - new Date(a.data));

        	if (risultati.length === 0) {
        		container.innerHTML = `<p class="text-center text-xs font-semibold text-gray-400 py-10">Nessun record trovato corrispondente.</p>`;
        		return;
        	}

        	// 4. Genera visivamente i risultati differenziando la grafica
        	risultati.forEach(r => {
        		const d = new Date(r.data).toLocaleDateString('it-IT', {
        			day: '2-digit',
        			month: 'short',
        			year: 'numeric'
        		});
        		const item = document.createElement('div');
        		item.className = "bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center transition-all hover:border-gray-200";

        		if (r.tipo === 'esame') {
        			// --- GRAFICA PER I BIOMARCATORI ---
        			const conf = configBiomarcatori[r.biomarcatore] || {
        				unita: ""
        			};
        			item.innerHTML = `
                <div>
        <h4 class="text-xs font-extrabold text-gray-800 flex items-center gap-1.5">
            <svg class="w-6 h-6 text-[var(--colore-principale)]">
                <use href="assets/icons/sprite.svg#blood-drop"></use>
            </svg>
            <span>${r.biomarcatore}</span>
        </h4>
        <p class="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Eseguito il: ${d}</p>
    </div>
    <div class="text-right">
        <span class="text-base font-black text-gray-800">${r.valore}</span>
        <span class="text-[9px] font-bold text-gray-400 block">${conf.unita}</span>
    </div>
            `;
        		} else {
        			// --- GRAFICA PER GLI ALLEGATI (con pulsante per aprire il link) ---
        			item.innerHTML = `
                <div class="max-w-[70%]">
                    <h4 class="text-xs font-extrabold text-gray-800 flex items-center gap-1.5">
                        <svg class="w-5 h-5 text-[var(--colore-principale)]">
                        <use href="assets/icons/sprite.svg#document"></use>
                    </svg>
                        <span>${r.titolo}</span>
                    </h4>
                    <p class="text-[10px] text-gray-400 font-bold uppercase mt-0.5">Caricato il: ${d}</p>
                </div>
                <div class="text-right">
                    <button onclick="window.open('${r.url}', '_blank')" class="text-[10px] font-bold bg-[var(--colore-principale)]/10 text-[var(--colore-principale)] px-3 py-1.5 rounded-xl hover:bg-[var(--colore-principale)]/20 transition-colors uppercase tracking-wider">
                        Apri ↗
                    </button>
                </div>
            `;
        		}

        		container.appendChild(item);
        	});
        }

        function renderFolders() {
        	const container = document.getElementById('foldersContainer');
        	container.innerHTML = "";
        	document.getElementById('folderDetail').classList.add('hidden');
        	container.classList.remove('hidden');

        	const anniEsami = databaseEsami.map(item => new Date(item.data).getFullYear());
        	const anniAllegati = databaseAllegati.map(item => new Date(item.data).getFullYear());
        	const anni = [...new Set([...anniEsami, ...anniAllegati])].sort((a, b) => b - a);

        	if (anni.length === 0) {
        		container.innerHTML = `<div class="col-span-2 text-center py-10 text-gray-400 font-semibold text-sm">Nessun dato presente.<br>Clicca il tasto (+) per iniziare.</div>`;
        		return;
        	}

        	anni.forEach(anno => {
        		if (isNaN(anno)) return;

        		const cartellaBox = document.createElement('div');
        		cartellaBox.className = "relative select-none cursor-pointer group transition-all duration-300 active:scale-95";

        		// Recupera il colore personalizzato salvato (se non c'è, usa il grigio pastello di default)
        		const coloreSalvato = localStorage.getItem(`color-folder-${anno}`) || "#f3f4f6";

        		// RECUPERA L'ICONA SALVATA (Se non c'è, usa 'star' come default)
        		const iconaSalvata = localStorage.getItem(`icon-folder-${anno}`) || "star";

        		// CONTEGGIO ELEMENTI DINAMICO (Esami + Allegati per questo anno)
        		const conteggioEsami = databaseEsami.filter(item => new Date(item.data).getFullYear() === anno).length;
        		const conteggioAllegati = databaseAllegati.filter(item => new Date(item.data).getFullYear() === anno).length;
        		const totaleElementi = conteggioEsami + conteggioAllegati;

        		// Gestione Pressione Prolungata (PC e Mobile) per cambiare colore
        		let folderTimer;
        		const startFolderPress = () => {
        			folderTimer = setTimeout(() => openColorPicker(anno), 600);
        		};
        		const cancelFolderPress = () => {
        			clearTimeout(folderTimer);
        		};

        		cartellaBox.addEventListener('mousedown', startFolderPress);
        		cartellaBox.addEventListener('touchstart', startFolderPress);
        		cartellaBox.addEventListener('mouseup', cancelFolderPress);
        		cartellaBox.addEventListener('mouseleave', cancelFolderPress);
        		cartellaBox.addEventListener('touchend', cancelFolderPress);

        		// Clic normale per aprire l'anno
        		cartellaBox.onclick = () => {
        			openFolder(anno);
        		};
        		cartellaBox.innerHTML = `

            <!--  TESSERA QUADRATA -->
            <div id="folder-card-${anno}" 
                 class="w-full max-w-[160px] aspect-square relative cursor-pointer flex flex-col justify-end p-4 hover:scale-[1.03] active:scale-95 transition-all duration-300 rounded-[1.8rem] ml-0 overflow-hidden"
                 onclick="openFolder('${anno}')"
                 style="
                    background: linear-gradient(135deg, ${coloreSalvato} 0%, var(--colore-chiaro) 130%);
                    border: 1px solid rgba(0, 0, 0, 0.06);
                 ">
        
            <!-- 🌟 ICONA DINAMICA: L'ID punta alla variabile iconaSalvata -->
            <svg class="absolute -top-4 -right-4 w-44 h-44 pointer-events-none transition-transform duration-500 group-hover:rotate-12" 
                 style="
                    color: ${coloreSalvato} !important;
                    fill: ${coloreSalvato} !important;
                    opacity: 0.75; 
                    filter: brightness(0.65) contrast(1.4);
                 ">
                <use href="assets/icons/sprite.svg#${iconaSalvata}"></use>
            </svg>

            <!-- Blocco Contenuti -->
            <div class="flex flex-col items-start gap-2 w-full z-10">
                <div class="px-3.5 py-1 rounded-full flex items-center justify-center" style="background-color: rgba(0, 0, 0, 0.05);">
                    <span class="text-xl font-black text-white tracking-tight leading-none">${anno}</span>
                </div>
                <div class="pl-0.5">
                    <span class="text-[10px] font-bold text-gray-800/80 block leading-none tracking-wide" style="font-variant: small-caps;">
                        ${totaleElementi} ${totaleElementi === 1 ? 'elemento' : 'elementi'}
                    </span>
                </div>
            </div>
        </div>
    `;
        		container.appendChild(cartellaBox);
        	});
        }

        function openFolder(anno) {
        	currentOpenYear = anno;
        	document.getElementById('foldersContainer').classList.add('hidden');
        	document.getElementById('folderDetail').classList.remove('hidden');
        	document.getElementById('detailYearTitle').innerText = `${anno}`;
        	refreshTimeline();
        }

        function refreshTimeline() {
        	if (!currentOpenYear) return;
        	const timeline = document.getElementById('examsTimeline');
        	timeline.innerHTML = "";

        	const esamiAnno = databaseEsami.filter(e => new Date(e.data).getFullYear() === currentOpenYear);
        	const allegatiAnno = databaseAllegati.filter(a => new Date(a.data).getFullYear() === currentOpenYear);

        	const dateUniche = [...new Set([...esamiAnno.map(e => e.data), ...allegatiAnno.map(a => a.data)])].sort((a, b) => new Date(b) - new Date(a));

        	if (dateUniche.length === 0) {
        		backToFolders();
        		return;
        	}

        	dateUniche.forEach(dataString => {
        		const opzioniData = {
        			day: 'numeric',
        			month: 'long',
        			year: 'numeric'
        		};
        		const bloccoData = document.createElement('div');
        		bloccoData.className = "space-y-3";
        		bloccoData.innerHTML = `<h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[var(--colore-secondario)]"></span> ${new Date(dataString).toLocaleDateString('it-IT', opzioniData)}</h4><div class="grid grid-cols-3 gap-2" id="cards-container-${dataString}"></div><div class="mt-2 bg-white p-3 rounded-2xl border border-gray-50 shadow-sm"><div class="space-y-1" id="docs-container-${dataString}"><p class="text-[11px] text-gray-400 italic">Nessun documento allegato.</p></div></div>`;
        		timeline.appendChild(bloccoData);

        		const cardsContainer = document.getElementById(`cards-container-${dataString}`);
        		let counterEsamiInData = 0;

        		databaseEsami.forEach((esame, index) => {
        			if (esame.data !== dataString) return;
        			counterEsamiInData++;
        			const conf = configBiomarcatori[esame.biomarcatore] || {
        				unita: "",
        				noRange: true
        			};

        			let emoji = "👍",
        				colorClass = "text-green-500 bg-green-50/60 border-green-100",
        				rangeText = "";

        			if (conf.isColesterolo) {
        				if (esame.valore < 220) {
        					rangeText = "Normale (<220)";
        				} else if (esame.valore <= 240) {
        					emoji = "⚠️";
        					colorClass = "text-amber-500 bg-amber-50/60 border-amber-100";
        					rangeText = "A rischio (220-240)";
        				} else {
        					emoji = "🚨";
        					colorClass = "text-red-500 bg-red-50/60 border-red-100";
        					rangeText = "Elevato (>240)";
        				}
        			} else if (conf.isHDL) {
        				if (esame.valore > 45) {
        					rangeText = "Normale (>45)";
        				} else if (esame.valore >= 35) {
        					emoji = "⚠️";
        					colorClass = "text-amber-500 bg-amber-50/60 border-amber-100";
        					rangeText = "Mod. (35-45)";
        				} else {
        					emoji = "🚨";
        					colorClass = "text-red-500 bg-red-50/60 border-red-100";
        					rangeText = "Rischio (<35)";
        				}
        			} else if (conf.maxSoglia) {
        				if (esame.valore > conf.maxSoglia) {
        					emoji = "📈";
        					colorClass = "text-red-500 bg-red-50/60 border-red-100";
        				}
        				rangeText = `Max: ${conf.maxSoglia}`;
        			} else if (!conf.noRange) {
        				if (esame.valore < conf.min) {
        					emoji = "📉";
        					colorClass = "text-blue-500 bg-blue-50/60 border-blue-100";
        				} else if (esame.valore > conf.max) {
        					emoji = "📈";
        					colorClass = "text-red-500 bg-red-50/60 border-red-100";
        				}
        				rangeText = `Ref: ${conf.min}-${conf.max}`;
        			} else {
        				rangeText = "Monitoraggio";
        			}

        			const card = document.createElement('div');
        			card.id = `card-${index}`;
        			card.className = `bg-white rounded-2xl border ${colorClass} shadow-sm relative flex flex-col justify-between p-2 aspect-square text-center transition-transform select-none cursor-pointer`;

        			let pressTimer;
        			const startPress = () => {
        				pressTimer = setTimeout(() => activateEditMode(), 500);
        			};
        			const cancelPress = () => {
        				clearTimeout(pressTimer);
        			};
        			card.addEventListener('mousedown', startPress);
        			card.addEventListener('touchstart', startPress);
        			card.addEventListener('mouseleave', cancelPress);
        			card.addEventListener('touchend', cancelPress);

        			card.innerHTML = `
                        <div class="absolute top-1 right-1 text-xs indicator-status">${emoji}</div>
                        <div class="edit-controls hidden absolute inset-0 bg-white/95 rounded-2xl flex items-center justify-center gap-2 z-10">
                            <button onclick="deleteRecord(${index}, event)" class="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md font-bold text-xs hover:scale-105 active:scale-95">✕</button>
                            <button onclick="openEditModal(${index}, event)" class="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md text-xs hover:scale-105 active:scale-95">✏️</button>
                        </div>
                        <div class="flex-1 flex flex-col justify-center items-center mt-3">
                            <span class="text-lg font-black text-gray-800 tracking-tight leading-none">${esame.valore}</span>
                            <span class="text-[8px] font-bold text-gray-400 mt-0.5">${conf.unita}</span>
                        </div>
                        <div class="space-y-0.5 mb-1">
                            <div class="text-[9px] font-extrabold text-gray-700 truncate w-full px-1">${esame.biomarcatore}</div>
                            <div class="text-[7px] font-medium text-gray-400 truncate w-full">${rangeText}</div>
                        </div>`;
        			cardsContainer.appendChild(card);
        		});

        		if (counterEsamiInData === 0) cardsContainer.classList.add('hidden');

        		const docsContainer = document.getElementById(`docs-container-${dataString}`);
        		const allegati = databaseAllegati.filter(a => a.data === dataString);
        		if (allegati.length > 0) {
        			docsContainer.innerHTML = "";
        			databaseAllegati.forEach((doc, index) => {
        				if (doc.data !== dataString) return;

        				const docRow = document.createElement('div');
        				docRow.id = `doc-row-${index}`;
        				docRow.className = "flex items-center justify-between p-2 hover:bg-gray-50 rounded-xl text-xs font-semibold text-gray-600 cursor-pointer relative select-none group transition-transform";

        				// Clic normale apre il documento, ma solo se NON siamo in modalità modifica
        				docRow.onclick = () => {
        					if (!isEditingModeActive) window.open(doc.url, '_blank');
        				};

        				// Gestione pressione prolungata su PC e Mobile
        				let docTimer;
        				const startDocPress = () => {
        					docTimer = setTimeout(() => activateEditMode(), 500);
        				};
        				const cancelDocPress = () => {
        					clearTimeout(docTimer);
        				};
        				docRow.addEventListener('mousedown', startDocPress);
        				docRow.addEventListener('touchstart', startDocPress);
        				docRow.addEventListener('mouseup', cancelDocPress);
        				docRow.addEventListener('mouseleave', cancelDocPress);
        				docRow.addEventListener('touchend', cancelDocPress);

        				docRow.innerHTML = `
            <div class="edit-controls-doc hidden absolute inset-0 bg-white/95 rounded-xl flex items-center justify-end gap-2 px-2 z-10">
                <button onclick="deleteAllegato(${index}, event)" class="w-7 h-7 bg-red-500 text-white rounded-full flex items-center justify-center shadow-md font-bold text-xs hover:scale-105 active:scale-95">✕</button>
                <button onclick="openEditAllegatoModal(${index}, event)" class="w-7 h-7 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-md text-xs hover:scale-105 active:scale-95">✏️</button>
            </div>

            <div class="flex items-center gap-1.5 truncate max-w-[70%]">
                <span>📄</span>
                <span class="truncate">${doc.titolo}</span>
            </div>
            <span class="text-[10px] text-[var(--colore-principale)] font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform indicator-link">Vedi Link ↗</span>
        `;
        				docsContainer.appendChild(docRow);
        			});
        		}
        	});
        }

        function openStatsPage() {
        	// 1. Nascondiamo solo la schermata della Home, NON tutto il contenitore delle pagine!
        	document.getElementById('page-home').classList.add('hidden');

        	// 2. Mostriamo la pagina delle statistiche
        	document.getElementById('statsPage').classList.remove('hidden');

        	// 3. Nascondiamo il bottone fluttuante "+" per non farlo sovrapporre ai grafici
        	document.getElementById('floatingAddBtn').classList.add('hidden');

        	// 💡 NOTA: NON nascondiamo più 'bottomNavBar' o 'appPagesContainer', 
        	// così il menu in basso resta visibile!

        	creaFiltriEMostraGrafici();
        }

        function closeStatsPage() {
        	// 1. Nascondiamo le statistiche
        	document.getElementById('statsPage').classList.add('hidden');

        	// 2. Facciamo ricomparire la Home e il bottone "+"
        	document.getElementById('page-home').classList.remove('hidden');
        	document.getElementById('floatingAddBtn').classList.remove('hidden');

        	// 3. Resettiamo i grafici come facevi prima
        	Object.keys(istanzeGrafici).forEach(k => istanzeGrafici[k].destroy());
        	istanzeGrafici = {};
        }

        function toggleFilterSidebar(show) {
        	const overlay = document.getElementById('filterSidebarOverlay');
        	const sidebar = document.getElementById('filterSidebar');
        	if (show) {
        		overlay.classList.remove('hidden');
        		setTimeout(() => sidebar.style.transform = "translateX(0)", 20);
        	} else {
        		sidebar.style.transform = "translateX(100%)";
        		setTimeout(() => overlay.classList.add('hidden'), 300);
        	}
        }

        function creaFiltriEMostraGrafici() {
        	const containerFiltri = document.getElementById('filtersScrollContainer');
        	const containerGrafici = document.getElementById('chartsContainer');
        	containerFiltri.innerHTML = "";
        	containerGrafici.innerHTML = "";

        	const datiRaggruppati = {};
        	databaseEsami.forEach(e => {
        		if (!datiRaggruppati[e.biomarcatore]) datiRaggruppati[e.biomarcatore] = [];
        		datiRaggruppati[e.biomarcatore].push(e);
        	});

        	const listaBiomarcatori = Object.keys(datiRaggruppati).sort();

        	if (listaBiomarcatori.length === 0) {
        		containerGrafici.innerHTML = `<p class="text-center text-sm font-semibold text-gray-400 py-12">Nessun valore inserito per poter generare statistiche.</p>`;
        		return;
        	}

        	const btnAll = document.createElement('button');
        	btnAll.className = "filter-badge w-full text-left px-4 py-2.5 bg-[var(--colore-principale)] text-white text-xs font-bold rounded-xl shadow-sm transition-all";
        	btnAll.innerText = "✨ Mostra Tutti";
        	btnAll.onclick = () => {
        		filtraGrafico('all', btnAll);
        		toggleFilterSidebar(false);
        	};
        	containerFiltri.appendChild(btnAll);

        	listaBiomarcatori.forEach(nomeBio => {
        		const btn = document.createElement('button');
        		btn.className = "filter-badge w-full text-left px-4 py-2.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold rounded-xl transition-all hover:bg-purple-50/50";
        		btn.innerText = `🩸 ${nomeBio}`;
        		btn.onclick = () => {
        			filtraGrafico(nomeBio, btn);
        			toggleFilterSidebar(false);
        		};
        		containerFiltri.appendChild(btn);

        		const chartBox = document.createElement('div');
        		chartBox.id = `box-chart-${nomeBio.replace(/[^a-zA-Z0-9]/g, '_')}`;
        		chartBox.className = "chart-box bg-white p-5 rounded-[2rem] border border-gray-100 shadow-sm space-y-3";

        		const conf = configBiomarcatori[nomeBio] || {
        			unita: ""
        		};
        		chartBox.innerHTML = `
                    <div class="flex justify-between items-center px-1">
                        <h4 class="text-sm font-black text-gray-800">${nomeBio}</h4>
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-wide bg-gray-50 px-2 py-1 rounded-lg border border-gray-100">${conf.unita}</span>
                    </div>
                    <div class="relative w-full h-44">
                        <canvas id="canvas-${nomeBio.replace(/[^a-zA-Z0-9]/g, '_')}"></canvas>
                    </div>
                `;
        		containerGrafici.appendChild(chartBox);

        		const recordOrdinati = datiRaggruppati[nomeBio].sort((a, b) => new Date(a.data) - new Date(b.data));

        		const etichetteDate = recordOrdinati.map(r => {
        			const d = new Date(r.data);
        			return d.toLocaleDateString('it-IT', {
        				day: '2-digit',
        				month: '2-digit',
        				year: '2-digit'
        			});
        		});
        		const arrayValori = recordOrdinati.map(r => r.valore);

        		const coloriPunti = [];
        		const coloriBordoPunti = [];

        		recordOrdinati.forEach(r => {
        			let colore = 'var(--colore-principale)';
        			if (conf.isCololesstolo) {
        				colore = r.valore > 220 ? '#ef4444' : '#10b981';
        			} else if (conf.isHDL) {
        				colore = r.valore < 35 ? '#ef4444' : '#10b981';
        			} else if (conf.maxSoglia) {
        				colore = r.valore > conf.maxSoglia ? '#ef4444' : '#10b981';
        			} else if (!conf.noRange) {
        				if (r.valore < conf.min) colore = '#3b82f6';
        				else if (r.valore > conf.max) colore = '#ef4444';
        				else colore = '#10b981';
        			}
        			coloriPunti.push(colore);
        			coloriBordoPunti.push('#ffffff');
        		});

        		const ctx = document.getElementById(`canvas-${nomeBio.replace(/[^a-zA-Z0-9]/g, '_')}`).getContext('2d');
        		const gradiente = ctx.createLinearGradient(0, 0, 0, 160);
        		gradiente.addColorStop(0, 'rgba(148, 142, 242, 0.2)');
        		gradiente.addColorStop(1, 'rgba(148, 142, 242, 0.0)');

        		istanzeGrafici[nomeBio] = new Chart(ctx, {
        			type: 'line',
        			data: {
        				labels: etichetteDate,
        				datasets: [{
        					label: nomeBio,
        					data: arrayValori,
        					borderColor: 'var(--colore-principale)',
        					borderWidth: 2.5,
        					backgroundColor: gradiente,
        					fill: true,
        					tension: 0.4,
        					pointBackgroundColor: coloriPunti,
        					pointBorderColor: coloriBordoPunti,
        					pointBorderWidth: 2,
        					pointRadius: 5,
        					pointHoverRadius: 7
        				}]
        			},
        			options: {
        				responsive: true,
        				maintainAspectRatio: false,
        				plugins: {
        					legend: {
        						display: false
        					},
        					tooltip: {
        						enabled: true,
        						backgroundColor: '#1e1b4b',
        						padding: 10,
        						cornerRadius: 12,
        						displayColors: false
        					}
        				},
        				scales: {
        					x: {
        						grid: {
        							display: false
        						},
        						ticks: {
        							font: {
        								size: 8,
        								weight: 'bold'
        							},
        							color: '#9ca3af'
        						}
        					},
        					y: {
        						grid: {
        							color: '#f3f4f6'
        						},
        						ticks: {
        							font: {
        								size: 9,
        								weight: 'medium'
        							},
        							color: '#9ca3af'
        						}
        					}
        				}
        			}
        		});
        	});
        }

        function filtraGrafico(nomeBio, bottoneCliccato) {
        	document.querySelectorAll('.filter-badge').forEach(b => {
        		b.className = "filter-badge w-full text-left px-4 py-2.5 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-bold rounded-xl transition-all hover:bg-purple-50/50";
        	});
        	bottoneCliccato.className = "filter-badge w-full text-left px-4 py-2.5 bg-[var(--colore-principale)] text-white text-xs font-bold rounded-xl shadow-sm transition-all";

        	document.querySelectorAll('.chart-box').forEach(box => {
        		if (nomeBio === 'all') {
        			box.classList.remove('hidden');
        		} else {
        			const idTarget = `box-chart-${nomeBio.replace(/[^a-zA-Z0-9]/g, '_')}`;
        			if (box.id === idTarget) box.classList.remove('hidden');
        			else box.classList.add('hidden');
        		}
        	});
        }

    
 function activateEditMode() {
    isEditingModeActive = true;
    
    // Attiva tremolio su biomarcatori
    databaseEsami.forEach((_, index) => {
        const card = document.getElementById(`card-${index}`);
        if (card) {
            card.classList.add('animate-wiggle', 'border-red-300');
            card.querySelector('.indicator-status').classList.add('hidden');
            card.querySelector('.edit-controls').classList.remove('hidden');
        }
    });
    
    // Attiva tremolio su allegati
    databaseAllegati.forEach((_, index) => {
        const row = document.getElementById(`doc-row-${index}`);
        if (row) {
            row.classList.add('animate-wiggle', 'bg-red-50/50', 'border', 'border-red-200');
            row.querySelector('.indicator-link').classList.add('hidden');
            row.querySelector('.edit-controls-doc').classList.remove('hidden');
        }
    });
 } 


        function clearEditMode() {
        	if (!isEditingModeActive) return;
        	isEditingModeActive = false;
        	// Disattiva biomarcatori
        	databaseEsami.forEach((_, index) => {
        		const card = document.getElementById(`card-${index}`);
        		if (card) {
        			card.classList.remove('animate-wiggle', 'border-red-300');
        			card.querySelector('.indicator-status').classList.remove('hidden');
        			card.querySelector('.edit-controls').classList.add('hidden');
        		}
        	});
        	// Disattiva allegati
        	databaseAllegati.forEach((_, index) => {
        		const row = document.getElementById(`doc-row-${index}`);
        		if (row) {
        			row.classList.remove('animate-wiggle', 'bg-red-50/50', 'border', 'border-red-200');
        			row.querySelector('.indicator-link').classList.remove('hidden');
        			row.querySelector('.edit-controls-doc').classList.add('hidden');
        		}
        	});
        }

        function deleteRecord(index, event) {
        	event.stopPropagation();
        	const esame = databaseEsami[index];
        	if (!confirm(`Vuoi davvero eliminare definitivamente ${esame.biomarcatore} (${esame.valore})?`)) {
        		clearEditMode();
        		return;
        	}
        	document.getElementById('loadingOverlay').classList.remove('hidden');
        	fetch(API_URL, {
        			method: "POST",
        			body: JSON.stringify({
        				azione: "eliminaBiomarcatore",
        				data: esame.data,
        				biomarcatore: esame.biomarcatore,
        				valore: esame.valore
        			})
        		})
        		.then(res => res.json())
        		.then(res => {
        			if (res.status === "success") {
        				isEditingModeActive = false;
        				fetchDatiCloud();
        			} else {
        				alert("Errore: " + res.message);
        			}
        		})
        		.catch(err => alert("Errore di rete: " + err));
        }

        function openEditModal(index, event) {
        	event.stopPropagation();
        	clearEditMode();
        	const esame = databaseEsami[index];
        	openModal('modalBiomarcatori');
        	document.getElementById('modalBioTitolo').innerText = "Modifica Record";
        	document.getElementById('btnBioSubmit').innerText = "✓ Aggiorna Record";
        	document.getElementById('editIndex').value = index;
        	document.getElementById('oldData').value = esame.data;
        	document.getElementById('oldBiomarcatore').value = esame.biomarcatore;
        	document.getElementById('oldValore').value = esame.valore;
        	document.getElementById('addBioData').value = esame.data;
        	document.getElementById('addBioNome').value = esame.biomarcatore;
        	document.getElementById('addBioValore').value = esame.valore;
        	updateModalRanges();
        }

        function toggleBubbleMenu() {
        	const menu = document.getElementById('bubbleMenu');
        	const overlay = document.getElementById('overlay');
        	const plus = document.getElementById('plusIcon');
        	if (menu.classList.contains('hidden')) {
        		menu.classList.remove('hidden');
        		overlay.classList.remove('hidden');
        		setTimeout(() => {
        			menu.classList.add('menu-active');
        			plus.style.transform = 'rotate(135deg)';
        		}, 20);
        	} else {
        		closeAllModals();
        	}
        }

        function openModal(modalId) {
        	const menu = document.getElementById('bubbleMenu');
        	menu.classList.remove('menu-active');
        	setTimeout(() => {
        		menu.classList.add('hidden');
        		document.getElementById('overlay').classList.remove('hidden');
        		const modal = document.getElementById(modalId);
        		modal.classList.remove('hidden');
        		if (modalId === 'modalBiomarcatori') {
        			if (parseInt(document.getElementById('editIndex').value) === -1) {
        				document.getElementById('modalBioTitolo').innerText = "Nuovo Record";
        				document.getElementById('btnBioSubmit').innerText = "+ Add Record";
        				document.getElementById('addBioData').valueAsDate = new Date();
        			}
        			updateModalRanges();
        		} else {
        			document.getElementById('addDocData').valueAsDate = new Date();
        			document.getElementById('uploadFileLabel').innerText = "Seleziona File o Scatta Foto";
        		}
        	}, 200);
        	if (modalId === 'modalAllegati') {
        		aggiornaSelectTerapieInAllegati();
        	}
        }

        function closeAllModals() {
        	const menu = document.getElementById('bubbleMenu');
        	const plus = document.getElementById('plusIcon');
        	menu.classList.remove('menu-active');
        	plus.style.transform = 'rotate(0deg)';
        	setTimeout(() => {
        		menu.classList.add('hidden');
        		document.getElementById('overlay').classList.add('hidden');
        		document.getElementById('modalBiomarcatori').classList.add('hidden');
        		document.getElementById('modalAllegati').classList.add('hidden');
        		document.getElementById('editIndex').value = "-1";
        	}, 300);
        }

        function updateModalRanges() {
        	const nome = document.getElementById('addBioNome').value;
        	const config = configBiomarcatori[nome] || {
        		unita: "",
        		noRange: true
        	};
        	document.getElementById('addBioUnitaLabel').innerText = config.unita;
        	const rangeBox = document.getElementById('addBioRangeBox');

        	if (config.isColesterolo) {
        		rangeBox.innerHTML = `<div class="flex justify-between text-[9px] font-bold uppercase tracking-tight"><span class="text-green-600">Normale: &lt;220</span><span class="text-amber-600">Rischio: 220-240</span><span class="text-red-600">Elevato: &gt;240</span></div>`;
        	} else if (config.isHDL) {
        		rangeBox.innerHTML = `<div class="flex justify-between text-[9px] font-bold uppercase tracking-tight"><span class="text-green-600">Normale: &gt;45</span><span class="text-amber-600">Mod.: 35-45</span><span class="text-red-600">Rischio: &lt;35</span></div>`;
        	} else if (config.maxSoglia) {
        		rangeBox.innerHTML = `Valore massimo consentito: <span class="text-red-500 font-bold">Fino a ${config.maxSoglia} ${config.unita}</span>`;
        	} else if (config.noRange) {
        		rangeBox.innerHTML = `<span class="text-gray-400 italic">Parametro di monitoraggio generale (Senza range fisso)</span>`;
        	} else {
        		rangeBox.innerHTML = `Range standard: <span class="text-[var(--colore-principale)] font-bold">${config.min} - ${config.max} ${config.unita}</span>`;
        	}
        }

        function saveBiomarcatore(e) {
        	e.preventDefault();
        	const data = document.getElementById('addBioData').value;
        	const nome = document.getElementById('addBioNome').value;
        	const valore = parseFloat(document.getElementById('addBioValore').value);
        	const index = parseInt(document.getElementById('editIndex').value);

        	closeAllModals();
        	document.getElementById('loadingOverlay').classList.remove('hidden');

        	if (index === -1) {
        		fetch(API_URL, {
        				method: "POST",
        				body: JSON.stringify({
        					azione: "nuovoBiomarcatore",
        					data: data,
        					biomarcatore: nome,
        					valore: valore
        				})
        			})
        			.then(res => res.json())
        			.then(res => {
        				if (res.status === "success") {
        					document.getElementById('formBiomarcatori').reset();
        					fetchDatiCloud();
        				} else {
        					alert("Errore: " + res.message);
        				}
        			})
        			.catch(err => alert("Errore di rete: " + err));
        	} else {
        		const oldData = document.getElementById('oldData').value;
        		const oldBio = document.getElementById('oldBiomarcatore').value;
        		const oldVal = parseFloat(document.getElementById('oldValore').value);

        		fetch(API_URL, {
        				method: "POST",
        				body: JSON.stringify({
        					azione: "eliminaBiomarcatore",
        					data: oldData,
        					biomarcatore: oldBio,
        					valore: oldVal
        				})
        			})
        			.then(res => res.json())
        			.then(res => {
        				if (res.status === "success") {
        					return fetch(API_URL, {
        						method: "POST",
        						body: JSON.stringify({
        							azione: "nuovoBiomarcatore",
        							data: data,
        							biomarcatore: nome,
        							valore: valore
        						})
        					});
        				} else {
        					throw new Error("Errore rimozione");
        				}
        			})
        			.then(res => res.json())
        			.then(res => {
        				if (res.status === "success") {
        					document.getElementById('formBiomarcatori').reset();
        					fetchDatiCloud();
        				} else {
        					alert("Errore: " + res.message);
        				}
        			})
        			.catch(err => alert("Errore: " + err));
        	}
        }

        function deleteAllegato(index, event) {
        	event.stopPropagation();
        	const doc = databaseAllegati[index];
        	if (!confirm(`Vuoi davvero eliminare definitivamente il documento "${doc.titolo}"?`)) {
        		clearEditMode();
        		return;
        	}
        	document.getElementById('loadingOverlay').classList.remove('hidden');

        	fetch(API_URL, {
        			method: "POST",
        			body: JSON.stringify({
        				azione: "eliminaAllegato",
        				data: doc.data,
        				titolo: doc.titolo,
        				url: doc.url
        			})
        		})
        		.then(res => res.json())
        		.then(res => {
        			if (res.status === "success") {
        				isEditingModeActive = false;
        				fetchDatiCloud();
        			} else {
        				alert("Errore: " + res.message);
        			}
        		})
        		.catch(err => alert("Errore di rete: " + err));
        }

        // 👑 LA FUNZIONE RIUNITA E CORRETTA AL 100% (SISTEMA IL CRASH):
function openEditAllegatoModal(index, event) {
    if (event) event.stopPropagation();
    clearEditMode();

    const doc = databaseAllegati[index];
    if (!doc) return;
    
    openModal('modalAllegati');

    // Cambia i testi del modal per la modifica (Spostati qui dentro in sicurezza!)
    document.querySelector('#modalAllegati h3').innerText = "Modifica Documento";
    document.querySelector('#modalAllegati button[type="submit"]').innerText = "✓ Aggiorna Allegato";

    // Popola i campi nascosti e i dati di backup per Google Sheets
    document.getElementById('editDocIndex').value = index;
    document.getElementById('oldDocData').value = doc.data || "";
    document.getElementById('oldDocTitolo').value = doc.yellow || doc.titolo || "";
    document.getElementById('oldDocUrl').value = doc.url || "";

    // Popola i campi visibili con i dati attuali del documento
    document.getElementById('addDocData').value = doc.data || "";
    document.getElementById('addDocTitolo').value = doc.titolo || "";
    document.getElementById('uploadFileLabel').innerText = "File già presente (Seleziona solo se vuoi sostituirlo)";
    document.getElementById('addDocTag').value = ""; // Resetta la tendina in modifica

    // Aggiorna subito il menu a tendina delle terapie
    if (typeof aggiornaSelectTerapieInAllegati === 'function') {
        aggiornaSelectTerapieInAllegati();
    }

    // Se l'allegato aveva già una terapia collegata, la seleziona nel menu
    if (doc.terapiaCollegataId || doc.terapiaId) {
        const selectTerapia = document.getElementById('addDocTerapiaCollegata');
        if (selectTerapia) {
            selectTerapia.value = doc.terapiaCollegataId || doc.terapiaId;
        }
    }
}


        
        function aggiornaSelectTerapieInAllegati() {
        	const selectTerapia = document.getElementById('addDocTerapiaCollegata');
        	if (!selectTerapia) return;

        	// Svuota mantenendo la prima opzione di default
        	selectTerapia.innerHTML = '<option value="">-- Nessuna terapia --</option>';

        	// Usa 'databaseTerapie' (che abbiamo definito nella Parte 1) invece di listaTerapieGlobali
        	if (typeof databaseTerapie !== 'undefined' && databaseTerapie.length > 0) {
        		databaseTerapie.forEach(terapia => {
        			const option = document.createElement('option');
        			// Usiamo l'ID univoco o il nome come valore, e mostriamo Nome + Farmaco nel menu
        			option.value = terapia.id || terapia.nome;
        			option.textContent = `${terapia.nome} (${terapia.farmaco || 'Nessun farmaco'})`;
        			selectTerapia.appendChild(option);
        		});
        	}
        }


        


        function saveAllegato(e) {
        	e.preventDefault();
        	const fileInput = document.getElementById('addDocFile');
        	const data = document.getElementById('addDocData').value;
        	const tagSelezionato = document.getElementById('addDocTag').value;
        	let titolo = document.getElementById('addDocTitolo').value.trim();
        	const terapiaCollegata = document.getElementById('addDocTerapiaCollegata').value; // Recupera l'ID della terapia
        	const index = parseInt(document.getElementById('editDocIndex').value);

        	if (tagSelezionato) {
        		titolo = `[${tagSelezionato}] ${titolo}`;
        	}

        	closeAllModals();
        	document.getElementById('loadingOverlay').classList.remove('hidden');

        	const inviaDatiCloud = (stringaBase64 = null, fileObj = null) => {
        		const payload = {
        			azione: index === -1 ? "nuovoAllegato" : "modificaAllegato",
        			data: data,
        			titolo: titolo,
        			terapiaId: terapiaCollegata, // ✨ Spediamo 'terapiaId' a Google Sheets così combacia con la colonna del foglio!
        			oldData: document.getElementById('oldDocData').value,
        			oldTitolo: document.getElementById('oldDocTitolo').value,
        			oldUrl: document.getElementById('oldDocUrl').value
        		};

        		if (stringaBase64 && fileObj) {
        			payload.nomeFile = fileObj.name;
        			payload.tipoMime = fileObj.type;
        			payload.fileBase64 = stringaBase64;
        		}

        		fetch(API_URL, {
        				method: "POST",
        				body: JSON.stringify(payload)
        			})
        			.then(res => res.json())
        			.then(res => {
        				if (res.status === "success") {

        					// ✨ TRUCCO: Se è un nuovo allegato, spingilo subito dentro l'array locale per vederlo all'istante
        					if (index === -1) {
        						databaseAllegati.push({
        							titolo: titolo,
        							data: data,
        							url: res.fileUrl || "#",
        							terapiaId: terapiaCollegata // ✨ Aggiornato in terapiaId
        						});
        					}

        					document.getElementById('formAllegati').reset();
        					document.getElementById('editDocIndex').value = "-1";
        					document.querySelector('#modalAllegati h3').innerText = "Aggiungi Documento";
        					document.querySelector('#modalAllegati button[type="submit"]').innerText = "+ Salva Allegato";

        					fetchDatiCloud();
        					if (typeof renderTerapie === 'function') setTimeout(renderTerapie, 500);
        				} else {
        					alert("Errore file: " + res.message);
        					document.getElementById('loadingOverlay').classList.add('hidden');
        				}
        			})
        			.catch(err => {
        				alert("Errore network: " + err);
        				document.getElementById('loadingOverlay').classList.add('hidden');
        			});
        	};

        	if (fileInput.files.length > 0) {
        		const file = fileInput.files[0];
        		const lettore = new FileReader();
        		lettore.onload = function(evento) {
        			const stringaBase64 = evento.target.result.split(',')[1];
        			inviaDatiCloud(stringaBase64, file);
        		};
        		lettore.readAsDataURL(file);
        	} else {
        		if (index !== -1) {
        			inviaDatiCloud();
        		} else {
        			alert("Seleziona un file prima di salvare!");
        			document.getElementById('loadingOverlay').classList.add('hidden');
        		}
        	}
        }

        function backToFolders() {
        	currentOpenYear = null;
        	document.getElementById('folderDetail').classList.add('hidden');
        	document.getElementById('foldersContainer').classList.remove('hidden');
        }

        function openColorPicker(anno) {
        	document.getElementById('selectedFolderYear').value = anno;
        	const modal = document.getElementById('modalColorPicker');
        	modal.classList.remove('hidden');
        	setTimeout(() => modal.querySelector('div').classList.remove('scale-95'), 10);
        }

        function closeColorPicker() {
        	const modal = document.getElementById('modalColorPicker');
        	modal.querySelector('div').classList.add('scale-95');
        	setTimeout(() => modal.classList.add('hidden'), 150);
        }

        function applicaColoreCartella(colore) {
        	const anno = document.getElementById('selectedFolderYear').value;
        	if (!anno) return;

        	localStorage.setItem(`color-folder-${anno}`, colore);

        	const folderCard = document.getElementById(`folder-card-${anno}`);
        	if (folderCard) {
        		folderCard.style.background = `linear-gradient(135deg, ${colore} 0%, #ffffff 130%)`;
        	}

        	const folderSvg = folderCard.querySelector('svg');
        	if (folderSvg) {
        		folderSvg.style.color = colore;
        		folderSvg.style.fill = colore;
        	}

        	closeColorPicker();
        }

        function applicaIconaCartella(idIcona) {
        	const anno = document.getElementById('selectedFolderYear').value;
        	if (!anno) return;

        	// 1. Salva l'icona scelta nel browser per quell'anno specifico
        	localStorage.setItem(`icon-folder-${anno}`, idIcona);

        	// 2. Aggiorna l'icona della tessera a schermo all'istante
        	const folderCard = document.getElementById(`folder-card-${anno}`);
        	if (folderCard) {
        		const useTag = folderCard.querySelector('use');
        		if (useTag) {
        			// Cambia l'indirizzo del link dello sprite modificando l'ID dopo il cancelletto
        			useTag.setAttribute('href', `assets/icons/sprite.svg#${idIcona}`);
        			// Rinfresca lo stile in linea per sicurezza
        			useTag.style.cssText = "stroke: currentColor !important; fill: none !important; stroke-width: 1.5px;";
        		}
        	}

        	// Chiude il modal del selettore stile
        	closeColorPicker();
        }

        function salvaNomeImpostazioni() {
        	const nuovoNome = document.getElementById('inputNomeUtente').value.trim();

        	if (nuovoNome === "") {
        		alert("Inserisci un nome valido!");
        		return;
        	}

        	// 1. Salva il nome nel browser
        	localStorage.setItem('user-custom-name', nuovoNome);

        	// 2. Aggiorna immediatamente il saluto nella Home senza dover ricaricare la pagina
        	document.getElementById('mainGreeting').innerText = `Ciao, ${nuovoNome}`;

        	alert("Nome aggiornato con successo! 😀");
        }
        // ==================== LOGICA E RENDERING TERAPIE ====================
        function renderTerapie() {
        	const container = document.getElementById('therapiesContainer');
        	if (!container) return;

        	if (databaseTerapie.length === 0) {
        		container.innerHTML = `
            <div class="flex flex-col items-center justify-center py-12 text-center">
                <svg class="w-6 h-6 translate-y-[3px]  text-[var(--colore-principale)]">
                  <use href="assets/icons/sprite.svg#therapies"></use>
                </svg>
                <p class="mt-2 text-xs font-semibold text-gray-400">Nessun piano terapeutico attivo.</p>
                <button onclick="apriModalNuovaTerapia()" class="mt-4 px-4 py-2 bg-[var(--colore-principale)] text-white text-xs font-bold rounded-xl shadow-md active:scale-95 transition-all">
                    Aggiungi Terapia
                </button>
            </div>
        `;
        		return;
        	}

        	// Se c'è almeno una terapia e non c'è una tab attiva selezionata, seleziona la prima
        	if (!terapiaAttivaId && databaseTerapie.length > 0) {
        		terapiaAttivaId = databaseTerapie[0].id;
        	}

        	// 1. Costruiamo le TAB orizzontali tipo Schedario Smussato
        	let htmlTabs = `<div class="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-4 border-b border-gray-100">`;

        	databaseTerapie.forEach(terapia => {
        		const isActive = terapia.id === terapiaAttivaId;
        		htmlTabs += `
            <button onclick="selezionaTerapiaTab('${terapia.id}')" 
                class="px-4 py-2.5 text-xs font-black uppercase tracking-wider rounded-t-xl rounded-b-sm border-t border-x transition-all duration-300 whitespace-nowrap
                ${isActive 
                    ? 'bg-white text-[var(--colore-principale)] border-gray-200/80 shadow-[0_-4px_12px_rgba(0,0,0,0.02)] -translate-y-[2px]' 
                    : 'bg-gray-50 text-gray-400 border-transparent hover:bg-gray-100/70'
                }">
                ${terapia.nome}
            </button>
        `;
        	});

        	// Bottone "+" rapido alla fine delle tab per aggiungerne un'altra
        	htmlTabs += `
        <button onclick="apriModalNuovaTerapia()" class="px-3 py-2 text-xs font-bold bg-[var(--colore-principale)]/10 text-[var(--colore-principale)] rounded-t-xl rounded-b-sm border border-dashed border-[var(--colore-principale)]/30 active:scale-95 transition-all">
            + Nuova
        </button>
    </div>`;

        	// 2. Troviamo i dati della terapia attualmente selezionata per mostrare i dettagli
        	const terapiaSelezionata = databaseTerapie.find(t => t.id === terapiaAttivaId) || databaseTerapie[0];

        	// Calcoliamo le date future in automatico
        	const dateScadenzeHTML = calcolaDateScadenzeHTML(terapiaSelezionata.dataInizio, terapiaSelezionata.frequenzaGiorni, terapiaSelezionata.durataMesi);


        	// ✨ TRUCCO: Filtriamo dal database globale tutti gli allegati di Google Sheets legati a questa terapia
        	const allegatiDellaTerapia = databaseAllegati.filter(a => {
        		// Controlliamo sia se si chiama terapiaId sia se si chiama terapiaCollegataId per sicurezza
        		const valoreTerapiaAllegato = a.terapiaId || a.terapiaCollegataId;
        		if (!valoreTerapiaAllegato) return false;

        		const idTerapia = String(terapiaSelezionata.id).toLowerCase().trim();
        		const nomeTerapia = String(terapiaSelezionata.nome).toLowerCase().trim();
        		const valorePulito = String(valoreTerapiaAllegato).toLowerCase().trim();

        		return valorePulito === idTerapia || valorePulito === nomeTerapia;
        	});

        	let htmlAllegatiSecondari = "";
        	if (allegatiDellaTerapia.length > 0) {
        		allegatiDellaTerapia.forEach(all => {
        			htmlAllegatiSecondari += `
                <div class="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-xl shadow-xs hover:bg-gray-50 transition-colors cursor-pointer mt-2" onclick="window.open('${all.url}', '_blank')">
                    <div class="flex items-center gap-2.5 overflow-hidden">
                        <span class="text-base flex-shrink-0">📎</span>
                        <span class="text-xs font-bold text-gray-700 truncate pr-2">${all.titolo}</span>
                    </div>
                    <span class="text-[9px] font-black text-[var(--colore-principale)] uppercase whitespace-nowrap bg-purple-50/60 px-2 py-0.5 rounded-md">Vedi ↗</span>
                </div>
            `;
        		});
        	} else {
        		htmlAllegatiSecondari = `<p class="text-[11px] font-medium text-gray-400 italic mt-1">Nessun allegato secondario aggiunto a questa terapia.</p>`;
        	}

        	// 3. Generiamo il corpo del dettaglio della Tab attiva
        	let htmlDettagli = `
        <div class="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm space-y-5 animate-fade-in">
            <div class="flex justify-between items-start">
                <div>
                    <span class="text-[9px] font-black uppercase bg-purple-50 text-[var(--colore-principale)] px-2 py-0.5 rounded-md">Farmaco</span>
                    <h3 class="text-lg font-black text-gray-800 mt-1">${terapiaSelezionata.farmaco}</h3>
                </div>
                <div class="flex gap-2">
                    <button onclick="modificaTerapia('${terapiaSelezionata.id}')" class="p-2 bg-gray-50 text-gray-400 hover:text-gray-600 rounded-xl transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                    </button>
                    <button onclick="eliminaTerapia('${terapiaSelezionata.id}')" class="p-2 bg-red-50 text-red-400 hover:text-red-600 rounded-xl transition-colors">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-4v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            </div>

            <div class="bg-[#fcf8f9] rounded-xl p-4 border border-purple-100/30">
                <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider block">Indicazioni e Dosaggio</span>
                <p class="text-xs font-bold text-gray-700 mt-1 leading-relaxed">${terapiaSelezionata.dosaggio}</p>
                <div class="text-[10px] font-semibold text-gray-400 mt-2 flex items-center gap-1.5">
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    Data d'inizio: ${formattaDataItaliana(terapiaSelezionata.dataInizio)}
                </div>
            </div>

            <div class="border-t border-gray-100 pt-4">
                <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Referto / Piano Primario</span>
                ${terapiaSelezionata.allegatoUrl 
                    ? `
                    <div class="flex justify-between items-center bg-white border border-gray-100 p-3 rounded-xl shadow-sm hover:bg-gray-50 transition-colors cursor-pointer" onclick="window.open('${terapiaSelezionata.allegatoUrl}', '_blank')">
                        <div class="flex items-center gap-2.5 overflow-hidden">
                            <span class="text-xl flex-shrink-0">📄</span>
                            <span class="text-xs font-bold text-gray-700 truncate pr-2">${terapiaSelezionata.allegatoNome}</span>
                        </div>
                        <span class="text-[10px] font-black text-[var(--colore-principale)] uppercase whitespace-nowrap bg-purple-50 px-2 py-1 rounded-md">Apri</span>
                    </div>
                    `
                    : `
                    <p class="text-[11px] font-medium text-gray-400 italic">Nessun documento primario allegato.</p>
                    `
                }
            </div>

            <!-- Qui stampiamo tutti gli allegati di Google Sheets collegati a questa terapia -->
            <div class="border-t border-gray-100 pt-4">
                <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-2">Altri Documenti / Esami Collegati</span>
                <div class="space-y-1">
                    ${htmlAllegatiSecondari}
                </div>
            </div>

            <div class="border-t border-gray-100 pt-4">
                <span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider block mb-3">Scadenze Calcolate (Prossime assunzioni)</span>
                <div class="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1 no-scrollbar">
                    ${dateScadenzeHTML}
                </div>
            </div>
        </div>
    `;

        	container.innerHTML = htmlTabs + htmlDettagli;
        }

        function selezionaTerapiaTab(id) {
        	terapiaAttivaId = id;
        	renderTerapie();
        }

        // Apri il modale per una nuova terapia
        function apriModalNuovaTerapia() {
        	document.getElementById('modalTerapiaTitolo').innerText = "Nuovo Piano Terapeutico";
        	document.getElementById('inputTerapiaId').value = "";
        	document.getElementById('inputTerapiaNome').value = "";
        	document.getElementById('inputTerapiaFarmaco').value = "";
        	document.getElementById('inputTerapiaDosaggio').value = "";
        	document.getElementById('inputTerapiaDataInizio').value = new Date().toISOString().split('T')[0];
        	document.getElementById('inputTerapiaFrequenza').value = "";
        	document.getElementById('inputTerapiaDurata').value = "";

        	popolaSelectAllegati(null);

        	const modal = document.getElementById('modalTerapia');
        	modal.classList.remove('hidden');
        	setTimeout(() => modal.querySelector('div').classList.remove('scale-95'), 10);
        }

        // Chiudi il modale
        function chiudiModalTerapia() {
        	const modal = document.getElementById('modalTerapia');
        	modal.querySelector('div').classList.add('scale-95');
        	setTimeout(() => modal.classList.add('hidden'), 150);
        }

        // Questa funzione scansiona la tua variabile globale degli esami e riempie il menu a tendina
        function popolaSelectAllegati(urlSelezionato) {
        	const select = document.getElementById('selectTerapiaAllegato');
        	if (!select) return;

        	select.innerHTML = `<option value="">-- Nessun documento allegato --</option>`;

        	// 🚀 Usiamo il tuo array reale dei referti sincronizzati con Google Drive!
        	if (typeof databaseAllegati !== 'undefined' && databaseAllegati.length > 0) {
        		databaseAllegati.forEach((doc, indice) => {
        			// Intercettiamo il link di Google Drive o il contenuto del file
        			const url = doc.url || doc.allegatoUrl || doc.fileContent || doc.file || doc.webviewLink;
        			// Intercettiamo il nome del file (es. "[Altro referto] Prova")
        			const nomeFile = doc.titolo || doc.nomeFile || doc.allegatoNome || doc.nome || `Documento ${indice + 1}`;

        			if (url) {
        				const selected = url === urlSelezionato ? 'selected' : '';
        				// Estraiamo l'anno se disponibile, altrimenti mettiamo un'etichetta generica
        				const infoAnno = doc.anno || (doc.data ? doc.data.split('-')[0] : 'Drive');

        				select.innerHTML += `<option value="${url}" data-nome="${nomeFile}" ${selected}>[${infoAnno}] - ${nomeFile}</option>`;
        			}
        		});
        	}
        }

        // Salva o Aggiorna la Terapia
        function salvaTerapia() {
        	const id = document.getElementById('inputTerapiaId').value;
        	const nome = document.getElementById('inputTerapiaNome').value.trim();
        	const farmaco = document.getElementById('inputTerapiaFarmaco').value.trim();
        	const dosaggio = document.getElementById('inputTerapiaDosaggio').value.trim();
        	const dataInizio = document.getElementById('inputTerapiaDataInizio').value;
        	const frequenza = document.getElementById('inputTerapiaFrequenza').value;
        	const durata = document.getElementById('inputTerapiaDurata').value;

        	const selectAllegato = document.getElementById('selectTerapiaAllegato');
        	const allegatoUrl = selectAllegato.value;
        	const allegatoNome = allegatoUrl ? selectAllegato.options[selectAllegato.selectedIndex].getAttribute('data-nome') : "";

        	if (!nome || !farmaco || !dataInizio || !frequenza || !durata) {
        		alert("Per favore, compila tutti i campi obbligatori!");
        		return;
        	}

        	if (id) {
        		// MODALITÀ MODIFICA: cerchiamo la vecchia terapia e la aggiorniamo
        		const index = databaseTerapie.findIndex(t => t.id === id);
        		if (index !== -1) {
        			databaseTerapie[index] = {
        				id,
        				nome,
        				farmaco,
        				dosaggio,
        				dataInizio,
        				frequenzaGiorni: frequenza,
        				durataMesi: durata,
        				allegatoUrl,
        				allegatoNome
        			};
        		}
        	} else {
        		// MODALITÀ NUOVA: creiamo un oggetto fresco con ID univoco temporale
        		const nuovaTerapia = {
        			id: 'terapia_' + Date.now(),
        			nome,
        			farmaco,
        			dosaggio,
        			dataInizio,
        			frequenzaGiorni: frequenza,
        			durataMesi: durata,
        			allegatoUrl,
        			allegatoNome
        		};
        		databaseTerapie.push(nuovaTerapia);
        		terapiaAttivaId = nuovaTerapia.id; // Seleziona automaticamente la nuova tab creata
        	}

        	// Salva nel browser e aggiorna la schermata
        	localStorage.setItem('health-app-terapie', JSON.stringify(databaseTerapie));
        	chiudiModalTerapia();
        	renderTerapie();
        }

        // Elimina una Terapia dallo schedario
        function eliminaTerapia(id) {
        	if (!confirm("Sei sicuro di voler eliminare definitivamente questo piano terapeutico?")) return;

        	databaseTerapie = databaseTerapie.filter(t => t.id !== id);
        	localStorage.setItem('health-app-terapie', JSON.stringify(databaseTerapie));

        	// Resettiamo la tab attiva se abbiamo eliminato quella corrente
        	if (terapiaAttivaId === id) {
        		terapiaAttivaId = databaseTerapie.length > 0 ? databaseTerapie[0].id : null;
        	}

        	renderTerapie();
        }

        // Avvia la modifica ripopolando i campi del modale
        function modificaTerapia(id) {
        	const terapia = databaseTerapie.find(t => t.id === id);
        	if (!terapia) return;

        	document.getElementById('modalTerapiaTitolo').innerText = "Modifica Terapia";
        	document.getElementById('inputTerapiaId').value = terapia.id;
        	document.getElementById('inputTerapiaNome').value = terapia.nome;
        	document.getElementById('inputTerapiaFarmaco').value = terapia.farmaco;
        	document.getElementById('inputTerapiaDosaggio').value = terapia.dosaggio;
        	document.getElementById('inputTerapiaDataInizio').value = terapia.dataInizio;
        	document.getElementById('inputTerapiaFrequenza').value = terapia.frequenzaGiorni;
        	document.getElementById('inputTerapiaDurata').value = terapia.durataMesi;

        	popolaSelectAllegati(terapia.allegatoUrl);

        	const modal = document.getElementById('modalTerapia');
        	modal.classList.remove('hidden');
        	setTimeout(() => modal.querySelector('div').classList.remove('scale-95'), 10);
        }

        function formattaDataItaliana(dataString) {
        	if (!dataString) return "";
        	const parti = dataString.split('-');
        	if (parti.length !== 3) return dataString;
        	return `${parti[2]}/${parti[1]}/${parti[0]}`;
        }

        function calcolaDateScadenzeHTML(dataInizioStr, frequenzaGiorni, durataMesi) {
        	const dataInizio = new Date(dataInizioStr);
        	const frequenza = parseInt(frequenzaGiorni);
        	const durataInMesi = parseInt(durataMesi);

        	if (isNaN(dataInizio.getTime()) || isNaN(frequenza) || isNaN(durataInMesi)) return "";

        	const dataFine = new Date(dataInizio);
        	dataFine.setMonth(dataFine.getMonth() + durataInMesi);

        	let html = "";
        	let dataCorrente = new Date(dataInizio);
        	const oggi = new Date();
        	oggi.setHours(0, 0, 0, 0); // Azzeriamo le ore per un confronto preciso sulla giornata

        	let trovatoProssimo = false;

        	// Ciclo finché non superiamo la data di fine terapia
        	while (dataCorrente <= dataFine) {
        		const tempoCorrente = dataCorrente.getTime();
        		const dataConfronto = new Date(dataCorrente);
        		dataConfronto.setHours(0, 0, 0, 0);

        		let classeStile = "";
        		let badge = "";

        		if (dataConfronto < oggi) {
        			// Data passata (Grigia e sbiadita)
        			classeStile = "bg-gray-50 border-gray-100 text-gray-300 line-through";
        			badge = `<span class="text-[8px] font-bold uppercase text-gray-400">Presa</span>`;
        		} else if (!trovatoProssimo && dataConfronto >= oggi) {
        			// È la prima scadenza nel futuro: la contrassegniamo come prossima assunzione!
        			classeStile = "bg-purple-50/60 border-purple-200 text-[var(--colore-principale)] font-black shadow-sm ring-1 ring-[var(--colore-principale)]/10 animate-pulse";
        			badge = `<span class="text-[8px] font-black uppercase bg-[var(--colore-principale)] text-white px-1.5 py-0.5 rounded">Prossima</span>`;
        			trovatoProssimo = true;
        		} else {
        			// Date future successive
        			classeStile = "bg-white border-gray-100 text-gray-700 font-semibold";
        			badge = `<span class="text-[8px] font-bold uppercase text-gray-400">Futura</span>`;
        		}

        		// Formattazione giorno/mese/anno leggibile
        		const giorno = String(dataCorrente.getDate()).padStart(2, '0');
        		const mese = String(dataCorrente.getMonth() + 1).padStart(2, '0');
        		const anno = dataCorrente.getFullYear();
        		const dataFormattata = `${giorno}/${mese}/${anno}`;

        		html += `
            <div class="border p-2.5 rounded-xl flex items-center justify-between text-xs transition-all ${classeStile}">
                <span>${dataFormattata}</span>
                ${badge}
            </div>
        `;

        		// Avanziamo con la frequenza dei giorni stabilita
        		dataCorrente.setDate(dataCorrente.getDate() + frequenza);
        	}

        	return html || `<p class="col-span-2 text-center text-[11px] font-medium text-gray-400 italic">Nessuna data generabile.</p>`;
        }

        // ==================== FINE LOGICA TERAPIE ====================

        // ==================== CANCELLAZIONE INTERO ANNO ARCHIVIO (ANTI-FANTASMA) ====================

        function eliminaInteroAnnoArchivio() {
        	const annoDaEliminare = document.getElementById('selectedFolderYear').value;
        	if (!annoDaEliminare) return;

        	if (!confirm(`Vuoi davvero eliminare DEFINITIVAMENTE l'anno ${annoDaEliminare}? Verranno cancellati tutti gli esami e i documenti di questo anno.`)) {
        		closeColorPicker();
        		return;
        	}

        	// 1. Mostra la schermata di caricamento / sincronizzazione
        	document.getElementById('loadingOverlay').style.opacity = "1";
        	document.getElementById('loadingOverlay').classList.remove('hidden');

        	// 💾 2. PIALLATURA LOCALE IMMEDIATA E IRREVERSIBILE
        	databaseEsami = databaseEsami.filter(e => new Date(e.data).getFullYear() !== parseInt(annoDaEliminare));
        	databaseAllegati = databaseAllegati.filter(a => new Date(a.data).getFullYear() !== parseInt(annoDaEliminare));

        	// Rimuove i colori e le icone salvati nel browser
        	localStorage.removeItem(`color-folder-${annoDaEliminare}`);
        	localStorage.removeItem(`icon-folder-${annoDaEliminare}`);

        	// Aggiorna subito la grafica a schermo (La cartella sparisce ORA)
        	renderFolders();
        	closeColorPicker();

        	// 🌐 3. AGGIORNIAMO IL CLOUD E ABBIAMO PAZIENZA CON GOOGLE SHEETS
        	fetch(API_URL, {
        			method: "POST",
        			body: JSON.stringify({
        				azione: "eliminaBiomarcatore",
        				anno: annoDaEliminare
        			})
        		})
        		.then(res => res.json())
        		.then(res => {
        			console.log("Richiesta di cancellazione accettata dal server:", res);

        			// ⏳ IL TRUCCO DEL CAPRICORNO: Aspettiamo 2.5 secondi (2500ms) prima di riscaricare i dati dal Cloud!
        			// Diamo a Google Apps Script il tempo fisico di cancellare le righe e salvare il file Excel.
        			setTimeout(() => {
        				fetch(API_URL)
        					.then(r => r.json())
        					.then(data => {
        						// Filtriamo di sicurezza anche i dati appena scaricati, per evitare ritorni fantasma
        						databaseEsami = (data.esami || []).filter(e => new Date(e.data).getFullYear() !== parseInt(annoDaEliminare));
        						databaseAllegati = (data.allegati || []).filter(a => new Date(a.data).getFullYear() !== parseInt(annoDaEliminare));

        						// Ridisegna l'app pulita
        						renderFolders();

        						// Spegne la rotella di sincronizzazione solo alla fine di tutto il ritardo
        						document.getElementById('loadingOverlay').style.opacity = "0";
        						setTimeout(() => document.getElementById('loadingOverlay').classList.add('hidden'), 300);
        					});
        			}, 2500); // 2 secondi e mezzo di attesa di sicurezza
        		})
        		.catch(err => {
        			console.warn("Errore di rete cloud, mantengo la cancellazione locale:", err);
        			renderFolders();
        			document.getElementById('loadingOverlay').style.opacity = "0";
        			setTimeout(() => document.getElementById('loadingOverlay').classList.add('hidden'), 300);
        		});
        }
