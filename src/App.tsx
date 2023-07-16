import React, {FC, useEffect, useRef} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {Sidebar} from "components/Sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "components/News/News";
import {Music} from "components/Music/Music";
import {Settings} from "components/Settings/Settings";
import {ProfileContainer} from "components/Profile/ProfileContainer";
import {DialogsContainer} from "components/Dialogs/DialogsContainer";
import {UsersContainer} from "components/Users/UsersContainer";
import {LoginPageContainer} from "components/Login/LoginPageContainer";
import {connect} from "react-redux";
import {initializeApp} from "redux/appReducer";
import {AppStateType} from "redux/redux-store";
import {Preloader} from "components/common/Preloader";


export type AppPropsType = {
		// friends: FriendType[]
		initializeApp: () => void
} & MapStateToPropsType

type MapStateToPropsType = {
		isInitialized: boolean
}

const App:FC<AppPropsType> = ({isInitialized, initializeApp}) => {

		useEffect(() => {
				initializeApp()
		}, [])



		if (!isInitialized) {
				return <Preloader/> //protect routing
		}

		return (
				<BrowserRouter>
						<div className="App">
								<Header/>
								<Sidebar/>
								<div className="main_section" >
										<Route path={'/news'} component={News}/>

										<Route path={'/dialogs'} render={() =>
												<DialogsContainer
												/>}/>
										<Route exact path={'/'} render={() =>
												<DialogsContainer
												/>}/>

										<Route path={'/profile/:userId?'} render={() =>
												<ProfileContainer
												/>}/>

										<Route path={'/music'} component={Music}/>
										<Route path={'/users'} render={() => <UsersContainer/>}/>
										<Route path={'/settings'} component={Settings}/>
										<Route path={'/login'} component={LoginPageContainer}/>
								</div>
						</div>
				</BrowserRouter>
		);
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
		return {
				isInitialized: state.app.isInitialized
		}
}

export default connect(mapStateToProps, {initializeApp})(App);
