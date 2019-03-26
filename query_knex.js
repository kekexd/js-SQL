function getInfo(client, name){
  client('famous_people').where('first_name', 'like', `%${name}%`).orWhere('last_name', 'like', `%${name}%`).select('first_name', 'last_name', 'birthdate').then((rows) => {
    console.log(`Found ${rows.length} person(s) by the name '${name}'`);
    let i = 1;
    for (row of rows) {
        console.log(`- ${i}: ${row['first_name']} ${row['last_name']} ${row['birthdate'].toISOString().split('T')[0]}`);
        i++;
      }
  }).catch((err) => { console.log( err); throw err })
  .finally(() => {
    client.destroy();
  });
  
}

exports.getInfo = getInfo;

