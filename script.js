function showTab(tabId) {
    // Skjuler alle faner
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Viser valgt fane
    document.getElementById(tabId).classList.add('active');

    // Fjerner aktiv status fra alle knapper
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Legger til aktiv status på klikket knapp
    event.currentTarget.classList.add('active');
}
