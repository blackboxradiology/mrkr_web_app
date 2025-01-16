// Handle user registration
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


document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  try {
    const response = await fetch("https://nlw8cqdysj.execute-api.us-east-2.amazonaws.com/MRKR_registration_stage/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name }),
    });

    const result = await response.json();

    if (response.ok) {
      document.getElementById("responseMessage").textContent = result.message;
    } else {
      document.getElementById("responseMessage").textContent = `Error: ${result.message || "Something went wrong"}`;
    }
  } catch (error) {
    document.getElementById("responseMessage").textContent = `Error: ${error.message}`;
  }
});

// Check S3 access for the entered email and name
document.getElementById("testS3Access").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  if (!email || !name) {
    alert("Please enter your email and name before testing S3 access.");
    return;
  }

  try {
    const response = await fetch(
      "https://nlw8cqdysj.execute-api.us-east-2.amazonaws.com/MRKR_registration_stage/TestBucketAccess",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      }
    );

    const result = await response.json();

    if (response.ok) {
      alert(result.message);
    } else {
      alert(`Error: ${result.message || "Something went wrong"}`);
    }
  } catch (error) {
    alert("Error testing S3 access: " + error.message);
  }
});
