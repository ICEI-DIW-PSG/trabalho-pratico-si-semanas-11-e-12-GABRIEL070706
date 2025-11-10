const API_BASE = "http://localhost:3000";
const form = document.getElementById('form-cadastro');
const msg = document.getElementById('msg');

// se houver ?id=... na url, carregar para edição
window.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (id) {
    // editar
    try {
      const resp = await fetch(`${API_BASE}/receitas/${id}`);
      if (!resp.ok) throw new Error('Não foi possível carregar a receita');
      const r = await resp.json();
      document.getElementById('id').value = r.id;
      document.getElementById('titulo').value = r.titulo;
      document.getElementById('descricao').value = r.descricao;
      document.getElementById('conteudo').value = r.conteudo;
      document.getElementById('imagem').value = r.imagem;
      document.getElementById('autor').value = r.autor;
      document.getElementById('data').value = r.data;
      document.getElementById('destaque').checked = !!r.destaque;
    } catch (err) {
      console.error(err);
      msg.innerHTML = `<p class="text-danger">Erro ao carregar dados para edição.</p>`;
    }
  }
});

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    titulo: document.getElementById('titulo').value.trim(),
    descricao: document.getElementById('descricao').value.trim(),
    conteudo: document.getElementById('conteudo').value.trim(),
    imagem: document.getElementById('imagem').value.trim(),
    autor: document.getElementById('autor').value.trim(),
    data: document.getElementById('data').value,
    destaque: document.getElementById('destaque').checked
  };

  const id = document.getElementById('id').value;
  try {
    if (id) {
      // update (PUT)
      const resp = await fetch(`${API_BASE}/receitas/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error('Erro ao atualizar');
      msg.innerHTML = `<p class="text-success">Atualizado com sucesso!</p>`;
    } else {
      // create (POST)
      const resp = await fetch(`${API_BASE}/receitas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!resp.ok) throw new Error('Erro ao criar');
      msg.innerHTML = `<p class="text-success">Cadastrado com sucesso!</p>`;
      form.reset();
    }
  } catch (err) {
    console.error(err);
    msg.innerHTML = `<p class="text-danger">Erro ao salvar. Verifique o console.</p>`;
  }
});
