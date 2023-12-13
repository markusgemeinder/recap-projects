console.clear()

const questionCatalog = [
  {
    say: (text) => {
      console.log(text)
    },
  },
  {
    number: 1,
    question: 'Is 1 + 1 more than 2 + 2?',
    answer: 'No!',
    tags: ['#html', '#flexbox', '#css', '#javascript'],
  },
  {
    number: 2,
    question: 'Your name is not Susan, right?',
    answer: 'Yes!',
    tags: ['#html', '#css', '#javascript', '#other'],
  },
  {
    number: 3,
    question: 'Is Dubai in Europe?',
    answer: 'No!',
    tags: '#javascript',
  },
]

const test1 = questionCatalog[2]

console.log(test1)
