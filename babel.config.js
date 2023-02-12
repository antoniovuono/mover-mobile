module.exports = function (api) {
    api.cache(true);
    return {
        presets: ["babel-preset-expo"],
        plugins: [
            [
                "module-resolver",
                {
                    root: ["./src"],
                    extensions: [
                        ".js",
                        ".jsx",
                        ".ts",
                        ".tsx",
                        ".android.js",
                        ".android.tsx",
                        ".ios.js",
                        ".ios.tsx",
                    ],
                    alias: {
                        "*": ".",
                        "@root": "/src",
                        "@src": "./src",
                        "@modules": "./src/modules",
                        "@components": "./src/components",
                        "@assets": ".src/assets",
                        "@hooks": "./src/hooks",
                        "@theme": "./src/global/styles",
                        "@interfaces": "./src/interfaces",
                    },
                },
            ],
        ],
    };
};
