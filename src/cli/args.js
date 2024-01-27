const parseArgs = () => {
    const args = process.argv;
    const argsPairs = [];
    args.forEach((item, index) => {
        if (item.startsWith('--')) {
            argsPairs.push(`${item.substring(2)} is ${args[index + 1]}`)
        }
    })
    const result = argsPairs.join(', ')
    console.log(result)

};

parseArgs();