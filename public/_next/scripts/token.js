const tokens = [
    {
      name: "BNB",
      symbol: "BNB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0950",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 551,
      logoURI: "/_next/static/media/bnb.svg",
    },
    {
      name: "Tether USD",
      symbol: "USDT",
      address: "0x55d398326f99059fF775485246999027B3197955",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 1,
      logoURI: "https://tokens.pancakeswap.finance/images/symbol/usdt.png",
    },
    {
      name: "DAI",
      symbol: "DAI",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0951",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 1,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/4943.png",
    },
    {
      name: "AXS",
      symbol: "AXS",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0952",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 4.66,
      logoURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_u2coil7EEbOGuzVNnyzKdPgItrd8gJ_yVw&s",
    },
    {
      name: "TIA",
      symbol: "TIA",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0953",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 5.37,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/22861.png",
    },
    {
      name: "TON",
      symbol: "TON",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0954",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 6.65,
      logoURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7Hz0AK6gD_mXh0fv_PLJ6ie1S6mlB-bhrg&s",
    },
    {
      name: "DOGE",
      symbol: "DOGE",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0955",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.1015,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/74.png",
    },
    {
      name: "XRP",
      symbol: "XRP",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0956",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.569739,
      logoURI:
        "https://altcoinsbox.com/wp-content/uploads/2023/01/xrp-logo.jpg",
    },
    {
      name: "Solana",
      symbol: "SOL",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0957",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 143.9,
      logoURI: "https://upload.wikimedia.org/wikipedia/en/b/b9/Solana_logo.png",
    },
    {
      name: "UNI",
      symbol: "UNI",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0958",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 6200,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/7083.png",
    },
    {
      name: "Sponge V2",
      symbol: "Sponge V2",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0960",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.00146,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/29354.png",
    },
    {
      name: "SMOG",
      symbol: "SMOG",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0961",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.024,
      logoURI:
        "https://assets.coingecko.com/coins/images/35117/large/SMOG_TOKEN__2.png?1707398947",
    },
    {
      name: "DOT",
      symbol: "DOT",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0962",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 4.38,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/6636.png",
    },
    {
      name: "Aptos",
      symbol: "APT",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0963",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 6.27,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/21794.png",
    },
    {
      name: "SUI",
      symbol: "SUI",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0964",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.87,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/20947.png",
    },
    {
      name: "Arbitrum",
      symbol: "ARB",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0965",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.55,
      logoURI:
        "https://airdrops.io/wp-content/uploads/2021/10/Arbitrum-logo.jpg",
    },
    {
      name: "XCH",
      symbol: "XCH",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0966",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 14.23,
      logoURI:
        "https://crypto.ru/wp-content/uploads/coins/17229/chia-xch-300x300-1.png",
    },
    {
      name: "Wall Street Memes",
      symbol: "WSM",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0967",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.0027,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/28179.png",
    },
    {
      name: "ATOM",
      symbol: "ATOM",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0968",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 4.6,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/3794.png",
    },
    {
      name: "Beam",
      symbol: "Beam",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0969",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.012,
      logoURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDgn06QpIRZVmCdK4gh50TsgMJ88wLBiAWdg&s",
    },
    {
      name: "Stacks",
      symbol: "Stacks",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0970",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 1.47,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/4847.png",
    },
    {
      name: "Worldcoin",
      symbol: "Worldcoin",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0971",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 1.51,
      logoURI:
        "https://logowik.com/content/uploads/images/worldcoin2094.logowik.com.webp",
    },
    {
      name: "NBA",
      symbol: "NBA",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0972",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.00006,
      logoURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjsbS_MAb6hzd6fMzPgKkPkpr2exHlwOt8yQ&s",
    },
    {
      name: "Meme Kombat",
      symbol: "Meme Kombat",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0973",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.0805,
      logoURI:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wyB_Mh3DdDNWXmiYXcNKv3rcqvZllBetSQ&s",
    },
    {
      name: "Floki",
      symbol: "Floki",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0974",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.00012,
      logoURI:
        "https://s3.coinmarketcap.com/static/img/portraits/630de341f8184351dc5cb644.png",
    },
    {
      name: "BONK",
      symbol: "BONK",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0975",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.000019,
      logoURI: "https://img.cryptorank.io/coins/bonk1672306100278.png",
    },
    {
      name: "Catizen",
      symbol: "Catizen",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0976",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.0212,
      logoURI: "https://img.cryptorank.io/coins/catizen1717668561175.png",
    },
    {
      name: "BLUM",
      symbol: "BLUM",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0977",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.000029,
      logoURI: "https://img.cryptorank.io/coins/blum1713969731275.png",
    },
    {
      name: "PEPE",
      symbol: "PEPE",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0978",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.000008,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/24478.png",
    },
    {
      name: "Chainlink",
      symbol: "Chainlink",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0979",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 13.14,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/1975.png",
    },
    {
      name: "TREMP",
      symbol: "TREMP",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0980",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.1348,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/29717.png",
    },
    {
      name: "Harambe",
      symbol: "Harambe",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0981",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.015676,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/8989.png",
    },
    {
      name: "CATDOG",
      symbol: "CATDOG",
      address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc0982",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.00061,
      logoURI:
        "https://assets.coingecko.com/coins/images/39452/large/output_%286%29.png?1723246537",
    },

    {
      name: "Ethereum Token",
      symbol: "ETH",
      address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 2617,
      logoURI:
        "https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png",
    },
    {
      name: "BTCB Token",
      symbol: "BTCB",
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 58543,
      logoURI: "https://tokens.pancakeswap.finance/images/symbol/wbtc.png",
    },
    {
      name: "Shiba Inu",
      symbol: "SHIB",
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.000014,
      logoURI: "https://s2.coinmarketcap.com/static/img/coins/200x200/5994.png",
    },

    {
      name: "Baby Doge",
      symbol: "BABYDOGE",
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.000001,
      logoURI:
        "https://assets.coingecko.com/coins/images/16125/large/babydoge.jpg?1696515731",
    },

    {
      name: "SNEK",
      symbol: "SNEK",
      address: "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
      chainId: 56,
      decimals: 18,
      balance: 0,
      price: 0.0007,
      logoURI:
        "https://s2.coinmarketcap.com/static/img/coins/200x200/25264.png",
    },
];
