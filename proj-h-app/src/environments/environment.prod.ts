export const environment = {
  production: true,
  apiUrl: 'http://localhost:5000/api/',
  publishers: [
    {
      "loggerName": "console",
      "loggerLocation": "",
      "isActive": true
    },
    {
      "loggerName": "localstorage",
      "loggerLocation": "logging",
      "isActive": true
    },
    {
      "loggerName": "webapi",
      "loggerLocation": "http://localhost:5000/api/values/logtestcontract",
      "isActive": true
    }
  ]
};
