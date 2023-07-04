// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 1000px;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  width: 500px;
  padding: 20px;
  background-color: #3b4b69;
  background-size: cover;
  padding: 20px;
`
export const PaymentContainer = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  box-shadow: 3px 3px 3px 3px #475569;
  align-self: center;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.h1`
  color: #ffffff;
  text-decoration: underline #ffd773;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
  font-family: 'Roboto';
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
  background-size: cover;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 250px;
`
export const PaymentHeading = styled.h1`
  color: #475569;
  font-size: 14px;
  text-align: center;
`
export const Numberr = styled.p`
  color: #fff;
`
export const CardHolderName = styled.p`
  color: #d3d9e0;
  font-size: 12px;
`
export const Name = styled.p`
  color: #fff;
  font-size: 14px;
`

export const NameInput = styled.input`
  border: 1px solid #475569;
  padding: 10px;
  color: #475569;
  margin-top: 20px;
  width: 250px;
`
export const NumberInput = styled.input`
  border: 1px solid #475569;
  padding: 10px;
  color: #475569;
  width: 250px;
  margin-top: 20px;
`
