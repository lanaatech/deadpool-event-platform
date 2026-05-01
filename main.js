// Animação de entrada (Intersection Observer)
const observerOptions = { threshold: 0.2 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.event-card, .step-item').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "0.6s ease-out";
    observer.observe(el);
});

const modal = document.getElementById('eventModal');

function openModal() {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Trava o scroll do fundo
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar se clicar fora do conteúdo
window.onclick = function (event) {
    if (event.target == modal) {
        closeModal();
    }
}

const chatBtn = document.getElementById('chat-btn');
const chatWindow = document.getElementById('chat-window');
const chatLabel = document.getElementById('chat-label');

chatBtn.addEventListener('click', () => {
    const isOpening = chatWindow.style.display !== 'flex';

    if (isOpening) {
        chatWindow.style.display = 'flex';
        chatLabel.style.opacity = '0'; // Esconde o texto lateral[cite: 3]
    } else {
        chatWindow.style.display = 'none';
        chatLabel.style.opacity = '1'; // Reaparece o texto lateral
    }
});

function switchTab(type) {
    const content = document.getElementById('tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    // Remove classe ativa de todos
    buttons.forEach(btn => btn.classList.remove('active'));
    // Adiciona ao clicado
    event.target.classList.add('active');

    if (type === 'historico') {
        content.innerHTML = '<p class="empty-msg">Nenhum evento no histórico.</p>';
    } else {
        content.innerHTML = '<p class="empty-msg">Você não tem eventos futuros reservados.</p>';
    }
}

// Exemplo de fechamento manual de inscrições (RF18)
function toggleInscricoes(eventoId) {
    const confirmacao = confirm("Deseja encerrar as inscrições manualmente?");
    if (confirmacao) {
        // Lógica que enviará o update para o Supabase (RLS garantirá que só Admin faça isso)
        console.log(`Inscrições do evento ${eventoId} encerradas.`);
    }
}

// Simulação de Exportação CSV (RF19)
function exportarInscritos(eventoId) {
    alert("Gerando CSV com a lista de presença... O download iniciará em instantes.");
}