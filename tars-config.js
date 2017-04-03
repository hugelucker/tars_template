module.exports = {
    "postcss": [
        {
            "name": 'postcss-sorting',
            "options": {
                "order": [
                    "custom-properties",
                    "dollar-variables",
                    "declarations",
                    "at-rules",
                    {
                        "type": "at-rule",
                        "name": "include"
                    },
                    {
                        "type": "at-rule",
                        "name": "include",
                        "parameter": "icon"
                    },
                    "rules"
                ],
                "properties-order": [
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "margin",
                            "padding"
                        ]
                    },
                    {
                        "emptyLineBefore": true,
                        "properties": [
                            "border",
                            "background"
                        ]
                    }
                ],
                "unspecified-properties-position": "bottom"
            }
        },
        {
            "name": 'postcss-discard-comments',
            options: {
                "removeAll": true
            }
        },
        {
            "name": 'postcss-discard-duplicates',
            options: {
                
            }
        },
        {
            "name": 'css-mqpacker',
            options: {
                sort: true
            }
        },
        {
            "name": 'postcss-discard-empty',
            options: {
                
            }
        },
        {
            "name": 'postcss-merge-rules',
            options: {}
        },
        {
            "name": 'postcss-flexibility',
            options: {}
        },
        {
            "name": 'postcss-merge-longhand',
            options: {}
        },
        {
            "name": 'postcss-uncss',
            options: {
                "html": [`./markup/pages/**/*.html`,`./markup/components/**/*.html`],
                "ignored": [`./markup/pages/**/_*.html`,`/[A-z<>();*%0-9-_,.!&#$+"/\\]+([^svg4everybody();])/g`]
            }
        }
    ],
    "svg": {
        "active": true,
        "workflow": "sprite",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": false,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "concat"
    },
    "js": {
        "workflow": "concat",
        "bundler": "webpack",
        "lint": false,
        "useBabel": false,
        "removeConsoleLog": true,
        "webpack": {
            "useHMR": false,
            "providePlugin": {}
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "handlebars",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    },
    "staticPrefix": "static/"
};