// app.js 

// ======================================================
// BLOCO 1 - CÓDIGO ORIGINAL (NÃO ALTERADO)
// ======================================================

// Estrutura JSON com as receitas
const dados = [
  {
    id: 1,
    titulo: "Bolo de Chocolate",
    descricao: "Um delicioso bolo fofinho e fácil de preparar.",
    conteudo: "Ingredientes: 2 xícaras de farinha, 1 de chocolate, 1 de açúcar, 2 ovos, 1 xícara de leite e fermento. Misture tudo e asse por 40 minutos a 180°C. Dica: finalize com cobertura de brigadeiro.",
    imagem: "bolo.chocolate.avif",
    autor: "Chef Ana Souza",
    data: "2025-10-02",
    destaque: true
  },
  {
    id: 2,
    titulo: "Salada Tropical",
    descricao: "Leve, saudável e perfeita para dias quentes.",
    conteudo: "Misture folhas verdes, manga em cubos, frango grelhado e molho cítrico de limão. Ideal para o almoço de verão!",
    imagem: "Salada-Tropical-YouTube-1024x576.jpg",
    autor: "Chef Bruno Lima",
    data: "2025-10-01",
    destaque: true
  },
  {
    id: 3,
    titulo: "Macarrão à Bolonhesa",
    descricao: "Tradicional receita italiana que conquista qualquer paladar.",
    conteudo: "Prepare o molho com carne moída, tomate e temperos. Cozinhe o macarrão e misture ao molho. Sirva com queijo ralado.",
    imagem: "macarrao-a-bolonhesa-768x512.jpg",
    autor: "Chef Carla Menezes",
    data: "2025-09-30",
    destaque: false
  },
  {
    id: 4,
    titulo: "Feijoada",
    descricao: "Um clássico da culinária brasileira, rico e saboroso.",
    conteudo: "Feijoada completa com feijão preto, carnes variadas, arroz branco, couve refogada e laranja. Perfeita para reunir a família e amigos.",
    imagem: "Feijoada-Tradicional-e-Completa-1536x1536.webp",
    autor: "Chef Bruno Mendez",
    data: "2025-11-28",
    destaque: false
  },
  {
    id: 5,
    titulo: "Feijão tropeiro",
    descricao: "Prato típico mineiro, cheio de sabor e tradição.",
    conteudo: "Feijão tropeiro com feijão carioca, farinha de mandioca, linguiça, bacon, ovos e couve. Sirva com arroz branco e torresmo.",
    imagem: "OIP.webp",
    autor: "Chef Ana Maria",
    data: "2025-07-17",
    destaque: true
  }
  
];

// Função para montar os cards na home
function carregarHome() {
  const container = document.getElementById("lista-receitas");
  if (!container) return;

  dados.forEach(item => {
    const card = `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
          <div class="card-body">
            <h5 class="card-title">${item.titulo}</h5>
            <p class="card-text">${item.descricao}</p>
            <a href="detalhes.html?id=${item.id}" class="btn btn-danger">Ver detalhes</a>
          </div>
        </div>
      </div>
    `;
    container.innerHTML += card;
  });
}

// Função para mostrar os detalhes da receita
function carregarDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const receita = dados.find(r => r.id == id);

  if (receita) {
    document.getElementById("titulo").innerText = receita.titulo;
    document.getElementById("imagem").src = receita.imagem;
    document.getElementById("descricao").innerText = receita.descricao;
    document.getElementById("conteudo").innerText = receita.conteudo;
    document.getElementById("autor").innerText = receita.autor;
    document.getElementById("data").innerText = receita.data;
  }
}

function carregarSlider() {
  const container = document.getElementById("itens-slider");
  if (!container) return;

  const destaques = dados.filter(r => r.destaque);

  destaques.forEach((item, index) => {
    const active = index === 0 ? "active" : "";
    const slide = `
      <div class="carousel-item ${active}">
        <img src="${item.imagem}" class="d-block w-100" alt="${item.titulo}" style="max-height:400px; object-fit:cover;">
        <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
          <h5>${item.titulo}</h5>
          <p>${item.descricao}</p>
        </div>
      </div>
    `;
    container.innerHTML += slide;
  });
}

// ======================================================
// BLOCO 2 - CÓDIGO NOVO (JSON SERVER, NÃO ALTERA O ACIMA)
// ======================================================

// endpoint base do JSON Server
const API_BASE = "http://localhost:3000"; // se usar outra porta, ajuste

// carregar lista de receitas (usada no index)
async function carregarHomeServer() {
  const container = document.getElementById("lista-receitas");
  if (!container) return;

  container.innerHTML = ''; // limpar antes

  try {
    const resp = await fetch(`${API_BASE}/receitas?_sort=data&_order=desc`);
    if (!resp.ok) throw new Error("Falha ao buscar receitas");
    const dados = await resp.json();

    dados.forEach(item => {
      const card = `
        <div class="col-md-4 mb-3">
          <div class="card h-100">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title">${item.titulo}</h5>
              <p class="card-text">${item.descricao}</p>
              <div class="mt-auto">
                <a href="detalhes.html?id=${item.id}" class="btn btn-danger">Ver detalhes</a>
              </div>
            </div>
          </div>
        </div>
      `;
      container.innerHTML += card;
    });
  } catch (err) {
    console.error(err);
    container.innerHTML = `<p class="text-danger">Erro ao carregar receitas. Tente novamente mais tarde.</p>`;
  }
}

// carregar detalhes por id (usado no detalhes.html)
async function carregarDetalhesServer() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  if (!id) return;

  try {
    const resp = await fetch(`${API_BASE}/receitas/${id}`);
    if (!resp.ok) throw new Error("Receita não encontrada");
    const receita = await resp.json();

    document.getElementById("titulo").innerText = receita.titulo;
    document.getElementById("imagem").src = receita.imagem;
    document.getElementById("imagem").alt = receita.titulo;
    document.getElementById("descricao").innerText = receita.descricao;
    document.getElementById("conteudo").innerText = receita.conteudo;
    document.getElementById("autor").innerText = receita.autor;
    document.getElementById("data").innerText = receita.data;
  } catch (err) {
    console.error(err);
    const main = document.querySelector("main");
    if (main) main.innerHTML = '<p class="text-danger">Receita não encontrada.</p>';
  }
}

// carregar slider usando destaque: true
async function carregarSliderServer() {
  const container = document.getElementById("itens-slider");
  if (!container) return;

  container.innerHTML = '';

  try {
    const resp = await fetch(`${API_BASE}/receitas?destaque=true`);
    if (!resp.ok) throw new Error("Erro ao buscar destaques");
    const destaques = await resp.json();

    if (destaques.length === 0) {
      container.innerHTML = `<div class="carousel-item active">
        <div class="d-flex align-items-center justify-content-center" style="height:300px;background:#f5f5f5">
          <p class="text-muted">Nenhum destaque cadastrado.</p>
        </div>
      </div>`;
      return;
    }

    destaques.forEach((item, index) => {
      const active = index === 0 ? "active" : "";
      const slide = `
        <div class="carousel-item ${active}">
          <img src="${item.imagem}" class="d-block w-100" alt="${item.titulo}" style="max-height:400px; object-fit:cover;">
          <div class="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
            <h5>${item.titulo}</h5>
            <p>${item.descricao}</p>
          </div>
        </div>
      `;
      container.innerHTML += slide;
    });

    const myCarousel = document.querySelector('#sliderDestaques');
    if (myCarousel) {
      new bootstrap.Carousel(myCarousel, { interval: 4000, ride: 'carousel' });
    }

  } catch (err) {
    console.error(err);
    container.innerHTML = `<div class="carousel-item active">
      <div class="d-flex align-items-center justify-content-center" style="height:300px;background:#f5f5f5">
        <p class="text-danger">Erro ao carregar destaques.</p>
      </div>
    </div>`;
  }
}
