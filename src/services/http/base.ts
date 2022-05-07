// Types
import type {AxiosInstance} from "axios";
// Utils
import axios from "axios";

/**
 * The Http Service which created by axios instance
 */
abstract class Base {
    protected httpService: AxiosInstance


    /**
     * Create new instance of custom config
     * @protected
     */
    protected constructor() {
        this.httpService = axios.create({
            timeout: Number(process.env.REACT_APP_HTTP_TIMEOUT),
            baseURL: `${process.env.REACT_APP_BASE_URL}`,
            headers: {
                "Content_Type": "application/json"
            }
        })

        this.ResponseInterceptor()
    }

    /**
     *  Can Add Interceptors here if needed,
     * This Method will be called after receiving each response
     */
    private ResponseInterceptor() {
        axios.interceptors.response.use(
            () => console.log("OK!"),
            () => console.log("NOT OK!")
        )
    }
}

export default Base