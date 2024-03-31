const step1Container = document.getElementById('step1');
const step2Container = document.getElementById('step2');
const step3Container = document.getElementById('step3');
const step4Container = document.getElementById('step4');
const main_summery_container = document.getElementById('main_summary');

let completed_steps = 0;

function updateProgressBar() {
    const totalSteps = 4; //
    const progressPercentage = (completed_steps / totalSteps) * 100;

    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = `${progressPercentage}%`;

    if (completed_steps === totalSteps) {
        progressBar.textContent = '100%';
        progressBar.style.backgroundColor = '#4CAF50';
    } else {
        progressBar.textContent = `${progressPercentage.toFixed(0)}%`;
    }
}


const step1 = {
    currentQuestion: 1,
    skippedQuestions: [],
    completed: false,

    nextQuestion: function() {
        const currentQuestionElement = document.getElementById(`question${this.currentQuestion}`);
        const inputField = currentQuestionElement.querySelector('input[type="text"], input[type="number"], input[type="date"], input[type="radio"]:checked');

        if (inputField && inputField.value === "") {
            // If answer is not supplied, add the current question to skippedQuestions array
            this.skippedQuestions.push(this.currentQuestion);
            const skipConfirmation = confirm("The current question is unanswered. Do you want to skip it?");
            if (skipConfirmation) {
                currentQuestionElement.classList.remove('active');
                this.currentQuestion++;
                this.updateQuestionCounter();
                if (this.currentQuestion <= 6) {
                    const nextQuestionElement = document.getElementById(`question${this.currentQuestion}`);
                    nextQuestionElement.classList.add('active');
                } else {
                    this.showSummary();
                }
            }
        } else {
            this.currentQuestion++;
            this.updateQuestionCounter();
            currentQuestionElement.classList.remove('active');
            if (this.currentQuestion <= 6) {
                const nextQuestionElement = document.getElementById(`question${this.currentQuestion}`);
                nextQuestionElement.classList.add('active');
            } else {
                this.showSummary();
            }
        }
    },

    // Function to handle when a question is skipped
    skipQuestion: function() {
        this.skippedQuestions.push(this.currentQuestion);
        this.nextQuestion();
    },

    // Function to ask skipped questions again
    askSkippedQuestions: function() {
        if (this.skippedQuestions.length > 0) {
            const nextSkippedQuestionId = this.skippedQuestions.shift(); // Get the next skipped question
            const skippedQuestionElement = document.getElementById(`question${nextSkippedQuestionId}`);
            const buttonContainer = skippedQuestionElement.querySelector('.button-container');
            if (skippedQuestionElement) {
                buttonContainer.style.display = 'none';
                skippedQuestionElement.classList.add('active'); // Show the skipped question
            }
            // If there are more skipped questions, ask them again
            if (this.skippedQuestions.length > 0) {
                this.askSkippedQuestions();
            }
        }
    },

    // Function to update the current question counter display
    updateQuestionCounter: function() {
        const currentQuestionElement = document.getElementById('current-question');
        currentQuestionElement.textContent = `Question ${this.currentQuestion}`;
    },

    // Function to get the selected gender from radio buttons
    getSelectedGender: function() {
        let genderOptions = document.getElementsByName('gender');
        let selectedGender = '';
        genderOptions.forEach(option => {
            if (option.checked) {
                selectedGender = option.value;
            }
        });
        return selectedGender;
    },

    // Function to update the summary section with user input
    updateSummary: function() {
        const name = document.getElementById('name').value;
        const namewithinitial = document.getElementById('namewithinitial').value;
        const preferredname = document.getElementById('preferredname').value;
        const age = document.getElementById('age').value;
        const dateofbirth = document.getElementById('dateofbirth').value;
        const gender = this.getSelectedGender();

        const summaryElement = document.getElementById('answers_1');
        summaryElement.innerHTML = `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Name with Initial:</strong> ${namewithinitial}</p>
        <p><strong>Preferred Name:</strong> ${preferredname}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Date of Birth:</strong> ${dateofbirth}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        `;
    },

    // Function to display the summary section
    showSummary: function() {
        this.updateSummary();
        if (this.skippedQuestions.length > 0) {
            alert("You have skipped the following questions: " + this.skippedQuestions.join(", "));
        }
        document.getElementById('summary').classList.add('active');
    },


    nextstep: function() {
        if(this.skippedQuestions.length > 0) {
            this.askSkippedQuestions();
        }else{
            step1Container.style.display = 'none';
            completed_steps++;
            updateProgressBar();
            step2Container.style.display = 'block';
        }
    },
};
const step2 = {
    currentQuestion: 1,
    skippedQuestions: [],
    completed: false,

    nextQuestion: function() {
        const currentQuestionElement = document.getElementById(`question2_${this.currentQuestion}`);
        const inputField = currentQuestionElement.querySelector('input[type="text"], input[type="number"], input[type="radio"]:checked');

        if (inputField && inputField.value === "") {
            this.skippedQuestions.push(this.currentQuestion);
            const skipConfirmation = confirm("The current question is unanswered. Do you want to skip it?");
            if (skipConfirmation) {
                currentQuestionElement.classList.remove('active');
                if (this.currentQuestion <= 3) {
                    const nextQuestionElement = document.getElementById(`question2_${this.currentQuestion}`);
                    nextQuestionElement.classList.add('active');
                } else {
                    this.showSummary();
                }
            }
        } else {
            currentQuestionElement.classList.remove('active');
            this.currentQuestion++;
            this.updateQuestionCounter();
            if (this.currentQuestion <= 3) {
                const nextQuestionElement = document.getElementById(`question2_${this.currentQuestion}`);
                nextQuestionElement.classList.add('active');
            } else {
                this.showSummary();
            }
        }
    },

    skipQuestion: function() {
        this.skippedQuestions.push(this.currentQuestion);
        this.nextQuestion();
    },

    askSkippedQuestions: function() {
        if (this.skippedQuestions.length > 0) {
            const nextSkippedQuestionId = this.skippedQuestions.shift();
            const skippedQuestionElement = document.getElementById(`question2_${nextSkippedQuestionId}`);
            if (skippedQuestionElement) {
                skippedQuestionElement.classList.add('active');
            }
            if (this.skippedQuestions.length > 0) {
                this.askSkippedQuestions();
            }
        }
    },

    updateQuestionCounter: function() {
        const currentQuestionElement = document.getElementById('current-question-2');
        currentQuestionElement.textContent = `Question ${this.currentQuestion}`;
    },

    updateSummary: function() {
        const email = document.getElementById('email').value;
        const phone = document.getElementById('tp_no').value; // Corrected ID to 'tp_no'
        const address = document.getElementById('address').value;

        const summaryElement = document.getElementById('answers_2');
        summaryElement.innerHTML = `
        
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        `;
    },

    showSummary: function() {
        this.updateSummary();
        if (this.skippedQuestions.length > 0) {
            alert("You have skipped the following questions: " + this.skippedQuestions.join(", "));
        }
        document.getElementById('summary-2').classList.add('active');
    },

    nextstep: function() {
        if (this.skippedQuestions.length > 0) {
            this.askSkippedQuestions();
        } else {
            step2Container.style.display = 'none';
            completed_steps++;
            updateProgressBar();
            step3Container.style.display = 'block';
        }
    }
};

const step3 = {
    currentQuestion: 1,
    skippedQuestions: [],
    completed: false,

    nextQuestion: function() {
        const currentQuestionElement = document.getElementById(`question3_${this.currentQuestion}`);
        const inputField = currentQuestionElement.querySelector('input[type="text"], input[type="number"], textarea, select');

        if (inputField && inputField.value === "") {
            this.skippedQuestions.push(this.currentQuestion);
            const skipConfirmation = confirm("The current question is unanswered. Do you want to skip it?");
            if (skipConfirmation) {
                currentQuestionElement.classList.remove('active');
                if (this.currentQuestion <= 4) {
                    const nextQuestionElement = document.getElementById(`question3_${this.currentQuestion}`);
                    nextQuestionElement.classList.add('active');
                } else {
                    this.showSummary();
                }
            }
        } else {
            currentQuestionElement.classList.remove('active');
            this.currentQuestion++;
            this.updateQuestionCounter();
            if (this.currentQuestion <= 4) {
                const nextQuestionElement = document.getElementById(`question3_${this.currentQuestion}`);
                nextQuestionElement.classList.add('active');
            } else {
                this.showSummary();
            }
        }
    },

    skipQuestion: function() {
        this.skippedQuestions.push(this.currentQuestion);
        this.nextQuestion();
    },

    askSkippedQuestions: function() {
        if (this.skippedQuestions.length > 0) {
            const nextSkippedQuestionId = this.skippedQuestions.shift();
            const skippedQuestionElement = document.getElementById(`question3_${nextSkippedQuestionId}`);
            if (skippedQuestionElement) {
                skippedQuestionElement.classList.add('active');
            }
            if (this.skippedQuestions.length > 0) {
                this.askSkippedQuestions();
            }
        }
    },

    updateQuestionCounter: function() {
        const currentQuestionElement = document.getElementById('current-question-3');
        currentQuestionElement.textContent = `Question ${this.currentQuestion}`;
    },

    updateSummary: function() {
        const volwithgaia = document.getElementById('volwithgaia').value;
        const description = document.getElementById('description').value;
        const volBatchCheckboxes = document.querySelectorAll('input[name="vol-batch"]:checked');
        const activityCheckboxes = document.querySelectorAll('input[name="activity"]:checked');

        let volBatchValues = [];
        volBatchCheckboxes.forEach(function(checkbox) {
            volBatchValues.push(checkbox.value);
        });

        let activityValues = [];
        activityCheckboxes.forEach(function(checkbox) {
            activityValues.push(checkbox.value);
        });

        const summaryElement = document.getElementById('answers_3');
        summaryElement.innerHTML = `
        <p><strong>Why do you want to Volunteer with Project Gaia?</strong> ${volwithgaia}</p>
        <p><strong>Volunteering experience:</strong> ${description}</p>
        <p><strong>Volunteering Batch:</strong> ${volBatchValues.join(", ")}</p>
        <p><strong>Volunteering Activities:</strong> ${activityValues.join(", ")}</p>
    `;
    },



    showSummary: function() {
        this.updateSummary();
        if (this.skippedQuestions.length > 0) {
            alert("You have skipped the following questions: " + this.skippedQuestions.join(", "));
        }
        document.getElementById('summary-3').classList.add('active');
    },

    nextstep: function() {
        if (this.skippedQuestions.length > 0) {
            this.askSkippedQuestions();
        } else {
            step3Container.style.display = 'none';
            completed_steps++;
            updateProgressBar();
            step4Container.style.display = 'block';
        }
    },
};

const step4 = {
    currentQuestion: 1,
    skippedQuestions: [],
    completed: false,

    nextQuestion: function() {
        const currentQuestionElement = document.getElementById(`question4_${this.currentQuestion}`);
        const inputField = currentQuestionElement.querySelector('input[type="text"], input[type="number"]');

        if (inputField && inputField.value === "") {
            this.skippedQuestions.push(this.currentQuestion);
            const skipConfirmation = confirm("The current question is unanswered. Do you want to skip it?");
            if (skipConfirmation) {
                this.moveToNextQuestion();
            }
        } else {
            this.moveToNextQuestion();
        }
    },

    moveToNextQuestion: function() {
        const currentQuestionElement = document.getElementById(`question4_${this.currentQuestion}`);
        currentQuestionElement.classList.remove('active');
        this.currentQuestion++;
        this.updateQuestionCounter();

        if (this.currentQuestion <= 5) {
            const nextQuestionElement = document.getElementById(`question4_${this.currentQuestion}`);
            nextQuestionElement.classList.add('active');
        } else {
            this.showSummary();
        }
    },

    skipQuestion: function() {
        this.skippedQuestions.push(this.currentQuestion);
        this.moveToNextQuestion();
    },

    askSkippedQuestions: function() {
        if (this.skippedQuestions.length > 0) {
            const nextSkippedQuestionId = this.skippedQuestions.shift();
            const skippedQuestionElement = document.getElementById(`question4_${nextSkippedQuestionId}`);
            if (skippedQuestionElement) {
                skippedQuestionElement.classList.add('active');
            }
            if (this.skippedQuestions.length > 0) {
                this.askSkippedQuestions();
            }
        }
    },

    updateQuestionCounter: function() {
        const currentQuestionElement = document.getElementById('current-question-4');
        currentQuestionElement.textContent = `Question ${this.currentQuestion}`;
    },

    updateSummary: function() {
        const AoS = document.getElementById('AoS').value;
        const H_qualification = document.getElementById('H_qualification').value;
        const uni_insti = document.getElementById('uni_insti').value;
        const completionYear = document.getElementById('completion_year').value;
        const country = document.getElementById('country').value;

        const summaryElement = document.getElementById('answers_4');
        summaryElement.innerHTML = `
            <p><strong>Area of Study:</strong> ${AoS}</p>
            <p><strong>Highest Qualification:</strong> ${H_qualification}</p>
            <p><strong>University/Institution:</strong> ${uni_insti}</p>
            <p><strong>Completion Year:</strong> ${completionYear}</p>
            <p><strong>Country:</strong> ${country}</p>
        `;
    },

    showSummary: function() {
        this.updateSummary();
        if (this.skippedQuestions.length > 0) {
            alert("You have skipped the following questions: " + this.skippedQuestions.join(", "));
        }
        document.getElementById('summary-4').classList.add('active');
    },
    nextstep: function () {
        if (this.skippedQuestions.length > 0) {
            this.askSkippedQuestions();
        } else {
            step4Container.style.display = 'none';
            main_summary.combineSummaries();
            completed_steps++;
            updateProgressBar();
            main_summery_container.style.display = 'block';
        }
    }
};

const main_summary = {
    combineSummaries: function() {
        const summary1 = document.getElementById('answers_1').innerHTML;
        const summary2 = document.getElementById('answers_2').innerHTML;
        const summary3 = document.getElementById('answers_3').innerHTML;
        const summary4 = document.getElementById('answers_4').innerHTML;

        const combinedSummary = `
            <h2>Step 1 Summary</h2>
            ${summary1}
            <h2>Step 2 Summary</h2>
            ${summary2}
            <h2>Step 3 Summary</h2>
            ${summary3}
            <h2>Step 4 Summary</h2>
            ${summary4}
        `;
        document.getElementById('answers_all').innerHTML = combinedSummary;
    },
    submit:function (){
        document.getElementById('answers_all').style.display = 'none';
        document.getElementById('submit_button').style.display = 'none';
        document.getElementById('submit').innerHTML = '<h1>Thank you for submitting the form</h1><br>' +
            '<p>We will get back to you soon</p>';

    }
};

