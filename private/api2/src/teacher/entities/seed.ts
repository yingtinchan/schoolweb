import { Teacher } from "./teacher.entity";
var Chance = require('chance');

var chance = new Chance();

var url = 'http://localhost:3001/teacher';

async function main() {

  let res = await fetch(url)
  let data = await res.json()
  
  if (data.length != 0) {
    for (let i = 0; i < data.length; i++) {
      await fetch(url + '/' + data[i].id, { method: 'DELETE' })
    }
  }
  for (let i = 0; i < 10; i++) {
    const teacher = new Teacher();
    teacher.name = chance.name()
    teacher.password = "1111"
    teacher.email = teacher.name+"@example.com"
    await fetch(url, {
      body: JSON.stringify(teacher),
      headers: {
        'dataType': 'json',
        'content-type': 'application/json'
      },
      method: 'POST',
    })
  }
}
main()


