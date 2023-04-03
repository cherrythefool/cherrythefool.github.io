
var gold = Math.floor(Math.random()*9)
var bomb = Math.floor(Math.random()*9)
var clickcount = 0

if ((gold === bomb) && (bomb<8)){    
    bomb = bomb + 1
}
else if ((gold === bomb) && (bomb === 8)){
        bomb = Math.floor(Math.random()*8)
    }

const endGameMine = () => {
    confirm("Mine activated, game over! Try again, if you dare.");
    window.location.reload()
}
    
const endGameGold = () => {
    confirm("You found the treasure! You know what they say, the real treasure is the friendships we made along the way! Was risking the minefield worthwhile?"),
    window.location.reload()
}

const tooManyClicks = () => {
    if (clickcount > 4)
        return confirm("Wait! You've covered too much ground! You're likely to hit a mine; start over"),
        window.location.reload()
}

const treasure = (location) => {
    tooManyClicks(treasure)
    clickcount+=1
    if (bomb === location){
        return document.getElementById(location).innerHTML = "&#128165",
            setTimeout(endGameMine, 12)
            }
        
    else if (gold === location){
        return document.getElementById(location).innerHTML = "&#128150",
            setTimeout(endGameGold, 6)
            }
    
    else
        return document.getElementById(location).innerHTML = "&#128681"

}