// --- Phrasal Verb Questions Database (70 items) ---
const questions = [
    // Existing 50 questions (unchanged)
    { text: "She couldn't ___ up with the noise any longer.", answer: "put", type: "verb", explanation: "The correct phrasal verb is 'put up with' (to tolerate)." },
    { text: "He finally ___ up smoking after many years.", answer: "gave", type: "verb", explanation: "The correct phrasal verb is 'give up' (to quit)." },
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
    { text: "He ___ up a lot of debt during university.", answer: "ran", type: "verb", explanation: "'Run up' means to accumulate (debt, bills)." },
    { text: "We need to cut ___ on sugar.", answer: "down", type: "prep", explanation: "'Cut down on' means to reduce." },
    { text: "She ___ after her little brother.", answer: "looks", type: "verb", explanation: "'Look after' means to take care of." },
    { text: "He ___ up with a brilliant idea.", answer: "came", type: "verb", explanation: "'Come up with' means to invent or produce (an idea)." },
    { text: "The plane took ___ on time.", answer: "off", type: "prep", explanation: "'Take off' means to leave the ground (plane)." },
    { text: "She ___ up her mind quickly.", answer: "made", type: "verb", explanation: "'Make up your mind' means to decide." },
    { text: "He ___ up the mess after the party.", answer: "cleared", type: "verb", explanation: "'Clear up' means to tidy." },
    { text: "We ___ up with our old friends at the reunion.", answer: "caught", type: "verb", explanation: "'Catch up with' means to meet and share news." },
    { text: "She ___ up a story to explain her absence.", answer: "made", type: "verb", explanation: "'Make up' means to invent." },
    { text: "He ___ up the offer to work abroad.", answer: "took", type: "verb", explanation: "'Take up' means to accept (an offer)." },
    { text: "The car broke ___ on the way home.", answer: "down", type: "prep", explanation: "'Break down' means to stop working (vehicle)." },
    { text: "She ___ up the children after school.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect." },
    { text: "He ___ up the challenge.", answer: "took", type: "verb", explanation: "'Take up' means to accept (a challenge)." },
    { text: "We ___ up the decorations after the party.", answer: "took", type: "verb", explanation: "'Take up' means to remove." },
    { text: "She ___ up a new hobby.", answer: "took", type: "verb", explanation: "'Take up' means to start (a hobby)." },
    { text: "He ___ up the phone and called his friend.", answer: "picked", type: "verb", explanation: "'Pick up' means to answer (the phone)." },
    { text: "The teacher ___ out the mistakes in my essay.", answer: "pointed", type: "verb", explanation: "'Point out' means to indicate." },
    { text: "She ___ up the pieces of the broken vase.", answer: "picked", type: "verb", explanation: "'Pick up' means to collect." },
    { text: "He ___ up the guitar and started playing.", answer: "picked", type: "verb", explanation: "'Pick up' means to start learning (an instrument)." },
    { text: "We ___ up the tent in the rain.", answer: "put", type: "verb", explanation: "'Put up' means to erect (a tent)." },
    { text: "She ___ up with her boyfriend.", answer: "broke", type: "verb", explanation: "'Break up with' means to end a relationship." },
    { text: "He ___ up the story to make it more interesting.", answer: "made", type: "verb", explanation: "'Make up' means to invent." },
    { text: "The children ___ up a song for the show.", answer: "made", type: "verb", explanation: "'Make up' means to create." },
    { text: "She ___ up the courage to speak in public.", answer: "summoned", type: "verb", explanation: "'Summon up' means to gather (courage)." },
    { text: "He ___ up the bill at the restaurant.", answer: "ran", type: "verb", explanation: "'Run up' means to accumulate (a bill)." },
    { text: "We ___ up the time talking.", answer: "used", type: "verb", explanation: "'Use up' means to consume." },
    { text: "She ___ up the opportunity to travel.", answer: "jumped", type: "verb", explanation: "'Jump at' means to eagerly accept (an opportunity)." },
    { text: "He ___ up the stairs two at a time.", answer: "ran", type: "verb", explanation: "'Run up' means to go up quickly." },
    { text: "The company ___ up a new branch.", answer: "set", type: "verb", explanation: "'Set up' means to establish." },
    { text: "She ___ up the meeting for next week.", answer: "set", type: "verb", explanation: "'Set up' means to arrange." },
    { text: "He ___ up the computer for his grandmother.", answer: "set", type: "verb", explanation: "'Set up' means to install." },
    { text: "We ___ up the chairs for the event.", answer: "set", type: "verb", explanation: "'Set up' means to arrange." },
    { text: "She ___ up the alarm for 6 a.m.", answer: "set", type: "verb", explanation: "'Set up' means to program (an alarm)." },
    { text: "He ___ up the equipment before the show.", answer: "set", type: "verb", explanation: "'Set up' means to prepare." },
    { text: "We ___ up the decorations for the party.", answer: "put", type: "verb", explanation: "'Put up' means to hang or display." },
    { text: "She ___ up the notice on the board.", answer: "put", type: "verb", explanation: "'Put up' means to display." },
    { text: "He ___ up the umbrella when it started to rain.", answer: "put", type: "verb", explanation: "'Put up' means to open (an umbrella)." },
    { text: "We ___ up the tent in the garden.", answer: "put", type: "verb", explanation: "'Put up' means to erect (a tent)." },
    // --- 20 new "get" phrasal verb questions ---
    { text: "I usually get up ___ 7 a.m. on weekdays.", answer: "at", type: "prep", explanation: "'Get up at' is used to indicate the specific time you wake up." },
    { text: "It started raining, so we ___ out of the park quickly.", answer: "got", type: "verb", explanation: "'Get out' means to leave or exit a place quickly." },
    { text: "She got ___ the car and drove away.", answer: "in", type: "prep", explanation: "'Get in' means to enter a car or small vehicle." },
    { text: "Please ___ on the bus before it leaves.", answer: "get", type: "verb", explanation: "'Get on' means to board a bus or large vehicle." },
    { text: "We need to get ___ at the next train station.", answer: "off", type: "prep", explanation: "'Get off' means to leave a train, bus, or other form of transport." },
    { text: "It took him a long time to ___ over his cold.", answer: "get", type: "verb", explanation: "'Get over' means to recover from an illness or difficulty." },
    { text: "Even with a small salary, they manage to get ___.", answer: "by", type: "prep", explanation: "'Get by' means to survive or manage, especially financially." },
    { text: "When will you ___ back from your trip?", answer: "get", type: "verb", explanation: "'Get back' means to return from somewhere." },
    { text: "They’re hoping to get ___ for a few days this summer.", answer: "away", type: "prep", explanation: "'Get away' means to go on holiday or escape for a short time." },
    { text: "Do you ___ along with your new coworkers?", answer: "get", type: "verb", explanation: "'Get along with' means to have a good relationship with someone." },
    { text: "She worked hard to get ___ her exams.", answer: "through", type: "prep", explanation: "'Get through' means to successfully complete something difficult." },
    { text: "He’s always looking for ways to ___ ahead at work.", answer: "get", type: "verb", explanation: "'Get ahead' means to make progress or be successful in your career." },
    { text: "The teacher used a diagram to get her point ___.", answer: "across", type: "prep", explanation: "'Get across' means to successfully communicate an idea." },
    { text: "Don’t let the bad weather ___ you down.", answer: "get", type: "verb", explanation: "'Get down' means to make someone feel sad or depressed." },
    { text: "Let’s get ___ for coffee next week.", answer: "together", type: "prep", explanation: "'Get together' means to meet with someone socially." },
    { text: "He uses a bike to get ___ the city.", answer: "around", type: "prep", explanation: "'Get around' means to travel or move from place to place." },
    { text: "What exactly are you trying to get ___ with that question?", answer: "at", type: "prep", explanation: "'Get at' means to imply or suggest something." },
    { text: "I need to get ___ of these old clothes.", answer: "rid", type: "verb", explanation: "'Get rid of' means to throw away or remove something unwanted." },
    { text: "She wanted to ___ back at him for the prank.", answer: "get", type: "verb", explanation: "'Get back at' means to take revenge on someone." },
    { text: "Stop chatting and get on ___ your homework!", answer: "with", type: "prep", explanation: "'Get on with' means to continue or start doing something, especially work." }
];

// --- App Logic (unchanged) ---
let selectedQuestions = [];
let current = 0;
let score = 0;
let errors = [];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startQuiz() {
    selectedQuestions = questions.slice();
    shuffle(selectedQuestions);
    selectedQuestions = selectedQuestions.slice(0, 15);
    current = 0;
    score = 0;
    errors = [];
    document.getElementById('results').classList.add('hidden');
    showQuestion();
    updateProgress();
}

function showQuestion() {
    const q = selectedQuestions[current];
    let inputType = "text";
    let placeholder = q.type === "verb" ? "verb" : "preposition";
    document.getElementById('task-box').innerHTML = `
        <span>${q.text.replace("___", `<input id="answer" type="${inputType}" placeholder="${placeholder}" autocomplete="off" />`)}</span>
    `;
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('check-btn').disabled = false;
    document.getElementById('show-btn').disabled = false;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('answer').focus();
}

function checkAnswer() {
    const q = selectedQuestions[current];
    const user = document.getElementById('answer').value.trim().toLowerCase();
    const correct = q.answer.toLowerCase();
    if (user === correct) {
        score++;
        document.getElementById('feedback').innerHTML = `<span style="color:green;font-weight:600;">Correct!</span>`;
    } else {
        errors.push({ ...q, user });
        document.getElementById('feedback').innerHTML = `<span style="color:red;font-weight:600;">Incorrect.</span>`;
    }
    document.getElementById('check-btn').disabled = true;
    document.getElementById('show-btn').disabled = false;
    document.getElementById('next-btn').disabled = false;
}

function showSolution() {
    const q = selectedQuestions[current];
    document.getElementById('feedback').innerHTML = `
        <span style="color:#2193b0;font-weight:600;">Solution: <b>${q.answer}</b></span><br>
        <span style="font-size:0.95em;">${q.explanation}</span>
    `;
    document.getElementById('show-btn').disabled = true;
    document.getElementById('next-btn').disabled = false;
}

function nextQuestion() {
    current++;
    if (current < selectedQuestions.length) {
        showQuestion();
        updateProgress();
    } else {
        showResults();
    }
}

function updateProgress() {
    const percent = ((current) / selectedQuestions.length) * 100;
    document.getElementById('progress-bar').style.width = percent + "%";
    document.getElementById('progress-text').textContent = `Question ${current + 1} of ${selectedQuestions.length}`;
}

function showResults() {
    let html = `<h2>Your Score: ${score} / ${selectedQuestions.length}</h2>`;
    if (errors.length > 0) {
        html += `<h3>Review your mistakes:</h3><ul>`;
        errors.forEach(e => {
            html += `<li>
                <b>Q:</b> ${e.text.replace("___", `<b style="color:red;">${e.user || "___"}</b>`)}<br>
                <b>Correct:</b> <span style="color:green;">${e.answer}</span><br>
                <span style="font-size:0.95em;">${e.explanation}</span>
            </li>`;
        });
        html += `</ul>`;
    } else {
        html += `<p>Excellent! No mistakes.</p>`;
    }
    html += `<button onclick="startQuiz()">Restart</button>`;
    document.getElementById('results').innerHTML = html;
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('task-box').innerHTML = "";
    document.getElementById('feedback').innerHTML = "";
    document.getElementById('progress-bar').style.width = "100%";
    document.getElementById('progress-text').textContent = `Completed!`;
    document.getElementById('check-btn').disabled = true;
    document.getElementById('show-btn').disabled = true;
    document.getElementById('next-btn').disabled = true;
}

document.getElementById('check-btn').onclick = checkAnswer;
document.getElementById('show-btn').onclick = showSolution;
document.getElementById('next-btn').onclick = nextQuestion;

window.onload = startQuiz;
