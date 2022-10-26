var crypto = require("crypto");

var password = "monkey";
// randombytes provides a cryptographically strong random data
crypto.randomBytes(256, function (err, salt) {
  // password based key derivation function
  // syntax - (password,salt,iterations,keylen,digest,callback)
  // salt should be stored with user data
  // 512-no of bytes the output should be
  // sha256-hashing algorithm
  // console.log("salt-1", salt);
  crypto.pbkdf2(password, salt, 100000, 512, "sha256", function (err, hash) {
    // console.log("salt-2", salt);
    console.log(
      "The result of hashing " +
        password +
        " is:\n\n" +
        hash.toString("hex") +
        "\n\n"
    );
  });
});
//  npm run hash-salt   to create a o/p
/*
O/P result is

The result of hashing monkey is:

3c395fc1cea2acf1cc055e14ba62766fa254085eba6c6b1771ece2420e17ae49f9e6fc871ec4420839217cd1affc44dccba29f460125397f54f35048e684636b77693fb48a4f6b96378c53725c41d4333c1d6dd3502567048d6d687e71eb3a56d2833e593c7cc508993c18d30a1469b334b4f6278154a94f57af23846d5f2d5169db71898f0cb962d9101f003d167629e36bc42ef758f56c3d1bd4c4e1b663e6cf909dc7addd9fc8cefba4c01cd17289f6df8c1977ce981cd43df8faeef1b8114d2cf529ecb910e7e4d577b7759634293dafecbb6cee99702bbd245632c18e656fa17d0dd66ec353ddd2cd06671858435b94b78c18211ad59ad7276df9c5a47ac6a78506c1e882fd5d955cbea26ef61c48f6efab22b95b1731a69831b52481432374438f72105aa5d68f5ed564334a2db9d97267a97c49d075064c140f66546722b9b95f38be84b8d8ebbeac4b3b54b40f7b7fc7faffb5481e66298b125fff0ff00c94029cf19778a833717479288f7b7ef1389bd0234bd052383eecd502abd5b48ccfcf9c40c3ab156b6d7eab82a9c7a4c7fe012a2bf56d0385f5fc981f10080d05eb12280a349fd7e70be1d953f325bbbd4b3b59449e0ef327e5ab5ea8519026fe9139ad95e8e855d29896139b4f994334f5893b4b46db8a63079920921ad7d86d7ddad5782bcd85bda8aa5611e9380a54f586484ea5374d2d9d34ecd8727b

*/
