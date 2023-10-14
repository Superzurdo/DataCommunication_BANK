const encryptData = (data) => {
    const CryptoJS = require("crypto-js");

    //prpovided by chatGPT
    function encryptAES(text, privateKey, iv) {
        const encrypted = CryptoJS.AES.encrypt(text, privateKey, { iv });
        return encrypted.toString();
    }

    // Use Example
    const plaintext = "Hola, este es un mensaje de prueba."; //Use axios for get the private key
    const privateKey = "UnaClaveSecreta123";
    const iv = CryptoJS.lib.WordArray.random(16); // Vector de inicialización (IV) aleatorio

    const ciphertext = encryptAES(plaintext, privateKey, iv);
    console.log("Texto cifrado:", ciphertext);

    for (const key in data) {
        if (data.hasOwnProperty(key)) {
            data[key] = encryptAES(data[key],privateKey,iv);
        }
    }
    return data;
};
