import {useContext, useState} from "react";
import ModalContext from "../context/ModalContext";
import {modalTypes} from "../context/types/ModalTypes";

const Login = (props) =>  {
    const { dispatch } = useContext(ModalContext);
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({...state, [name]: value})
    }

    const handleSubmit = (e) =>  {
        e.preventDefault();
        console.log('the value is: ',state);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="modal__heading">
                <h3>Login</h3>
            </div>

            <div className="group">
                <input type="email"
                       className="group__control"
                       name={"email"}
                       placeholder={"Enter email"}
                       onChange = {handleInputChange}
                       value={state.email}
                />
            </div>

            <div className="group">
                <input type="password"
                       className="group__control"
                       name={"password"}
                       placeholder={"Enter password"}
                       onChange = {handleInputChange}
                       value= {state.password}
                />
            </div>

            <div className="group modal__row">
                <input type="submit"
                       className="btn-dark"
                       name={""}
                      value={"Login"}/>
                <span onClick={() => {
                    dispatch({type: modalTypes.open, payload: props.currentModal})
                }}>Create new account ?</span>
            </div>
        </form>
        )
}

export default Login;