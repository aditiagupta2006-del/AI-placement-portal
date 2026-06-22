document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const successMsg = document.getElementById("successMsg");

    if (!name || !email || !message) {
        successMsg.textContent = "Please fill in all fields.";
        successMsg.style.color = "red";
        return;
    }

    const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    contacts.push({ name, email, message });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    successMsg.textContent = `Thanks ${name}! Your message has been sent.`;
    successMsg.style.color = "green";
    document.getElementById("contactForm").reset();
});
