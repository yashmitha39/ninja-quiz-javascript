const correctAnswers = ['B','B','B','B'];

const form = document.querySelector('.quiz-form');
form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    userAnswers.forEach((ans, index) => {
        if(ans === correctAnswers[index])
            score += 25;
    })

    console.log(score);

    scrollTo(0,0);

    const result = document.querySelector('.result');
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval(() => {
        const scoreElement = result.querySelector('span');
        scoreElement.textContent = `${output}%`
        if (output === score){
            clearInterval(timer);
        } else output++;
    }, 10)
})