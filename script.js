const treinos = [
  // DIA 1 – Segunda-feira: Inferiores + Natação
  {
    dia: "DIA 1 – Inferiores + Natação",
    tecnica: "Volume moderado com ênfase em glúteos",
    objetivo: "Manutenção de massa magra + recuperação ativa",
    tipo: "normal",
    exercicios: [
      { nome: "Agachamento no smith + Cadeira extensora", series: "3", reps: "12 cada", tecnica: "Bi-set", obs: "-" },
      { nome: "Stiff + Cadeira flexora", series: "3", reps: "12 cada", tecnica: "Bi-set", obs: "-" },
      { nome: "Glúteo no cabo", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Prancha com deslocamento lateral", series: "3", reps: "30s", tecnica: "-", obs: "-" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 2 – Terça-feira: Corrida Leve + Natação
  {
    dia: "DIA 2 – Corrida Leve + Natação",
    tecnica: "Base aeróbica contínua",
    objetivo: "Manter capacidade cardiorrespiratória com leveza",
    tipo: "cardio",
    exercicios: [
      { nome: "Caminhada + trote leve", series: "-", reps: "10min + 10min", tecnica: "-", obs: "-" },
      { nome: "Corrida leve contínua", series: "-", reps: "20min", tecnica: "-", obs: "Respiração controlada" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 3 – Quarta-feira: Costas + Bíceps + Natação
  {
    dia: "DIA 3 – Costas + Bíceps + Natação",
    tecnica: "Estímulo completo em puxar",
    objetivo: "Definição e fortalecimento postural",
    tipo: "normal",
    exercicios: [
      { nome: "Remada curvada com barra ou halteres", series: "3", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Puxada frente + Remada baixa", series: "3", reps: "12", tecnica: "Bi-set", obs: "-" },
      { nome: "Rosca direta com barra", series: "3", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Rosca martelo alternada", series: "3", reps: "10", tecnica: "-", obs: "-" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 4 – Quinta-feira: Corrida Técnica + Natação
  {
    dia: "DIA 4 – Corrida Intervalada + Natação",
    tecnica: "Tiros curtos + técnica de respiração",
    objetivo: "Melhora de ritmo e agilidade",
    tipo: "cardio",
    exercicios: [
      { nome: "Aquecimento: 5min caminhada + mobilidade", series: "-", reps: "-", tecnica: "-", obs: "-" },
      { nome: "Corrida 4x 300m", series: "-", reps: "4x 300m", tecnica: "Intervalado", obs: "Ritmo firme com 1min de trote entre" },
      { nome: "Desaquecimento: trote leve + mobilidade", series: "-", reps: "5min", tecnica: "-", obs: "-" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 5 – Sexta-feira: Full Body + Natação
  {
    dia: "DIA 5 – Full Body + Natação",
    tecnica: "Volume leve com foco em resistência",
    objetivo: "Estímulo geral sem fadiga",
    tipo: "normal",
    exercicios: [
      { nome: "Leg press", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Remada baixa", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Desenvolvimento com halteres", series: "3", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Cadeira abdutora", series: "3", reps: "20", tecnica: "-", obs: "-" },
      { nome: "Prancha isométrica", series: "3", reps: "30s", tecnica: "Isometria", obs: "-" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 6 – Sábado: Descanso ou Alongamento
  {
    dia: "DIA 6 – Descanso / Mobilidade leve",
    tecnica: "-",
    objetivo: "Recuperação total ou mobilidade leve",
    tipo: "off",
    exercicios: [
      { nome: "Descanso total ou alongamento leve", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 7 – Domingo: Corrida Longa Regenerativa
  {
    dia: "DIA 7 – Corrida Regenerativa",
    tecnica: "Corrida contínua leve",
    objetivo: "Manter base e gasto calórico leve",
    tipo: "cardio",
    exercicios: [
      { nome: "Caminhada + trote leve", series: "-", reps: "5min + 5min", tecnica: "-", obs: "-" },
      { nome: "Corrida contínua", series: "-", reps: "30min", tecnica: "-", obs: "Ritmo leve, conversacional" },
      { nome: "Alongamento leve", series: "-", reps: "-", tecnica: "-", obs: "-" }
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
