import React, {ChangeEvent, JSXElementConstructor} from "react";
import cl from "./personData.module.css"

type StatusPropsType = {
    status: string
}

export class ProfileStatus extends React.Component<StatusPropsType, any> {
    state = {
        isEditMode: false,
        input: this.props.status
    }

    toggleMode() {
        this.setState({
            isEditMode: !this.state.isEditMode,
            input: this.state.input
        })
    }

    changeInput (e: ChangeEvent<HTMLInputElement>) {
        this.setState({
            input: e.currentTarget.value
        })
    }


    render() {
        const toggleModeCB = this.toggleMode.bind(this)
        const viewStatus = <span onDoubleClick={toggleModeCB}>{this.state.input}</span>
        const changeStatus =
            <input
                onChange={this.changeInput.bind(this)}
                onBlur={toggleModeCB}
                type={'text'}
                value={this.state.input}
                autoFocus
            />
        const renderStatus = this.state.isEditMode ? changeStatus : viewStatus
        return (
            <div className={cl.status}>
                {renderStatus}
            </div>
        )
    }
}