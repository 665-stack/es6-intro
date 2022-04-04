document.getElementById('add-border').addEventListener('click', function () {
    const fndContainer = document.getElementById('friend-container');
    fndContainer.style.border = '3px solid black';
    fndContainer.style.margin = '10px';
    fndContainer.style.padding = "0px 10px 0px 20px";
    fndContainer.style.borderRadius = "25px";
});
function addBackgroundColor() {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = 'Sienna';
        friend.style.padding = '0px 0px 0px 20px'
        friend.style.borderRadius = '5px';
        friend.style.color = 'white'
    }
}