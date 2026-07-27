const fs = require('fs');
const content = fs.readFileSync('OS/js/os-app.js', 'utf8');

const match = content.match(/_0x[a-zA-Z0-9]*=\[([^\]]*)\]/);
if (match) {
    const items = match[1].split("','").map(x => x.replace(/'/g, ''));
    
    var _0x4b71 = function(_0x47d0c6) {
        const _0x287999 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';
        let _0x51e156 = '', _0x27d9d1 = '';
        for (let _0x4ec9a6 = 0, _0x3e18a8, _0x21b30e, _0x2614b9 = 0; _0x21b30e = _0x47d0c6.charAt(_0x2614b9++); ~_0x21b30e && (_0x3e18a8 = _0x4ec9a6 % 4 ? _0x3e18a8 * 64 + _0x21b30e : _0x21b30e, _0x4ec9a6++ % 4) ? _0x51e156 += String.fromCharCode(255 & _0x3e18a8 >> (-2 * _0x4ec9a6 & 6)) : 0) {
            _0x21b30e = _0x287999.indexOf(_0x21b30e);
        }
        for (let _0x2c6b41 = 0, _0x673d32 = _0x51e156.length; _0x2c6b41 < _0x673d32; _0x2c6b41++) {
            _0x27d9d1 += '%' + ('00' + _0x51e156.charCodeAt(_0x2c6b41).toString(16)).slice(-2);
        }
        return decodeURIComponent(_0x27d9d1);
    };

    items.forEach((item, i) => {
        try {
            console.log(i, _0x4b71(item));
        } catch(e) {}
    });
}
