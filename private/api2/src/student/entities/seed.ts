import { Student } from "./student.entity";
var Chance = require('chance');

var chance = new Chance();

var url = 'http://localhost:3001/student';

async function main() {

  let res = await fetch(url)
  let data = await res.json()
  
  if (data.length != 0) {
    for (let i = 0; i < data.length; i++) {
      await fetch(url + '/' + data[i].id, { method: 'DELETE' })
    }
  }
  for (let i = 0; i < 10; i++) {
    const student = new Student();
    student.name = chance.name()
    student.password = "1111"
    student.email = student.name+"@example.com"
    student.major_id = "CS50"
    await fetch(url, {
      body: JSON.stringify(student),
      headers: {
        'dataType': 'json',
        'content-type': 'application/json'
      },
      method: 'POST',
    })
  }
}
main()


