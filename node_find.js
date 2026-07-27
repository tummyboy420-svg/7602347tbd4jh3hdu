const fs = require('fs');
const content = fs.readFileSync('OS/js/os-app.js', 'utf8');
const customEncode = (str) => {
    const b64 = Buffer.from(encodeURIComponent(str)).toString('base64');
    let custom = '';
    for (let i = 0; i < b64.length; i++) {
        const c = b64[i];
        if (c >= 'A' && c <= 'Z') custom += c.toLowerCase();
        else if (c >= 'a' && c <= 'z') custom += c.toUpperCase();
        else custom += c;
    }
    return custom.replace(/=/g, '');
};

const orig = "  Principal Product Designer......2026-Present";
const enc = customEncode(orig);
console.log('Encoded:', enc);
console.log('Exists in file:', content.includes("'" + enc + "'"));
if (content.includes("'" + enc + "'")) {
    console.log('FOUND!');
} else {
    // See if the encoding matches any array element!
    const match = content.match(/_0x[a-zA-Z0-9]*=\[([^\]]*)\]/);
    const items = match[1].split("','").map(x => x.replace(/'/g, ''));
    console.log("Is the encoded string ANYWHERE in items?", items.includes(enc));
}
