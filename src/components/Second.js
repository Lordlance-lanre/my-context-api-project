import React from 'react';
import { useMyContext } from '../Context.js';

const Second = () =>{
	const [data, setData] = useMyContext();
	console.log(data);
	return(
		<div>
		  <h1>My Data from the context: {data}</h1>
		</div>
		)
}

export default Second;