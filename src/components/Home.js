import React from 'react'
import Navbar from './Navbar'

<<<<<<< HEAD
const Home = () => {
    return (
        <div>
            <Navbar/>
            <div className="container">
                
            </div>
        </div>
    )
}

export default Home
=======
import {connect} from 'react-redux'
import Add from './Homepage/Add'

const Home = (props) => {
    return (
        <div>
            <Navbar/>
            <Add/>
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

>>>>>>> upstream/master
