const counter = document.querySelectorAll('span.counting')


var countNumber = 0

function counting() {
    var handle = setInterval(() => {
        countNumber = countNumber + 1;
        counter.forEach((el) => {
            el.textContent = countNumber;
        })
        // counter.innerHTML = countNumber;
        if (countNumber == 1000) {
            clearInterval(handle);
        }
    }, 0.1);

    // count = countNumber;
}

counting()
