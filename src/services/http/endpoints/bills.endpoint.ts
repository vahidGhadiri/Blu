import Base from "../base";

class BillsEndpoint extends Base {
    constructor() {
        super();
    }

    /**
     * This method will receive list of bills by pagination and its limit
     * @async
     */
    public getBills(page: string, limit: string): Promise<any> {
        const query = `gHruOU/data?_page${page}&_limit=${limit}`
        return this.httpService.get(query)
    }
}

const BillService = new BillsEndpoint()

export default BillService