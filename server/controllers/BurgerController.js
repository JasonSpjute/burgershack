import BaseController from "../utils/BaseController";

export class BurgerController extends BaseController {
    constructor(){
        super("api/burgers");
        this.router
            .get("", this.getAll)
            .post("", this.create);
    }
    async getAll(req, res, next) {
        try{
            return res.send(["burger1, burger2"]);
        }
        catch (error) {
            next(error);
        }
    }

    async create(req, res, next) {
        try{
            res.send(req.body);
        }
        catch(error){
            next(error);
        };

    }
}