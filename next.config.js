function getBasePath() {
    let basePath = '';

    if (process.env.BASE_PATH) {
        if (process.env.BASE_PATH.startsWith("/")) {
            basePath = process.env.BASE_PATH;
        } else {
            basePath = "/" + process.env.BASE_PATH;
        }
    }

    console.log("getBasePath() : BasePath = " + basePath);

    return basePath
}

module.exports = {
    experimental: {
        outputStandalone: true,
    },
    basePath: getBasePath(),
    assetPrefix: getBasePath(),
};
