import * as dota from './src/mod.ts';

const result = Object.values(dota.data.Heroes).map(v => `'${v.name}'`).join(' | ')

console.log(result);