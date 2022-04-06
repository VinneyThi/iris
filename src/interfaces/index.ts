interface IKafkaNewOrderProcess{
    'orderID':string,
    'name' : string,
    'cpf':string,
    'amount':number,
    'cardNum':string,
    'address':string,
    'email':string,
    'productCode':string,
    }

interface IMessageContent{
    address:string,
    name:string
}

interface IMessage{
    to:IMessageContent,
    from:IMessageContent,
    subject:string,
    body:string,
}
interface ISenderEmail{
     senderEmail(message: IMessage) : Promise<void>
}
export { IKafkaNewOrderProcess, ISenderEmail, IMessage }
