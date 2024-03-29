import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    constructor(private authService: AuthService){}
    
    @Post('signup')
    signUp(@Body() dto: any){
        console.log({
            dto
        });
    }

    @Post('login')
    logIn(){
        return "This is login page";
    }
}