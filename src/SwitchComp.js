import React from 'react';
import {Switch, Route} from 'react-router-dom';
import User from './User';

function SwitchComp(){
	return(
		<div style={{marginLeft:"50px"}}>
		<Switch>
            <Route path={`/user/:id/:name/:username/:email/:address/:phone/:website/:company/`}><User /></Route> 
        </Switch>
		</div>
		);
};

export default SwitchComp;