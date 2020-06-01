import { searchHeros } from "./search";
import { getHeros } from "../service";

export async function actionGetHeros(search) {
  const result = await getHeros(search);
  const response = searchHeros(result);

  return response;
}
