import React from "react";
import cl from "./personData.module.css"
import {CurrentProfileDomainType, PersonDataType, updateUserProfileStatusTC} from "redux/profileReducer";
import {ProfileStatus} from "./ProfileStatus";
import avatarPlaceholder from "assets/avatar_placeholder.png"
import {useDispatch} from "react-redux";
import {ReactComponent as UpdateIcon} from "assets/update-photo.svg"


type PersonDataPropsType = {
		isHostUser: boolean
		currentProfile: CurrentProfileDomainType,
		profileStatus: string
}


export const PersonData: React.FC<PersonDataPropsType> = (props) => {
		const dispatch = useDispatch()
		const updateStatus = (status: string) => {
				dispatch(updateUserProfileStatusTC(status))
		}

		const srcImg = props.currentProfile?.photos?.large ?
				props.currentProfile.photos.large : avatarPlaceholder

		const fullName = props.currentProfile ? props.currentProfile.fullName : 'null'
		return (
				<div className={cl.personData}>
						<img
								className={cl.imgAvatar}
								src={srcImg}
								alt={"аватарка пользователя " + props.currentProfile?.fullName}
						/>
						<input type={"file"}
									 className={cl.inputFile}
									 value={''}
									 id={'input-file'}
						/>
						<label htmlFor={'input-file'}
									 className={cl.inputFileLabel}>
								<UpdateIcon
										className={cl.updatePhotoIcon}/>
						</label>
						<div className={cl.nameWrapper}>
								<h2 className={cl.name}>{fullName}</h2>
								<ProfileStatus
										isHostUser={props.isHostUser}
										status={props.profileStatus}
										updateStatus={updateStatus}
								/>
						</div>
				</div>
		)
}

