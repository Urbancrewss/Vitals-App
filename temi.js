// ==================== GESTIONE TEMI DINAMICI (FILE ESTERNO) ====================

function applicaTema(nomeTema) {
    document.documentElement.setAttribute('data-theme', nomeTema);
    localStorage.setItem('health-app-tema', nomeTema);
    
    // Rinfresca i grafici se sono aperti
    if(typeof creaFiltriEMostraGrafici === 'function' && document.getElementById('statsPage') && !document.getElementById('statsPage').classList.contains('hidden')) {
        creaFiltriEMostraGrafici();
    }
}

// Assicurati che questa funzione sia presente e scritta così
function inizializzaTemaAllAvvio() {
    const temaSalvato = localStorage.getItem('health-app-tema') || 'default';
    applicaTema(temaSalvato);
}

// ==================== DATABASE TEMI CROMATICI ====================

const databaseTemi = {  
  "default": {
    "--colore-principale": "#7692ff",
    "--colore-secondario": "#abd2fa",
    "--colore-scuro": "#091540",
    "--colore-chiaro": "#d5e9fd",
    "--colore-accento": "#000000",
    "--bg-page": "#f5f8ff",
    "--bg-surface": "rgb(255, 255, 255, 0.95)",
    "--bg-calendar": "#f0f4ff",
    "--bg-navigation": "#9dabd4",
    "--gradient-stats": "linear-gradient(to right, rgba(118, 146, 255, 0.25), rgba(171, 210, 250, 0.25))",
    "--gradient-promemoria": "linear-gradient(to right, rgba(118, 146, 255, 0.25), rgba(27, 44, 193, 0.25))",
    "--border-sections": "1px solid rgba(9, 21, 64, 0.25)"
  },
  "purple": {
    "--colore-principale": "#948ef2",
    "--colore-secondario": "#e2a9be",
    "--colore-scuro": "#1a1636",
    "--colore-chiaro": "#f6f5ff",
    "--colore-accento": "#000000",
    "--bg-page": "#fcf8f9",
    "--bg-surface": "rgba(255, 255, 255, 0.96)",
    "--bg-calendar": "#fcf8f9",
    "--bg-navigation": "rgba(255, 255, 255, 0.95)",
    "--gradient-stats": "linear-gradient(to right, rgba(148, 142, 242, 0.15), rgba(226, 169, 190, 0.15))",
    "--gradient-promemoria": "linear-gradient(to right, rgba(148, 142, 242, 0.15), rgba(246, 245, 255, 0.4))",
    "--border-sections": "1px solid rgba(148, 142, 242, 0.2)"
  },
  "melon": {
    "--colore-principale": "#fdcb7b",
    "--colore-secondario": "#eea64b",
    "--colore-scuro": "#788417",
    "--colore-chiaro": "#f6f1bc",
    "--colore-accento": "#000000",
    "--bg-page": "#f6f1bc",
    "--bg-surface": "rgba(255, 255, 255, 0.95)",
    "--bg-calendar": "#fff8e8",
    "--bg-navigation": "#d9a85f",
    "--gradient-stats": "linear-gradient(to right, rgba(253, 203, 123, 0.25), rgba(238, 166, 75, 0.25))",
    "--gradient-promemoria": "linear-gradient(to right, rgba(253, 203, 123, 0.25), rgba(217, 100, 31, 0.25))",
    "--border-sections": "1px solid rgba(170, 176, 38, 0.35)"
  },
  "dark-midnight": {
    "--colore-principale": "#464c55",
    "--colore-secondario": "#7f8995",
    "--colore-scuro": "#141214",
    "--colore-chiaro": "#c2c7cf",
    "--colore-accento": "#9ea7b3",
    "--bg-page": "#141214",
    "--bg-surface": "rgb(255, 255, 255, 0.95)",
    "--bg-calendar": "#232227",
    "--bg-navigation": "#636d79",
    "--gradient-stats": "linear-gradient(to right, rgba(70, 76, 85, 0.25), rgba(127, 137, 149, 0.25))",
    "--gradient-promemoria": "linear-gradient(to right, rgba(70, 76, 85, 0.25), rgba(158, 167, 179, 0.25))",
    "--border-sections": "1px solid rgba(99, 109, 121, 0.35)"
  },
  "blue-ocean-dark": {
    "--colore-principale": "#6f7fae",
    "--colore-secondario": "#a9bfd3",
    "--colore-scuro": "#091540",
    "--colore-chiaro": "#a9bfd3",
    "--colore-accento": "#5c69a8",
    "--bg-page": "#000000",
    "--bg-surface": "rgb(255, 255, 255, 0.95)",
    "--bg-calendar": "#16224a",
    "--bg-navigation": "#3a4666",
    "--gradient-stats": "linear-gradient(to right, rgba(111, 127, 174, 0.2), rgba(169, 191, 211, 0.2))",
    "--gradient-promemoria": "linear-gradient(to right, rgba(111, 127, 174, 0.2), rgba(42, 58, 143, 0.2))",
    "--border-sections": "1px solid rgba(169, 191, 211, 0.25)"
  },
  "herbs": {
    "--colore-principale": "#90a875",
    "--colore-secondario": "#403542",
    "--colore-scuro": "#18161a",
    "--colore-chiaro": "#c2c7cf",
    "--colore-accento": "#6a6e64",
    "--bg-page": "#18161a",
    "--bg-surface": "rgb(255, 255, 255, 0.95)",
    "--bg-calendar": "#242328",
    "--bg-navigation": "#6f8c57",
    "--gradient-stats": "linear-gradient(to right, rgba(144, 168, 117, 0.25), rgba(64, 53, 66, 0.25))",
    "--gradient-promemoria": "linear-gradient(to right, rgba(144, 168, 117, 0.25), rgba(84, 86, 81, 0.25))",
    "--border-sections": "1px solid rgba(144, 168, 117, 0.25)"
  }
};

// ==================== LOGICA DI APPLICAZIONE DINAMICA ====================

function applicaTema(nomeTema) {
    const temaSelezionato = databaseTemi[nomeTema] || databaseTemi["default"];
    
    // Inietta dinamicamente tutte le variabili nel documento HTML
    Object.keys(temaSelezionato).forEach(proprietaCss => {
        document.documentElement.style.setProperty(proprietaCss, temaSelezionato[proprietaCss]);
    });
    
    localStorage.setItem('health-app-tema', nomeTema);
    
    // Rinfresca i grafici se attivi
    if(typeof creaFiltriEMostraGrafici === 'function' && document.getElementById('statsPage') && !document.getElementById('statsPage').classList.contains('hidden')) {
        creaFiltriEMostraGrafici();
    }
}

function inizializzaTemaAllAvvio() {
    const temaSalvato = localStorage.getItem('health-app-tema') || 'default';
    applicaTema(temaSalvato);
}
