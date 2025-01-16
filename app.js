import { userManager, signOutRedirect } from "./main.js";

// Sign-In Button Logic
document.getElementById("signIn").addEventListener("click", async () => {
    await userManager.signinRedirect();
});

// Callback Handler for Authentication
userManager.signinCallback().then(function (user) {
    document.getElementById("email").textContent = user.profile?.email || "Anonymous";
    document.getElementById("access-token").textContent = user.access_token;
    document.getElementById("id-token").textContent = user.id_token;
    document.getElementById("refresh-token").textContent = user.refresh_token;
}).catch(function (error) {
    console.error("Error during sign-in callback:", error);
});

// Sign-Out Button Logic
document.getElementById("signOut").addEventListener("click", async () => {
    await signOutRedirect();
});
