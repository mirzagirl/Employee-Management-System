export class User{
        constructor(
                public email:string,
                public id:string,
                private _token:string,
                private _tokenExpiresDate:Date

        ){}
     get token(){
             if(!this._tokenExpiresDate||new Date()>this._tokenExpiresDate)
             return null;
             return this._token;
     }
   
}