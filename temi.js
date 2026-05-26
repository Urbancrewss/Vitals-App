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
