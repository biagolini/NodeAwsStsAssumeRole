require('dotenv').config()
const { STSClient, AssumeRoleCommand } = require('@aws-sdk/client-sts')
const { fromIni } = require('@aws-sdk/credential-provider-ini')
const fs = require('fs')

// Define AWS Role ARN, session name, region, and profile from environment variables or use default values
const roleArn =
  process.env.ROLE_ARN || 'arn:aws:iam::123456789012:role/defaultRole'
const sessionName = process.env.SESSION_NAME || 'defaultSessionName'
const region = process.env.AWS_REGION || 'us-east-1'
const profile = process.env.AWS_PROFILE || 'defaultProfile'

// Initialize STS client with specified region and credentials
const stsClient = new STSClient({
  region: region,
  credentials: fromIni({ profile: profile })
})

const assumeRole = async () => {
  const command = new AssumeRoleCommand({
    RoleArn: roleArn,
    RoleSessionName: sessionName
  })

  try {
    const response = await stsClient.send(command)
    const credentials = response.Credentials

    // Prepare script content to export obtained AWS credentials
    const scriptContent =
      `export AWS_ACCESS_KEY_ID=${credentials.AccessKeyId}\n` +
      `export AWS_SECRET_ACCESS_KEY=${credentials.SecretAccessKey}\n` +
      `export AWS_SESSION_TOKEN=${credentials.SessionToken}\n`

    // Write credentials to a shell script for environment setup
    fs.writeFileSync('setenv.sh', scriptContent)
    console.log(
      "Script 'setenv.sh' generated. Execute 'source setenv.sh' to set environment variables."
    )
  } catch (error) {
    console.error('Error assuming role: ', error)
  }
}

assumeRole()
