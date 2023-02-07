#!/usr/bin/env node
import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { Website } from '../lib/website'
import { CloudFrontCertificates } from '../lib/cloud-front-certificates'
import { Tag, Tags } from 'aws-cdk-lib'

const app = new cdk.App()

new CloudFrontCertificates(app)

// please see
// for details
// https://miensol.pl/cloudfront-custom-domain-https/

new Website(app, {
  certificateArn: 'arn:aws:acm:us-east-1:339594496974:certificate/22e6ab03-13e4-4541-9094-128a8024c5f8'
})

const tags = Tags.of(app)
tags.add('project', 'brightinventions.pl')
tags.add('source', 'https://github.com/bright/new-www/blob/gatsby/infrastructure')
