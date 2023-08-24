
        const dropdowns = document.querySelectorAll(".dropdown");

        dropdowns.forEach(function (dropdown) {
            const button = dropdown.querySelector(".dropdown-toggle");
            const menu = dropdown.querySelector(".dropdown-menu");

            dropdown.addEventListener("mouseover", function () {
                menu.classList.add("show");
            });

            dropdown.addEventListener("mouseout", function () {
                menu.classList.remove("show");
            });
        });
        const leftButton = document.getElementById('left-button');
            leftButton.addEventListener('click', function() {
                window.location.href = "bankbazaar2.html";
});

let http=require('http')
let file_sys=require('fs');

http.createServer((request,response)=>{
    file_sys.readFile('bankbazar1.html',(error,data)=>{
        response.write(data)
        response.end()
    })
}).listen(3000)
