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

let count = 0;
for (const [orig, newStr] of Object.entries(replacements)) {
    const origEnc = customEncode(orig);
    const newEnc = customEncode(newStr);
    
    // We search for 'origEnc' (including quotes to make sure we replace the string array element)
    const target = "'" + origEnc + "'";
    const replacement = "'" + newEnc + "'";
    
    if (content.includes(target)) {
        content = content.replace(target, replacement);
        console.log(`Replaced ${orig} -> ${newStr}`);
        count++;
    } else {
        console.log(`Warning: ${origEnc} (${orig}) not found in os-app.js!`);
    }
}

fs.writeFileSync('OS/js/os-app.js', content, 'utf8');
console.log(`Total replacements: ${count}`);
