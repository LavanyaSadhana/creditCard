// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CardContainer,
  Heading,
  PaymentContainer,
  Card,
  PaymentHeading,
  NumberInput,
  NameInput,
  Numberr,
  CardHolderName,
  Name,
} from './styledComponents'

const CreditCard = () => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const cardholderNameInUppercase = name.toUpperCase()

  const onChangeName = event => {
    setName(event.target.value)
  }

  const onChangeNumber = event => {
    setNumber(event.target.value)
  }

  return (
    <MainContainer>
      <CardContainer>
        <Heading>CREDIT CARD</Heading>
        <Card data-testid="creditCard">
          <Numberr>{number}</Numberr>
          <CardHolderName>CardHolder Name</CardHolderName>
          <Name>{cardholderNameInUppercase}</Name>
        </Card>
      </CardContainer>
      <PaymentContainer>
        <PaymentHeading>Payment Method</PaymentHeading>
        <NumberInput
          type="text"
          placeholder="Card Number"
          value={number}
          onChange={onChangeNumber}
        />
        <NameInput
          type="text"
          placeholder="Cardholder Name"
          value={name}
          onChange={onChangeName}
        />
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard
