import { SearchBinRecursive } from './searchBinRecursive';
import { SearchChar } from './searchChar';

const searchChar = new SearchChar();

const resultChar = searchChar.search('C');

console.log(
    `Dados gerados para filtro: ${resultChar.data} e o resultado foi: ${
        resultChar.result == -1 ? 'não encontrado' : resultChar.result
    }`,
);

const searchBin = new SearchBinRecursive();

const resultBin = searchBin.search(1.9);

console.log(resultBin);
