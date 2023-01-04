const input = document.querySelector('input')
const btn = document.querySelectorAll('button')[0]
const game = document.querySelectorAll('button')[1]


//Секция по созданию элементов

btn.addEventListener('click', function () {
    let val = input.value
    const element = new DomElement(val, '100px', '300px', 'red', '20px')
    element.mkDiv()
})

const DomElement = function (selector, height, width, bg, fontSize) {
        this.selector = selector
        this.height = height
        this.width = width
        this.bg = bg
        this.fontSize = fontSize
}

DomElement.prototype.mkDiv = function () {

    if (this.selector.includes('.')) {
        let newDiv = document.createElement('div')
        newDiv.classList = this.selector.slice(1)
        newDiv.innerHTML = 'Создан блок с class =  ' + newDiv.classList
        document.body.insertBefore(newDiv, null)
    } 
    else if (this.selector.includes('#')) {
        let newDiv = document.createElement('p')
        newDiv.id = this.selector.slice(1)
        newDiv.innerHTML = 'Создан параграф с ID = ' + newDiv.id
        document.body.insertBefore(newDiv, null)
        let newStyle = document.querySelector('p')
        newStyle.style.cssText = 'font-size: '  + `${this.fontSize};` + 'background: '  + `${this.bg};`+ 'height: '  + `${this.height};` + 'width: '  + `${this.width};`

    } else {
        alert('Ничего не создано, введи атрибуты "." или "#"')
    }
    
}

//Секция с игрой по перемещению квалрата

const GameCube = function (position, bg,) {
    this.position = position
    this.bg = bg
}
GameCube.prototype = Object.create(DomElement.prototype)
GameCube.prototype.constructor = GameCube

game.addEventListener('click', function() {
    document.addEventListener('DOMContentLoaded', alert('Объект и DOM Готовы'))
    const gameItem = new GameCube ('absolute', 'green')
    let newItem = document.createElement('div')
    newItem.style.width = '100px'
    newItem.style.height = '100px'
    newItem.style.background = gameItem.bg
    newItem.style.position = gameItem.position
    newItem.innerHTML = 'Нажимай стрелки'
    document.body.insertBefore(newItem, null)
    let pos = {top: 100, left: 100}
    newItem.style.top = pos.top + 'px'
    newItem.style.left = pos.left + 'px'
    let obj = {
        '40': ['top', 10], 
        '38': ['top', -10], 
        '39': ['left', 10], 
        '37': ['left', -10],
      }      
      addEventListener('keydown', function(e) {
        let key = obj[e.keyCode];
        console.log(key);
        if( key ){ 
          pos[ key[0] ] = pos[ key[0] ] + key[1];
          newItem.style[ key[0] ] = pos[ key[0] ] + 'px';
        }
      })
    
})













