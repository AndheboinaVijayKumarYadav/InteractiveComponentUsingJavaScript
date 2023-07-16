// variables
const submitButton = document.querySelector('button');
const ratingList = document.querySelectorAll('.rating');
const ratingOutput = document.querySelector('#rating-output');
const thankyouComponent = document.querySelector('.thankyou-component');
const componentMain = document.querySelector('.component');

// event listeners
ratingList.forEach((element) => {
    element.addEventListener('click',() => {
        setActiveClass(element);
    });
} );

submitButton.addEventListener('click',displayResult);

// functions
function setActiveClass(element) {
     // remove the active class for list if any 
     for(var i=0;i<5;i++){
        ratingList[i].classList.remove('active');
    }
    // here we can also use array forEach method for removing the class i.e ratingList.forEach((rating) => rating.classList.remove('active'));
    element.classList.add('active')
}

function displayResult(){
    let active = document.querySelector('.active');
    // checking here if any rating is selected or not if not it will throw an alert
    if(!active){
        alert("Please enter valid rating");
        return;
    }
    let selectedRatingValue = parseInt(active.innerText);

    ratingOutput.innerText = `You have selected ${selectedRatingValue} out of 5`;
    thankyouComponent.style.display = 'flex';
    componentMain.style.display ='none';
}


