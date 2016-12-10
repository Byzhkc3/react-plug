import React from 'react';

export class Home extends React.Component{
	render(){
		console.log(this.props);
		return(
			<div>
				<p>I a new Component</p>
				<p>{this.props.name}</p>
				<p>{this.props.age}</p>
				<p>{this.props.user.name}</p>
				<div>	
					<h4>测试</h4>
					<ul>
						{this.props.user.age.map((ag,i) => <li key={i}>{ag}</li>)}
					</ul>
				</div>
				<hr />
				{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	name:React.PropTypes.string,
	age:React.PropTypes.number,
	user:React.PropTypes.object,
	children:React.PropTypes.element.isRequired
};