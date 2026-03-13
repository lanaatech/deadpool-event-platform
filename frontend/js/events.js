async function carregarEventos() {
    // ANTES: const container = document.querySelector('.events-container'); 
    // AGORA (O CORRETO):
    const container = document.querySelector('.events-grid');

    if (!container) {
        console.error("Erro: Não achei o elemento .events-grid no HTML!");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/eventos');
        const eventos = await response.json();

        container.innerHTML = ''; // Limpa o grid

        eventos.forEach(evento => {
            container.innerHTML += `

        <article class="event-card">
          <div class="event-image">
            <img src="${evento.imagem_url}" alt="${evento.titulo}" class="card-img">
          </div>
          <div class="card-content">
            <div class="card-meta">
              <span>📍 ${evento.local}</span>
              <span class="type">${evento.tag || 'EVENTO'}</span>
            </div>
            <h2 class="event-title">${evento.titulo}</h2>
            <p class="event-description">${evento.descricao}</p>
            <button class="but-type-1">Comprar Ingresso</button>
          </div>
        </article>
            `;
        });
    } catch (err) {
        console.error("Erro ao carregar:", err);
    }
}

async function reservar(eventoId) {
    const usuarioId = "ID_AQUI"; // COLE SEU UUID DO SUPABASE AQUI

    try {
        const response = await fetch('http://localhost:3000/api/reservas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                evento_id: eventoId,
                usuario_id: usuarioId
            })
        });

        const dados = await response.json();

        if (dados.success) {
            alert("🔥 CHIMICHANGA! Reserva feita com sucesso!");
        } else {
            alert("Erro ao reservar: " + dados.error);
        }
    } catch (err) {
        console.error("Erro na requisição:", err);
        alert("O servidor está dormindo ou o Cable cortou os cabos!");
    }
}

carregarEventos();