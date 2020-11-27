/**
 * @name Textify
 * @authorLink https://github.com/PrinceBunBun981
 * @source https://github.com/PrinceBunBun981/Textify/blob/main/Textify.plugin.js
 */
module.exports = (() => {
    const config = {
        info: {
            name: "Textify",
            authors: [{
                name: "PrinceBunBun981",
                discord_id: "264163473179672576",
                github_username: "PrinceBunBun981",
                twitter_username: "PrinceBunBun981"
            }],
            version: "1.0",
            description: "Textify",
            github: "https://github.com/PrinceBunBun981/Textify/blob/main/Textify.plugin.js",
            github_raw: "https://raw.githubusercontent.com/PrinceBunBun981/Textify/main/Textify.plugin.js"
        },
        changelog: [{
            title: "1.0",
            type: "added",
            items: [
                "Added OwOify option."
            ]
        }]
    };

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
                    Patcher.after(DiscordModules.MessageActions, "sendMessage", (_, [, message]) => {
                        const content = message.content.toLowerCase();

                        switch (content.split("!")[0]) {
                            case "ri":
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

                            case "owosong":
                                console.log(`owosong`)
                                const owosong = (/^owosong\!/g).exec(content);
                                const owolyrics = `
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

                                message.content = message.content
                                    .replace(owosong, owolyrics.replace(/^ +/gm, ''))
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

                onStop() {
                    Patcher.unpatchAll();
                }
            }
        };

        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
