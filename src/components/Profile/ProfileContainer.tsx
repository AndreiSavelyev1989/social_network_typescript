import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import {ProfileType, requestUserProfile} from "../../redux-state/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom"


type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
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
            <Profile profile={this.props.profile} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: StoreType):MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default withRouter(connect(mapStateToProps, {requestUserProfile})(ProfileContainer))