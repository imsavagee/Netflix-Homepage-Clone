const plusBtn = document.querySelectorAll(".plus")

        plusBtn.forEach(plus => {
            plus.addEventListener('click', function () {

                plus.style.transform = 'rotate(-180deg)'
            })
        })