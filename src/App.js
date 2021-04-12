import './App.css';
import { Layout } from 'antd';
import Home from './pages/home/home';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Summary from './pages/summary/summary';


function App() {
  const { Content } = Layout;

  return (
    <div className="App">
        <Content style={{height:'100vh'}}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/summary" component={Summary}/>
          </Switch>
        </Content>
</div>
  );
}

export default App;
