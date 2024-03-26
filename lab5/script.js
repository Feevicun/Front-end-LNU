const testData = {
    "testName": "Тест з WEB дизайну",
    "questions": [
      {
        "question": "Який тег використовується для створення заголовку першого рівня?",
        "answers": [
          {"answer": "h1", "isCorrect": true},
          {"answer": "h2", "isCorrect": false},
          {"answer": "h3", "isCorrect": false},
          {"answer": "h4", "isCorrect": false}
        ]
      },
      {
        "question": "Як правильно підключити зовнішній CSS файл до HTML документу?",
        "answers": [
          {"answer": "link rel='stylesheet' href='styles.css'", "isCorrect": true},
          {"answer": "style src='styles.css'", "isCorrect": false},
          {"answer": "style link='styles.css'", "isCorrect": false},
          {"answer": "css src='styles.css'", "isCorrect": false}
        ]
      },
      {
        "question": "Яка функція в CSS використовується для зміни кольору тексту?",
        "answers": [
          {"answer": "color", "isCorrect": true},
          {"answer": "background-color", "isCorrect": false},
          {"answer": "text-color", "isCorrect": false},
          {"answer": "font-color", "isCorrect": false}
        ]
      },
      {
        "question": "Який атрибут HTML використовується для визначення URL адреси зображення?",
        "answers": [
          {"answer": "src", "isCorrect": true},
          {"answer": "url", "isCorrect": false},
          {"answer": "link", "isCorrect": false},
          {"answer": "image", "isCorrect": false}
        ]
      },
      {
        "question": "Як правильно створити внутрішнє посилання на іншу сторінку в HTML?",
        "answers": [
          {"answer": "href='page.html'Текст посилання", "isCorrect": true},
          {"answer": "link='page.html'Текст посилання", "isCorrect": false},
          {"answer": "src='page.html'Текст посилання", "isCorrect": false},
          {"answer": "url='page.html'Текст посилання", "isCorrect": false}
        ]
      }
    ]
  }


const testContainer = document.getElementById('test-container');
const questionsContainer = document.getElementById('questions');
const submitBtn = document.getElementById('submit-btn');
const resultContainer = document.getElementById('result');

function displayQuestions() {
  testData.questions.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.innerHTML = `
      <p>${index + 1}. ${question.question}</p>
      <div class="answers">
        ${question.answers.map(answer => `
          <label class="answer">
            <input type="radio" name="question${index}" value="${answer.isCorrect}">
            ${answer.answer}
          </label>
        `).join('')}
      </div>
    `;
    questionsContainer.appendChild(questionElement);
  });
}
function calculateResult() {
  const answerElements = document.querySelectorAll('input[type="radio"]:checked');
  let score = 0;
  answerElements.forEach(answer => {
    if (answer.value === 'true') {
      score++;
    }
  });
  return score;
}
function showResult() {
  const score = calculateResult();
  resultContainer.textContent = `Ваш результат: ${score} з ${testData.questions.length}`;
}
submitBtn.addEventListener('click', () => {
  showResult();
});
displayQuestions();
  