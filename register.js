document
  .getElementById("registerForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("username", document.getElementById("username").value);
    formData.append("email", document.getElementById("email").value);
    formData.append("password", document.getElementById("password").value);

    const response = await fetch("https://api-login-vitorugz.azurewebsites.net/register/", {
      method: "POST",
      headers: { Authorization: "Basic dml0b3J1Z3o6bWVuaW5vX2JveTEz" },
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
