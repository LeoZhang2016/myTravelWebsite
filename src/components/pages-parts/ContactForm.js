import {useState} from "react";

const  ContactForm = () => {
     const [state, setState] = useState({
         name: '',
         email: '',
         message: ''
     })
    const submitContact = (e) => {
         e.preventDefault()
         console.log("state  is : ",state);
    }
    const handleInput = (e) =>  {
         console.log("e is : ",e);
         const { name, value } = e.target;
         setState({...state, [name]: value})
    }
    return (
        <form onSubmit={submitContact}>
            <div className="group">
                <h3 className={"page__contact__heading"}>Contact Form</h3>
            </div>
            <div className="group">
                <input
                    type={'text'}
                    name={'name'}
                    className={'group__control'}
                    placeholder={'Your name eg.smith'}
                    value={state.name}
                    // onChange={(e)=> setState({...state, name: e.target.value})}
                    onChange={handleInput}
                />
            </div>
            <div className="group">
                <input
                    type={'email'}
                    name={'email'}
                    className={'group__control'}
                    placeholder={'Your name eg.smith@gmail.com'}
                    value={state.email}
                    // onChange={(e)=> setState({...state, email: e.target.value})}
                    onChange={(e)=> handleInput(e)}
                />

            </div>
            <div className="group">
                <textarea
                    cols={12}
                    rows={8}
                    name={'message'}
                    className={'group__textarea'}
                    placeholder={'write your message eg. I have problem'}
                    defaultValue={state.message}
                    // onChange={(e) => setState({...state, message: e.target.value})}
                    onChange={(e) => handleInput(e)}
                />
            </div>
            <div className="group">
                <input
                    type={'submit'}
                    value="send email &rarr;"
                    className={'btn-dark'}
                    placeholder={'Your name eg.smith'}
                />
            </div>
        </form>
    )
}
export default ContactForm;