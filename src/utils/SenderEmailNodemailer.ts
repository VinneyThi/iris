import { createTransport, Transporter } from 'nodemailer'
import { ISenderEmail, IMessage } from '@interfaces/index'
import 'dotenv/config'

export class SenderEmailNodemailer implements ISenderEmail {
  private transporter : Transporter
  constructor () {
    this.transporter = createTransport({
      host: process.env?.HOST_SMTP,
      port: parseInt(process.env?.PORT_SMTP),
      secure: Boolean(process.env?.SECURE_SMTP), // true for 465, false for other ports
      auth: {
        user: process.env?.USER_SMTP, // generated ethereal user
        pass: process.env?.PASSWORD_SMTP// generated ethereal password
      }
    })
  }

  async senderEmail (message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      from: `${message.from.name} <${message.from.address}>`,
      to: `${message.to.name},${message.to.address}`,
      subject: message.subject,
      text: message.body
    })
  }
}
