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


document.getElementById("testS3Access").addEventListener("click", async () => {
  try {
    const response = await fetch(
      "https://nlw8cqdysj.execute-api.us-east-2.amazonaws.com/MRKR_registration_stage/TestS3Access", 
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );

    const result = await response.json();
    alert(result.message);
  } catch (error) {
    alert("Error testing S3 access: " + error.message);
  }
});
