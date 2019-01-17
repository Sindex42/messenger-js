'use strict'

function init() {
  let button = document.getElementById('submitMessage')
  let messageInput = document.getElementById('messageInput')
  let messageLog = document.getElementById('messageLog')
  let messages = []

  button.onclick = function () {
    let message = new Message(messageInput.value)
    messages.push(message)

    var oneMessage = document.createElement('p')
    oneMessage.innerText = `${message.content} -- ${message.time}`

    var log = document.getElementById('messageLog')
    log.prepend(oneMessage)

    messageInput.value = ''
  }
}

document.onload = init()
