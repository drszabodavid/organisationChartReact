import React, {Component} from 'react';
import './App.css';
import Header from "./Header";
import MainPage from "./MainPage";
import SubPage from "./SubPage";
import NewPosition from "./NewPosition";

class App extends Component {

    renderMainPage() {
        return (
            <div key="app" className="App"> {this.renderHeader()}
                <MainPage employees={this.props.employees}
                          circleClickOnMainPage={this.props.circleClickOnMainPage}/>
            </div>
        )
    }

    renderHeader() {
        return <Header previousCircle={this.props.previousCircle} onMainButtonClick={this.props.onMainButtonClick}
                       onReturnButtonClick={this.props.onReturnButtonClick}
                       onNewPositionButtonClick={this.props.onNewPositionButtonClick}/>
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

    renderNewPositionForm() {
        return (
            <div key="app" className="App">
                {this.renderHeader()}
                <NewPosition showForm={this.props.showNewForm} saveNewForm={this.props.saveNewForm}
                             onNewPositionButtonClick={this.props.onNewPositionButtonClick}
                             closeForm={this.props.closeForm}
                />
            </div>
        )
    }

    render() {
        if (this.props.showNewForm) {
            return this.renderNewPositionForm()
        }
        if (!this.props.subPage) {
            return this.renderMainPage()
        } else {
            return this.renderSubPage()
        }
    }

}


export default App;
