import Logo from './logo.svg'
import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    @media (min-width: 720px) {    
        width: 25%;
    }
    padding: 20px;
    background: white;
    box-shadow: 2px 2px 2px lightgray;
    margin: auto;
`

const LogoContainer = styled.div`
    margin: auto;
    width: 180px;
`

const TextField = styled.input`
    margin: auto;
    padding: 10px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 1rem;
    box-sizing: border-box;
    &:focus {
        border: 2px solid #242526;
        outline: none;
    }
`

const Label = styled.p`
    margin: 2px 0px;
    color: #292929;
`

const Field = styled.div`
    margin: 15px 0px;
`

const FormContainer = styled.div`
    margin: 8px 10px;
`

const SubmitButton = styled.button`
    border-radius: 5px;
    border: none;
    background: deepskyblue;
    padding: 10px 40px;
    font-weight: bold;
    color: white;
    margin: 10px auto;
    &:hover {
        background: lightskyblue;
    }
    &:focus {
        outline: none;
    }
`

const SubmitButtonContainer = styled.div`
    text-align: center;
`

const OptionPanel = styled.div`
    color: deepskyblue;
    font-weight: bold;
    a:hover {
        text-decoration: underline;
    }
`

const RightLink = styled.a`
    float: right;
`

const InvalidText = styled.p`
    font-weight: bold;
    color: red;
`

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state =  {
            email: '',
            password: '',
            state: 0
        }
    }

    onInput(e, type) {
        const inputData = {}
        inputData[type] = e.target.value
        this.setState(inputData)
    }

    signIn() {
        this.setState({ state: 1 })
        const self = this
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
           }).then((res) => {
               const state = res.status >= 400 && res.status < 410 ? 2 : 0
               self.setState({ state })
               if (res.status === 200) alert('Login Successed')
           })
    }

    render() {
        const { state } = this.state
        return (
            <Card>
                <LogoContainer><img className={ state===1 ? 'logo-spin' : ''} src={Logo} /></LogoContainer>
                <FormContainer>
                    <Field>
                        <Label>E-mail address</Label>
                        <TextField placeholder='example@appman.co.th' onChange={(e) => this.onInput(e, 'email')} type='text' />
                    </Field>
                    <Field>
                        <Label>Password</Label>
                        <TextField placeholder='your password...' onChange={(e) => this.onInput(e, 'password')} type='password' />
                    </Field>
                    { state === 2 && <InvalidText>E-mail or password is incorrect</InvalidText> }
                </FormContainer>
                <SubmitButtonContainer>
                    <SubmitButton onClick={()=>this.signIn()}>SIGN IN</SubmitButton>
                </SubmitButtonContainer>
                <OptionPanel>
                    <a>Forgot password ?</a>
                    <RightLink>Create a new account</RightLink>
                </OptionPanel>
            </Card>
        )
    }
}

export default App;
