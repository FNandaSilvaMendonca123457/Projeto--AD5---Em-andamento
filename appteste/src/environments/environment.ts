export const environment = {
  production: false,
  apiUrl: 'https://thronesapi.com/api/v2/',
  authorizationUrl: 'https://18.213.134.105:9443/api/identity/entitlement/decision',

  appName: 'App ionic - Game of Thrones',
  sso: {
    clientId: 'cODNHELi2yZRBgJBS1RybZ9yS1Aa',
    serverUrl: 'https://18.213.134.105:9443',
    issuer: '/oauth2/oidcdiscovery',
    redirectUri: window.location.origin,
    scope: 'openid email profile',
    showDebugInformation: true,
    responseType: 'code',
  }
};