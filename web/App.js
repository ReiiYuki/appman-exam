import Logo from './logo.svg'
import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
    padding: 20px;
    background: white;
    box-shadow: 2px 2px 2px #888888;
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

class App extends React.Component {
    render() {
        
        return (
            <Card>
                <LogoContainer><img src={Logo} /></LogoContainer>
                <FormContainer>
                    <Field>
                        <Label>E-mail address</Label>
                        <TextField placeholder='example@appman.co.th'/>
                    </Field>
                    <Field>
                        <Label>Password</Label>
                        <TextField placeholder='your password...'/>
                    </Field>
                </FormContainer>
                <SubmitButtonContainer>
                    <SubmitButton>SIGN IN</SubmitButton>
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
