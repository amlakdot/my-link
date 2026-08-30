const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    message.textContent = "در حال ورود...";

    const { data, error } =
        await supabaseClient.auth.signInWithPassword({
            email,
            password
        });

    if (error) {
        console.error(error);

        message.textContent =
            "خطا در ورود: " + error.message;

        return;
    }

    console.log("Logged in:", data);

    message.textContent =
        "با موفقیت وارد شدی!";

    setTimeout(() => {
        window.location.href = "dashboard.html";
    }, 800);
});
