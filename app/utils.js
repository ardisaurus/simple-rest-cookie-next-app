export function isSafari() {
  const userAgent = navigator.userAgent.toLowerCase();
  return (
    userAgent.indexOf("safari") !== -1 && userAgent.indexOf("chrome") === -1
  );
}

function supportStorageAccessApi() {
  return "hasStorageAccess" in document && "requestStorageAccess" in document;
}

export function hasStorageAccess() {
  return document.hasStorageAccess();
}

export function requestStorageAccess() {
  return document.requestStorageAccess();
}

export function requiresStoragePermissions() {
  return isSafari() && supportStorageAccessApi();
}
