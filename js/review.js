function userReview(){
    const reviewText = document.getElementById('review-text');
    const review = reviewText.value;
    const reviewContainerText = document.getElementById('review-container ');
    const p = document.createElement('p');
    p.classList = "para";
    let count = 0;
    p.innerText =`
    ${count+1}. ${review};
    `
    reviewContainerText.appendChild(p);
    reviewText.value = "";
}