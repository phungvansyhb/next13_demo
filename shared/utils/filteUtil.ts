import fs from 'fs';
import data from '../data/quote.json'

export function WriteFile(content: { content: string, author: string }) {
    const currentData = data
    currentData.push(content as any)
    fs.writeFile('./shared/data/quote.json', JSON.stringify(currentData), (err: any) => {
        if (err) {
            console.log(err)
            throw new Error('File not found!')
        }
    });
}
