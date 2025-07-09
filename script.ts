document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm") as HTMLFormElement;
  const successMsg = document.getElementById("successMessage") as HTMLElement;


  form.querySelectorAll("input, select").forEach((element) => {
    element.addEventListener("input", () => {
      successMsg.style.display = "none";
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;
    const confirmPassword = (document.getElementById("confirmPassword") as HTMLInputElement).value;
    const day = (document.getElementById("dob-day") as HTMLSelectElement).value;
    const month = (document.getElementById("dob-month") as HTMLSelectElement).value;
    const year = (document.getElementById("dob-year") as HTMLSelectElement).value;
    const country = (document.getElementById("country") as HTMLSelectElement).value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      (document.getElementById("confirmPassword") as HTMLInputElement).focus();
      return;
    }

    function pad(n: string): string {
      return n.length < 2 ? "0" + n : n;
    }

    const dob = `${year}-${pad(month)}-${pad(day)}`;

    console.log({ name, email, password, confirmPassword, dob, country });

    successMsg.style.display = "block";
    form.reset();
  });
});



const daySelect = document.getElementById("dob-day") as HTMLSelectElement;
daySelect.innerHTML = `<option value="">Day</option>`;
for (let i = 1; i <= 31; i++) {
  daySelect.innerHTML += `<option value="${i}">${i}</option>`;
}

const yearSelect = document.getElementById("dob-year") as HTMLSelectElement;
yearSelect.innerHTML = `<option value="">Year</option>`;
for (let y = new Date().getFullYear(); y >= 2000; y--) {
  yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
}
