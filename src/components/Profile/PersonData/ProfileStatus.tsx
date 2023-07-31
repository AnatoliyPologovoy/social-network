import React, {ChangeEvent} from "react";
import cl from "./personData.module.css"

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

    changeInput (e: ChangeEvent<HTMLInputElement>) {
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


    render() {
        const handlerClickButtonStatus = () => {
            if (this.state.isEditMode) {
                this.props.updateStatus(this.state.input)
                toggleModeCB()
            }
            else {
                toggleModeCB()
            }
        }
        const toggleModeCB = this.toggleMode.bind(this)
        const onChangeInputCB = this.changeInput.bind(this)
        const viewStatus = <span onDoubleClick={toggleModeCB}>{this.state.input}</span>
        const changeStatus =
            <input
                onChange={onChangeInputCB}
                // onBlur={toggleModeCB}
                type={'text'}
                value={this.state.input}
                autoFocus
            />
        const renderStatus = this.state.isEditMode ? changeStatus : viewStatus
        return (
            <div className={cl.status}>
                {renderStatus}
                {this.props.isHostUser &&
                    <button onClick={handlerClickButtonStatus}>{this.state.isEditMode ? 'Save' : 'Edit'}</button>
                }
            </div>
        )
    }
}