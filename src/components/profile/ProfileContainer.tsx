import React from "react";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {
    changeUserPhoto, changeUserProfile,
    changeUserStatus,
    ProfileType,
    requestUserProfile,
    requestUserStatus, setUserProfileEditMode
} from "../../redux-state/profile-reducer";
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
    id: number | null
    isAuth: boolean
    error: string
    profileEditMode: boolean
}

type MapDispatchPropsType = {
    requestUserProfile: (userId: number) => void
    requestUserStatus: (userId: number) => void
    changeUserStatus: (status: string) => void
    changeUserPhoto: (photos: File) => void
    changeUserProfile: (profile: ProfileType) => void
    setUserProfileEditMode: (editMode: boolean) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.PureComponent<PropsType> {

    refreshProfile() {
        let userId: number | null = Number(this.props.match.params.userId)
        if (!userId) {
            userId = this.props.id
            if (!userId) {
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

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {

        return (
            <Profile profile={this.props.profile}
                     isOwner={!this.props.match.params.userId || Number(this.props.match.params.userId) === this.props.id}
                     paramsUserId={Number(this.props.match.params.userId)}
                     status={this.props.status}
                     error={this.props.error}
                     profileEditMode={this.props.profileEditMode}
                     setUserProfileEditMode={this.props.setUserProfileEditMode}
                     changeUserPhoto={this.props.changeUserPhoto}
                     changeUserProfile={this.props.changeUserProfile}
                     changeUserStatus={this.props.changeUserStatus}/>
        )
    }
}

const mapStateToProps = (state: StoreType): MapStatePropsType => {
    const {profile, status, profileEditMode} = state.profilePage;
    const {id, isAuth, error} = state.auth;
    return {profile, status, id, isAuth, error, profileEditMode};
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {requestUserProfile, requestUserStatus,
        changeUserStatus, changeUserPhoto, changeUserProfile, setUserProfileEditMode}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer)