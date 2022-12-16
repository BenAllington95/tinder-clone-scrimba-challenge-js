
import { dogs } from '/data.js'
import Dog from '/Dog.js'
import { disableButtons, enableButtons } from '/util.js'

let dogProfile = new Dog(dogs.shift())


document.addEventListener('click', (e) => {
    if (e.target.id === 'swipe-btn' || e.target.id === 'match-btn') {
        dogProfile.userChoice(e.target.id)       
        dogProfile.msg()
        disableButtons()
        
        if (dogs.length <= 0) {
            setTimeout(()=>{
            document.getElementById('profile').innerHTML = `
                <div class="match-profile center">
                <h2>Sorry, there are no more users around you 😞</h2>
                </div>`
            document.getElementById('swipe-txt-id').style.display = 'none';
            disableButtons() 
            }, 1000)            
        } else {
            setTimeout(()=>{
            dogProfile = new Dog(dogs.shift())
            render()
            document.getElementById('swipe-txt-id').style.display = 'none';
            enableButtons() 
            }, 1000) 
            
        }      
    }   
})

function render() {
    document.getElementById('profile').innerHTML = dogProfile.getDogProfileHtml() 
}

render()