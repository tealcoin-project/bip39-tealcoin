(function() {

// p2wpkh

bitcoinjs.bitcoin.networks.bitcoin.p2wpkh = {
    baseNetwork: "bitcoin",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x04b24746,
        private: 0x04b2430c
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};

bitcoinjs.bitcoin.networks.testnet.p2wpkh = {
    baseNetwork: "testnet",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x045f1cf6,
        private: 0x045f18bc
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};

bitcoinjs.bitcoin.networks.litecoin.p2wpkh = {
    baseNetwork: "litecoin",
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x01b26ef6,
        private: 0x01b26792
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
};

bitcoinjs.bitcoin.networks.fujicoin.p2wpkh = {
    baseNetwork: "fujicoin",
    messagePrefix: '\x19FujiCoin Signed Message:\n',
    bech32: 'fc',
    bip32: {
        public: 0x04b24746,
        private: 0x04b2430c
    },
    pubKeyHash: 0x24,
    scriptHash: 0x10,
    wif: 0xa4
};

bitcoinjs.bitcoin.networks.tealcoin.p2wpkh = {
  baseNetwork: "tealcoin",
  messagePrefix: '\x19Tealcoin Signed Message:\n',
  bech32: 'tc',
  bip32: {
    public: 0x9aee845d,
    private: 0x98e6bbea,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x25,
  wif: 0x46,
};

bitcoinjs.bitcoin.networks.tealcoin_testnet.p2wpkh = {
  baseNetwork: "tealcoin_testnet",
  messagePrefix: '\x19Tealcoin Signed Message:\n',
  bech32: 'tt',
  bip32: {
    public: 0x9182d468,
    private: 0x8f7b0bf5,
  },
  pubKeyHash: 0x7f,
  scriptHash: 0x60,
  wif: 0xe6,
};


// p2wpkh in p2sh

bitcoinjs.bitcoin.networks.bitcoin.p2wpkhInP2sh = {
    baseNetwork: "bitcoin",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x049d7cb2,
        private: 0x049d7878
    },
    pubKeyHash: 0x00,
    scriptHash: 0x05,
    wif: 0x80
};

bitcoinjs.bitcoin.networks.testnet.p2wpkhInP2sh = {
    baseNetwork: "testnet",
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
        public: 0x044a5262,
        private: 0x044a4e28
    },
    pubKeyHash: 0x6f,
    scriptHash: 0xc4,
    wif: 0xef
};



bitcoinjs.bitcoin.networks.litecoin.p2wpkhInP2sh = {
    baseNetwork: "litecoin",
    messagePrefix: '\x19Litecoin Signed Message:\n',
    bech32: 'bc',
    bip32: {
        public: 0x01b26ef6,
        private: 0x01b26792
    },
    pubKeyHash: 0x30,
    scriptHash: 0x32,
    wif: 0xb0
};


bitcoinjs.bitcoin.networks.fujicoin.p2wpkhInP2sh = {
    baseNetwork: "fujicoin",
    messagePrefix: '\x19FujiCoin Signed Message:\n',
    bech32: 'fc',
    bip32: {
        public: 0x049d7cb2,
        private: 0x049d7878
    },
    pubKeyHash: 0x24,
    scriptHash: 0x10,
    wif: 0xa4
};

bitcoinjs.bitcoin.networks.tealcoin.p2wpkhInP2sh = {
  baseNetwork: "tealcoin",
  messagePrefix: '\x19Tealcoin Signed Message:\n',
  bech32: 'tc',
  bip32: {
    public: 0x9182b952,
    private: 0x8f7af0df,
  },
  pubKeyHash: 0x41,
  scriptHash: 0x25,
  wif: 0x46,
};

bitcoinjs.bitcoin.networks.tealcoin_testnet.p2wpkhInP2sh = {
  baseNetwork: "tealcoin_testnet",
  messagePrefix: '\x19Tealcoin Signed Message:\n',
  bech32: 'tt',
  bip32: {
    public: 0x9aee9f74,
    private: 0x98e6d701,
  },
  pubKeyHash: 0x7f,
  scriptHash: 0x60,
  wif: 0xe6,
};


})();
