import { GenerateArray } from './generateArray';

interface Filter {
    data: object;
    result: number;
}

export class SearchChar {
    private data: string[];

    constructor() {
        this.data = new GenerateArray().generateRandonChars(10);
    }

    public search(char: string): Filter {
        const result = this.data.indexOf(char);

        return {
            data: this.data,
            result,
        };
    }
}
