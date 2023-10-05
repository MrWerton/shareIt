import axios from "axios";
import { ApiService } from "../../modules/services/api";
import { ServiceLocator } from "../service-locator";



const service = ServiceLocator.getInstance();
const client = axios.create({baseURL: 'http://localhost:3000'})
service.register<ApiService>("api-service", new ApiService(client));


