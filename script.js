const treinos = [
  // DIA 1 – Full Body Corpo Livre + Corrida Leve
  {
    dia: "DIA 1 – Full Body + Corrida Leve",
    tecnica: "Funcional com corrida contínua",
    objetivo: "Ativação geral e estímulo aeróbico leve",
    tipo: "normal",
    exercicios: [
      { nome: "Agachamento com peso corporal", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Flexão com apoio de joelhos", series: "3", reps: "10", tecnica: "-", obs: "-" },
      { nome: "Remada invertida na toalha (porta)", series: "3", reps: "12", tecnica: "-", obs: "Usar toalha firme em porta ou estrutura segura" },
      { nome: "Elevação de quadril (glúteos)", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Prancha isométrica", series: "3", reps: "30s", tecnica: "Isometria", obs: "-" },
      { nome: "Corrida contínua leve", series: "-", reps: "20 minutos", tecnica: "-", obs: "Ritmo leve, pode ser substituída por escadas" }
    ]
  },

  // DIA 2 – Glúteos e Abdômen (Hotel)
  {
    dia: "DIA 2 – Glúteos + Abdômen",
    tecnica: "Corpo livre com foco posterior",
    objetivo: "Manutenção de massa + resistência muscular localizada",
    tipo: "normal",
    exercicios: [
      { nome: "Agachamento sumô + isometria 5s", series: "3", reps: "12", tecnica: "Isometria final", obs: "-" },
      { nome: "Ponte unilateral", series: "3", reps: "10 por perna", tecnica: "-", obs: "-" },
      { nome: "Glúteo 4 apoios + chute", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Abdominal infra alternado", series: "3", reps: "20", tecnica: "-", obs: "-" },
      { nome: "Prancha com avanço", series: "3", reps: "30s", tecnica: "Dinâmica", obs: "-" },
      { nome: "Subida em escada (ou step)", series: "3", reps: "20 passos", tecnica: "-", obs: "Usar escada do hotel ou apoio firme" }
    ]
  },

  // DIA 3 – Funcional Intenso + Escada/Corrida
  {
    dia: "DIA 3 – Funcional Metabólico + Cardio",
    tecnica: "Circuito funcional com pausa curta",
    objetivo: "Alta queima calórica e estímulo cardiovascular",
    tipo: "circuito",
    exercicios: [
      { nome: "Polichinelo", series: "4", reps: "30s", tecnica: "Aquecimento", obs: "-" },
      { nome: "Agachamento com salto", series: "4", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Flexão padrão ou joelhos", series: "4", reps: "10", tecnica: "-", obs: "-" },
      { nome: "Burpee adaptado", series: "4", reps: "8", tecnica: "-", obs: "-" },
      { nome: "Prancha com toque no ombro", series: "4", reps: "30s", tecnica: "-", obs: "-" },
      { nome: "Corrida ou escadas", series: "-", reps: "5 min", tecnica: "-", obs: "Substituir corrida por escadas, se necessário" }
    ]
  },

  // DIA 4 – Corrida Progressiva + Mobilidade
  {
    dia: "DIA 4 – Corrida + Mobilidade",
    tecnica: "Corrida intervalada leve + alongamento",
    objetivo: "Trabalhar ritmo e recuperação ativa",
    tipo: "cardio",
    exercicios: [
      { nome: "Caminhada aquecimento", series: "-", reps: "5 min", tecnica: "-", obs: "-" },
      { nome: "Trote leve", series: "-", reps: "10 min", tecnica: "-", obs: "-" },
      { nome: "3x 2min corrida moderada + 1min caminhada", series: "3", reps: "2min + 1min", tecnica: "Intervalado leve", obs: "-" },
      { nome: "Trote final", series: "-", reps: "5 min", tecnica: "Desaceleração", obs: "-" },
      { nome: "Mobilidade guiada", series: "-", reps: "10 min", tecnica: "-", obs: "Focar quadril, posterior e ombros" }
    ]
  }
];

// --- RENDERIZAÇÃO DOS TREINOS ---

const treinoContainer = document.getElementById("treinoContainer");
const progresso = JSON.parse(localStorage.getItem("progresso") || "{}");

treinos.forEach((treino, i) => {
  const card = document.createElement("div");
  card.className = "card";

  let html = `
    <h2>${treino.dia}</h2>
    <p><strong>Técnica:</strong> ${treino.tecnica}</p>
    <p><strong>Objetivo:</strong> ${treino.objetivo}</p>
    <table class="exercise-table">
      <thead>
        <tr>`;

  if (treino.tipo === "dieta") {
    html += `
          <th>✔</th>
          <th>Refeição</th>
          <th>Descrição</th>`;
  } else {
    html += `
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
          <th>Vídeo</th>`;
  }

  html += `</tr></thead><tbody>`;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `<tr class="exercise-row ${doneClass}" data-key="${key}">`;
    html += `<td><input type="checkbox" ${checked}></td>`;

    if (treino.tipo === "dieta") {
      html += `<td>${ex[0]}</td><td>${ex[1]}</td>`;
    } else {
      const nome = ex.nome || ex[0];
      const series = ex.series || ex[1] || "-";
      const reps = ex.reps || ex[2] || "-";
      const tecnica = ex.tecnica || ex[3] || "-";
      const obs = ex.obs || ex[4] || "-";
      const videoFile = ex.video || "sem-video.mp4";

      html += `
        <td>${nome}</td>
        <td>${series}</td>
        <td>${reps}</td>
        <td>${tecnica}</td>
        <td>${obs}</td>
        <td>
          <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
          <span class="timer-display">00:00</span>
        </td>
        <td><button class="timer-btn" onclick="abrirVideo('${videoFile}')">🎥</button></td>`;
    }

    html += `</tr>`;
  });

  html += `</tbody></table>`;
  card.innerHTML = html;
  treinoContainer.appendChild(card);
});

// --- CHECKBOX PROGRESSO ---
document.querySelectorAll(".exercise-row input[type='checkbox']").forEach(input => {
  input.addEventListener("change", function () {
    const row = this.closest(".exercise-row");
    const key = row.dataset.key;
    const feito = this.checked;
    row.classList.toggle("done", feito);
    progresso[key] = { feito };
    localStorage.setItem("progresso", JSON.stringify(progresso));
  });
});

// --- TIMER POR EXERCÍCIO ---
function iniciarTimer(btn) {
  const span = btn.nextElementSibling;
  let tempo = 60;
  span.textContent = formatar(tempo);
  btn.disabled = true;

  const intervalo = setInterval(() => {
    tempo--;
    span.textContent = formatar(tempo);
    if (tempo <= 0) {
      clearInterval(intervalo);
      btn.disabled = false;
      span.textContent = "✔️";
    }
  }, 1000);
}

function formatar(s) {
  const m = String(Math.floor(s / 60)).padStart(2, "0");
  const sec = String(s % 60).padStart(2, "0");
  return `${m}:${sec}`;
}

// Modal de vídeo (criado após o DOM estar carregado)
document.addEventListener("DOMContentLoaded", () => {
  const videoModal = document.createElement("div");
  videoModal.id = "videoModal";
  videoModal.innerHTML = `
    <div class="video-content">
      <span class="close-btn" id="fecharBtn">✖</span>
      <video id="videoPlayer" controls>
        <source src="" type="video/mp4">
        Seu navegador não suporta vídeo.
      </video>
    </div>
  `;
  document.body.appendChild(videoModal);

  // Conecta o botão X ao fechamento
  document.getElementById("fecharBtn").addEventListener("click", fecharVideo);
});

function abrirVideo(arquivo) {
  const videoPath = "videos/" + arquivo;
  const player = document.getElementById("videoPlayer");
  player.src = videoPath;
  document.getElementById("videoModal").style.display = "flex";
  player.play();
}

function fecharVideo() {
  const modal = document.getElementById("videoModal");
  const player = document.getElementById("videoPlayer");

  if (player) {
    player.pause();
    player.currentTime = 0;
  }

  modal.style.display = "none";
}

// --- FEEDBACK ---
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});
