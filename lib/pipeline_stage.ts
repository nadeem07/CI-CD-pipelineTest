import * as cdk from '@aws-cdk/core';
//import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
//import * as codepipeline from '@aws-cdk/aws-codepipeline'
//import { CdkPipeline,SimpleSynthAction } from '@aws-cdk/pipelines';
import { PipelineTestStack } from "./pipeline_test-stack";
//token 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

export class PipelineTestStage extends cdk.Stage {
    public readonly urlOutput:cdk.CfnOutput;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StageProps) {
    super(scope, id, props);
    
    
    // The code that defines your stack goes here
    const service = new PipelineTestStack(this, 'WebService');
    this.urlOutput = service.urlOutput;
  }
}
