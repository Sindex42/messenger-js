'use strict'

function init () {
  let button = document.getElementById('submitMessage')
  let messageInput = document.getElementById('messageInput')
  let messages = []

  button.onclick = function () {
    let message = new Message(messageInput.value)
    messages.push(message)

    let oneMessage = document.createElement('p')
    oneMessage.innerText = `${message.content} -- ${message.time}`

    let log = document.getElementById('messageLog')
    log.prepend(oneMessage)

    messageInput.value = ''
  }
}

document.onload = init()
