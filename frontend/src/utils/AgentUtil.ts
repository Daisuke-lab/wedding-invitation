export function isSmartphone(): boolean {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
  
    // Check for common smartphone user agents
    if (/android/i.test(userAgent)) {
      return true;
    }
  
    if (/iPhone|iPad|iPod/i.test(userAgent)) {
      return true;
    }
  
    return false;
  }
  
export function isPC(): boolean {
    return !isSmartphone();
  }