const tarotCards = {
    time : ['Past', 'Present', 'Future'],
    seeker : ['You', 'Your Path', 'Your Potential'],
    problem : ['Situation', 'Action', 'Outcome'],
    characteristics : ['Mind', 'Body', 'Spirit'],
    position : ['Upright', 'Reversed'],
    majorArcana : ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant', 'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Justice', 'The Hanged Man', 'Death', 'Temperance', 'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World', ],    
    
    positionSelected () {
        return this.position[Math.floor(Math.random()*this.position.length)]
    },

    message () {
        let firstCard = this.majorArcana[Math.floor(Math.random()*this.majorArcana.length)];
        let remainingCards = this.majorArcana.filter (element => element !== firstCard);
        let secondCard = remainingCards[Math.floor(Math.random()*remainingCards.length)];
        remainingCards = this.majorArcana.filter (element => element !== firstCard && element !== secondCard);
        let thirdCard = remainingCards[Math.floor(Math.random()*remainingCards.length)];

        console.log (
            `This is the tarot message for you:
             ${firstCard} is ${this.positionSelected()} and ruling your ${this.characteristics[0]}, 
             ${secondCard} is ${this.positionSelected()} and leading your ${this.characteristics[1]}, and 
             ${thirdCard} is ${this.positionSelected()} and shaping your ${this.characteristics[2]}.`
        )
        },
};

tarotCards.message();


