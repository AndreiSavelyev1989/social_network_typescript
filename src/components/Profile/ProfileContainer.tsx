import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {StoreType} from "../../redux-state/redux-store";
import * as axios from "axios";
import {ProfileType, setUserProfile} from "../../redux-state/profile-reducer";
import {withRouter, RouteComponentProps} from "react-router-dom"

// type ProfileContainerPropsType = {
//     profile: ProfileType | null
//     setUserProfile: (profile: ProfileType) => void
// }
type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}

type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType


class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            userId = "6251"
        }

        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response: { data: ProfileType; }) => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: StoreType):MapStatePropsType => ({
    profile: state.profilePage.profile
})

// const UrlDataWithRouterContainer = withRouter<any, any>(ProfileContainer)
export default withRouter(connect(mapStateToProps, {setUserProfile})(ProfileContainer))