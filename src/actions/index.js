import { searchHeros } from './search'
import { getHeros } from '../service'

export async function actionGetHeros (search) {
  let response
  const result = await getHeros(search)
  console.log('result', result)

  if (result !== undefined) {
    response = searchHeros(result)
  }

  return response
}
