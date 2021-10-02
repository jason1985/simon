//TODO: dry & clean up code, possibly make it multiplayer w/ websockets

let pattern = []
let checkIndex = 0
let checking = false

let container = document.getElementById('container')
let score = document.getElementById('score')
let red = document.getElementById('red')
let blue = document.getElementById('blue')
let yellow = document.getElementById('yellow')
let green = document.getElementById('green')

red.addEventListener('mousedown', () => {
  if (checking === true) {
    red.style.backgroundColor = 'hsl(0deg 100% 60%)'
    if (pattern[checkIndex] !== 0) {
      console.log('wrong u loose')
      score.innerHTML = `score: 0`
      container.classList.add('lose')
      checking = false
    } else {
      checkIndex++
      if (checkIndex === pattern.length) {
        checking = false
        setTimeout(() => {
          runGame()
        }, 400)
      }
    }
  }
})
red.addEventListener('mouseup', () => {
  resetColors()
})
red.addEventListener('mouseout', () => {
  resetColors()
})

blue.addEventListener('mousedown', () => {
  if (checking === true) {
    blue.style.backgroundColor = 'hsl(240deg 100% 50%)'
    if (pattern[checkIndex] !== 1) {
      console.log('wrong u loose')
      score.innerHTML = `score: 0`
      container.classList.add('lose')
      checking = false
    } else {
      checkIndex++
      if (checkIndex === pattern.length) {
        checking = false
        setTimeout(() => {
          runGame()
        }, 400)
      }
    }
  }
})
blue.addEventListener('mouseup', () => {
  resetColors()
})
blue.addEventListener('mouseout', () => {
  resetColors()
})

yellow.addEventListener('mousedown', () => {
  if (checking === true) {
    yellow.style.backgroundColor = 'hsl(60deg 100% 50%)'
    if (pattern[checkIndex] !== 3) {
      console.log('wrong u loose')
      score.innerHTML = `score: 0`
      container.classList.add('lose')
      checking = false
    } else {
      checkIndex++
      if (checkIndex === pattern.length) {
        checking = false
        setTimeout(() => {
          runGame()
        }, 400)
      }
    }
  }
})
yellow.addEventListener('mouseup', () => {
  resetColors()
})
yellow.addEventListener('mouseout', () => {
  resetColors()
})

green.addEventListener('mousedown', () => {
  if (checking === true) {
    green.style.backgroundColor = 'hsl(120deg 100% 60%)'
    if (pattern[checkIndex] !== 2) {
      console.log('wrong u loose')
      score.innerHTML = `score: 0`
      container.classList.add('lose')
      checking = false
    } else {
      checkIndex++
      if (checkIndex === pattern.length) {
        checking = false
        setTimeout(() => {
          runGame()
        }, 400)
      }
    }
  }
})
green.addEventListener('mouseup', () => {
  resetColors()
})
green.addEventListener('mouseout', () => {
  resetColors()
})

////////////

const newGame = () => {
  container.classList.remove('lose')
  pattern = []
  runGame()
}

const runGame = () => {
  score.innerHTML = `score: ${pattern.length}`
  pattern.push(Math.floor(Math.random() * 4)) // rand # between 0-3
  playPattern()
}

const resetColors = () => {
  blue.style.backgroundColor = 'hsl(240deg 100% 33%)'
  red.style.backgroundColor = 'hsl(0deg 100% 40%)'
  yellow.style.backgroundColor = 'hsl(60deg 100% 40%)'
  green.style.backgroundColor = 'green'
}

const checkPattern = () => {
  checkIndex = 0
  checking = true
  console.log('checking pattern')
}

const playPattern = () => {
  checking = false
  for (let i = 0; i < pattern.length; i++) {
    setTimeout(() => {
      resetColors()

      if (pattern[i] === 0) {
        red.style.backgroundColor = 'hsl(0deg 100% 60%)'
      }
      if (pattern[i] === 1) {
        blue.style.backgroundColor = 'hsl(240deg 100% 50%)'
      }
      if (pattern[i] === 2) {
        green.style.backgroundColor = 'hsl(120deg 100% 60%)'
      }
      if (pattern[i] === 3) {
        yellow.style.backgroundColor = 'hsl(60deg 100% 50%)'
      }

      setTimeout(() => {
        resetColors()
      }, 400)
    }, i * 600)
  }

  setTimeout(() => {
    checkPattern()
  }, 600 * pattern.length)
}
