document.getElementById("submit-btn").addEventListener("click", function () {
    const password = document.getElementById("password-input").value;
    const correctPassword = "TroyFoxUnlimitedNetflixEnjoyPh";

    if (password === correctPassword) {
        // Redirect to the desired website
        window.location.href = "https://netfree.cc/mobile/home";
    } else {
        // Show error message and shake animation
        document.getElementById("error-message").style.display = "block";
        document.getElementById("password-screen").classList.add("shake");
        setTimeout(() => {
            document.getElementById("password-screen").classList.remove("shake");
        }, 500);
    }
});