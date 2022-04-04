import { EventEmitter } from 'events'
import { IKafkaNewOrderProcess, IMessage, ISenderEmail } from '@interfaces/index'
import 'dotenv/config'

class Iris extends EventEmitter {
  createMessage (data : IKafkaNewOrderProcess) : IMessage {
    console.log(data)
    const result = {
      to: { address: data.email, name: data.name },
      from: { address: process.env.Email_verified_address, name: process.env.Email_verifed_name },
      subject: 'New Order in Processing',
      body: `Hello ${data.name} your new order : ${data.orderID} is processing state.`

    } as IMessage
    console.log(result)
    return result
  }

  constructor (private clientSenderEmail : ISenderEmail) {
    super()

    this.on('newOrder_Process', async (data:IKafkaNewOrderProcess) => {
      try {
        const message = this.createMessage(data)
        await this.clientSenderEmail.senderEmail(message)
      } catch (error) {
        console.log(error)
      }
    })
  }
}

export { Iris }
