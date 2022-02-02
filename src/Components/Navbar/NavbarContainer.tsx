import {Navbar} from "./Navbar";
import {connect} from "react-redux";
import {appStateType} from "../../Redux/store";
import {Dispatch} from "redux";
import {navbarPagesType} from "../../Redux/navbarReducer";

type mapStateToPropsType = {
    navbarPage: navbarPagesType
}
type mapDispatchToProps = {

}

const mapStateToProps = (state:appStateType):mapStateToPropsType => {
    return {
        navbarPage:state.navbarPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return {

    }
}

export const NavbarContainer = connect(mapStateToProps,mapDispatchToProps)(Navbar)