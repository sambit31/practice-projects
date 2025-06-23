// Flip functionality
const card = document.querySelector('.card');
const flipButton = document.querySelector('.flip-button');

// Add click event to the flip button
flipButton.addEventListener('click', () => {
    // Toggle rotation
    card.style.transform = 
        card.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
});

// Friend/Unfriend functionality
const status = document.getElementById("status");
const addFriend = document.getElementById("friend");
const removeFriend = document.getElementById("remove");

addFriend.addEventListener("click", () => {
    status.textContent = "Friends";
    status.style.color = "green";
});

removeFriend.addEventListener("click", () => {
    status.textContent = "Stranger";
    status.style.color = "red";
});