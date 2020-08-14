askQustionClick = () => {
    document.getElementsByClassName("message-sender-container")[0].style.display = "none"
    document.getElementsByClassName("message-sender-box")[0].style.display = "block"
}

changeNavHeader = (event) => {
    document.getElementById("nav-header").innerHTML = event.target.innerText;
}