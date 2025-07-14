const treinos = [
  // DIA 1 – Inferiores + Core + Corrida
  {
    dia: "DIA 1 – Inferiores + Core + Corrida",
    tecnica: "Bi-set com foco em glúteos e controle",
    objetivo: "Definição e resistência + base aeróbica leve",
    tipo: "normal",
    exercicios: [
      { nome: "Agachamento Smith + Cadeira extensora", series: "3", reps: "12 cada", tecnica: "Bi-set", obs: "-" },
      { nome: "Stiff com halteres + Flexora deitada", series: "3", reps: "12 cada", tecnica: "Bi-set", obs: "-" },
      { nome: "Avanço no step com halteres", series: "3", reps: "10 cada perna", tecnica: "-", obs: "-" },
      { nome: "Abdômen canivete no banco declinado", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Prancha com deslocamento lateral", series: "3", reps: "30s", tecnica: "Isometria dinâmica", obs: "-" },
      { nome: "Corrida leve técnica", series: "-", reps: "20 min", tecnica: "-", obs: "4x 1min leve + 1min caminhada + trote final" }
    ]
  },

  // DIA 2 – Peito + Tríceps + Natação
  {
    dia: "DIA 2 – Peito + Tríceps + Natação",
    tecnica: "Bi-set e drop-set leve",
    objetivo: "Estímulo em empurrar + recuperação ativa",
    tipo: "normal",
    exercicios: [
      { nome: "Supino reto + Crucifixo reto", series: "3", reps: "12", tecnica: "Bi-set", obs: "-" },
      { nome: "Supino inclinado com halteres", series: "3", reps: "10", tecnica: "-", obs: "-" },
      { nome: "Cross-over em pé", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Tríceps corda + Tríceps banco", series: "3", reps: "12", tecnica: "Bi-set", obs: "-" },
      { nome: "Tríceps francês unilateral", series: "3", reps: "10", tecnica: "-", obs: "-" },
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 3 – Costas + Ombros + Corrida Intervalada
  {
    dia: "DIA 3 – Costas + Ombros + Corrida",
    tecnica: "Bi-set e estímulo postural",
    objetivo: "Força em puxar + sistema cardiovascular",
    tipo: "normal",
    exercicios: [
      { nome: "Puxada frente + Remada baixa", series: "3", reps: "12 cada", tecnica: "Bi-set", obs: "-" },
      { nome: "Remada curvada barra ou halteres", series: "3", reps: "10", tecnica: "-", obs: "-" },
      { nome: "Elevação lateral + Desenvolvimento", series: "3", reps: "12 cada", tecnica: "Bi-set", obs: "-" },
      { nome: "Face pull", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Prancha lateral com elevação", series: "3", reps: "30s", tecnica: "Isometria", obs: "-" },
      { nome: "Corrida intervalada", series: "-", reps: "5x 400m", tecnica: "Intervalado", obs: "1min trote entre" }
    ]
  },

  // DIA 4 – Full Body Circuito + Abdômen
  {
    dia: "DIA 4 – Full Body + Abdômen",
    tecnica: "Circuito funcional com resistência",
    objetivo: "Ativação total + gasto calórico",
    tipo: "circuito",
    exercicios: [
      { nome: "Leg press", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Remada baixa", series: "3", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Desenvolvimento com halteres", series: "3", reps: "12", tecnica: "-", obs: "-" },
      { nome: "Mesa flexora", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Elevação lateral", series: "3", reps: "15", tecnica: "-", obs: "-" },
      { nome: "Abdominal oblíquo no banco", series: "3", reps: "20", tecnica: "-", obs: "-" }
    ]
  },

  // DIA 5 – Natação
  {
    dia: "DIA 5 – Natação",
    tecnica: "-",
    objetivo: "Aula de natação com instrutor",
    tipo: "cardio",
    exercicios: [
      { nome: "Natação", series: "-", reps: "-", tecnica: "-", obs: "-" }
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
