import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {changeUserStatus, ProfileType, requestUserProfile, requestUserStatus} from "../../redux-state/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {compose} from "redux";
import {Profile} from "./Profile";
import {withAuthRedirect} from "../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    autorizedUserId: number | null
    isAuth: boolean
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
            let userId: number | null = Number(this.props.match.params.userId)
            if (!userId) {
                userId = this.props.autorizedUserId
                if(!userId){
                    this.props.history.push("/login")
                }
            }
        if (typeof userId === "number") {
            this.props.requestUserProfile(userId)
        }
        if (typeof userId === "number") {
            this.props.requestUserStatus(userId)
        }
    }

    render() {
        return (
            <Profile profile={this.props.profile} status={this.props.status}
                     changeUserStatus={this.props.changeUserStatus}/>
        )
    }
}

const mapStateToProps = (state: StoreType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    autorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {requestUserProfile, requestUserStatus, changeUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)