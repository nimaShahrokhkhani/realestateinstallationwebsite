import React, {Component} from 'react'
import './App.css';
import Services from "./utils/Services";
import ScreenLoading from "./components/screenLoading/ScreenLoading";
import LoginModal from "./PanelManagement/components/Modal/LoginModal";

class App extends Component {

    constructor(props) {
        super(props);
        this.isUpdate = false;
        this.state = {
            realStateName: '',
            deviceId: '',
            activationCode: '',
            isLoading: false,
            isDone: true,
            modalShow: true
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSuccessLogin = () => {
        this.setState({
            modalShow: false
        })
    };

    onErrorLogin = () => {

    };

    getActiveCode = () => {
        Services.getActivationCode({realStateName: this.state.realStateName, deviceId: this.state.deviceId}).then((res) => {
            this.setState({
                activationCode: res.data
            })
        }).catch((error) => {

        })
    };

    render() {
        let {isLoading, isDone, deviceId, activationCode, realStateName} = this.state;
        return (
            <>
                <LoginModal
                    show={this.state.modalShow}
                    onHide={() => this.setState({
                        modalShow: false
                    })}
                    onSuccessLogin={this.onSuccessLogin}
                    onErrorLogin={this.onErrorLogin}/>
                {isDone && !isLoading ?
                    <div style={{width: "100%"}}>

                        <div className="wrapper">
                            <div className="inner">
                                <div action="">
                                    <h3>دریافت کد فعالسازی</h3>
                                    <label className="form-group">
                                        <input type="text" className="form-control" style={{color: '#fff'}} id="realStateName" name="realStateName" value={realStateName} onChange={this.onChange} required/>
                                        <span>نام آژانس</span>
                                        <span className="border"></span>
                                    </label>
                                    <label className="form-group">
                                        <input type="text" className="form-control" style={{color: '#fff'}} id="deviceId" name="deviceId" value={deviceId} onChange={this.onChange} required/>
                                        <span>کد دستگاه</span>
                                        <span className="border"></span>
                                    </label>
                                    <label className="form-group">
                                        <input type="text" className="form-control" id="activationCode" name="activationCode" value={activationCode} onChange={this.onChange} required/>
                                        <span htmlFor="">کد فعالسازی</span>
                                        <span className="border"></span>
                                    </label>
                                    <button onClick={this.getActiveCode}>دریافت کد
                                        <i className="zmdi zmdi-arrow-right"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div> :
                    <ScreenLoading
                        loading={isLoading}
                        done={isDone}/>
                }
            </>
        )
    }
}

export default App
