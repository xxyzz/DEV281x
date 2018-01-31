class Game extends React.Component{
    constructor(props) {
      super(props)
      this.state = {formulate: newFormulate(), correct: 0, incorrect: 0, status: 0}
      this.checkAnswer = this.checkAnswer.bind(this)
    }
    reset() {
      this.setState({formulate: newFormulate(), correct: 0, incorrect: 0, status: 0})
    }
    checkWin() {
      if (this.state.correct == 10) {
        this.setState({status: 1}, () => {
          alert('You win!')
          this.reset()})
      } else if (this.state.correct + this.state.incorrect == 10) {
         this.setState({status: 2}, () => {
           alert('You lose!')
           this.reset()})
      } else {
        this.setState({formulate: newFormulate()})
      }
    }
    checkAnswer(answer, value) {
      if (answer == value) {
        this.setState({correct: this.state.correct + 1}, () => {this.checkWin()})
      } else {
        this.setState({incorrect: this.state.incorrect + 1}, () => {this.checkWin()})
      }
    }
    render() {
      return (
        <div>
          <div className="mdc-layout-grid__inner">
            <h1 className="mdc-layout-grid__cell mdc-typography--display1">What is {this.state.formulate.join(' ')}</h1>
          </div>
          <div className="mdc-layout-grid__inner">
            <div className="mdc-layout-grid__cell">
              <Buttons answer = {eval(this.state.formulate.join(''))} checkAnswer = {this.checkAnswer}/>
            </div>
            <div className="mdc-layout-grid__cell">
              <h1 className="mdc-typography--display1">Correct: {this.state.correct}</h1>
              <h1 className="mdc-typography--display1">Incorrect: {this.state.incorrect}</h1>
            </div>
          </div>
        </div>
      )
    }
  }
  
  function Button(props) {
    return (
      <li className="mdc-list-item">
        <button type = "button" className = "mdc-button mdc-button--raised" onClick = {() => props.checkAnswer(props.answer, props.value)}>
          {Number.isInteger(props.value)? props.value:props.value.toFixed(2)}
        </button>
      </li>
    )
  }
  
  function Buttons(props) {
    let values = [props.answer]
    for (let i = 0; i < 3; i++) {
      // generate three random answers
      values.push(props.answer + Math.floor(Math.random() * 201 - 100))
    }
    
    // shuffle values
    for (let j = values.length - 1; j > 0; j--) {
      const k = Math.floor(Math.random() * (j + 1))
      let l = values[j]
      values[j] = values[k]
      values[k] = l
    }
    return (
      <ul className="mdc-list--non-interactive">
        {values.map((eachValue, index) => <Button key = {index} value = {eachValue} checkAnswer={props.checkAnswer} answer = {props.answer}/>)}
      </ul>
    )
  }
  
  function newFormulate() {
    let newFormulate = [], symbols = ['+', '-', '*', '/'] 
    newFormulate.push(Math.floor(Math.random() * 101))
    newFormulate.push(symbols[Math.floor(Math.random() * 4)])
    newFormulate.push(Math.floor(Math.random() * 101))
    while (newFormulate[1] == '/' && newFormulate[2] == 0) {
      newFormulate[2] = Math.floor(Math.random() * 101)
    }
    return newFormulate
  }
  
  ReactDOM.render(
    <Game/>,
    document.getElementById("root")
  )