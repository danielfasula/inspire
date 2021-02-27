import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Todo from './Models/Todo.js'
import Quote from './Models/Quote.js'
import Weather from './Models/Weather.js'

class AppState extends EventEmitter {

  image = ''

  /** @type {Todo[]} */
  todos = []

  /** @type {Quote} */

  quotes = null

/** @type {Weather} */

  weather = null

  user = ""

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
