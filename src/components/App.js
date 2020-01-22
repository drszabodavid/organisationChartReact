import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import MainPage from "./MainPage";
import SubPage from "./SubPage";

class App extends Component {

    renderMainPage() {
        return (
            <div key="app" className="App">
                {this.renderHeader()}
                <MainPage employees={this.props.employees}
                          circleClickOnMainPage={this.props.circleClickOnMainPage}
                />
            </div>
        )
    }

    renderHeader() {
        return <Header previousCircle={this.props.previousCircle} onMainButtonClick={this.props.onMainButtonClick}
                       onReturnButtonClick={this.props.onReturnButtonClick}/>
    }

    renderSubPage() {
        return (
            <div key="app" className="App">
                {this.renderHeader()}
                <SubPage employees={this.props.employees}
                         centerStartPositionX={700}
                         centerStartPositionY={225}
                         circleToRender={this.props.currentCircle}
                         circleClickOnMainPage={this.props.circleClickOnMainPage}/>
            </div>
        )
    }

    render() {
        if (!this.props.subPage) {
            return this.renderMainPage()
        } else {
            return this.renderSubPage()
        }
    }

}


export default App;
