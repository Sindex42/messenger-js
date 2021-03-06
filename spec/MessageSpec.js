/* global describe, it, expect, beforeEach */
'use strict'

describe('Message', function () {
  let message
  let time

  beforeEach(function () {
    time = new Date(1484524800000)
    message = new Message('test message', time)
  })

  it('should create a message with content', function () {
    expect(message.content).toEqual('test message')
  })

  it('should create a message with a time of creation', function () {
    expect(message.time).toEqual('16/01/2017 00:00:00')
  })
})
