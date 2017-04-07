module.exports = {
    "postcss": [
        {
            "name": 'postcss-discard-comments',
            options: {
                "removeAll": true
            }
        },
        {
            "name": 'css-mqpacker',
            options: {
                sort: true
            }
        },
        {
            "name": 'postcss-merge-rules',
            options: {}
        },
        {
            "name": 'postcss-merge-longhand',
            options: {}
        },
        {
            "name": 'postcss-flexibility',
            options: {}
        },
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
        }
    ],
    "svg": {
        "active": true,
        "workflow": "sprite",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "concat"
    },
    "js": {
        "workflow": "concat",
        "bundler": "webpack",
        "lint": true,
        "useBabel": true,
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
        "useNotify": true,
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