import { GenerateArray } from './generateArray';

interface Filter {
    data: object;
    result: boolean;
    interation: number;
}

export class SearchBinRecursive {
    private data: number[];
    private result: Filter = { data: {}, result: false, interation: 1 };

    constructor() {
        const dataGenerated = new GenerateArray().generateRandonFloat(9999);
        this.data = this.orderByAsc(dataGenerated);
    }

    private orderByAsc(data: number[]): number[] {
        return data.sort((a: number, b: number) => a - b);
    }

    private searchBin(
        float: number,
        array: number[],
        interation: number,
    ): Filter {
        const sizeNewArray = Math.round(array.length / 2);
        if (array.length > 1) {
            if (array[sizeNewArray] > float) {
                const newArray = array.slice(0, sizeNewArray);

                this.searchBin(float, newArray, ++interation);
            } else if (array[sizeNewArray] < float) {
                const newArray = array.slice(sizeNewArray, array.length);

                this.searchBin(float, newArray, ++interation);
            } else if (array[sizeNewArray] === float) {
                this.result = {
                    data: this.data,
                    result: true,
                    interation: interation,
                };
            }
        } else {
            if (array[0] === float) {
                this.result = {
                    data: this.data,
                    result: true,
                    interation: interation,
                };
            } else {
                this.result = {
                    data: this.data,
                    result: false,
                    interation: interation,
                };
            }
        }

        return this.result;
    }

    public search(float: number): Filter {
        return this.searchBin(float, this.data, 1);
    }
}
