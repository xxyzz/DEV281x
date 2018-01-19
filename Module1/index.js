function Welecome() {
    return (
      <div>
        <h1>Welcome to React Transportation</h1>
        <p>The best place to buy vehicles online</p>
      </div>
    )
  }
  
  function Choose(){
    return (
      <div>
        <div>
          <h2>Choose Options</h2>
          <span>New Only</span>
          <input type="checkbox" defaultChecked/>
        </div>
        <div>
          <span>Select Type</span>
            <select>
              <option value="All">All</option>
              <option value="Cars">Cars</option>
              <option value="Trucks">Trucks</option>
              <option value="Convertibles">Convertibles</option>
            </select>
        </div>
      </div>
    )
  }
  
  function List1(props){
    return (
      <div>
        <h2>Cars</h2>
        <Table car = {props.cars[0]}/>
        <Table car = {props.cars[1]}/>
        <Table car = {props.cars[2]}/>
      </div>
    )
  }
  
  function List2(props){
    return (
      <div>
        <h2>Trucks</h2>
        <Table car = {props.cars[0]}/>
        <Table car = {props.cars[1]}/>
      </div>
    )
  }
  
  function List3(props){
    return (
      <div>
        <h2>Convertibles</h2>
        <Table car = {props.cars[0]}/>
        <Table car = {props.cars[1]}/>
        <Table car = {props.cars[2]}/>
        <Table car = {props.cars[3]}/>
      </div>
    )
  }
  
  function Table(props) {
    return (
      <ul>
        <table>
          <tbody>
            <tr>
              <th>Year</th>
              <th>Model</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>
            <tr>
              <td>{props.car.year}</td>
              <td>{props.car.model}</td>
              <td>{props.car.price}</td>
              <td><button>Buy Now</button></td>
            </tr>
          </tbody>
        </table>
      </ul>
    )
  }
  
  function App() {
    return (
      <div>
        <Welecome/>
        <Choose/>
        <List1 cars = {[{'year': 2013, 'model': 'A', 'price': '$32000'}, {'year': 2011, 'model': 'B', 'price': '$4400'}, {'year': 2016, 'model': 'B', 'price': '$15500'}]}/>
        <List2 cars = {[{'year': 2014, 'model': 'D', 'price': '$18000'}, {'year': 2013, 'model': 'E', 'price': '$5200'}]}/>
        <List3 cars = {[{'year': 2009, 'model': 'F', 'price': '$2000'}, {'year': 2010, 'model': 'G', 'price': '$6000'}, {'year': 2012, 'model': 'H', 'price': '$12500'}, {'year': 2017, 'model': 'M', 'price': '$50000'}]}/>
      </div>
    )
  }
  
  ReactDOM.render(
    <App/>,
    document.getElementById("root")
  )