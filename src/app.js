const form = document.querySelector("#test-form")

const message = document.createElement("div")

function validate({ username, password }) {
  if (username.length < 1) {
    return "Username is required"
  } else if (password.length < 1) {
    return "Password is required"
  } else if (
    username !== "kinday" &&
    password !==
      "qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890qwertyuiopasdfghjklzxcvbnm1234567890"
  ) {
    return "Incorrect credentials"
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault()

  if (message.parentNode) {
    message.parentNode.removeChild(message)
  }

  const formData = new FormData(event.target)
  const username = formData.get("username")
  const password = formData.get("password")

  const errors = validate({ username, password })

  if (errors == null) {
    message.innerText = "Welcome kinday!"
    form.replaceWith(message)
  } else {
    message.innerText = errors
    form.prepend(message)
  }
})
