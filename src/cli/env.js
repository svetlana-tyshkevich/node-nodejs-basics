const parseEnv = () => {

    const RSSArgsKeys = Object.keys(process.env).filter(key => key.startsWith('RSS_'));
    const RSSArgs = RSSArgsKeys.map(key => `${key}=${process.env[key]}`);
    const resultString = RSSArgs.join('; ')
    console.log(resultString)

};

parseEnv();