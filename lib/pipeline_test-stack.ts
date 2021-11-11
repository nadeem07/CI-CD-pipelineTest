import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as apigw from '@aws-cdk/aws-apigateway';

//token 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
export class PipelineTestStack extends cdk.Stack {
  public readonly urlOutput: cdk.CfnOutput;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    
    const lambdaFn=new lambda.Function(this,'AuthLambda',{
      code:lambda.Code.fromAsset('Functions'),
      runtime:lambda.Runtime.NODEJS_12_X,
      handler:'test.handler',
   });

   const api = new apigw.LambdaRestApi(this, 'Gateway', {
    description: 'endpoint for lambda',
    handler:lambdaFn,
  });

  this.urlOutput = new cdk.CfnOutput(this, 'Url', {
    value: api.url,
  });

    // The code that defines your stack goes here
  }
}

