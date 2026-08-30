const registerForm = document.getElementById("registerForm");
const message = document.getElementById("message");

registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword =
        document.getElementById("confirmPassword").value;

    message.textContent = "";

    if (password !== confirmPassword) {
        message.textContent = "رمزهای عبور یکسان نیستند.";
        return;
    }

    if (password.length < 6) {
        message.textContent =
            "رمز عبور باید حداقل ۶ کاراکتر باشد.";
        return;
    }

    message.textContent = "در حال ساخت حساب...";

    const { data, error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        console.error(error);

        message.textContent =
            "خطا در ثبت‌نام: " + error.message;

        return;
    }

    console.log("Registered user:", data);

    message.textContent =
        "حساب با موفقیت ساخته شد!";

    registerForm.reset();
});
