/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_susi",
        forgotPassword:"B2C_1_reset_password",
        editProfile: "B2C_1_edit_profile" 
    },
    authorities: {
        signUpSignIn: {
            authority: "https://grupodb2c.b2clogin.com/grupodb2c.onmicrosoft.com/B2C_1_susi",
        },
        forgotPassword: {
            authority: "https://grupodb2c.b2clogin.com/grupodb2c.onmicrosoft.com/B2C_1_reset_password",
        },
        editProfile: {
            authority: "https://grupodb2c.b2clogin.com/grupodb2c.onmicrosoft.com/B2C_1_edit_profile"
        }
    },
    authorityDomain: "grupodb2c.b2clogin.com"
}