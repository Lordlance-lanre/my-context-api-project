import React from 'react';
import { useMyContext } from '../Context.js';

const First = () =>{
	const [data, setData] = useMyContext();
	console.log(data);

	function update(){
		setData("New Context Api tutorial");
	}
	return(
		<div>
		  <h1>My Data from the context: {data}</h1>
		  <button className="bg-slate-400 flex mt-10 mx-auto rounded px-2 py-1" onClick={update}>Update Data</button>
		</div>
		)
}

export default First;