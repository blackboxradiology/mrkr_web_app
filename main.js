import { UserManager } from 'oidc-client-ts';

// Configure Cognito OIDC settings
const cognitoAuthConfig = {
    authority: "https://us-east-25bthirqeg.auth.us-east-2.amazoncognito.com",
    client_id: "613rtpg3mi46s5hq1paqmaah2s",
    redirect_uri: "https://main.d2eckyne36hzzq.amplifyapp.com",
    response_type: "code",
    scope: "email openid profile",
};

// Initialize the OIDC UserManager
export const userManager = new UserManager({
    ...cognitoAuthConfig,
});

// Handle sign-out redirection
export async function signOutRedirect() {
    const clientId = "613rtpg3mi46s5hq1paqmaah2s";
    const logoutUri = "https://main.d2eckyne36hzzq.amplifyapp.com";
    const cognitoDomain = "https://us-east-25bthirqeg.auth.us-east-2.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
}
