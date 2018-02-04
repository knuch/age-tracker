import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './App.css';
import Timer from './timer'

const App = observer(class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row text-left">
          <div className="col-12">
            <div className="kidBlockContainer">
            {
                Timer.kids.map(kid => 
                <div key={`name-${kid.name}`} className="kidBlock">
                  <div className="nameBlock">
                    <h2 className="mb-4 d-inline-block">{kid.name}</h2>
                    <span className="birthdate">({kid.birthday})</span>
                  </div>
                  <div key={`age-${kid.name}`} className="mb-1">
                    <b className="mr-3">Age:</b>
                    <p className="alert alert-info bg-white d-inline-block">
                      {kid.age.years > 0 ? `${kid.age.years} ans ` : ''}
                      {kid.age.months > 0 ? `${kid.age.months} mois ` : ''}
                      {kid.age.days > 0 ? `${kid.age.days} jours ` : ''}
                    </p>
                  </div>
                  <div  key={`count-${kid.name}`} >
                    <b className="mr-3">Anniversaire:</b>
                    <p className="alert alert-danger d-inline-block mr-2 bg-white">{kid.nextBirthday}</p>
                  </div>
                </div>
                  )
            }
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default App;
