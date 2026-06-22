const questions = [

    {
        q: "What is 15 + 25 ?",
        a: ["30", "40", "50", "60"],
        c: "40"
    },

    {
        q: "What is 12 × 5 ?",
        a: ["50", "55", "60", "65"],
        c: "60"
    },

    {
        q: "Which is a Programming Language?",
        a: ["HTML", "CSS", "Python", "Photoshop"],
        c: "Python"
    },

    {
        q: "What is 100 / 10 ?",
        a: ["5", "10", "20", "15"],
        c: "10"
    },

    {
        q: "What is 20 + 30 ?",
        a: ["40", "50", "60", "70"],
        c: "50"
    }

];

let current = 0;
let score = 0;

let timer;
let timeLeft = 1800;

function startQuiz() {

    let name =
        document.getElementById(
            "studentName"
        ).value;

    if (name == "") {
        alert("Enter Your Name");
        return;
    }

    localStorage.setItem(
        "studentName",
        name
    );

    document.querySelector(
        ".name-box"
    ).style.display = "none";

    document.getElementById(
        "quizSection"
    ).style.display = "block";

    loadQuestion();

    startTimer();

}

function loadQuestion() {

    document.getElementById(
        "question"
    ).innerHTML =
        questions[current].q;

    let options = "";

    questions[current].a.forEach(option => {

        options +=

            `
<button onclick="checkAnswer('${option}')">
${option}
</button>
`;

    });

    document.getElementById(
        "answers"
    ).innerHTML = options;

    document.getElementById(
        "progressBar"
    ).style.width =

        ((current + 1) /
            questions.length)
        * 100 + "%";

}

function checkAnswer(answer) {

    let buttons =
        document.querySelectorAll(
            "#answers button"
        );

    buttons.forEach(btn => {

        if (btn.innerHTML ==
            questions[current].c) {

            btn.style.background =
                "#22c55e";

            btn.style.color = "white";

        }

        if (
            btn.innerHTML == answer &&
            answer != questions[current].c
        ) {

            btn.style.background =
                "#ef4444";

            btn.style.color = "white";

        }

    });

    if (
        answer ==
        questions[current].c
    ) {
        score++;
    }

}

function nextQuestion() {

    current++;

    if (
        current <
        questions.length
    ) {

        loadQuestion();

    }
    else {

        showResult();

    }

}

function startTimer() {

    timer = setInterval(() => {

        let minutes =
            Math.floor(
                timeLeft / 60
            );

        let seconds =
            timeLeft % 60;

        document.getElementById(
            "timer"
        ).innerHTML =

            "Time Left: " +

            minutes + ":" +

            (seconds < 10
                ? "0" + seconds
                : seconds);

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timer);

            showResult();

        }

    }, 1000);

}

function showResult() {

    clearInterval(timer);

    let name =
        localStorage.getItem(
            "studentName"
        );

    document.querySelector(
        ".quiz-container"
    ).innerHTML =

        `
<div class="result-card">

<h1>🎉 Quiz Completed</h1>

<h2>${name}</h2>

<h3>
Score :
${score}/${questions.length}
</h3>

<br>

<button
onclick="downloadCertificate()">

🏆 Download Certificate

</button>

</div>
`;

}

function downloadCertificate() {

    const { jsPDF } =
        window.jspdf;

    const doc =
        new jsPDF('landscape');

    let name =
        localStorage.getItem(
            "studentName"
        );

    doc.setDrawColor(
        75, 85, 255
    );

    doc.setLineWidth(3);

    doc.rect(
        10,
        10,
        277,
        190
    );

    doc.setFontSize(30);

    doc.text(
        "CERTIFICATE OF ACHIEVEMENT",
        55,
        40
    );

    doc.setFontSize(18);

    doc.text(
        "This Certificate is Awarded To",
        90,
        70
    );

    doc.setFontSize(28);

    doc.text(
        name,
        110,
        95
    );

    doc.setFontSize(16);

    doc.text(
        "For Successfully Completing the Aptitude Quiz",
        55,
        120
    );

    doc.text(
        "Score : " +
        score +
        "/" +
        questions.length,
        115,
        140
    );

    doc.text(
        "Date : " +
        new Date()
            .toLocaleDateString(),
        105,
        160
    );

    doc.save(
        name +
        "_Certificate.pdf"
    );

}