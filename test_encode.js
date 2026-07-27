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
console.log('zeta', customEncode('zeta'));
