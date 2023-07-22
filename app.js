const questions=[
    {
      'ques': 'Which of the following is a markup langauge',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'C++',
        'd' : 'JAVA',
        'correct' : 'a'
    },
    {
        'ques': 'What year was Javascript launched',
          'a' : '1966',
          'b' : '1987',
          'c' : '1991',
          'd' : '1995',
          'correct' : 'd'
    },
    {
        'ques': 'What does CSS stands for',
          'a' : 'Hyper Text Markup Langauge',
          'b' : 'Cascading Style Sheets',
          'c' : 'Jason Object Notation',
          'd' : 'Javascript',
          'correct' : 'b'
    },
    {
        'ques': 'Who invented JAVA',
          'a' : 'James Alfredo',
          'b' : 'James Gosling',
          'c' : 'Jimmy Anderson',
          'd' : 'Steffen McLanning',
          'correct' : 'b'
    }
]
let index = 0;
let total = questions.length;
let right=0;
     wrong =0;
const quesbox = document.getElementById("quesbox")
const optionInputs = document.querySelectorAll(' .options')
const loadquestion = () => {
    if(index === total){
        return endquiz()
    }
      reset();
    const data = questions[index]
    console.log(data)
    quesbox.innerText =  `${index+1}) ${data.ques}  `;
    optionInputs[0].nextElementSibling.innerText = data.a; 
    optionInputs[1].nextElementSibling.innerText = data.b; 
    optionInputs[2].nextElementSibling.innerText = data.c; 
    optionInputs[3].nextElementSibling.innerText = data.d; 
}
const submitquiz = () =>  {
    const data = questions[index]
    const ans = getanswer()
    if (ans === data.correct){
    right++;
    }
    else{
        wrong++;
    }
    index++;
    loadquestion();
    return;
}
const getanswer = () => {
    let answer;
    optionInputs.forEach(
        (input) => {
            if(input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
         input.checked = false;
        }
    )
}
const endquiz = () => {
  document.getElementById("box").innerHTML = `
  <h3> Thankyou for playing the Quiz </h3>
  <h2> ${right} / ${total} are correct</h2>
  `
}
loadquestion();