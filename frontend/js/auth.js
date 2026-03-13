async function login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        alert("Erro no login: " + error.message);
    } else {
        alert("Bem-vindo ao Caos, " + data.user.email);
        window.location.href = 'perfil.html'; // Redireciona após logar
    }
}

// Supondo que você já importou o cliente do Supabase no front
async function cadastrarUsuario(email, password, nome) {
    // 1. Cria o usuário no Auth do Supabase
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        alert("Erro no cadastro: " + error.message);
        return;
    }

    // 2. O usuário foi criado! Agora salvamos o nome dele na nossa tabela 'perfis'
    const user = data.user;
    const { error: perfilError } = await supabase
        .from('perfis')
        .insert([
            { id: user.id, nome: nome, nivel_caos: 'Novato', chimichangas: 0 }
        ]);

    if (perfilError) {
        console.error("Erro ao criar perfil:", perfilError);
    } else {
        alert("Bem-vindo ao bando, " + nome + "!");
        window.location.href = 'perfil.html'; // Redireciona
    }
}