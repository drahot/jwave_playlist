import { getOnAirList } from './lib/jwave'

const main = async (): Promise<void> => {
  const list = await getOnAirList()
  console.log(list)
}

void main().then(console.log).then(console.error)
