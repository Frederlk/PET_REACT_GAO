// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

function stepForm() {
    const fromSteps = document.querySelectorAll('.form__step'),
        form = document.querySelector('form'),
        prevBtn = document.querySelector('#prev'),
        nextBtn = document.querySelector('#next'),
        finalStep = document.querySelector('.finish-step'),
        progress = document.querySelector('.progress'),
        progressSteps = document.querySelectorAll('.progress__step'),
        progressSuccess = document.querySelector('.progress__line_success');

    form.addEventListener('submit', (e) => e.preventDefault());

    let formStepIndex = 0;
    updateFormSteps();

    prevBtn.addEventListener('click', () => {
        formStepIndex--;
        progressSteps[formStepIndex + 1].classList.remove('_active');
        updateFormSteps();
    });

    nextBtn.addEventListener('click', () => {
        if (formStepIndex === fromSteps.length - 1) {
            fromSteps.forEach(step => {
                step.classList.remove('_active');
            });
            finalStep.classList.add('_active');
            document.querySelector('.form-page__buttons').style.display = 'none';
            progress.style.display = 'none';
        } else if (formStepIndex < fromSteps.length) {
            formStepIndex++;
            updateFormSteps();
        }
    });

    function updateFormSteps() {
        fromSteps.forEach(step => {
            step.classList.contains('_active') && step.classList.remove('_active');
        });

        fromSteps[formStepIndex].classList.add('_active');
        progressSteps[formStepIndex].classList.add('_active');

        const activesProgress = document.querySelectorAll('.progress__step._active');
        progressSuccess.style.width = ((activesProgress.length - 1) / (progressSteps.length - 1) * 100 + '%');

        if (formStepIndex === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'inline-flex';
        }
    }
}

if (document.querySelector('.form__step')) {
    stepForm();
} 