const treinos = [
  // DIA 1 – Inferiores + Core
  {
    dia: "DIA 1 – Inferiores + Core",
    tecnica: "Bi-set com cadência controlada",
    objetivo: "Foco em membros inferiores e core com intensidade",
    tipo: "normal",
    exercicios: [
      {
        nome: "Agachamento guiado + Afundo no smith",
        series: "3",
        reps: "12 + 10 cada perna",
        tecnica: "Bi-set",
        obs: "Executar com controle de cadência (2:1)",
      },
      {
        nome: "Cadeira extensora + Flexora deitada",
        series: "3",
        reps: "15 cada",
        tecnica: "Bi-set",
        obs: "2s de contração na extensora",
      },
      {
        nome: "Stiff com halteres + Glúteo no cabo",
        series: "3",
        reps: "12 + 15",
        tecnica: "Bi-set",
        obs: "-",
      },
      {
        nome: "Abdômen infra na barra",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Prancha lateral com elevação de perna",
        series: "3",
        reps: "20s cada lado",
        tecnica: "Isometria + movimento",
        obs: "-",
      }
    ],
    treino2: {
      tipo: "Natação leve",
      objetivo: "Atividade complementar aeróbica",
      detalhes: "Sessão de 45-60min, ritmo leve a moderado. Pode ser crawl, costas ou estilo livre. Foco em recuperação ativa."
    }
  },

  // DIA 2 – Costas + Ombros + Tríceps
  {
    dia: "DIA 2 – Costas + Ombros + Tríceps",
    tecnica: "Drop-set leve e bi-set",
    objetivo: "Ativação completa do tronco com intensidade controlada",
    tipo: "normal",
    exercicios: [
      {
        nome: "Remada baixa",
        series: "3",
        reps: "12",
        tecnica: "Drop-set na última série",
        obs: "-",
      },
      {
        nome: "Puxada frente pegada aberta",
        series: "3",
        reps: "10",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Desenvolvimento com halteres",
        series: "3",
        reps: "12",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Elevação lateral unilateral",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Tríceps corda + Coice com halteres",
        series: "3",
        reps: "12 + 12",
        tecnica: "Bi-set",
        obs: "-",
      },
      {
        nome: "Prancha com avanço",
        series: "3",
        reps: "30s",
        tecnica: "Isometria dinâmica",
        obs: "-",
      }
    ],
    treino2: {
      tipo: "Corrida Intervalada",
      objetivo: "Trabalhar ritmo e resistência",
      detalhes: "5 min trote leve + 4x400m em ritmo moderado com 2 min de trote leve entre + 5 min de trote leve + alongamento"
    }
  },

  // DIA 3 – Full Body em Circuito
  {
    dia: "DIA 3 – Full Body em Circuito",
    tecnica: "Circuito de resistência",
    objetivo: "Gasto calórico e ativação total",
    tipo: "circuito",
    exercicios: [
      {
        nome: "Agachamento com halteres",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Flexão de braço no solo",
        series: "3",
        reps: "12",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Remada curvada com halteres",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Desenvolvimento com halteres",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Stiff com halteres",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Elevação lateral + frontal",
        series: "3",
        reps: "12 + 12",
        tecnica: "Bi-set",
        obs: "-",
      },
      {
        nome: "Prancha isométrica",
        series: "3",
        reps: "40s",
        tecnica: "Isometria",
        obs: "-",
      }
    ],
    treino2: {
      tipo: "Natação opcional",
      objetivo: "Recuperação ativa",
      detalhes: "Sessão leve, 30-45min. Preferência para técnica suave, sem estímulo de alta intensidade."
    }
  },

  // DIA 4 – Corrida Simulada
  {
    dia: "DIA 4 – Corrida 3km (Simulado)",
    tecnica: "Corrida contínua de avaliação",
    objetivo: "Medir condição aeróbica atual",
    tipo: "cardio",
    exercicios: [
      {
        nome: "Caminhada + Trote leve (aquecimento)",
        series: "-",
        reps: "5min + 5min",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Corrida contínua 3km",
        series: "-",
        reps: "Tempo livre",
        tecnica: "-",
        obs: "Manter ritmo leve a moderado. Registrar tempo final",
      },
      {
        nome: "Trote leve + Alongamento",
        series: "-",
        reps: "5min + 5min",
        tecnica: "Recuperação",
        obs: "-",
      }
    ],
    treino2: {
      tipo: "Descanso ativo (opcional)",
      objetivo: "Caminhada leve ou mobilidade",
      detalhes: "Caso haja fadiga, apenas alongamento leve. Caso contrário, caminhada leve de 20-30min à noite."
    }
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
