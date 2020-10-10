
(function randomCake() {
    const cake = document.querySelector('.cake');
    const container = document.querySelector('.container');
    const randoButton = document.querySelector('#rando-button');
    const cakes = ['default-cake', 'chocolate-cake', 'strawberry-cake', 'pistachio-cake', 'red-velvet-cake'];

    setInterval(()=>randomInit(),1300)
    // randoButton.addEventListener('click', function() {
    //     randomInit();
    // }, false);
    function randomInit() {
        cake.classList.add("bounce-cake");
            let currentCake = container.classList[1];
            setTimeout(() => container.classList.replace(currentCake, getRandomCake()), 820);
            setTimeout(() => cake.classList.remove("bounce-cake"), 1200);
            function getRandomCake() {
                let random = cakes[Math.floor(Math.random()*cakes.length)];
                return random === currentCake ? getRandomCake() : random;
            }
    }
    
})();



