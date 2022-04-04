import SenderEmailSES from './SenderEmailSES'
import 'dotenv/config'

const ClientEmail = new SenderEmailSES(process.env.regionAWS as string)

export { ClientEmail }
