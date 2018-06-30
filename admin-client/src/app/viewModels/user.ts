export class User {
    
        /**
         * Profile data as in ApplicationUser.cs.
         */
        public givenName: String;
        public familyName: String;
        public nationalcode:String;
        public sub:String;
    
        /**
         * From OpenID.
         */
        public userName: string;
    
        /**
         * Identity resource added in Config.cs.
         */
        public roles: string[];
    
    }
    