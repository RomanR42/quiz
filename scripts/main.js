// const cards = document.getElementsByClassName('card');
// const cardsSeparator = document.getElementsByClassName('cards-separator');

const cardMain= document.getElementsByClassName('card')[0];
const cardSmileMain = document.getElementsByClassName('card')[1];
const cardsSeparatorOne = document.getElementsByClassName('cards-separator')[0];
const cardsSeparatorTwo = document.getElementsByClassName('cards-separator')[1];

setNumber ();
setHandler ();
setHandlerFrameFirst ();
setHandlerFrameSecond();
setUpDownHandler ();

function setNumber () {
    const numbersElements = document.getElementsByClassName('card__top_number');
    for (i=0; i<numbersElements.length; i++) {
        numbersElements[i].innerHTML = `№ ${i+1}`;
    }
}

function setHandler () {
    const separatorsForHandler = document.getElementsByClassName('cards-separator');
    for (let i=0; i<separatorsForHandler.length; i++) {
        separatorsForHandler[i].onclick = cardsSeparatorHandler;
    }
}

function setHandlerFrameFirst () {
     const cardsUpdate = document.getElementsByClassName('card');
     for (let i=0; i<cardsUpdate.length; i++) {
        cardsUpdate[i].onclick = firstFrameHandler;
    }
}

function setHandlerFrameSecond() {
    const moveBtns = document.getElementsByClassName('move');
    for (let i=0; i<moveBtns.length; i++) {
        moveBtns[i].onclick = secondFrameHandler;
    }
}

function setUpDownHandler (){
    const upBtns = document.getElementsByClassName('up');
    const downBtns = document.getElementsByClassName('down');
    for (let i=0; i<upBtns.length; i++) {
        upBtns[i].onclick = upDownHandler;
        downBtns[i].onclick = upDownHandler;
        
    }
   

}

function cardsSeparatorHandler (e) {

    let myTarget;
    e.path.forEach(element => {
        if (element.className == 'cards-separator'){
            myTarget = element;
        }
    });
        
    if (myTarget.id == '1') {
        
        const cardSmile = cardSmileMain.cloneNode(true);
        const newSeparatorTwo = cardsSeparatorTwo.cloneNode(true); 
        myTarget.after(newSeparatorTwo);
        myTarget.after(cardSmile);

    } else {
        
        const card = cardMain.cloneNode(true);
        const newSeparatorOne = cardsSeparatorOne.cloneNode(true);
        myTarget.after(newSeparatorOne);
        myTarget.after(card);
    }

    setNumber ();
    setHandler ();
    setHandlerFrameFirst ();
    setHandlerFrameSecond();
    setUpDownHandler ();

}

function firstFrameHandler (e) {
    let myCard;
    e.path.forEach(element => {
        if (element.className == 'card'){
            myCard = element;
        }
    });
   
    if (e.target.className == 'card__top' || e.target.className == 'card' ||
     e.target.className == 'card__bottom' ||  e.target.className == 'variant'
     || e.target.className == 'card__top_title' || e.target.className == 'emo' || e.target.className == 'panel-btn'){
        if (!myCard.children[3].style.display || myCard.children[3].style.display =='none') {
            const firstWrappers = document.getElementsByClassName('card__frame-first_wrapper');
            for (let i=0; i<firstWrappers.length; i++) {
                if (firstWrappers[i].style.display == 'flex') {firstWrappers[i].style.display = 'none'}
            }
            myCard.children[3].style.display ='flex';
        } else {
            myCard.children[3].style.display ='none';
        }
    }
        
}

function secondFrameHandler(e) {
    e.path[2].style.display ='none';
    e.path[3].children[4].style.display = 'flex';
}

function upDownHandler(e) {
    const cardToMove = e.path[3];
    let index = e.path[3].children[0].children[0].children[0].innerHTML.slice(2) - 1;
    let cardsArray = document.getElementsByClassName('card');
    let separatorArray = document.getElementsByClassName('cards-separator');
    
    if (e.target.className=='first-panel-btn second-btn up') {
        if (index == 0) {alert ("can't move up"); return;}
        cardsArray[index-1].before(cardToMove);
        cardToMove.after(separatorArray[index]);
    } else {
        if (index==cardsArray.length-1 ){alert ("can't move down"); return;}
        separatorArray[index+1].after(cardToMove);
        cardToMove.after(separatorArray[index]);
    }

    setNumber ();
    setHandler ();
    setHandlerFrameFirst ();
    setHandlerFrameSecond();
    setUpDownHandler ();
    
}





