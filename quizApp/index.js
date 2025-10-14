const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyper Tabular Markup Language",
      "None of the above",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language runs in the browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "JavaScript"],
    answer: "CSS",
  },
  {
    question: "What is the correct way to declare a JavaScript variable?",
    options: [
      "var name = John",
      "variable name = John",
      "v name = John",
      "dim name = John",
    ],
    answer: "var name = John",
  },
  {
    question: "Which of these is a JavaScript framework?",
    options: ["React", "Django", "Laravel", "Flask"],
    answer: "React",
  },
  {
    question: "Which HTML tag is used to define an unordered list?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>",
  },
  {
    question:
      "In JavaScript, which operator is used for equality comparison (value only)?",
    options: ["=", "==", "===", "!="],
    answer: "==",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Sun Microsystems", "Netscape", "Oracle"],
    answer: "Netscape",
  },
  {
    question: "What does `flex-direction: column;` do in CSS?",
    options: [
      "Arranges flex items horizontally",
      "Arranges flex items vertically",
      "Changes text color",
      "Adds space between items",
    ],
    answer: "Arranges flex items vertically",
},
{
    question: "Which HTML attribute is used to link a CSS file?",
    options: ["href", "src", "link", "rel"],
    answer: "href",
  },
];

let currentquestion = 0;

let question, radiobutton1, radiobutton2, radiobutton3, radiobutton4;
let anstext1, anstext2, anstext3, anstext4;
let next, previous, submitButton;

function htmlskeleton(){
    const wrapper = document.createElement("div");
    wrapper.classList.add("app-wrapper","d-flex", "flex-column","justify-content-center","align-items-sm-start")
    const header = document.createElement("div");
    header.classList.add("header")
        const heading = document.createElement("h1");
        heading.classList.add("heading")
            heading.textContent = "Awesome Quiz Application"
        const time = document.createElement("div");
        time.classList.add("times")
            time.textContent= "Time 00:00"

  question = document.createElement("div");
    question.classList.add("question")
    question.textContent = ""

  const options = document.createElement("div");
    options.classList.add("options")

      const option1 = document.createElement("div");
          option1.classList.add("options-div")
          radiobutton1 = document.createElement("input");
          anstext1 = document.createElement("label");

      const option2 = document.createElement("div");
          option2.classList.add("options-div")
          radiobutton2 = document.createElement("input");
          anstext2 = document.createElement("label");

      const option3 = document.createElement("div");
          option3.classList.add("options-div")
          radiobutton3 = document.createElement("input");
          anstext3 = document.createElement("label");

      const option4 = document.createElement("div");
          option4.classList.add("options-div")
          radiobutton4 = document.createElement("input");
           anstext4 = document.createElement("label");

    const buttons = document.createElement("div");
    const buttonwrapper = document.createElement("div");
    buttonwrapper.classList.add("buttonwrapper", "d-flex",  "justify-content-between")
    
    previous = document.createElement("button");
    previous.textContent="Previous";
    previous.classList.add("btn", "btn-success", "disabled", "py-2")
    previous.id = "previous-button";
    
    next = document.createElement("button")
    next.textContent="Next";
    next.classList.add("btn","btn-success","ms-2","px-3","py-2",)
    next.id = "next-button";

    submitButton = document.createElement("button");
    submitButton.textContent="Submit";
    submitButton.classList.add("btn", "btn-primary", "disabled", "py-2")
    submitButton.id = "submit-button";
    
    header.append(heading, time)
    option1.append(radiobutton1, anstext1);
    option2.append(radiobutton2, anstext2);
    option3.append(radiobutton3,anstext3);
    option4.append(radiobutton4, anstext4);
    options.append(option1, option2, option3,option4);
    buttons.append(previous, next);

    buttonwrapper.append(buttons, submitButton)
    wrapper.append(header, question, options, buttonwrapper);

    document.body.append(wrapper);
    
    radiobutton1.type = "radio";
    radiobutton1.name = "quiz";
    radiobutton1.id = "option1";
    anstext1.htmlFor = "option1";

    radiobutton2.type = "radio";
    radiobutton2.name = "quiz";
    radiobutton2.id = "option2";
    anstext2.htmlFor = "option2";

    radiobutton3.type = "radio";
    radiobutton3.name = "quiz";
    radiobutton3.id = "option3";
    anstext3.htmlFor = "option3";

    radiobutton4.type = "radio";
    radiobutton4.name = "quiz";
    radiobutton4.id = "option4";
    anstext4.htmlFor = "option4";
    
    const optionsDiv = document.querySelectorAll(".options-div");

    optionsDiv.forEach((option) => {
      option.addEventListener("click", () => {
        const radio = option.querySelector("input[type='radio']");
        radio.checked = true; // mark as selected
      });
    });
    
    
    nextButton = document.getElementById("next-button");
    nextButton.addEventListener("click", () => {
      saveAnswer();
      if (currentquestion < quizData.length - 1) {
        currentquestion++;
        loadQuestionAndAnswer(currentquestion);
      }
    });

    previousButton = document.getElementById("previous-button");
    previousButton.addEventListener("click", () => {
      saveAnswer();
      if (currentquestion > 0) {
        currentquestion--;
        loadQuestionAndAnswer(currentquestion);
      }
    });


};

let userAnswer = Array(quizData.length).fill(null);
function saveAnswer (){
  if(radiobutton1.checked) userAnswer[currentquestion] = anstext1.textContent;
  if(radiobutton2.checked) userAnswer[currentquestion] = anstext2.textContent;
  if(radiobutton3.checked) userAnswer[currentquestion] = anstext3.textContent;
  if(radiobutton4.checked) userAnswer[currentquestion] = anstext4.textContent;
}

function loadQuestionAndAnswer(index) {
    // Clear all radio buttons first
    radiobutton1.checked = false;
    radiobutton2.checked = false;
    radiobutton3.checked = false;
    radiobutton4.checked = false;
    
    const qdata = quizData[index];
    question.textContent = qdata.question;
    
    anstext1.textContent = qdata.options[0];
    anstext2.textContent = qdata.options[1];
    anstext3.textContent = qdata.options[2];
    anstext4.textContent = qdata.options[3];
    
    // Then set the saved answer if it exists
    if(userAnswer[index] === anstext1.textContent) radiobutton1.checked = true;
    else if(userAnswer[index] === anstext2.textContent) radiobutton2.checked = true;
    else if(userAnswer[index] === anstext3.textContent) radiobutton3.checked = true;
    else if(userAnswer[index] === anstext4.textContent) radiobutton4.checked = true;

    if (currentquestion===0){
      previousButton.classList.add("disabled");
    }else{
      previousButton.classList.remove("disabled");
    }
    if (currentquestion === quizData.length-1){
      nextButton.classList.add("disabled");
    }else{
      nextButton.classList.remove("disabled");
    }
    if (currentquestion === quizData.length-1){
      submitButton.classList.remove("disabled");
    }else{
      submitButton.classList.add("disabled");
    }
}




htmlskeleton();
loadQuestionAndAnswer(currentquestion)
