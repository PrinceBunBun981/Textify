/**
 * @name Textify
 * @authorId 264163473179672576
 * @authorLink https://github.com/PrinceBunBun981
 * @website https://princebunbun981.com/projects/textify
 * @source https://github.com/PrinceBunBun981/Textify/blob/main/Textify.plugin.js
 */
 module.exports = (() => {
    const version = "1.3.1";
    const config = {
        info: {
            name: "Textify",
            authors: [{
                name: "PrinceBunBun981",
                discord_id: "644298972420374528",
                github_username: "PrinceBunBun981",
                twitter_username: "PrinceBunBun981"
            }],
            version: version,
            description: "Use various commands to edit the text you send.",
            github: "https://github.com/PrinceBunBun981/Textify/blob/main/Textifyplugin.js",
            github_raw: "https://raw.githubusercontent.com/PrinceBunBun981/Textify/main/Textify.plugin.js"
        },
        changelog: [{
            title: `Bug Fixes`,
            type: "fixed",
            items: [
                "Fixed Experiments not showing up on restart even though it's enabled.",
            ]
        }, ],
        defaultConfig: [{
            type: "switch",
            id: "enableExperiments",
            name: "Enable Experiments",
            note: "Enable Discord Developer Experiments (Requires you to Switch Settings tabs to show up)",
            value: false
        }, ]
    };
    const settings = BdApi.loadData(config.info.name, `settings`);

    function enableExperiments() {
        try {
            Object.defineProperty(BdApi.findModuleByProps(["isDeveloper"]), "isDeveloper", {
                get: _ => 1,
                set: _ => _,
                configurable: true
            });
        } catch (e) {
            console.log(e)
        } // Stops it from throwing an error and failing to stop the plugin.
    }

    function disableExperiments() {
        BdApi.findModuleByProps(["isDeveloper"]) && Object.defineProperty(BdApi.findModuleByProps(["isDeveloper"]), "isDeveloper", {
            get: _ => 0,
            set: _ => {
                throw new Error("Username is not in the sudoers file. This incident will be reported");
            },
            configurable: true
        });
    }

    return (([Plugin, Api]) => {

        const plugin = (Plugin, Api) => {
            const {
                DiscordModules,
                Patcher
            } = Api;
            return class Textify extends Plugin {
                constructor() {
                    super();
                }

                onStart() {
                    if (settings.enableExperiments) {
                        enableExperiments();
                    } else {
                        disableExperiments();
                    }

                    Patcher.after(DiscordModules.MessageActions, "sendMessage", (_, [, message]) => {
                        const content = message.content.toLowerCase();

                        function getRandomItem(items) {
                            return items[Math.floor(Math.random() * items.length)];
                        }
                        // Replace random text components
                        switch (true) {
                            case content.includes("%owosong%"):
                                const owosong = `
                                Okay, I know this is a really bad idea but
                                I'm already here so
                                Here we fuckin’ go
                                Rawr

                                ​x3 nuzzles, pounces on you, uwu you so warm (Ooh)
                                Couldn't help but notice your bulge from across the floor
                                Nuzzles your necky wecky-tilde murr-tilde, hehe
                                Unzips your baggy ass pants, oof baby you so musky
                                Take me home, pet me, and make me yours and don't forget to stuff me
                                See me wag my widdle baby tail all for your bulgy-wulgy
                                Kissies and lickies your neck (Mmh)
                                I hope daddy likies
                                Nuzzles and wuzzles your chest (Yuh)
                                I be (Yeah) gettin’ thirsty

                                Hey, I got a little itch, you think you can help me?
                                Only seven inches long, uwu, please adopt me
                                Paws on your bulge as I lick my lips (UwU, punish me please)
                                'Bout to hit 'em with this furry shit (He don't see it comin')
                                `
                                message.content = message.content.replace("%owosong%", owosong.replace(/^ +/gm, ''));
                                break;
                            case content.includes("%animethighs%"):
                                const animethighs = `
                                Anime thighs when she open up so wide, I got a twinkle in my eye
                                (Huh?) pussy is so tight, I just really wanna pipe
                                Oh my God, she got them big ass titties, she’s only “Wow” (Ayy, ayy)
                                Anime thighs when she open up so wide, I got a twinkle in my eye
                                (Huh?) pussy is so tight, I just really wanna pipe
                                Oh my God, she got them big ass titties, she’s only “Wow” (Ayy, ayy)
                                `
                                message.content = message.content.replace("%animethighs%", animethighs.replace(/^ +/gm, ''));
                                break;
                        }

                        // Commands
                        switch (content.split("!")[0]) {
                            case "curse":
                                const curse = (/^curse\! /g).exec(content);

                                const a = ["a", "ä", "á", "à", "â", "ã", "å", "ą"]
                                const b = ["b"]
                                const c = ["c", "ç", "ć", "č"]
                                const d = ["d"]
                                const e = ["e", "è", "é", "ê", "ë", "ē", "ė", "ę"]
                                const f = ["f"]
                                const h = ["h"]
                                const i = ["i", "î", "î", "ï", "í", "ī", "į", "ì"]
                                const j = ["j"]
                                const k = ["k"]
                                const l = ["l", "ł"]
                                const m = ["m"]
                                const n = ["n", "ñ", "ń"]
                                const o = ["o"]
                                const p = ["p"]
                                const q = ["q"]
                                const r = ["r"]
                                const s = ["s", "ś", "š"]
                                const t = ["t"]
                                const u = ["u", "û", "ü", "ù", "ú", "ū"]
                                const v = ["v"]
                                const w = ["w"]
                                const x = ["x"]
                                const y = ["y", "ÿ"]
                                const z = ["z", "ž", "ź", "ż"]

                                message.content = message.content.substr(curse[0].length, message.content.length)
                                    .replace(/[a]/g, getRandomItem(a))
                                    .replace(/[b]/g, getRandomItem(b))
                                    .replace(/[c]/g, getRandomItem(c))
                                    .replace(/[d]/g, getRandomItem(d))
                                    .replace(/[e]/g, getRandomItem(e))
                                    .replace(/[f]/g, getRandomItem(f))
                                    .replace(/[h]/g, getRandomItem(h))
                                    .replace(/[i]/g, getRandomItem(i))
                                    .replace(/[j]/g, getRandomItem(j))
                                    .replace(/[k]/g, getRandomItem(k))
                                    .replace(/[l]/g, getRandomItem(l))
                                    .replace(/[m]/g, getRandomItem(m))
                                    .replace(/[n]/g, getRandomItem(n))
                                    .replace(/[o]/g, getRandomItem(o))
                                    .replace(/[p]/g, getRandomItem(p))
                                    .replace(/[q]/g, getRandomItem(q))
                                    .replace(/[r]/g, getRandomItem(r))
                                    .replace(/[s]/g, getRandomItem(s))
                                    .replace(/[t]/g, getRandomItem(t))
                                    .replace(/[u]/g, getRandomItem(u))
                                    .replace(/[v]/g, getRandomItem(v))
                                    .replace(/[w]/g, getRandomItem(w))
                                    .replace(/[x]/g, getRandomItem(x))
                                    .replace(/[y]/g, getRandomItem(y))
                                    .replace(/[z]/g, getRandomItem(z))

                                break;

                            case "ra":
                                const ra = (/^ra\! /g).exec(content);

                                message.content = message.content.substr(ra[0].length, message.content.length)
                                    .split(" ")
                                    .join("\t")
                                    .replace(/[A-Za-z]/g, x => ` :regional_indicator_${x}: `);

                                break;

                            case "reverse":
                                const reverse = (/^reverse\! /g).exec(content);

                                message.content = message.content.substr(reverse[0].length, message.content.length)
                                    .split("")
                                    .reverse()
                                    .join("");

                                break;

                            case "owo":
                                const owo = (/^owo\! /g).exec(content);

                                const faces = ["(・'ω'・)", ";;w;;", "OwO", "UwU", ">w<", "^w^", "♥w♥"];
                                message.content = message.content.substr(owo[0].length, message.content.length)
                                    .replace(/r/g, "w")
                                    .replace(/R/g, "W")
                                    .replace(/l/g, "w")
                                    .replace(/L/g, "W")
                                    .replace(/ n/g, " ny")
                                    .replace(/ N/g, " Ny")
                                    .replace(/ove/g, "uv")
                                    .replace(/OVE/g, "UV")
                                    .replace(/\!+/g, `! ${faces[Math.floor(Math.random() * faces.length)]} `)

                                break;

                            case "ab":
                                const ab = (/^ab\! /g).exec(content);

                                message.content = message.content.substr(ab[0].length, message.content.length)
                                    .replace(/a/g, ":a:")
                                    .replace(/b/g, ":b:")

                                break;

                            case "num":
                                const num = (/^num\! /g).exec(content);

                                message.content = message.content.substr(num[0].length, message.content.length)
                                    .replace(/0/g, ":zero:")
                                    .replace(/1/g, ":one:")
                                    .replace(/2/g, ":two:")
                                    .replace(/3/g, ":three:")
                                    .replace(/4/g, ":four:")
                                    .replace(/5/g, ":five:")
                                    .replace(/6/g, ":six:")
                                    .replace(/7/g, ":seven:")
                                    .replace(/8/g, ":eight:")
                                    .replace(/9/g, ":nine:")

                                break;

                            case "woke":
                                const woke = (/^woke\! /g).exec(content);

                                message.content = message.content.substr(woke[0].length, message.content.length)
                                    .replace(/.{2}/gm, c => c[0].toUpperCase() + c[1].toLowerCase());

                                break;
                        }
                    });
                }

                getSettingsPanel() {
                    const panel = this.buildSettingsPanel();
                    panel.addListener((id, checked) => {
                        if (id == "enableExperiments") {
                            if (checked) {
                                enableExperiments();
                            } else {
                                disableExperiments()
                            }
                        }
                    });
                    return panel.getElement();
                }

                onStop() {
                    Patcher.unpatchAll();
                }
            }
        };

        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
