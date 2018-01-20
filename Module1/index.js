const options = ["All", "Cars", "Trucks", "Convertibles"]
const cars = [
  {
    type: "Cars",
    data: [
      {
        year: 2013,
        model: "A",
        price: "$32000"
      },
      {
        year: 2011,
        model: "B",
        price: "$4400"
      },
      {
        year: 2016,
        model: "B",
        price: "$15500"
      }
    ]
  },
  {
    type: "Trucks",
    data: [
      {
          year: 2014,
          model: "D",
          price: "$18000"
      },
      {
          year: 2013,
          model: "E",
          price: "$2000"
      }]
  },
  {
    type: "Convertibles",
    data: [
      {
          year: 2009,
          model: "F",
          price: "$2000"
      },
      {
          year: 2010,
          model: "G",
          price: "$6000"
      },
      {
          year: 2012,
          model: "H",
          price: "$12500"
      },
      {
          year: 2017,
          model: "M",
          price: "$50000"
      }]
  }
]

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
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox">
          <span class="mdl-checkbox__label">New Only</span>
          <input type="checkbox" id="checkbox" class="mdl-checkbox__input"/>
        </label>
      </div>
      <div>
        <span>Select Type</span>
          <select>
            {options.map((value) => <option value={value}>{value}</option>)}
          </select>
      </div>
    </div>
  )
}

function List(props){
  return (
    <div>
      <h2>{props.type}</h2>
      {props.cars.map((eachCar) => <Table car = {eachCar}/>)}
    </div>
  )
}

function Table(props) {
  return (
    <ul>
      <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
        <thead>
          <tr>
            <th class="mdl-data-table__cell--non-numeric">Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
        </thead>
        <tbody>
          <tr class="mdl-color-text--grey-600">
            <td class="mdl-data-table__cell--non-numeric">{props.car.year}</td>
            <td>{props.car.model}</td>
            <td>{props.car.price}</td>
            <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Buy Now</button></td>
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
      {cars.map((types) => <List type = {types.type} cars = {types.data}/>)}
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)