document.getElementById("searchBtn").addEventListener("click", function () {
    const userInput = document.getElementById("searchInput").value.trim();

    const safeInput = userInput.replace(/</g, "&lt;").replace(/>/g, "&gt;");

    const url = "superheroes.php?query=" + encodeURIComponent(safeInput);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(error => {
            console.error("Error:", error);
        });
});


