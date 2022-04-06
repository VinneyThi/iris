import { SenderEmailNodemailer } from '@utils/SenderEmailNodemailer'
import SenderEmailSES from './SenderEmailSES'
import { ISenderEmail } from '@interfaces/index'
import 'dotenv/config'

function FactorClientEmail () : ISenderEmail {
  return process.env?.AWS_ACCESS_KEY_ID !== 'unsed' ? new SenderEmailSES(process.env.regionAWS as string) : new SenderEmailNodemailer()
}

const ClientEmail = FactorClientEmail()

export { ClientEmail }
