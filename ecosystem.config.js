module.exports = {
  apps: [
    {
      name: 'server-template-api',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './server.js',
      args: 'start'
    }
  ]
}
