import { getOnAirList } from './lib/jwave'

const main = async () => {
  const list = await getOnAirList()
  console.log(list)
}

main().then(console.log).then(console.error)
