function addPerson(client, info){
  client('famous_people').insert({first_name: info[0], last_name: info[1], birthdate: info[2]}).then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })
  .finally(() => {
    client.destroy();
  });
}

exports.addPerson = addPerson;