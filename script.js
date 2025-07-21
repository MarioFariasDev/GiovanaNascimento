const treinos = [
  // DIA 1 – Corrida Leve + Mobilidade
  {
    dia: "DIA 1 – Corrida Leve + Mobilidade",
    tecnica: "Ativação leve + alongamentos dinâmicos",
    objetivo: "Manter ritmo leve, soltar quadril e preservar articulações",
    tipo: "cardio",
    exercicios: [
      { nome: "Caminhada + trote leve", series: "-", reps: "5min + 10min", tecnica: "-", obs: "-" },
      { nome: "Corrida leve contínua", series: "-", reps: "15min", tecnica: "-", obs: "Ritmo leve e confortável" },
      { nome: "Alongamento dinâmico (mobilidade quadril, tornozelo)", series: "3", reps: "12 cada", tecnica: "-", obs: "Ex: afundo com torção, chute frontal, skipping leve" }
    ]
  },

  // DIA 2 – Musculação Leve (Full Body) + Natação
  {
    dia: "DIA 2 – Full Body leve + Natação",
    tecnica: "Controle de movimento e volume reduzido",
    objetivo: "Manter estímulo muscular com mínimo estresse",
    tipo: "normal",
    exercicios: [
      { nome: "Leg press leve", series: "2", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Remada baixa", series: "2", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Desenvolvimento com halteres", series: "2", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Cadeira abdutora", series: "2", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Abdominal prancha isométrica", series: "2", reps: "30s", tecnica: "-", obs: "-" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "Recuperação ativa" }
    ]
  },

  // DIA 3 – Corrida Técnica (Tiros Curtos) + Core
  {
    dia: "DIA 3 – Corrida Técnica + Core",
    tecnica: "Curto estímulo para relembrar ritmo de prova",
    objetivo: "Agilidade + reforço mental",
    tipo: "cardio",
    exercicios: [
      { nome: "Aquecimento: caminhada + mobilidade leve", series: "-", reps: "10min", tecnica: "-", obs: "-" },
      { nome: "3x 200m ritmo de prova", series: "-", reps: "3x 200m", tecnica: "Intervalado", obs: "1min trote entre" },
      { nome: "Prancha + abdominal infra", series: "2", reps: "30s + 15", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 4 – OFF ou Natação Leve
  {
    dia: "DIA 4 – Recuperação ativa ou descanso total",
    tecnica: "-",
    objetivo: "Soltar o corpo e garantir 100% para o domingo",
    tipo: "cardio",
    exercicios: [
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "Somente se estiver se sentindo disposta" },
      { nome: "Ou descanso completo", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 5 – OFF (Obrigatório)
  {
    dia: "DIA 5 – Descanso Total",
    tecnica: "-",
    objetivo: "Chegar 100% para a prova",
    tipo: "off",
    exercicios: [
      { nome: "Descanso total", series: "-", reps: "-", tecnica: "-", obs: "Alimentação leve, hidratação alta, foco mental" }
    ]
  },

  // DIA 6 – PROVA 5KM
  {
    dia: "DIA 6 – Corrida Oficial 5KM",
    tecnica: "Prova",
    objetivo: "Dar o melhor ritmo possível com confiança e leveza",
    tipo: "corrida",
    exercicios: [
      { nome: "Aquecimento: 5min caminhada + 3min trote", series: "-", reps: "-", tecnica: "-", obs: "Respiração controlada" },
      { nome: "Prova 5KM", series: "-", reps: "-", tecnica: "-", obs: "Dar o seu melhor! Estratégia: dividir em 3 blocos: 2km ritmo leve, 2km firme, 1km forte" },
      { nome: "Desaquecimento: alongamento leve", series: "-", reps: "-", tecnica: "-", obs: "-" }
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
        <tr>
          <th>✔</th>
          <th>Exercício</th>
          <th>Séries</th>
          <th>Reps</th>
          <th>Técnica</th>
          <th>Obs</th>
          <th>Descanso</th>
        </tr>
      </thead>
      <tbody>`;

  treino.exercicios.forEach((ex, j) => {
    const key = `d${i}_e${j}`;
    const checked = progresso[key]?.feito ? "checked" : "";
    const doneClass = progresso[key]?.feito ? "done" : "";

    html += `<tr class="exercise-row ${doneClass}" data-key="${key}">`;
    html += `<td><input type="checkbox" ${checked}></td>`;
    html += `<td>${ex.nome || "-"}</td>`;
    html += `<td>${ex.series || "-"}</td>`;
    html += `<td>${ex.reps || "-"}</td>`;
    html += `<td>${ex.tecnica || "-"}</td>`;
    html += `<td>${ex.obs || "-"}</td>`;
    html += `
      <td>
        <button class="timer-btn" onclick="iniciarTimer(this)">⏱️</button>
        <span class="timer-display">00:00</span>
      </td>
    </tr>`;
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

// --- FEEDBACK ---
const feedback = document.getElementById("feedback");
const feedbackSalvo = localStorage.getItem("feedbackGlobal");
if (feedbackSalvo) feedback.value = feedbackSalvo;

document.getElementById("salvarFeedback").addEventListener("click", () => {
  localStorage.setItem("feedbackGlobal", feedback.value);
  alert("Feedback salvo com sucesso!");
});
