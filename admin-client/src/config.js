var config = {
        prod: {
                API_Url: "https://support.caring.ir/api",
                TOKEN_ENDPOINT: "http://localhost:3000/api/auth/authenticate",
                USERINFO_ENDPOINT: "https://support.caring.ir/connect/userinfo",
                CLIENT_ID : "AndroidClient",
                CLIENT_SECRET:"secret",
                GRANT_TYPE : "password",
                SCOPE : "api offline_access",
        },
        dev: {
                API_Url: "https://support.caring.ir/api",
                TOKEN_ENDPOINT: "http://localhost:3000/api/auth/authenticate",
                REVOCATION_ENDPOINT: "https://support.caring.ir/connect/revocation",
                USERINFO_ENDPOINT: "https://support.caring.ir/connect/userinfo",
                CLIENT_ID : "AndroidClient",
                CLIENT_SECRET:"secret",
                GRANT_TYPE : "password",
                SCOPE : "api offline_access",
        },
}
