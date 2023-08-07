const pages = {
    // id: [displayName, href]
    home   : ["home"   , "index.html"],
    weblog : ["weblog" , "https://rexxt.github.io/weblog"],
    links  : ["links"  , "links.html"],
    content: ["content", "content.html"],
    credits: ["credits", "credits.html"],
}

const socials = {
    discord: ["img/Discord.png", "https://discord.gg/AADZUmgsph"],
    twitter: ["img/Twitter.png", "https://twitter.com/Mizu_Teto"],
    reddit : ["img/Reddit.png" , "https://www.reddit.com/u/MizuOfficial"],
    github : ["img/Github.png" , "https://github.com/Rexxt"],
    youtube: ["img/Youtube.png" , "https://www.youtube.com/channel/UCK3fIE6e1NAoLfgreA0nIyg"],
}

elemental.create(function navbar(element) {
    let html = '<div class="topnav"><div class="navlinks">';
    let selected = element.selected;
    let keys = Object.keys(pages);
    for (let i = 0; i < keys.length; i++) {
        let pageKey = keys[i];
        const page = pages[pageKey];
        html += `<a href="${page[1]}" class=${pageKey == selected ? "tab-sel" : "tab"}>${page[0]}</a>\n`;
    }
    html += '</div><div class="socials">'
    
    keys = Object.keys(socials);
    for (let i = 0; i < keys.length; i++) {
        let pageKey = keys[i];
        const page = socials[pageKey];
        html += `<a href="${page[1]}"><img src="${page[0]}" alt=${pageKey}></a>`;
    }
    html += '</div></div>';
    return html;
});

elemental.create(function banner(element) {
    return `<div class="header">
    <p>french software developer and designer<br>
        open-source addict<br>
        contributor to <a href="https://t-sp.in/cambridge" class="side-link">cambridge</a>, <a href="https://github.com/Rexxt/blazenet" class="side-link">blazenet</a> and <a href="https://github.com/Rexxt/tifm" class="side-link">tifm</a></p>
</div>`
})