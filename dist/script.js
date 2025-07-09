"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registrationForm");
    const successMsg = document.getElementById("successMessage");
    form.querySelectorAll("input, select").forEach((element) => {
        element.addEventListener("input", () => {
            successMsg.style.display = "none";
        });
    });
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const day = document.getElementById("dob-day").value;
        const month = document.getElementById("dob-month").value;
        const year = document.getElementById("dob-year").value;
        const country = document.getElementById("country").value;
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            document.getElementById("confirmPassword").focus();
            return;
        }
        function pad(n) {
            return n.length < 2 ? "0" + n : n;
        }
        const dob = `${year}-${pad(month)}-${pad(day)}`;
        console.log({ name, email, password, confirmPassword, dob, country });
        successMsg.style.display = "block";
        form.reset();
    });
});
const daySelect = document.getElementById("dob-day");
daySelect.innerHTML = `<option value="">Day</option>`;
for (let i = 1; i <= 31; i++) {
    daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}
const yearSelect = document.getElementById("dob-year");
yearSelect.innerHTML = `<option value="">Year</option>`;
for (let y = new Date().getFullYear(); y >= 2000; y--) {
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
}
