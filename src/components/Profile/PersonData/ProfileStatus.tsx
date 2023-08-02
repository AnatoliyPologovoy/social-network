import React, {ChangeEvent} from "react";
import cl from "./personData.module.css"
import {ReactComponent as EditIcon} from "assets/edit-btn.svg"
import {ReactComponent as SaveIcon} from "assets/ok-btn.svg"

type StatusPropsType = {
		status: string
		updateStatus: (status: string) => void
		isHostUser: boolean
}

export class ProfileStatus extends React.Component<StatusPropsType, any> {
		state = {
				isEditMode: false,
				input: this.props.status
		}

		toggleMode() {
				this.setState({
						isEditMode: !this.state.isEditMode,
				})
		}

		changeInput(e: ChangeEvent<HTMLInputElement>) {
				this.setState({
						input: e.currentTarget.value
				})
		}

		componentDidUpdate(prevProps: Readonly<StatusPropsType>, prevState: Readonly<any>,) {

				if (this.props.status !== prevProps.status)
						this.setState({
								input: this.props.status
						})
		}

		handlerClickButtonStatus = () => {
				if (this.state.isEditMode) {
						this.props.updateStatus(this.state.input)
						this.toggleMode()
				} else {
						this.toggleMode()
				}
		}


		render() {
				const toggleModeCB = this.toggleMode.bind(this)
				const onChangeInputCB = this.changeInput.bind(this)
				const viewStatus = <span>{this.state.input}</span>
				const changeStatus =
						<input
								onChange={onChangeInputCB}
								type={'text'}
								value={this.state.input}
								autoFocus
						/>
				const renderStatus = this.state.isEditMode ? changeStatus : viewStatus
				return (
						<div className={cl.status}>
								{renderStatus}
								{this.props.isHostUser &&
										(this.state.isEditMode ?
										<SaveIcon className={cl.statusIcon}
															onClick={this.handlerClickButtonStatus}/>
										:
										<EditIcon
												className={cl.statusIcon}
												onClick={this.handlerClickButtonStatus}/>)
								}
						</div>
				)
		}
}