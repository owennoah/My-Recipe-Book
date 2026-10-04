let audioCtx;

export const playTactileClick = () => {
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // Browsers suspend audio context until user interaction
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const time = audioCtx.currentTime;
    
    // 1. The "Thud" (mimics pressing into thick leather/wood)
    const thud = audioCtx.createOscillator();
    thud.type = 'sine';
    thud.frequency.setValueAtTime(200, time);
    thud.frequency.exponentialRampToValueAtTime(30, time + 0.08);

    const thudGain = audioCtx.createGain();
    thudGain.gain.setValueAtTime(0.6, time);
    thudGain.gain.exponentialRampToValueAtTime(0.01, time + 0.08);

    thud.connect(thudGain);
    thudGain.connect(audioCtx.destination);
    
    thud.start(time);
    thud.stop(time + 0.08);
    
    // 2. The "Tick" (mimics the mechanical brass button snapping)
    const bufferSize = audioCtx.sampleRate * 0.02; // 20ms burst
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    
    const tick = audioCtx.createBufferSource();
    tick.buffer = buffer;

    const tickFilter = audioCtx.createBiquadFilter();
    tickFilter.type = 'highpass';
    tickFilter.frequency.value = 6000;

    const tickGain = audioCtx.createGain();
    tickGain.gain.setValueAtTime(0.3, time);
    tickGain.gain.exponentialRampToValueAtTime(0.01, time + 0.02);

    tick.connect(tickFilter);
    tickFilter.connect(tickGain);
    tickGain.connect(audioCtx.destination);
    
    tick.start(time);
  } catch (err) {
    // Ignore audio errors (e.g., if browser blocks it)
  }
};
