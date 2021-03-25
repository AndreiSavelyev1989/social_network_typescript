import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {changeUserStatus, ProfileType, requestUserProfile, requestUserStatus} from "../../redux-state/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

type MapDispatchPropsType = {
    requestUserProfile: (userId: number) => void
    requestUserStatus: (userId: number) => void
    changeUserStatus: (status: string) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = Number(this.props.match.params.userId)
        if(!userId){
            userId = 6251
        }
        this.props.requestUserProfile(userId)
        this.props.requestUserStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status} changeUserStatus={this.props.changeUserStatus}/>
        )
    }
}

const mapStateToProps = (state: StoreType):MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {requestUserProfile, requestUserStatus, changeUserStatus}),
    withRouter,
)(ProfileContainer)