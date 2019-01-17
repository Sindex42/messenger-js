'use strict'

class Message {
  constructor (content, time = new Date()) {
    this.content = content
    this.time = `${time.toLocaleDateString()} ${time.toLocaleTimeString()}`
  }
}
