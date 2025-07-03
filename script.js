const treinos = [
  // Treino A – Peito + Tríceps
  {
    dia: "Treino A – Peito + Tríceps",
    tecnica: "Bi-Set e Drop-set",
    objetivo: "Hipertrofia e intensidade",
    tipo: "normal",
    exercicios: [
      {
        nome: "Supino reto + Crucifixo reto",
        series: "4",
        reps: "12-10-8-6",
        tecnica: "Drop-set",
        obs: "Drop na última série",
      },
      {
        nome: "Supino inclinado + Cross-over",
        series: "3",
        reps: "12",
        tecnica: "Bi-set",
        obs: "-",
      },
      {
        nome: "Mergulho entre bancos",
        series: "3",
        reps: "Falha",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Tríceps corda",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      }
    ]
  },
  // Treino B – Costas + Bíceps
  {
    dia: "Treino B – Costas + Bíceps",
    tecnica: "Rest-pause e Técnica Lenta",
    objetivo: "Força e controle neuromuscular",
    tipo: "normal",
    exercicios: [
      {
        nome: "Barra fixa",
        series: "4",
        reps: "Falha",
        tecnica: "-",
        obs: "-",
        video: "barra-fixa.mp4"
      },
      {
        nome: "Remada curvada",
        series: "3",
        reps: "10",
        tecnica: "Cadência 3:1",
        obs: "-",
        video: "remada-curvada.mp4"
      },
      {
        nome: "Pulley frente + Rosca direta",
        series: "3",
        reps: "12",
        tecnica: "Bi-set",
        obs: "-",
        video: "pulley-rosca.mp4"
      },
      {
        nome: "Rosca alternada unilateral",
        series: "3",
        reps: "10",
        tecnica: "Isometria",
        obs: "-",
        video: "rosca-unilateral.mp4"
      }
    ]
  },
  // Treino C – Pernas
  {
    dia: "Treino C – Pernas completas",
    tecnica: "Pirâmide + Falha",
    objetivo: "Desenvolvimento de força e volume",
    tipo: "normal",
    exercicios: [
      {
        nome: "Agachamento livre",
        series: "5",
        reps: "15-12-10-8-6",
        tecnica: "Pirâmide",
        obs: "-",
        video: "agachamento-livre.mp4"
      },
      {
        nome: "Leg press",
        series: "4",
        reps: "12",
        tecnica: "-",
        obs: "-",
        video: "leg-press.mp4"
      },
      {
        nome: "Afundo com halteres",
        series: "3",
        reps: "8 cada perna",
        tecnica: "-",
        obs: "-",
        video: "afundo-halteres.mp4"
      },
      {
        nome: "Cadeira extensora",
        series: "3",
        reps: "Falha",
        tecnica: "Drop-set triplo",
        obs: "-",
        video: "cadeira-extensora.mp4"
      }
    ]
  },
  // Treino D – Ombros + Trapézio
  {
    dia: "Treino D – Ombros + Trapézio",
    tecnica: "Técnica 21 + Drop-set",
    objetivo: "Definição e hipertrofia",
    tipo: "normal",
    exercicios: [
      {
        nome: "Elevação lateral",
        series: "3",
        reps: "21 reps (7+7+7)",
        tecnica: "Técnica 21",
        obs: "-",
      },
      {
        nome: "Desenvolvimento com halteres",
        series: "3",
        reps: "10",
        tecnica: "Drop-set na última",
        obs: "-",
      },
      {
        nome: "Encolhimento com barra",
        series: "4",
        reps: "12",
        tecnica: "-",
        obs: "-",
      },
      {
        nome: "Face pull",
        series: "3",
        reps: "15",
        tecnica: "-",
        obs: "-",
      }
    ]
  },
  // Corrida
  {
    dia: "Treinos de Corrida – Híbrido",
    tecnica: "Variedade de estímulos",
    objetivo: "Resistência e VO2máx",
    tipo: "normal",
    exercicios: [
      ["Corrida leve", "1", "30min", "Pace 5:30", "Base aeróbica"],
      ["Intervalado", "5x800m", "Rec 2min", "Pace 4:10", "VO2máx"],
      ["Corrida moderada", "1", "40min", "Pace 4:40", "Ritmo sustentado"],
      ["HIIT", "10x200m", "-", "Pace 4:00", "Neuromuscular"],
      ["Longão", "1", "10km", "Pace 5:00", "Resistência mental"]
    ]
  },
  // Dieta
  {
    dia: "Dieta Econômica e Inteligente",
    tecnica: "Baixo custo",
    objetivo: "Manutenção de massa e energia",
    tipo: "dieta",
    exercicios: [
      ["Café da manhã", "2 ovos + pão integral + banana + café"],
      ["Almoço", "Arroz + feijão + frango (ou ovo) + legumes"],
      ["Lanche", "Pasta de amendoim + banana + limão"],
      ["Jantar", "Ovos mexidos + salada + arroz integral"],
      ["Ceia (opcional)", "Mingau de aveia"]
    ]
  },
  // Suplementação
  {
    dia: "Suplementação Inteligente",
    tecnica: "Acessível",
    objetivo: "Recuperação e performance",
    tipo: "normal",
    exercicios: [
      ["Whey Protein", "1 dose", "Pós-treino", "-", "Se possível"],
      ["Alternativa", "-", "-", "-", "3 ovos ou leite com banana"],
      ["Creatina", "3-5g/dia", "-", "-", "Altamente eficaz"],
      ["Multivitamínico", "1 comp/dia", "-", "-", "Farmácia popular"]
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
