import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import Recipes from './components/recipes'
class App extends Component {
	state={
		recipes:[]
	}
	getRecipes=async(e)=>{
		e.preventDefault()
		let search=e.target.search.value
		console.log(search)
		const API_KEY="ca23f62596eaae4d63c388f21737bbca"
		const api_call=await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${search}&count=10`);
		const data=await api_call.json();
		//console.log(data.recipes)
		this.setState({recipes:data.recipes})
	}
	// componentDidMount=()=>{
	// 	const json=localStorage.getItem("recipes")
	// 	const recipes=JSON.parse(json);
	// 	this.setState({recipes})
	// }
	
	// componentDidUpdate=()=>{
	// 	const recipes=JSON.stringify(this.state.recipes);
	// 	localStorage.setItem("recipes",recipes);
	// }
  render() {
	  //console.log(this.state.recipes)
	 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
        </header>
		<Form getRecipe={this.getRecipes}/>
		<Recipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default App;