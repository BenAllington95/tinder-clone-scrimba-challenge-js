// Create the Dog class here

class Dog {
    constructor(dogArray){
        Object.assign(this, dogArray)
    }
    getDogProfileHtml(){
        const {name, avatar, age, bio } = this
        
        return `
            <div class="match-profile" style="background-image: url(./${avatar});">
                <div id="swipe-txt-id"></div>
                <div><h1 class="profile-name-age">${name}, ${age}</h1>
                <p class="profile-bio">${bio}</p></div>
            </div>`
    }
    userChoice(id){
        this.hasBeenSwiped = true;
        if (id === 'match-btn') {
            this.hasBeenSwiped = true
            this.hasBeenLiked = true
        } else if (id === 'swipe-btn') {
            this.hasBeenSwiped = true
        }
    }
    msg(){
        const matchMsg = this.hasBeenLiked ? 'LIKE' : 'NOPE'
        const matchTxtColor = matchMsg === 'NOPE' ? 'red-txt' : 'green-txt'
        document.getElementById('swipe-txt-id').style.display = 'block';
        document.getElementById('swipe-txt-id').innerHTML = `<div class="swipe-txt ${matchTxtColor}"><h1>${matchMsg}<h1></div>`
    }
}

export default Dog
