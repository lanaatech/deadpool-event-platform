const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
app.use(cors()); // Permite que seu site acesse a API
app.use(express.json());

// Conexão com o Supabase
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Rota para buscar os eventos

app.get('/api/eventos', async (req, res) => {

    try {
        const { data, error } = await supabase
            .from('eventos')
            .select('*')
            .order('data', { ascending: true }); // Deixa o mais próximo primeiro

        if (error) throw error;
        res.json(data); // Envia os dados para o site

    } catch (err) {
        res.status(500).json({ error: err.message });
    }

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`⚡ Deadpool API rodando em http://localhost:${PORT}`);
});

// Rota para buscar dados do perfil logado
app.get('/api/perfil/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const { data, error } = await supabase
            .from('perfis')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});