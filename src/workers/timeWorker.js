self.onmessage = function (event) {
  console.log('worker recebeu', event.data);
  self.postMessage('Olá para vc também');
};
