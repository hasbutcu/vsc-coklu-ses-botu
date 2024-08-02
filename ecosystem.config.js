module.exports = {
  apps: [
    {
      name: 'Bot1',
      script: 'bot.js',
      env: {
        TOKEN: 'bot1token',
        CHANNEL_ID: 'seslikanalid'
      }
    },
    {
      name: 'Bot2',
      script: 'bot.js',
      env: {
        TOKEN: 'token',
        CHANNEL_ID: 'seslikanalid'
      }
    },
    {
      name: 'Bot3',
      script: 'bot.js',
      env: {
        TOKEN: 'token',
        CHANNEL_ID: 'seslikanalid'
      }
    },
    {
      name: 'Bot4',
      script: 'bot.js',
      env: {
        TOKEN: 'token',
        CHANNEL_ID: 'seslikanalid'
      },
/*    {
      name: 'Bot5',
      script: 'bot.js',
      env: {
        TOKEN: 'token',
        CHANNEL_ID: 'seslikanalid'
      },*/
	  //DAHA FAZLA BOT EKLEYEBİLİRSİNİZ
    }
  ]
};
