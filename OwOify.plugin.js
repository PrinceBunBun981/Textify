//META{"name":"OwOify"}*//
var OwOify = (() => {
    var PluginUpdater, WebpackModules, Tooltip, Modals, ReactTools, ContextMenu, Patcher, Settings, PluginUtilities, DiscordAPI;
    return class OwOify {
        constructor() {
            this.makeOwO = function(e) {
                if (e.keyCode == 13) {
                    let faces = ["(・'ω'・)", ";;w;;", "owo", "UwU", ">w<", "^w^"];
                    let getFace = faces[Math.floor(Math.random() * faces.length)]
                    let txt = this.textContent
                        .replace(/(?:r|l)/g, "w")
                        .replace(/(?:R|L)/g, "W")
                        .replace(/n([aeiou])/g, 'ny$1')
                        .replace(/n([AEIOU])/g, 'ny$1')
                        .replace(/N([aeiou])/g, 'Ny$1')
                        .replace(/N([AEIOU])/g, 'Ny$1')
                        .replace(/ove/g, "uv")
                        .replace("!", `! ${faces[Math.floor(Math.random() * faces.length)]} `);
                    this.focus();
                    document.execCommand("selectAll");
                    document.execCommand("insertText", true, txt);
                }
            };
        }

        inject(name, options) {
            let element = document.getElementById(options.id);
            if (element) element.parentElement.removeChild(element);
            element = document.createElement(name);
            for (let attr in options)
                element.setAttribute(attr, options[attr]);
            document.head.appendChild(element);
            return element;
        }

        setup() {
            let self = this;
            let textarea = document.querySelector(".da-channelTextArea").querySelector("div[role='textbox']");
            if (textarea) {
                textarea.addEventListener("keydown", self.makeOwO);
            }
        }

        cleanUp() {
            let textarea = document.querySelector(".da-channelTextArea").querySelector("div[role='textbox']");
            if (textarea) {
                textarea.removeEventListener("keydown", self.makeOwO);
            }
        }

        load() {
            let libraryScript = document.getElementById('ZLibraryScript');
            if (!window.ZLibrary && !libraryScript) {
                libraryScript = document.createElement('script');
                libraryScript.setAttribute('type', 'text/javascript');
                libraryScript.addEventListener("error", function() {
                    if (typeof window.ZLibrary === "undefined") {
                        window.BdApi.alert("Library Missing", `The library plugin needed for ${this.getName()} is missing and could not be loaded.<br /><br /><a href="https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js" target="_blank">Click here to download the library!</a>`);
                    }
                }.bind(this));
                libraryScript.setAttribute('src', 'https://rauenzi.github.io/BDPluginLibrary/release/ZLibrary.js');
                libraryScript.setAttribute('id', 'ZLibraryScript');
                document.head.appendChild(libraryScript);
            }
        }

        async start() {
            console.log("%c[OwOify]", "color: #00ffff", "OwO what's this?");
            let libraryScript = document.getElementById('ZLibraryScript');
            if (typeof window.ZLibrary !== "undefined") {
                this.initialize();
            } else {
                libraryScript.addEventListener("load", () => this.initialize());
            }
        }

        initialize() {
            ({PluginUpdater, WebpackModules, Tooltip, Modals, ReactTools, ContextMenu, Patcher, Settings, PluginUtilities, DiscordAPI} = ZLibrary);
            PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/kaloncpu57/discord-plugins/master/owo-ify.plugin.js");
            this.setup();
        }

        stop() {
            this.cleanUp();
        }

        unload() {
            this.cleanUp();
        }

        onSwitch() {
            this.setup();
        }

        getName() {
            return "OwOify";
        }
        getDescription() {
            return "Makes all your text more OwO";
        }
        getVersion() {
            return "0.1";
        }
        getAuthor() {
            return "PrinceBunBun981";
        }
    }
})();