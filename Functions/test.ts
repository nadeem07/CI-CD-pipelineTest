import { SamlConsolePrincipal } from "@aws-cdk/aws-iam"

export const handler=async function(event:any,callback:any){
    try {
        
        return {
            statusCode:200,
            body:"success"
        }
    }catch(e){
        return {
            statusCode:400,
            body:e
        }

    }
}