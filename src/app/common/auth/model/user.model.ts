export class User{
    constructor(
        public id: number,
        public email: string,
        private _token: string,
        private _tokenExpirationDate: Date
    ){}

    //geter za token i provera da li je token vazeci
    get token(){
        if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate){
            return null;
        }
    
        return this._token;
    }
}