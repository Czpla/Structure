export class GenerateArray {
    private readonly chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    constructor() {}

    public generateRandonChars(size: number): string[] {
        const arrayGenerated: string[] = [];

        for (let i = 0; i <= size; i++) {
            arrayGenerated.push(
                this.chars.charAt(
                    Math.floor(Math.random() * this.chars.length),
                ),
            );
        }

        return arrayGenerated;
    }

    public generateRandonFloat(size: number): number[] {
        const arrayGenerated: number[] = [];

        for (let i = 0; i <= size; i++) {
            arrayGenerated.push(parseFloat((Math.random() * 100).toFixed(2)));
        }

        return arrayGenerated;
    }
}
