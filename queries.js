function getInfo(client, name){
  client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
    client.query(`SELECT first_name, last_name, birthdate FROM famous_people WHERE first_name LIKE $1 OR last_name LIKE $1`, [`%${name}%`], (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      const output = result.rows; 
      console.log(`Found ${output.length} person(s) by the name '${name}'`);
      let i = 1;
      output.forEach((person) => {
        console.log(`- ${i}: ${person.first_name} ${person.last_name}, born '${(person.birthdate).toISOString().split('T')[0]}'`);
        i++;
      });
      client.end();
    });
  });
}

exports.getInfo = getInfo;
