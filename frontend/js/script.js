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
setupNavigation('consult-ia', './frontend/pages/invasion-plan.html');

// --- MODO CLARO ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) {
    // Verifica preferência salva
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggle.innerText = '☀';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeToggle.innerText = isLight ? '☀' : '🌙';
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
}

// --- LÓGICA DE PERFIL (Login vs Cadastro vs Perfil) ---
const loginSection = document.getElementById('login');
const registerSection = document.getElementById('register');
const profileHeader = document.getElementById('profile');
const profileGrid = document.querySelector('.profile-grid');
const btnShowRegister = document.getElementById('btn-show-register');
const btnShowLogin = document.getElementById('btn-show-login');
const loginForm = document.querySelector('.login-form');
const registerForm = document.querySelector('.register-form');

if (loginSection && profileHeader) {
    // Inicialização: Esconde perfil e cadastro, mostra login
    profileHeader.style.display = 'none';
    if(profileGrid) profileGrid.style.display = 'none';
    if(registerSection) registerSection.style.display = 'none';

    // Alternar para Cadastro
    if (btnShowRegister) {
        btnShowRegister.addEventListener('click', (e) => {
            e.preventDefault();
            loginSection.style.display = 'none';
            registerSection.style.display = 'block';
        });
    }

    // Alternar para Login
    if (btnShowLogin) {
        btnShowLogin.addEventListener('click', (e) => {
            e.preventDefault();
            registerSection.style.display = 'none';
            loginSection.style.display = 'block';
        });
    }

    // Simular Login bem-sucedido
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            loginSection.style.display = 'none';
            profileHeader.style.display = 'flex'; // Flex para manter o layout
            if(profileGrid) profileGrid.style.display = 'grid';
        });
    }
    
    // Simular Cadastro bem-sucedido
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            registerSection.style.display = 'none';
            profileHeader.style.display = 'flex';
            if(profileGrid) profileGrid.style.display = 'grid';
        });
    }
}

// --- FUNCIONALIDADE DO CHAT (PLANO DE INVASÃO) ---
const chatWindow = document.getElementById('chat-window');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('user-input');
const voiceBtn = document.getElementById('voice-recorder');

if (chatWindow && chatForm && chatInput) {

    // Função para adicionar mensagem na tela
    function addMessage(text, isUser) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        messageDiv.classList.add(isUser ? 'user-message' : 'ai-message');

        let html = '';
        // Avatar apenas para IA por padrão visual
        if (!isUser) {
            html += `<img src="https://defpobkbmfqnkxowkkct.supabase.co/storage/v1/object/public/files/deadpool.png" alt="AI Avatar" class="chat-avatar">`;
        }

        html += `<div class="message-content"><p>${text}</p></div>`;
        messageDiv.innerHTML = html;

        chatWindow.appendChild(messageDiv);
        // Auto-scroll para a última mensagem
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }

    // Evento de Enviar Mensagem
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();

        if (text) {
            addMessage(text, true);
            chatInput.value = '';

            // Resposta simulada da IA
            setTimeout(() => {
                const responses = [
                    "Isso é problema seu.", 
                    "Vou consultar o roteirista...", 
                    "Que tédio. Mande chimichangas.",
                    "Sua requisição foi enviada para o lixo com sucesso.",
                    "Legal, mas você já viu o filme?"
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                addMessage(randomResponse, false);
            }, 1500);
        }
    });

    // Evento do Botão de Áudio
    if (voiceBtn) {
        voiceBtn.addEventListener('click', (e) => {
            e.preventDefault();
            voiceBtn.classList.toggle('recording');
            
            if (voiceBtn.classList.contains('recording')) {
                chatInput.placeholder = "Gravando... (cuidado com o que fala)";
                chatInput.disabled = true;
            } else {
                chatInput.placeholder = "Digite sua dúvida...";
                chatInput.disabled = false;
                addMessage("🎤 Áudio enviado: 'Eu amo o Deadpool'", true);
                setTimeout(() => {
                    addMessage("Bela voz. Pena que eu não tenho ouvidos.", false);
                }, 1000);
            }
        });
    }
}