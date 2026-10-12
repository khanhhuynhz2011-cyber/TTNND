const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");

startButton.addEventListener("click", function() {

    // Kích hoạt hiệu ứng mây bay đi
    intro.classList.add("hide");

    // Chờ hiệu ứng hoàn tất rồi chuyển trang
    setTimeout(function() {
        window.location.href = "index.html";
    }, 2200);

});