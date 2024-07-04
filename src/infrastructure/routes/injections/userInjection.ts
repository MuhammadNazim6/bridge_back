import { UserUseCase } from "../../../usecase/userUsecase";
import { UserAdapter } from "../../../controller/user";
import Axios from "../../services/axios";

const axios = new Axios();

const userusecase = new UserUseCase(
  axios
)

const userAdapter = new UserAdapter(userusecase);



export { userAdapter };