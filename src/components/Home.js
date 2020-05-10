import React from 'react'
import Navbar from './Navbar'

import {connect} from 'react-redux'


const Home = (props) => {
    return (
        <div>
            <Navbar/>
        </div>
    )
}

// export default class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <Navbar/>
//             </div>
//         )
//     }
// }

const mapStateToProps = (state) => {
    return {
        viaLogin: state.login.viaLogin
    }
}

export default connect(mapStateToProps)(Home);

