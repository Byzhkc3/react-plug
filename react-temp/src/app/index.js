import React from 'react';
import { render } from 'react-dom';

import {Header} from './components/Header';
import {Home} from './components/Home';

class App extends React.Component{
	render(){
		var user={
			name:'zhaoyuan',
			age:[123,322,222]
		};
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10">
						<Header />
					</div>
				</div>

				<div className="row">
					<div className="col-xs-10">
						<Home name={'yali'} age ={23} user={user}>
							<p>this is paragrap</p>
						</Home>
					</div>
				</div>
			</div>
		);
	}
}

render(<App/>,window.document.getElementById('app'));
