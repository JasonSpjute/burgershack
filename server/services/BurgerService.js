import { dbContext } from "../db/DbContext";

class BurgerService{
    async find(query={}){
        let burgers = await dbContext.Burgers.find(query);
        return burgers;
    }
    
}

export const burgerService = new BurgerService();