document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", document.getElementById("username").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("password", document.getElementById("password").value);

    const response = await fetch("$API_URL/register/", {
      method: "POST",
      headers: { Authorization: "$SECRET_BASIC_AUTH" },
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById("message").textContent = data["status"];
      document.getElementById("message").style.color = "green";
    } else {
      document.getElementById("message").textContent = data["error"];
      document.getElementById("message").style.color = "red";
    }
  });
