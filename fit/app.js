
const defaultExercises = [
  {
    id: 1,
    name: "Fitness-Bike",
    img: "./images/rad.png",
	note: "zum aufwärmen min. 10-15 Minuten",
  },
  {
    id: 2,
    name: "Latzug",
    img: "./images/lat-zug.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff, max. auf Schulterhöhe ziehen",
  },
  {
    id: 3,
    name: "Rückenstrecker",
    img: "./images/rueckenstrecker.png",
    note: "Der Po sollte immer auf dem Sitz bleiben und nicht über die Lehne heraus strecken",
  },
  {
    id: 4,
    name: "Butterfly",
    img: "./images/butterfly.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
  {
    id: 5,
    name: "Butterfly-Reverse",
    img: "./images/butterfly-reverse.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
  {
    id: 6,
    name: "Beinpresse",
    img: "./images/beinpresse.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
   {
    id: 7,
    name: "Schulterpresse",
    img: "./images/schulterpresse.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
     {
    id: 8,
    name: "Brustpresse",
    img: "./images/brustpresse.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
       {
    id: 9,
    name: "Bizepsmaschine",
    img: "./images/bizepsmaschine.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
     {
    id: 10,
    name: "Bauchmuselmaschine",
    img: "./images/bauchmuskel.png",
    note: "Sitzpolster auf Hüfthöhe, enger Griff",
  },
];

function loadProgress() {
  return JSON.parse(localStorage.getItem('progress') || '{}');
}

function saveProgress(progress) {
  localStorage.setItem('progress', JSON.stringify(progress));
}

function renderExercises() {
  const container = document.getElementById('exercise-container');
  const tmpl = document.getElementById('exercise-template');
  const progress = loadProgress();

  defaultExercises.forEach(ex => {
    const clone = tmpl.content.cloneNode(true);
    const card = clone.querySelector('.exercise-card');
    clone.querySelector('.exercise-img').src = ex.img;
    clone.querySelector('.exercise-img').alt = ex.name;
    clone.querySelector('.exercise-name').textContent = ex.name;
    clone.querySelector('.exercise-note').textContent = ex.note;
    const weightInput = clone.querySelector('.weight-input');
    const repsInput = clone.querySelector('.reps-input');
    weightInput.value = progress[ex.id]?.weight || '';
    repsInput.value = progress[ex.id]?.reps || '';

    clone.querySelector('.save-btn').addEventListener('click', () => {
      progress[ex.id] = {
        weight: weightInput.value,
        reps: repsInput.value,
        timestamp: new Date().toISOString()
      };
      saveProgress(progress);
      alert('Gespeichert!');
    });

    container.appendChild(clone);
  });
}

document.addEventListener('DOMContentLoaded', renderExercises);
