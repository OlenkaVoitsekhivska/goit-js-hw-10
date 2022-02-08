function dataFilter(data) {
    let {name, languages, capital,flags,population} = data[0];
    let {official} = name;
    let {svg} = flags;
    let [capitCity] = capital;
    let lingos = [];
    for (const key in languages) {
       lingos.push(` ${languages[key]}`);
      }
    return ({official, lingos, capitCity,svg,population});
}

export {dataFilter}