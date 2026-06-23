const quizBanks = {
    "B.Sc IT": [
        { q: "Which skill is most useful in IT project teamwork?", a: ["Coding", "Communication", "Photography", "Painting"], c: "Communication" },
        { q: "What does SQL help you do?", a: ["Design websites", "Manage databases", "Create animations", "Write essays"], c: "Manage databases" },
        { q: "Which is a common IT project deliverable?", a: ["Research paper", "Financial statement", "Software demo", "Marketing plan"], c: "Software demo" },
        { q: "What is 15 + 25?", a: ["30", "40", "50", "60"], c: "40" },
        { q: "Which practice is important in software development?", a: ["Teamwork", "Gossiping", "Sleeping", "Skipping meetings"], c: "Teamwork" }
    ],
    "B.Com": [
        { q: "Which subject is core to B.Com?", a: ["Accounts", "Physics", "Biology", "Painting"], c: "Accounts" },
        { q: "What is GST?", a: ["Global Science Test", "Goods and Services Tax", "General School Timetable", "Government Salary Table"], c: "Goods and Services Tax" },
        { q: "Which is a financial statement?", a: ["Resume", "Balance Sheet", "Story", "Recipe"], c: "Balance Sheet" },
        { q: "What is 20 + 30?", a: ["40", "50", "60", "70"], c: "50" },
        { q: "A good business decision should be based on?", a: ["Facts", "Rumors", "Luck", "Fashion"], c: "Facts" }
    ],
    "BAF": [
        { q: "What does BAF specialize in?", a: ["Biology", "Accounting", "Fashion", "Film"], c: "Accounting" },
        { q: "Which is a financial process?", a: ["Budgeting", "Painting", "Gymnastics", "Singing"], c: "Budgeting" },
        { q: "What is a balance sheet used for?", a: ["Selling products", "Tracking assets and liabilities", "Writing essays", "Designing posters"], c: "Tracking assets and liabilities" },
        { q: "What is 100 / 10?", a: ["5", "10", "20", "15"], c: "10" },
        { q: "Which skill helps in finance roles?", a: ["Attention to detail", "Daydreaming", "Sleep", "Noise"], c: "Attention to detail" }
    ],
    "BMS": [
        { q: "BMS stands for?", a: ["Business Management Studies", "Basic Math Skills", "Biology, Music, Science", "Business Marketing Sheets"], c: "Business Management Studies" },
        { q: "Which quality is key for managers?", a: ["Leadership", "Sleeping", "Forgetting", "Avoiding people"], c: "Leadership" },
        { q: "What does SWOT analyze?", a: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Work, Orders, Taxes", "Software, Web, Operations, Technology", "Students, Workers, Officers, Teachers"], c: "Strengths, Weaknesses, Opportunities, Threats" },
        { q: "What is 12 × 5?", a: ["50", "55", "60", "65"], c: "60" },
        { q: "A good team member should be?", a: ["Collaborative", "Isolated", "Indifferent", "Rude"], c: "Collaborative" }
    ],
    "BBI": [
        { q: "BBI focuses on banking and?", a: ["Biology", "Insurance", "Illustration", "Interior design"], c: "Insurance" },
        { q: "What is the role of a banker?", a: ["Managing accounts", "Cooking food", "Teaching yoga", "Painting walls"], c: "Managing accounts" },
        { q: "Which document is important for loans?", a: ["Loan application", "Recipe book", "Song lyrics", "Travel diary"], c: "Loan application" },
        { q: "Which skill helps in customer service?", a: ["Patience", "Speed reading", "Sketching", "Running"], c: "Patience" },
        { q: "What is 15 + 25?", a: ["30", "40", "50", "60"], c: "40" }
    ],
    "BA": [
        { q: "Which skill is essential for BA students?", a: ["Writing", "Swimming", "Driving", "Baking"], c: "Writing" },
        { q: "What is a common BA discipline?", a: ["History", "Biochemistry", "Computer Networking", "Mechanical Design"], c: "History" },
        { q: "Which activity improves critical thinking?", a: ["Reading", "Watching TV", "Sleeping", "Eating"], c: "Reading" },
        { q: "What is 20 + 30?", a: ["40", "50", "60", "70"], c: "50" },
        { q: "Which is a good communication method?", a: ["Clear writing", "Mumbling", "Whispering", "Ignoring"], c: "Clear writing" }
    ],
    "B.Sc": [
        { q: "Which is a natural science subject?", a: ["Physics", "Literature", "Marketing", "Law"], c: "Physics" },
        { q: "What is the formula for density?", a: ["Mass / Volume", "Force / Area", "Speed × Time", "Volume / Mass"], c: "Mass / Volume" },
        { q: "Which skill is useful for lab work?", a: ["Observation", "Guessing", "Sleeping", "Fighting"], c: "Observation" },
        { q: "What is 12 × 5?", a: ["50", "55", "60", "65"], c: "60" },
        { q: "What is 100 / 10?", a: ["5", "10", "20", "15"], c: "10" }
    ],
    "Engineering": [
        { q: "Which is a core engineering skill?", a: ["Problem-solving", "Singing", "Dancing", "Cooking"], c: "Problem-solving" },
        { q: "What is the unit of force?", a: ["Newton", "Watt", "Pascal", "Joule"], c: "Newton" },
        { q: "Which drawing is used in engineering design?", a: ["Blueprint", "Painting", "Photograph", "Cartoon"], c: "Blueprint" },
        { q: "What is 15 + 25?", a: ["30", "40", "50", "60"], c: "40" },
        { q: "What is 20 + 30?", a: ["40", "50", "60", "70"], c: "50" }
    ],
    "All Streams": [
        { q: "Which is a strong career skill?", a: ["Communication", "Typing", "Sleeping", "Drawing"], c: "Communication" },
        { q: "What is 15 + 25?", a: ["30", "40", "50", "60"], c: "40" },
        { q: "What is 100 / 10?", a: ["5", "10", "20", "15"], c: "10" },
        { q: "What is 20 + 30?", a: ["40", "50", "60", "70"], c: "50" },
        { q: "A good work habit is?", a: ["Punctuality", "Laziness", "Procrastination", "Complaining"], c: "Punctuality" }
    ]
};

let questions = [];
let current = 0;
let score = 0;
let selectedStream = "All Streams";

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

    selectedStream = document.getElementById("streamSelect").value;
    if (!selectedStream) {
        alert("Please select your stream");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentStream", selectedStream);

    document.querySelector(".name-box").style.display = "none";
    document.getElementById("quizSection").style.display = "block";
    document.getElementById("quizHeader").textContent = `🧠 ${selectedStream} Quiz`;

    questions = quizBanks[selectedStream] || quizBanks["All Streams"];
    current = 0;
    score = 0;
    timeLeft = 1800;

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