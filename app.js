document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const name = document.getElementById("name").value;

  try {
    const response = await fetch("https://<your-api-id>.execute-api.<region>.amazonaws.com/<stage>/register", {
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
