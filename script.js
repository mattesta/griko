document.addEventListener('DOMContentLoaded', function() {
    const exerciseContainer = document.getElementById('exercise-container');

    // Example exercise data
    const exercises = [
        {
            question: "Translate 'Hello' to Spanish",
            answer: "Hola"
        },
        {
            question: "Translate 'Goodbye' to French",
            answer: "Au revoir"
        }
    ];

    // Display exercises
    exercises.forEach((exercise, index) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise';

        const questionP = document.createElement('p');
        questionP.textContent = exercise.question;

        const answerInput = document.createElement('input');
        answerInput.type = 'text';
        answerInput.id = `answer-${index}`;

        const submitButton = document.createElement('button');
        submitButton.textContent = 'Submit';
        submitButton.addEventListener('click', () => {
            const userAnswer = document.getElementById(`answer-${index}`).value;
            if (userAnswer.toLowerCase() === exercise.answer.toLowerCase()) {
                alert('Correct!');
            } else {
                alert('Try again.');
            }
        });

        exerciseDiv.appendChild(questionP);
        exerciseDiv.appendChild(answerInput);
        exerciseDiv.appendChild(submitButton);

        exerciseContainer.appendChild(exerciseDiv);
    });
});
