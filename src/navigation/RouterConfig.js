import React from 'react';
import Home from '../components/Home';
import Deck from '../components/Deck';
import { Switch, Route} from 'react-router-dom';
import { ROOT, DECK_PULL } from './CONSTANTS'

export const RouterConfig = () => {
    return (
        <Switch>
          <Route exact path={ROOT}component={Home}/>
          <Route exact path={DECK_PULL} component={Deck}/>
        </Switch>
    )
}