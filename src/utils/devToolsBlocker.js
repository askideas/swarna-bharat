// Developer Tools Blocker
// This script attempts to prevent users from accessing developer tools

const blockDevTools = () => {
  // Disable right-click context menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Disable common keyboard shortcuts for developer tools
  document.addEventListener('keydown', (e) => {
    // F12 - Developer Tools
    if (e.key === 'F12') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+I - Developer Tools
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+J - Console
    if (e.ctrlKey && e.shiftKey && e.key === 'J') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+Shift+C - Element Picker
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+U - View Source
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault();
      return false;
    }
    
    // Ctrl+S - Save Page
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault();
      return false;
    }

    // Cmd+Option+I (Mac) - Developer Tools
    if (e.metaKey && e.altKey && e.key === 'i') {
      e.preventDefault();
      return false;
    }

    // Cmd+Option+J (Mac) - Console
    if (e.metaKey && e.altKey && e.key === 'j') {
      e.preventDefault();
      return false;
    }

    // Cmd+Option+C (Mac) - Element Picker
    if (e.metaKey && e.altKey && e.key === 'c') {
      e.preventDefault();
      return false;
    }
  });

  // Detect if DevTools is open by checking window size difference
  const detectDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    
    if (widthThreshold || heightThreshold) {
      // DevTools might be open
      document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; flex-direction: column;"><h1>Access Denied</h1><p>Developer tools are not allowed on this website.</p></div>';
    }
  };

  // Check for DevTools periodically
  setInterval(detectDevTools, 1000);

  // Detect debugger statement
  const preventDebugger = () => {
    setInterval(() => {
      (function() {
        return false;
      })['constructor']('debugger')['call']();
    }, 50);
  };

  // Disable console methods
  const disableConsole = () => {
    const noop = () => {};
    const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'clear', 'trace', 'assert', 'count', 'time', 'timeEnd'];
    
    methods.forEach(method => {
      if (console[method]) {
        console[method] = noop;
      }
    });
  };

  // Clear console on load
  if (console.clear) {
    console.clear();
  }

  // Apply protections
  disableConsole();
  preventDebugger();

  // Detect if element is being inspected
  let devToolsOpen = false;
  const element = new Image();
  
  Object.defineProperty(element, 'id', {
    get: function() {
      devToolsOpen = true;
      return 'devtools';
    }
  });

  setInterval(() => {
    console.log(element);
    if (devToolsOpen) {
      document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh; font-family: Arial, sans-serif; flex-direction: column;"><h1>Access Denied</h1><p>Developer tools are not allowed on this website.</p></div>';
    }
  }, 1000);
};

export default blockDevTools;
