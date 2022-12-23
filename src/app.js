import * as monaco from "monaco-editor"

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

self.MonacoEnvironment = {
  getWorker: function (workerId, label) {
    const getWorkerModule = (moduleUrl, label) => {
      return new Worker(self.MonacoEnvironment.getWorkerUrl(moduleUrl), {
        name: label,
        type: "module",
      })
    }

    switch (label) {
      case "json":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/json/json.worker?worker",
          label
        )
      case "css":
      case "scss":
      case "less":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/css/css.worker?worker",
          label
        )
      case "html":
      case "handlebars":
      case "razor":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/html/html.worker?worker",
          label
        )
      case "typescript":
      case "javascript":
        return getWorkerModule(
          "/monaco-editor/esm/vs/language/typescript/ts.worker?worker",
          label
        )
      default:
        return getWorkerModule(
          "/monaco-editor/esm/vs/editor/editor.worker?worker",
          label
        )
    }
  },
}

monaco.editor.create(document.getElementById("monaco-container"), {
  value: "function hello() {\n\talert('Hello world!');\n}",
  language: "javascript",
})
