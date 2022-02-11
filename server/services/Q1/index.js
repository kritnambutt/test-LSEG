import Services from '../../services/index.js';

export const thisIsSyncFunction = async () => {
    let result = await Services.getData();
    return result.data;
}

export const resultQ1 = async () => {
    const number1 = await thisIsSyncFunction()
    const calculation = number1 * 10;

    return calculation;
}