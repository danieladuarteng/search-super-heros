import { searchHeros } from "./search";
import { getHeros } from "../service";

export function actionGetHeros(search) {
  const result = getHeros(search);
  const response = searchHeros(result);

  return response;
}
