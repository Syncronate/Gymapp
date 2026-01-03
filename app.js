// ========================================
// Workout Data
// ========================================
const workouts = [
    {
        id: 'glutei-a',
        name: 'Scheda Glutei A',
        icon: '🍑',
        color: 'purple',
        exercises: [
            { name: 'Sollevamento Gambe da Stesa', details: 'Addominali', rest: 60, duration: null },
            { name: 'Stacco Rumeno Riscaldamento', details: '2x15 con 10kg', rest: 30, duration: null },
            { name: 'Stacco Rumeno', details: '4x12 con 30kg', rest: 90, duration: null },
            { name: 'Leg Abduction con Fascia', details: '3x15 per gamba', rest: 90, duration: null },
            { name: 'Squat Bulgari', details: '2x15 per gamba con 10kg', rest: 90, duration: null },
            { name: 'Donkey Kicks', details: '3x15 per gamba con fascia', rest: 60, duration: null }
        ],
        tips: {
            'Stacco Rumeno': 'Mantieni la schiena dritta e spingi i glutei indietro. Le ginocchia leggermente flesse. Contrai i glutei nella risalita.',
            'Squat Bulgari': 'Piede posteriore appoggiato su panca. Scendi fino a sfiorare il pavimento con il ginocchio. Mantieni il busto eretto.',
            'Donkey Kicks': 'Non inarcare la schiena. Contrai il gluteo al massimo dell\'estensione. Movimento controllato.'
        }
    },
    {
        id: 'glutei-b',
        name: 'Scheda Glutei B',
        icon: '🔥',
        color: 'purple',
        exercises: [
            { name: 'Hip Thrust Riscaldamento', details: 'Senza peso', rest: 30, duration: null },
            { name: 'Hip Thrust', details: '5x20 con 50kg', rest: 120, duration: null },
            { name: 'Leg Abduction Stesa', details: '2x40 con 2kg', rest: 90, duration: null },
            { name: 'Affondi', details: '2x15 per gamba con 10kg', rest: 90, duration: null }
        ],
        tips: {
            'Hip Thrust': 'Appoggia le scapole sulla panca. Spingi con i talloni e contrai i glutei in cima. Pausa di 1 secondo al top.',
            'Affondi': 'Passo lungo, ginocchio posteriore sfiora il pavimento. Non far superare la punta del piede col ginocchio anteriore.'
        }
    },
    {
        id: 'addominali',
        name: 'Scheda Addominali',
        subtitle: '10 minuti',
        icon: '💪',
        color: 'green',
        isCircuit: true,
        exerciseDuration: 45,
        restDuration: 15,
        exercises: [
            { name: 'Crunches', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Leg Raises da Seduto', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Mountain Climber', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Leg Raises Laterali', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Barchetta', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Ginocchio to Gomito in Plank', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Leg Raises da Steso', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Crunches Rotazione Laterale', details: 'Con peso, 45 secondi', rest: 15, duration: 45 },
            { name: 'Crunches Sollevando Gambe', details: '45 secondi', rest: 15, duration: 45 },
            { name: 'Plank', details: '45 secondi', rest: 0, duration: 45 }
        ],
        tips: {
            'Crunches': 'Non tirare il collo con le mani. Contrai gli addominali per sollevare le spalle, non la schiena.',
            'Mountain Climber': 'Mantieni la posizione di plank stabile. Porta le ginocchia al petto velocemente.',
            'Plank': 'Corpo in linea retta. Contrai addominali e glutei. Non alzare o abbassare i fianchi.'
        }
    },
    {
        id: 'generale',
        name: 'Scheda Generale',
        subtitle: '4 Round Full Body',
        icon: '🏋️',
        color: 'green',
        exercises: [
            { name: 'Squat', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Chest Press', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Rows', details: '1x30 con 30kg', rest: 90, duration: null },
            { name: 'Shoulder Press', details: '1x8 con 30kg', rest: 90, duration: null },
            { name: 'Squat', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Chest Press', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Rows', details: '1x30 con 30kg', rest: 90, duration: null },
            { name: 'Shoulder Press', details: '1x8 con 30kg', rest: 90, duration: null },
            { name: 'Squat', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Chest Press', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Rows', details: '1x30 con 30kg', rest: 90, duration: null },
            { name: 'Shoulder Press', details: '1x8 con 30kg', rest: 90, duration: null },
            { name: 'Squat', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Chest Press', details: '1x25 con 30kg', rest: 90, duration: null },
            { name: 'Rows', details: '1x30 con 30kg', rest: 90, duration: null },
            { name: 'Shoulder Press', details: '1x8 con 30kg', rest: 0, duration: null }
        ],
        tips: {
            'Squat': 'Piedi larghezza spalle. Scendi fino a quando le cosce sono parallele al pavimento. Peso sui talloni.',
            'Chest Press': 'Scapole retratte e abbassate. Gomiti a 45 gradi. Spingi in modo esplosivo.',
            'Rows': 'Tira verso l\'ombelico. Contrai le scapole insieme. Non usare slancio.',
            'Shoulder Press': 'Core contratto. Non inarcare la schiena. Spingi sopra la testa in linea retta.'
        }
    }
];

// ========================================
// App State
// ========================================
let currentWorkout = null;
let currentExerciseIndex = 0;
let isResting = false;
let isPaused = false;
let timeRemaining = 0;
let timerInterval = null;
let totalTimeElapsed = 0;
let workoutStartTime = null;

// ========================================
// Audio System
// ========================================
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function playBeep(frequency, duration, type = 'sine') {
    if (!audioCtx) return;
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type;
    
    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);
    
    oscillator.start(audioCtx.currentTime);
    oscillator.stop(audioCtx.currentTime + duration);
}

function playStartSound() {
    playBeep(880, 0.15);
    setTimeout(() => playBeep(1100, 0.15), 150);
    setTimeout(() => playBeep(1320, 0.3), 300);
}

function playRestSound() {
    playBeep(660, 0.2);
    setTimeout(() => playBeep(550, 0.3), 200);
}

function playWarningSound() {
    playBeep(440, 0.1);
}

function playCompleteSound() {
    playBeep(523, 0.15);
    setTimeout(() => playBeep(659, 0.15), 150);
    setTimeout(() => playBeep(784, 0.15), 300);
    setTimeout(() => playBeep(1047, 0.4), 450);
}

// ========================================
// DOM Elements
// ========================================
const screens = {
    home: document.getElementById('home-screen'),
    preview: document.getElementById('preview-screen'),
    workout: document.getElementById('workout-screen'),
    complete: document.getElementById('complete-screen')
};

const elements = {
    workoutCards: document.getElementById('workout-cards'),
    previewTitle: document.getElementById('preview-title'),
    workoutInfo: document.getElementById('workout-info'),
    exerciseList: document.getElementById('exercise-list'),
    timerRing: document.getElementById('timer-ring'),
    timerProgress: document.getElementById('timer-progress'),
    timerValue: document.getElementById('timer-value'),
    timerLabel: document.getElementById('timer-label'),
    currentExerciseNum: document.getElementById('current-exercise-num'),
    totalExercises: document.getElementById('total-exercises'),
    currentExerciseName: document.getElementById('current-exercise-name'),
    currentExerciseDetails: document.getElementById('current-exercise-details'),
    tipsPanel: document.getElementById('tips-panel'),
    tipText: document.getElementById('tip-text'),
    nextPanel: document.getElementById('next-panel'),
    nextExerciseName: document.getElementById('next-exercise-name'),
    completeStats: document.getElementById('complete-stats'),
    pauseResume: document.getElementById('pause-resume')
};

// ========================================
// Screen Navigation
// ========================================
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// ========================================
// Home Screen
// ========================================
function renderWorkoutCards() {
    elements.workoutCards.innerHTML = workouts.map(workout => {
        const totalTime = calculateTotalTime(workout);
        const colorClass = workout.color === 'green' ? 'green' : '';
        
        return `
            <div class="workout-card ${colorClass}" data-workout-id="${workout.id}">
                <div class="card-header">
                    <div class="card-icon">${workout.icon}</div>
                    <div class="card-title-group">
                        <h3 class="card-title">${workout.name}</h3>
                        <p class="card-subtitle">${workout.subtitle || `${workout.exercises.length} esercizi`}</p>
                    </div>
                </div>
                <div class="card-stats">
                    <div class="stat">
                        <span class="stat-icon">⏱️</span>
                        <span>~${totalTime} min</span>
                    </div>
                    <div class="stat">
                        <span class="stat-icon">🔢</span>
                        <span>${workout.exercises.length} esercizi</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    // Add click listeners
    document.querySelectorAll('.workout-card').forEach(card => {
        card.addEventListener('click', () => {
            const workoutId = card.dataset.workoutId;
            selectWorkout(workoutId);
        });
    });
}

function calculateTotalTime(workout) {
    if (workout.isCircuit) {
        return Math.ceil((workout.exercises.length * (workout.exerciseDuration + workout.restDuration)) / 60);
    }
    const totalRest = workout.exercises.reduce((sum, ex) => sum + (ex.rest || 0), 0);
    // Assume average 60 seconds per exercise for rep-based workouts
    const estimatedExerciseTime = workout.exercises.length * 60;
    return Math.ceil((totalRest + estimatedExerciseTime) / 60);
}

// ========================================
// Preview Screen
// ========================================
function selectWorkout(workoutId) {
    currentWorkout = workouts.find(w => w.id === workoutId);
    if (!currentWorkout) return;
    
    elements.previewTitle.textContent = currentWorkout.name;
    
    // Render workout info
    const totalTime = calculateTotalTime(currentWorkout);
    elements.workoutInfo.innerHTML = `
        <div class="info-item">
            <span class="info-value">${currentWorkout.exercises.length}</span>
            <span class="info-label">Esercizi</span>
        </div>
        <div class="info-item">
            <span class="info-value">~${totalTime}</span>
            <span class="info-label">Minuti</span>
        </div>
        <div class="info-item">
            <span class="info-value">${currentWorkout.isCircuit ? '45s' : 'Varie'}</span>
            <span class="info-label">Recupero</span>
        </div>
    `;
    
    // Render exercise list
    const borderClass = currentWorkout.color === 'green' ? 'green-border' : '';
    elements.exerciseList.innerHTML = currentWorkout.exercises.map((exercise, index) => `
        <div class="exercise-item ${borderClass}">
            <span class="exercise-num">${index + 1}</span>
            <div class="exercise-content">
                <h4 class="exercise-name">${exercise.name}</h4>
                <p class="exercise-meta">${exercise.details}</p>
            </div>
            <span class="exercise-rest">${exercise.rest}s</span>
        </div>
    `).join('');
    
    showScreen('preview');
}

// ========================================
// Workout Screen
// ========================================
function startWorkout() {
    initAudio();
    currentExerciseIndex = 0;
    isResting = false;
    isPaused = false;
    totalTimeElapsed = 0;
    workoutStartTime = Date.now();
    
    elements.totalExercises.textContent = currentWorkout.exercises.length;
    
    showScreen('workout');
    startCountdown(3);
}

function startCountdown(seconds) {
    timeRemaining = seconds;
    updateTimerDisplay();
    elements.timerLabel.textContent = 'PREPARATI';
    elements.timerRing.className = 'timer-ring';
    elements.currentExerciseName.textContent = 'Preparati...';
    elements.currentExerciseDetails.textContent = currentWorkout.exercises[0].name + ' sta per iniziare';
    updateNextExercise();
    hideTips();
    
    timerInterval = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        
        if (timeRemaining <= 3 && timeRemaining > 0) {
            playWarningSound();
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            playStartSound();
            startExercise();
        }
    }, 1000);
}

function startExercise() {
    const exercise = currentWorkout.exercises[currentExerciseIndex];
    isResting = false;
    
    elements.currentExerciseNum.textContent = currentExerciseIndex + 1;
    elements.currentExerciseName.textContent = exercise.name;
    elements.currentExerciseDetails.textContent = exercise.details;
    elements.timerLabel.textContent = 'ESERCIZIO';
    elements.timerRing.className = 'timer-ring exercise';
    
    updateNextExercise();
    showTip(exercise.name);
    
    if (exercise.duration) {
        // Timed exercise (circuit style)
        timeRemaining = exercise.duration;
        startTimer(exercise.duration);
    } else {
        // Rep-based exercise - show "Quando pronto" and wait for user
        timeRemaining = 0;
        elements.timerValue.textContent = '∞';
        elements.timerLabel.textContent = 'REP';
        updateProgressRing(1, 1);
    }
}

function startTimer(totalSeconds) {
    const circumference = 2 * Math.PI * 90;
    
    updateTimerDisplay();
    updateProgressRing(timeRemaining, totalSeconds);
    
    timerInterval = setInterval(() => {
        if (isPaused) return;
        
        timeRemaining--;
        totalTimeElapsed++;
        updateTimerDisplay();
        updateProgressRing(timeRemaining, totalSeconds);
        
        if (timeRemaining <= 3 && timeRemaining > 0) {
            playWarningSound();
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            startRest();
        }
    }, 1000);
}

function startRest() {
    const exercise = currentWorkout.exercises[currentExerciseIndex];
    
    if (exercise.rest === 0 || currentExerciseIndex === currentWorkout.exercises.length - 1) {
        // No rest or last exercise
        goToNextExercise();
        return;
    }
    
    isResting = true;
    playRestSound();
    
    elements.timerLabel.textContent = 'RECUPERO';
    elements.timerRing.className = 'timer-ring rest';
    elements.currentExerciseName.textContent = 'Riposo';
    elements.currentExerciseDetails.textContent = 'Recupera e preparati per il prossimo';
    hideTips();
    
    timeRemaining = exercise.rest;
    startTimer(exercise.rest);
    
    // Override timer end callback
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (isPaused) return;
        
        timeRemaining--;
        totalTimeElapsed++;
        updateTimerDisplay();
        updateProgressRing(timeRemaining, exercise.rest);
        
        if (timeRemaining <= 3 && timeRemaining > 0) {
            playWarningSound();
        }
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            goToNextExercise();
        }
    }, 1000);
}

function goToNextExercise() {
    currentExerciseIndex++;
    
    if (currentExerciseIndex >= currentWorkout.exercises.length) {
        completeWorkout();
        return;
    }
    
    playStartSound();
    startExercise();
}

function goToPrevExercise() {
    if (currentExerciseIndex > 0) {
        currentExerciseIndex--;
        clearInterval(timerInterval);
        playStartSound();
        startExercise();
    }
}

function skipToNext() {
    clearInterval(timerInterval);
    
    if (isResting) {
        goToNextExercise();
    } else {
        startRest();
    }
}

function completeWorkout() {
    playCompleteSound();
    
    const totalMinutes = Math.floor((Date.now() - workoutStartTime) / 60000);
    const totalSeconds = Math.floor(((Date.now() - workoutStartTime) % 60000) / 1000);
    
    elements.completeStats.innerHTML = `
        <div class="complete-stat">
            <span class="complete-stat-value">${currentWorkout.exercises.length}</span>
            <span class="complete-stat-label">Esercizi</span>
        </div>
        <div class="complete-stat">
            <span class="complete-stat-value">${totalMinutes}:${totalSeconds.toString().padStart(2, '0')}</span>
            <span class="complete-stat-label">Tempo Totale</span>
        </div>
    `;
    
    showScreen('complete');
}

function togglePause() {
    isPaused = !isPaused;
    
    const pauseIcon = elements.pauseResume.querySelector('.pause-icon');
    const playIcon = elements.pauseResume.querySelector('.play-icon');
    
    if (isPaused) {
        pauseIcon.classList.add('hidden');
        playIcon.classList.remove('hidden');
        elements.timerRing.style.animationPlayState = 'paused';
    } else {
        pauseIcon.classList.remove('hidden');
        playIcon.classList.add('hidden');
        elements.timerRing.style.animationPlayState = 'running';
    }
}

function quitWorkout() {
    clearInterval(timerInterval);
    isPaused = false;
    showScreen('home');
}

// ========================================
// UI Helpers
// ========================================
function updateTimerDisplay() {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    elements.timerValue.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function updateProgressRing(remaining, total) {
    const circumference = 2 * Math.PI * 90;
    const progress = remaining / total;
    const offset = circumference * (1 - progress);
    elements.timerProgress.style.strokeDashoffset = offset;
}

function updateNextExercise() {
    if (currentExerciseIndex < currentWorkout.exercises.length - 1) {
        elements.nextPanel.style.display = 'flex';
        elements.nextExerciseName.textContent = currentWorkout.exercises[currentExerciseIndex + 1].name;
    } else {
        elements.nextPanel.style.display = 'flex';
        elements.nextExerciseName.textContent = 'Fine allenamento! 🎉';
    }
}

function showTip(exerciseName) {
    const tip = currentWorkout.tips?.[exerciseName];
    if (tip) {
        elements.tipsPanel.classList.remove('hidden');
        elements.tipText.textContent = tip;
    } else {
        hideTips();
    }
}

function hideTips() {
    elements.tipsPanel.classList.add('hidden');
}

// ========================================
// Event Listeners
// ========================================
document.getElementById('back-to-home').addEventListener('click', () => showScreen('home'));
document.getElementById('start-workout').addEventListener('click', startWorkout);
document.getElementById('quit-workout').addEventListener('click', quitWorkout);
document.getElementById('pause-resume').addEventListener('click', togglePause);
document.getElementById('prev-exercise').addEventListener('click', goToPrevExercise);
document.getElementById('next-exercise').addEventListener('click', skipToNext);
document.getElementById('back-home').addEventListener('click', () => showScreen('home'));

// For rep-based exercises, click on timer to start rest
document.getElementById('timer-ring').addEventListener('click', () => {
    const exercise = currentWorkout?.exercises[currentExerciseIndex];
    if (exercise && !exercise.duration && !isResting) {
        skipToNext();
    }
});

// ========================================
// Initialize App
// ========================================
renderWorkoutCards();
