function capitalizeFirstLetters(input) {
    const words = input.split(' ');
    let output = [];
    for ( let i = 0; i < words.length; i++){
        const wordMaj = words[i] && words[i][0].toUpperCase()
        const nextletter = words[i].slice(1)
        const all = wordMaj + nextletter
        output.push(all)
    }
    return output.join(' ');
}

module.exports = capitalizeFirstLetters;