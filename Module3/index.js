class Form extends React.Component{
	constructor(props){
		super(props)
		this.state = {value: "Science Lab", items: [], firstName: "", lastName: "", a: false, b: false, c: false}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.removeItem = this.removeItem.bind(this)
	}
	handleChange(event) {
		const target = event.target
		const value = target.type === "checkbox" ? target.checked : target.value
		const name = target.name
  
		this.setState({
			[name]: value
		})
	}
	handleSubmit(event) {
		var itemsCopy = this.state.items.slice()
		var restrictions = (this.state.a ? "a" : "") + (this.state.b ? "b" : "") + (this.state.c ? "c" : "")
		itemsCopy.push([this.state.firstName, this.state.lastName, this.state.value, restrictions])
		this.setState({items:itemsCopy, value: "Science Lab", firstName: "", lastName: "", a: false, b: false, c: false}, () => {
			var elem = document.querySelector("select")
			var instance = M.Select.init(elem)
		})
		event.preventDefault()
	}
	removeItem(index){
		var itemsCopy = this.state.items.slice()
		itemsCopy.splice(index, 1)
		this.setState({items:itemsCopy})
	}
	render(){
		return (
			<div className="row">
				<form className="col s12" onSubmit = {this.handleSubmit}>
					<div className="input-field col s6">
						<input name="firstName" required placeholder="Your first name" id="first_name" type="text" className="validate" value = {this.state.firstName} onChange={this.handleChange}/>
						<label htmlFor="first_name">First Name</label>
					</div>
					<div className="input-field col s6">
						<input name="lastName" required placeholder="Your last name" id="last_name" type="text" className="validate" value = {this.state.lastName} onChange={this.handleChange}/>
						<label htmlFor="first_name">Last Name</label>
					</div>
					<div className="input-field col s12">
						<select name="value" value={this.state.value} onChange={this.handleChange}>
							<option value="Science Lab">Science Lab</option>
							<option value="Cooking">Cooking</option>
							<option value="Painting">Painting</option>
							<option value="Swimming">Swimming</option>
						</select>
						<label>Acitvity</label>
					</div>
					<div className="col s12">
						<span>Check all that apply:</span>
						<label className="col s12">
							<input name="a" type="checkbox" className="filled-in" checked = {this.state.a} onChange = {this.handleChange}/>
							<span>a) Dietary Restrictions</span>
						</label>
						<label className="col s12">
							<input name="b" type="checkbox" className="filled-in" checked = {this.state.b} onChange = {this.handleChange}/>
							<span>b) Physical Disablilities</span>
						</label>
						<label className="col s12">
							<input name="c" type="checkbox" className="filled-in" checked = {this.state.c} onChange = {this.handleChange}/>
							<span>c) Medical Needs</span>
						</label>
					</div>
					<input className="waves-effect waves-light btn" value="submit" type="submit"/>
				</form>
				<table>
					<thead>
						<tr>
							<th>Remove</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Activity</th>
							<th>Restrictions</th>
						</tr>
					</thead>
					<tbody>
						<Table items = {this.state.items} removeItem = {this.removeItem}/>
					</tbody>
				</table>
			</div>
		)
	}
}
  
function Table(props) {
	return (
		<React.Fragment>
			{props.items.map((item, index) =>
				<tr>
					<td key={"delete" + index}><a className="red btn-floating waves-effect waves-light" onClick={() => props.removeItem(index)}><i className="material-icons">close</i></a></td>
					<td key={"firstname" + index}>{item[0]}</td>
					<td key={"lastname" + index}>{item[1]}</td>
					<td key={"activity" + index}>{item[2]}</td>
					<td key={"resrction" + index}>{item[3]}</td>
				</tr>
			)}
		</React.Fragment>
	)
}
  
ReactDOM.render(
	<Form/>,
	document.getElementById("root")
)
  
var elem = document.querySelector("select")
var instance = M.Select.init(elem)