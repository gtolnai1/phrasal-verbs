// --- Phrasal Verb Questions Database (50 items) ---
const questions = [
    // Each question: { text: "...", answer: "...", type: "verb"|"prep", explanation: "..." }
    { text: "She couldn't ___ up with the noise any longer.", answer: "put", type: "verb", explanation: "The correct phrasal verb is 'put up with' (to tolerate)." },
    { text: "He finally ___ down smoking after many years.", answer: "gave", type: "verb", explanation: "The correct phrasal verb is 'give up' (to quit)." },
    { text: "We ran ___ of milk, so I went to the shop.", answer: "out", type: "prep", explanation: "'Run out of' means to have no more left." },
    { text: "Can you look ___ my cat while I'm away?", answer: "after", type: "prep", explanation: "'Look after' means to take care of." },
    { text: "She made ___ an excuse for being late.", answer: "up", type: "prep", explanation: "'Make up' means to invent." },
    { text: "He turned ___ the offer because it was too low.", answer: "down", type: "prep", explanation: "'Turn down' means to reject." },
    { text: "They ___ up a new company last year.", answer: "set", type: "verb", explanation: "'Set up' means to establish." },
    { text: "I can't ___ up with his behavior anymore.", answer: "put", type: "verb", explanation: "'Put up with' means to tolerate." },
    { text: "She ___ into her old friend at the supermarket.", answer: "ran", type: "verb", explanation: "'Run into' means to meet by chance." },
    { text: "He looks ___ to his older brother.", answer: "up", type: "prep", explanation: "'Look up to' means to admire." },
    { text: "The meeting was ___ off due to the storm.", answer: "called", type: "verb", explanation: "'Call off' means to cancel." },
    { text: "Please fill ___ this form.", answer: "in", type: "prep", explanation: "'Fill in' means to complete (a form)." },
    { text: "She ___ up the phone before I could reply.", answer: "hung", type: "verb", explanation: "'Hang up' means to end a phone call." },
    { text: "He ___ up a lot of money for the trip.", answer: "saved", type: "verb", explanation: "'Save up' means to save money for a purpose." },
    { text: "The car ___ down on the way to work.", answer: "broke", type: "verb", explanation: "'Break down' means to stop working." },
    { text: "He ___ up the mess after the party.", answer: "cleaned", type: "verb", explanation: "'Clean up' means to tidy." },
    { text: "She ___ up with a brilliant idea.", answer: "came", type: "verb", explanation: "'Come up with' means to think of." },
    { text: "He ___ up the story to avoid trouble.", answer: "made", type: "verb", explanation: "'Make up' means to invent." },
    { text: "We need to ___ up for lost time.", answer: "make", type: "verb", explanation: "'Make up for' means to compensate." },
    { text: "She ___ up with her boyfriend after the argument.", answer: "made", type: "verb", explanation: "'Make up with' means to reconcile." },
    { text: "He ___ up the invitation to the party.", answer: "turned", type: "verb", explanation: "'Turn up' means to appear or arrive." },
    { text: "The teacher told us to hand ___ our homework.", answer: "in", type: "prep", explanation: "'Hand in' means to submit." },
    { text: "He ___ up the volume to hear better.", answer: "turned", type: "verb", explanation: "'Turn up' means to increase (volume)." },
    { text: "She ___ up the offer of a new job.", answer: "took", type: "verb", explanation: "'Take up' means to accept (an offer)." },
    { text: "He ___ up the challenge and succeeded.", answer: "took", type: "verb", explanation: "'Take up' means to accept (a challenge)." },
    { text: "The plane ___ off on time.", answer: "took", type: "verb", explanation: "'Take off' means to leave the ground (plane)." },
    { text: "She ___ up painting as a hobby.", answer: "took", type: "verb", explanation: "'Take up' means to start (a hobby)." },
    { text: "He ___ up the phone and called his friend.", answer: "picked", type: "verb", explanation: "'Pick up' means to lift or answer (the phone)." },
    { text: "She ___ up the children from school.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect." },
    { text: "He ___ up the pieces after the accident.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect or gather." },
    { text: "She ___ up the story to make it more interesting.", answer: "made", type: "verb", explanation: "'Make up' means to invent." },
    { text: "He ___ up the mess after dinner.", answer: "cleaned", type: "verb", explanation: "'Clean up' means to tidy." },
    { text: "She ___ up with a solution to the problem.", answer: "came", type: "verb", explanation: "'Come up with' means to think of." },
    { text: "He ___ up the invitation to dinner.", answer: "turned", type: "verb", explanation: "'Turn up' means to appear or arrive." },
    { text: "She ___ up the offer of help.", answer: "took", type: "verb", explanation: "'Take up' means to accept (an offer)." },
    { text: "He ___ up the challenge.", answer: "took", type: "verb", explanation: "'Take up' means to accept (a challenge)." },
    { text: "The plane ___ off at 8 o'clock.", answer: "took", type: "verb", explanation: "'Take off' means to leave the ground (plane)." },
    { text: "She ___ up painting last year.", answer: "took", type: "verb", explanation: "'Take up' means to start (a hobby)." },
    { text: "He ___ up the phone quickly.", answer: "picked", type: "verb", explanation: "'Pick up' means to lift or answer (the phone)." },
    { text: "She ___ up the children at 3 pm.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect." },
    { text: "He ___ up the pieces after the vase broke.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect or gather." },
    { text: "She ___ up the story for fun.", answer: "made", type: "verb", explanation: "'Make up' means to invent." },
    { text: "He ___ up the mess in the kitchen.", answer: "cleaned", type: "verb", explanation: "'Clean up' means to tidy." },
    { text: "She ___ up with a new plan.", answer: "came", type: "verb", explanation: "'Come up with' means to think of." },
    { text: "He ___ up the invitation to the event.", answer: "turned", type: "verb", explanation: "'Turn up' means to appear or arrive." },
    { text: "She ___ up the offer of a ride.", answer: "took", type: "verb", explanation: "'Take up' means to accept (an offer)." },
    { text: "He ___ up the challenge bravely.", answer: "took", type: "verb", explanation: "'Take up' means to accept (a challenge)." },
    { text: "The plane ___ off smoothly.", answer: "took", type: "verb", explanation: "'Take off' means to leave the ground (plane)." },
    { text: "She ___ up painting recently.", answer: "took", type: "verb", explanation: "'Take up' means to start (a hobby)." },
    { text: "He ___ up the phone and dialed.", answer: "picked", type: "verb", explanation: "'Pick up' means to lift or answer (the phone)." },
    { text: "She ___ up the children after school.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect." }
];

// --- App State ---
let selectedQuestions = [];
let current = 0;
let score = 0;
let userAnswers = [];
let errors = [];

// --- DOM Elements ---
const taskBox = document.getElementById('task-box');
const checkBtn = document.getElementById('check-btn');
const nextBtn = document.getElementById('next-btn');
const showBtn = document.getElementById('show-btn');
const feedback = document.getElementById('feedback');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const results = document.getElementById('results');

// --- Utility Functions ---
function shuffle(array) {
    let arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// --- Initialize App ---
function startSession() {
    selectedQuestions = shuffle(questions).slice(0, 15);
    current = 0;
    score = 0;
    userAnswers = [];
    errors = [];
    results.classList.add('hidden');
    showQuestion();
    updateProgress();
    feedback.textContent = '';
    feedback.className = '';
}

function showQuestion() {
    const q = selectedQuestions[current];
    let html = '';
    // Replace gap with input
    if (q.type === "verb") {
        html = q.text.replace("___", `<input type="text" id="gap-input" autocomplete="off" spellcheck="false" placeholder="verb">`);
    } else {
        html = q.text.replace("___", `<input type="text" id="gap-input" autocomplete="off" spellcheck="false" placeholder="prep">`);
    }
    taskBox.innerHTML = `<span>${html}</span>`;
    document.getElementById('gap-input').focus();
    checkBtn.disabled = false;
    nextBtn.disabled = true;
    showBtn.disabled = false;
    feedback.textContent = '';
    feedback.className = '';
}

function updateProgress() {
    const percent = ((current) / 15) * 100;
    progressBar.style.width = percent + "%";
    progressText.textContent = `Question ${current + 1} of 15`;
}

// --- Button Handlers ---
checkBtn.onclick = function() {
    const input = document.getElementById('gap-input');
    if (!input) return;
    const userInput = input.value.trim().toLowerCase();
    const q = selectedQuestions[current];
    if (userInput === "") {
        feedback.textContent = "Please enter your answer.";
        feedback.className = "incorrect";
        return;
    }
    if (userInput === q.answer.toLowerCase()) {
        feedback.textContent = "✅ Correct!";
        feedback.className = "correct";
        score++;
        userAnswers.push({ correct: true, user: userInput });
        checkBtn.disabled = true;
        nextBtn.disabled = false;
        showBtn.disabled = true;
    } else {
        feedback.textContent = "❌ Incorrect. Try again or show the solution.";
        feedback.className = "incorrect";
        userAnswers.push({ correct: false, user: userInput });
        checkBtn.disabled = false;
        nextBtn.disabled = true;
        showBtn.disabled = false;
    }
};

showBtn.onclick = function() {
    const q = selectedQuestions[current];
    feedback.innerHTML = `💡 Solution: <b>${q.answer}</b><br><span style="font-size:0.97em;">${q.explanation}</span>`;
    feedback.className = "solution";
    checkBtn.disabled = true;
    nextBtn.disabled = false;
    showBtn.disabled = true;
    // Record as error if not already correct
    if (!userAnswers[current] || !userAnswers[current].correct) {
        errors.push({
            question: q.text,
            correct: q.answer,
            explanation: q.explanation,
            user: (userAnswers[current] && userAnswers[current].user) || ""
        });
    }
};

nextBtn.onclick = function() {
    // If incorrect and not shown solution, record error
    if (userAnswers[current] && !userAnswers[current].correct && feedback.className !== "solution") {
        const q = selectedQuestions[current];
        errors.push({
            question: q.text,
            correct: q.answer,
            explanation: q.explanation,
            user: userAnswers[current].user
        });
    }
    current++;
    if (current < 15) {
        showQuestion();
        updateProgress();
    } else {
        showResults();
    }
};

// --- Show Results ---
function showResults() {
    progressBar.style.width = "100%";
    progressText.textContent = `Completed!`;
    taskBox.innerHTML = "";
    checkBtn.disabled = true;
    nextBtn.disabled = true;
    showBtn.disabled = true;
    let html = `<h2>Your Score: ${score} / 15</h2>`;
    if (errors.length > 0) {
        html += `<p>You made ${errors.length} error(s). Review them below:</p><ul>`;
        errors.forEach((err, idx) => {
            html += `<li>
                <b>Q${idx+1}:</b> ${err.question.replace("___", `<u>${err.user || "(no answer)"}</u>`)}<br>
                <span style="color:#e17055;">Your answer:</span> <b>${err.user || "(no answer)"}</b><br>
                <span style="color:#0984e3;">Correct answer:</span> <b>${err.correct}</b><br>
                <span style="font-size:0.97em;">${err.explanation}</span>
            </li>`;
        });
        html += `</ul>`;
    } else {
        html += `<p>🎉 Excellent! You answered all questions correctly.</p>`;
    }
    html += `<div style="text-align:center;margin-top:1.5rem;">
        <button onclick="startSession()">Restart</button>
    </div>`;
    results.innerHTML = html;
    results.classList.remove('hidden');
    feedback.textContent = '';
    feedback.className = '';
}

// --- Start the app on load ---
window.onload = startSession;
