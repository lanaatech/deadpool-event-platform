const reservationForm = document.getElementById('reservation-form');
const aiChatBox = document.getElementById('ai-chat-box');
const aiText = document.getElementById('ai-response-text');

reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = document.getElementById('user-name').value;
    const date = document.getElementById('mission-date').value;
    const tier = document.getElementById('mission-tier').value;

    // Mostra o container da IA
    aiChatBox.classList.remove('hidden');
    aiText.innerText = "Espera aí... pensar dói...";

    // Simulação da resposta da IA
    setTimeout(() => {
        aiText.innerText = generateDeadpoolResponse(userName, date, tier);
    }, 1500);
});

function generateDeadpoolResponse(name, date, tier) {
    // Array de respostas sarcásticas em PT-BR
    const responses = [
        `Escuta aqui ${name}, dia ${date} é um péssimo dia para sair de casa. Mas já que pagou pelo plano ${tier}, eu apareço. Leva tacos.`,
        `Olha só o ${name}! Escolheu o plano ${tier}. Corajoso... ou só burro mesmo. Te vejo no dia ${date}!`,
        `Reserva confirmada, ${name}. Coloquei no meu calendário entre 'Limpar minhas katanas' e 'Hora da soneca'.`,
        `Plano ${tier}? Sério? Você é mais pão-duro que o mofado do Colossus, ${name}.`
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}