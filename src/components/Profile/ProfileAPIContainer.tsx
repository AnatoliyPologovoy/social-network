import React from 'react';
import Profile from "./Profile";
import {ProfilePageType} from "redux/profileReducer";
import {Redirect, RouteComponentProps} from "react-router-dom";
import {AuthUserDataType} from "redux/authReducer";


type ProfilePropsType = {
		cbAddPost: (post: string) => void
		profilePage: ProfilePageType
		authData: AuthUserDataType
		getUserProfile: (userId: string) => void
		getProfileStatus: (userId: string) => void
} & RouteComponentProps<{ userId: string }>

export class ProfileAPIContainer extends React.Component<ProfilePropsType, any> {

		getUserData() {
				const userId = this.props.match.params.userId
				const ownUserId = this.props.authData?.id
				const currentUserId = userId || ownUserId

				if (currentUserId) {
						this.props.getUserProfile(currentUserId.toString())
						this.props.getProfileStatus(currentUserId.toString())
				} else {
						return <Redirect to={'/login'}/>
				}
		}

		componentDidMount() {
				this.getUserData()
		}

		componentDidUpdate(
				prevProps: Readonly<ProfilePropsType>,
				prevState: Readonly<any>,
				snapshot?: any) {
				if (prevProps.match.params.userId !== this.props.match.params.userId) {
						this.getUserData()
				}
		}


		render() {
				const isHostUser = this.props.authData.id === this.props.profilePage.currentProfile?.userId

				return (
						<Profile isHostUser={isHostUser} {...this.props}/>
				)
		}
}