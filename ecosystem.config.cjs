module.exports = {
  apps: [
    {
      name: 'sellme.uz', 
      exec_mode: 'cluster',
      port:8081,
      instances: 'max', 
      script: '.output/server/index.mjs',
      args: 'start'
    }
  ]
}

 

 
