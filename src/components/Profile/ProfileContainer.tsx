import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {ProfileType, requestUserProfile} from "../../redux-state/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    requestUserProfile: (userId: number) => void
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
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

const mapStateToProps = (state: StoreType):MapStatePropsType => ({
    profile: state.profilePage.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {requestUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)