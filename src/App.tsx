import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import 'antd/dist/antd.css';
import "./index.css";

// components
import Header from "./components/common/Header";
import InteractivityBasic from './pages/tutorials/InteractivityBasic';
import DonutChart from './pages/DonutChart';
import AdvancedBarChart from './pages/AdvancedBarChart';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route path="/donut-chart" component={DonutChart}/>
            <Route path="/advanced-bar-chart" component={AdvancedBarChart}/>
            <Route path="/tutorials/interactivity-basic" component={InteractivityBasic}/>
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
