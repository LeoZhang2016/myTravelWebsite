import {useContext, useState } from "react";
import ModalContext from "../context/ModalContext";
import {modalTypes} from "../context/types/ModalTypes";

const Register = (props) =>  {
    const { dispatch } = useContext(ModalContext);
    const [state, setState] = useState({
        name:'',
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        // console.log("e.target is : ",e)
        // console.log('1111111111')
        const { name, value } = e.target;
        // console.log('name and value is : ', [name], value)
        setState({...state, [name]: value});
        // console.log("state is : ",state);
        // console.log(" input element is  : ", [name]);

    }

    const registerForm = (e) => {
        e.preventDefault();
        console.log('state is : ',state)
    }
    return (
        <form onSubmit={registerForm}>
            <div className="modal__heading">
                <h3>Create new account</h3>
            </div>
            <div className="group">
                <input type="text"
                       className="group__control"

                       name={"name"}
                       placeholder={"Enter name"}
                       // onChange = {(e) => {
                       //   setState({...state, name: e.target.value})}
                       // }
                       onChange = {handleInputChange}
                       value={state.name}
                />
            </div>

            <div className="group">
                <input type="email"
                       className="group__control"
                       name={"email"}
                       id={"email"}
                       placeholder={"Enter email"}
                       // onChange = {(e) => {
                       //     setState({...state, email: e.target.value})}
                       // }
                       onChange = {handleInputChange}
                       value={state.email}
                />
            </div>

            <div className="group">
                <input type="password"
                       className="group__control"
                       name={"password"}
                       placeholder={"Create password"}
                       // onChange = {(e) => {
                       //     setState({...state, password: e.target.value})}
                       // }
                       onChange = {handleInputChange}
                       value={state.password}
                />
            </div>

            <div className="group modal__row">
                <input type="submit"
                       className="btn-dark"
                       name={""}
                      value={"Register"}/>
                <span onClick={() => {
                    dispatch({type: modalTypes.open, payload: props.currentModal})
                } }>Already have an account ?</span>
            </div>
        </form>
    )
}

export default Register;