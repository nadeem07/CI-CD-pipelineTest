import * as cdk from '@aws-cdk/core';
//import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
//import * as codepipeline from '@aws-cdk/aws-codepipeline'
import { CodePipeline,CodePipelineSource,CdkPipeline,SimpleSynthAction, ShellStep } from '@aws-cdk/pipelines';
//import { Construct, SecretValue } from '@aws-cdk/core';
//import { pipeline } from 'stream';
import { PipelineTestStage } from "./pipeline_stage";

export class CdkpipelineStack extends cdk.Stack{
    constructor(scope:cdk.Construct,id:string,props?:cdk.StackProps){
        super(scope,id,props);

        //const sourceArtifact=new codepipeline.Artifact();
        //const cloudAssemblyArtifact = new codepipeline.Artifact();

        const pipeline = new CodePipeline(this,'Pipeline',{
            pipelineName:"testpipeline",
            synth: new ShellStep('Synth', {
            input: CodePipelineSource.gitHub('nadeem07/CI-CD-pipelineTest', 'main',{
              authentication: cdk.SecretValue.secretsManager('github-token')
            }),
            commands:[
                'npm run build',
                'npx cdk synth',
              ],
        })

});

pipeline.addStage(new PipelineTestStage(this, 'test', {
    env: { account: process.env.acc_no, region: process.env.region }
  }));
  
  pipeline.addStage(new PipelineTestStage(this, 'test', {
    env: { account: process.env.acc_no, region: process.env.region }
  }));
    }

}
