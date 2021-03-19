import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    status: string
    changeUserStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode() {
        this.setState({
            editMode: false
        })
        this.props.changeUserStatus(this.state.status)
    }

    onChangeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>Status: 
                {this.state.editMode
                    ? <input type="text"
                             autoFocus={true}
                             onChange={this.onChangeStatusHandler}
                             onBlur={this.deactivateEditMode.bind(this)}
                             value={this.state.status}/>
                    : <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                }
            </div>
        )
    }
}