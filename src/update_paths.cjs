const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.jsx') || file.endsWith('.css')) results.push(file);
        }
    });
    return results;
}

const files = walk('c:/Users/mikaz/.gemini/antigravity/playground/azure-gravity/trenchcat-web/src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Pfp generator prefixes
    const pfpPrefixes = ['base_', 'bg_', 'h_', 'g_', 'c_', 'a_'];
    for (const prefix of pfpPrefixes) {
        content = content.replace(new RegExp('/assets/(' + prefix + '[^/"\'\\\\]+)', 'g'), '/assets/pfp_generator/$1');
    }

    // Meme gallery
    content = content.replace(new RegExp('/assets/(meme_[^/"\'\\\\]+)', 'g'), '/assets/meme_gallery/$1');

    // Retro tv fallback
    content = content.replace(new RegExp('/assets/retro_tv_real.png', 'g'), '/assets/others/retro_tv_real.png');

    // App logo fallback
    content = content.replace(new RegExp('/assets/logo.png', 'g'), '/assets/others/logo.png');

    // Hero bg fallback
    content = content.replace(new RegExp('/assets/hero-bg.jpg', 'g'), '/assets/others/hero-bg.jpg');

    // Default cat fallback
    content = content.replace(new RegExp('/assets/hero_cat.png', 'g'), '/assets/others/hero_cat.png');

    fs.writeFileSync(file, content);
});
console.log('Done updating paths in code.');
