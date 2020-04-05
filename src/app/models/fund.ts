export interface Fund {
    id: number;
    name: string;
    fundType: string;
    morningStar: number;
    risk: string;
    nav: string;
    isin: string;
    fundStartDate: string;
    fundSize: string;
    fundManager: string;
    minPurchaseAmt: string;
    oneYear: string;
    threeYears: string;
    fiveYears: string;
    topFive: string;
    topFiveHoldings: Array<string>;
    pros: Array<string>;
    cons: Array<string>;
}