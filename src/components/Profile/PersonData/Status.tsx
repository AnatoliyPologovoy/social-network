import React from "react";

type StatusPropsType = {
    status: string
}

export class Status extends React.Component<StatusPropsType, any> {
    state = {
        isEditMode: false
    }

    render() {
        const viewStatus = <p>{this.props.status}</p>
        const changeStatus = <input type={'text'} value={this.props.status}/>
        const render = this.state.isEditMode ? changeStatus : viewStatus
        return (
            {render}
        )
    }
}