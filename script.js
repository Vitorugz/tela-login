document
  .getElementById("loginForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("login", document.getElementById("username").value);
    formData.append("password", document.getElementById("password").value);

    const response = await fetch("https://api-login-vitorugz.azurewebsites.net/login/", {
      method: "POST",
      headers: { Authorization: "Basic dml0b3J1Z3o6bWVuaW5vX2JveTEz" },
      body: formData,
    });

    const data = await response.json();
    const jwt = data["jwt"];
    localStorage.setItem("jwt", jwt);

    if (response.ok) {
      document.getElementById("message").textContent = "Login successful!";
      document.getElementById("message").style.color = "green";
      window.location.href = "./teste.html";
    } else {
      document.getElementById("message").textContent = data["error"];
      document.getElementById("message").style.color = "red";
    }
  });
