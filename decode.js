const fs = require('fs');
const content = fs.readFileSync('js/startup.js', 'utf8');

const match = content.match(/_0x18fa24=\[(.*?)\];/);
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

    items.forEach((item, i) => {
        try {
            console.log(i, _0xbc071d(item));
        } catch(e) {}
    });
}
