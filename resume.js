async function readPDF() {
    const file = document.getElementById("resumeFile").files[0];

    if (!file) {
        alert("Please select a PDF file");
        return;
    }

    const reader = new FileReader();

    reader.onload = async function () {
        const typedArray = new Uint8Array(this.result);
        const pdf = await pdfjsLib.getDocument(typedArray).promise;

        let text = "";
        for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const strings = content.items.map(item => item.str);
            text += strings.join(" ") + " ";
        }

        analyzeResume(text);
    };

    reader.readAsArrayBuffer(file);
}

function analyzeResume(text) {
    const resumeText = text.toLowerCase();
    const score = Math.min(100, Math.max(0, Math.round(
        (resumeText.includes("experience") ? 15 : 0) +
        (resumeText.includes("project") ? 15 : 0) +
        (resumeText.includes("skill") || resumeText.includes("skills") ? 15 : 0) +
        (resumeText.includes("education") ? 10 : 0) +
        (resumeText.includes("communication") || resumeText.includes("team") || resumeText.includes("problem solving") || resumeText.includes("analysis") ? 15 : 0) +
        (resumeText.includes("management") || resumeText.includes("internship") || resumeText.includes("research") || resumeText.includes("presentation") ? 15 : 0) +
        (resumeText.includes("cert") || resumeText.includes("certificate") || resumeText.includes("course") ? 10 : 0)
    )));

    let suggestions = [];
    if (!resumeText.includes("experience")) suggestions.push("Add a clear work or internship experience section.");
    if (!resumeText.includes("project")) suggestions.push("Include your major projects, assignments, or academic work with outcomes.");
    if (!resumeText.includes("skill") && !resumeText.includes("skills")) suggestions.push("List your subject knowledge, career skills, and soft skills.");
    if (!resumeText.includes("education")) suggestions.push("Mention your educational background and current program.");
    if (!resumeText.includes("communication") && !resumeText.includes("management") && !resumeText.includes("internship") && !resumeText.includes("research") && !resumeText.includes("presentation")) suggestions.push("Add relevant keywords for your field or career path.");

    document.getElementById("score").textContent = `Resume Score: ${score}/100`;
    document.getElementById("suggestions").innerHTML = suggestions.length
        ? `<ul>${suggestions.map(item => `<li>${item}</li>`).join("")}</ul>`
        : "<p>Your resume looks strong. Great job!</p>";
}