"use strict"

const questions = document.querySelectorAll(".icon")
let target = ""

const clear = function () {
  questions.forEach((q) => {
    q.style.transform = "rotate(0deg)"
    q.previousElementSibling.classList.remove("active")
    q.parentNode.nextElementSibling.classList.add("hidden")
  })
}

const showAnswer = function () {
  target = this.classList.contains("question") ? this.nextElementSibling : this

  if (target.previousElementSibling.classList.contains("active")) {
    clear()
    return
  }

  clear()

  target.parentNode.nextElementSibling.classList.remove("hidden")
  target.previousElementSibling.classList.add("active")
  if (target.classList.contains("icon"))
    target.style.transform = "rotate(180deg)"
}

questions.forEach((q) => {
  q.addEventListener("click", showAnswer)
  q.previousElementSibling.addEventListener("click", showAnswer)
})
