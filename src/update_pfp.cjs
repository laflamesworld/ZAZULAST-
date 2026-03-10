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

    // Replace pfp_generator paths mapped to gen_1
    const gen1 = ['bg_', 'h_', 'base_'];
    for (const prefix of gen1) {
        content = content.replace(new RegExp('/assets/pfp_generator/(' + prefix + '[^/"\'\\\\]+)', 'g'), '/assets/pfp_gen_1/$1');
    }

    // Replace pfp_generator paths mapped to gen_2
    const gen2 = ['c_', 'a_', 'g_'];
    for (const prefix of gen2) {
        content = content.replace(new RegExp('/assets/pfp_generator/(' + prefix + '[^/"\'\\\\]+)', 'g'), '/assets/pfp_gen_2/$1');
    }

    fs.writeFileSync(file, content);
});
console.log('Split paths updated successfully.');
