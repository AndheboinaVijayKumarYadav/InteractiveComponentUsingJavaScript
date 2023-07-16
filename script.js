// variables
const submitButton = document.querySelector('button');
const ratingList = document.querySelectorAll('.rating');
const ratingOutput = document.querySelector('#rating-output');
const thankyouComponent = document.querySelector('.thankyou-component');
const componentMain = document.querySelector('.component');

ratingList.forEach((element) => {
    element.addEventListener('click', () => {
        // remove the active class for list
        for(var i=0;i<5;i++){
            ratingList[i].classList.remove('active');
        }
        element.classList.add('active');
    } )
} )

submitButton.addEventListener('click', () => {
    let active = document.querySelector('.active');
    if(!active){
        alert("Please enter valid rating");
        return;
    }
    let selectedRatingValue = parseInt(active.innerText);

    ratingOutput.innerText = `You have selected ${selectedRatingValue} out of 5`;
    thankyouComponent.style.display = 'flex';
    componentMain.style.display ='none';

});