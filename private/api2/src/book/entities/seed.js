var Chance = require('chance');

var chance = new Chance();

const categorys = [
    'Fiction',
    'Biography',
    'Memoir',
    'Autobiography',
    'Action fiction',
    'Anthology',
    'Mystery',
    'Chapter book']

async function main() {
    for (let i = 0; i < 10; i++) {
 
    let name = chance.company()
    let category = categorys[Math.floor(Math.random() * categorys.length)];
    let author = chance.name()
    let description = chance.sentence()
    console.log({
      'name': name,
      'category': category,
      'author': author,
      'description': description,
    })
    }
}
main()
