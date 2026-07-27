const fs = require('fs');
let content = fs.readFileSync('OS/js/os-app.js', 'utf8');

const replacements = {
    "Titan": "Student",
    "  Principal Product Designer......2026-Present": "  M.Kumarasamy College of Eng.....2023-2027",
    "zeta": "Projects",
    "  Principal Product Designer......2026": "  LSTM Scalping Bot...............2024",
    "  Sr. UX Designer.................2024-2025": "  Advanced Trading AI.............2024",
    "  UX Designer II..................2021-2023": "  Retail Management System........2023",
    "  Sr. Motion Graphic Designer.....2021": "  UI/UX Designer..................2023",
    "  Motion Graphic Designer.........2018-2021": "  Quantative Trader.............2023",
    "  Video Intern....................2017": "  Python, HTML&CSS, C#............2023"
};

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

const match = content.match(/_0x[a-zA-Z0-9]*=\[([^\]]*)\]/);
if (match) {
    const items = match[1].split("','").map(x => x.replace(/'/g, ''));
    
    var _0xbc071d = function(_0x386d9d) {
        const _0x3d39f2 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let _0x4dd6fb = '', _0x807c1b = '';
        for (let _0x5af504 = 0, _0xfe64eb, _0x18a7bd, _0x566ea1 = 0; _0x18a7bd = _0x386d9d.charAt(_0x566ea1++); ~_0x18a7bd && (_0xfe64eb = _0x5af504 % 4 ? _0xfe64eb * 64 + _0x18a7bd : _0x18a7bd, _0x5af504++ % 4) ? _0x4dd6fb += String.fromCharCode(255 & _0xfe64eb >> (-2 * _0x5af504 & 6)) : 0) {
            _0x18a7bd = _0x3d39f2.indexOf(_0x18a7bd);
        }
        for (let _0x1bb998 = 0, _0x2433a0 = _0x4dd6fb.length; _0x1bb998 < _0x2433a0; _0x1bb998++) {
            _0x807c1b += '%' + ('00' + _0x4dd6fb.charCodeAt(_0x1bb998).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x807c1b);
    };

    let count = 0;
    items.forEach((item, i) => {
        try {
            let str = _0xbc071d(item);
            if (replacements.hasOwnProperty(str)) {
                const target = "'" + item + "'";
                const newEnc = customEncode(replacements[str]);
                const replacement = "'" + newEnc + "'";
                if (content.includes(target)) {
                    content = content.replace(target, replacement);
                    console.log(`Replaced: ${str} -> ${replacements[str]}`);
                    count++;
                }
            }
        } catch(e) {}
    });

    if (count > 0) {
        fs.writeFileSync('OS/js/os-app.js', content, 'utf8');
        console.log(`Total replacements saved: ${count}`);
    } else {
        console.log("No replacements made.");
    }
}
