document.addEventListener('DOMContentLoaded', function() {
    const homeLink = document.getElementById('home-link');
    const exercisesLink = document.getElementById('exercises-link');
    const homeSection = document.getElementById('home-section');
    const exercisesSection = document.getElementById('exercises-section');
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

    // Event listeners for navigation
    homeLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'block';
        exercisesSection.style.display = 'none';
    });

    exercisesLink.addEventListener('click', function(event) {
        event.preventDefault();
        homeSection.style.display = 'none';
        exercisesSection.style.display = 'block';
    });
});
