
export const environment = {
  production: false,
  apiUrl: 'https://thronesapi.com/api/v2',
  authorizationUrl: 'https://ssodesenv.go.gov.br:443/api/identity/entitlement/decision',
  apiPortalRS: '/acesso-usuario-api',
  idSistemaPortal: 'SMART-NG',
  appName: 'app iIonic - Game of Thrones',
  sso: {
    clientId: 'qruk19U0vzZZ27mz4DhD1i49CNUa',
    serverUrl: 'https://3.222.218.189:9443',
    issuer: '/oauth2/oidcdiscovery',
    redirectUri: window.location.origin,
    scope: 'openid email profile',
    showDebugInformation: true,
    responseType: 'code',
  }
};