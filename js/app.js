// js/app.js

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("questions-container");

    // Loop through the data and generate HTML
    questionsData.forEach((q, index) => {
        
        // Generate the HTML for the steps
        let stepsHTML = "";
        q.steps.forEach((step, stepIndex) => {
            stepsHTML += `
                <div class="step bg-white p-3 rounded border border-gray-200">
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">Step ${stepIndex + 1}</span>
                    <div class="mt-1 text-gray-800">${step}</div>
                </div>
            `;
        });

        // Generate the HTML for the whole question card
        const questionCard = `
            <section class="bg-white rounded-xl shadow-md p-6 border border-gray-200">
                <div class="flex justify-between items-center border-b pb-2 mb-4">
                    <h2 class="text-xl font-bold text-gray-800">${q.year} ${q.paper} ${q.qNum}</h2>
                    <span class="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">${q.marks} marks</span>
                </div>
                
                <div class="text-lg mb-6">
                    ${q.questionText}
                </div>

                <div class="bg-blue-50 p-5 rounded-lg border border-blue-100">
                    <h3 class="font-bold text-blue-800 mb-4 text-lg border-b border-blue-200 pb-2">Step-by-Step Solution:</h3>
                    
                    <div id="steps-${q.id}">
                        ${stepsHTML}
                    </div>

                    <div class="mt-4 flex gap-3 border-t border-blue-200 pt-4" id="controls-${q.id}">
                        <button onclick="showNextStep('${q.id}')" class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition">
                            Show Next Step
                        </button>
                        <button onclick="showAllSteps('${q.id}')" class="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition">
                            Reveal All
                        </button>
                    </div>
                </div>
            </section>
        `;

        // Append to container
        container.innerHTML += questionCard;
    });

    // Tell MathJax to render the math equations we just injected
    if (window.MathJax) {
        MathJax.typesetPromise();
    }
});

// Function to show the next step
function showNextStep(questionId) {
    const stepsContainer = document.getElementById(`steps-${questionId}`);
    const hiddenSteps = stepsContainer.querySelectorAll('.step:not(.visible)');
    
    if (hiddenSteps.length > 0) {
        hiddenSteps[0].classList.add('visible');
    }
    
    if (hiddenSteps.length <= 1) {
        // Hide the "Next" button if no steps are left
        document.querySelector(`#controls-${questionId} button:first-child`).style.display = 'none';
    }
}

// Function to show all steps at once
function showAllSteps(questionId) {
    const stepsContainer = document.getElementById(`steps-${questionId}`);
    const steps = stepsContainer.querySelectorAll('.step');
    
    steps.forEach(step => step.classList.add('visible'));
    document.querySelector(`#controls-${questionId} button:first-child`).style.display = 'none';
}