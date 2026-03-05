// Função auxiliar para evitar repetição e verificar se o elemento existe
function setupNavigation(id, targetUrl) {
    const element = document.getElementById(id);

    // Verifica se o elemento realmente existe na página atual
    if (element) {
        element.addEventListener('click', () => {
            window.location.href = targetUrl;
        });
    }
}

// Configurando os redirecionamentos de forma segura
setupNavigation('book-now', './frontend/pages/events.html');
setupNavigation('see-tickets', './frontend/pages/about.html');

const consultIA = document.getElementById('consult-ia');

if (consultIA) {
    consultIA.onclick = function () {
        window.location.href = "./frontend/pages/invasion-plan.html";
    };
}