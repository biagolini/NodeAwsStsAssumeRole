# AWS Role Assumption Helper - Node

This documentation provides a comprehensive guide for setting up and utilizing the AWS Role Assumption Helper, a Node.js script designed to facilitate the secure assumption of AWS IAM roles using temporary credentials obtained through the AWS Security Token Service (STS). This tool aims to streamline the process of obtaining and setting temporary AWS credentials for development and deployment purposes.

## Prerequisites

- Node.js installed on your machine
- npm (Node Package Manager)
- AWS CLI configured with at least one profile

## Step-by-Step Usage Instructions

### Step 1: Project Initialization

Initialize a new Node.js project (if not already done) by executing the following command in your terminal:

```
npm init
```

This will prompt you to fill in details for your project's package.json file. Default values will be used if you press enter through the prompts.

### Step 2: Dependency Installation

To install the necessary dependencies for the project, run:

```
npm install @aws-sdk/client-sts
npm install dotenv
```

These packages allow for AWS STS operations and the management of environment variables via a .env file, respectively.

### Step 3: Installation Verification

Verify the correct installation of `@aws-sdk/client-sts` and `dotenv` with:

```
npm list aws-sdk
```

This command lists the installed versions of the specified dependencies.

### Step 4: Script Execution

Execute the script by running:

```
node main.js
```

The script will assume the specified AWS IAM role and create a shell script (`setenv.sh`) containing temporary credentials.

### Step 5: System Environment Variables Configuration

After script execution, import the generated environment variables to your shell:

```
source setenv.sh
```

The script will assume the specified AWS IAM role and create a shell script (`setenv.sh`) containing temporary credentials.

### Step 5: System Environment Variables Configuration

After script execution, import the generated environment variables to your shell:

```
aws s3 ls
```

Successful execution indicates that the temporary credentials are correctly set and the AWS IAM role assumption has been successful.

## Contributing

Feel free to submit issues, create pull requests, or fork the repository to help improve the project.

## License and Disclaimer

This project is open-source and available under the MIT License. You are free to copy, modify, and use the project as you wish. However, any responsibility for the use of the code is solely yours. Please use it at your own risk and discretion.
