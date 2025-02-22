function showTab(tabName) {
    // Skjul alle faner
    var tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Fjern aktiv klasse fra alle knappene
    var tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(function(button) {
        button.classList.remove('active');
    });

    // Vis den valgte fanen
    document.getElementById(tabName).classList.add('active');
    
    // Sett den valgte knappen til aktiv
    var activeButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    activeButton.classList.add('active');
}
