pipeline {
    agent any
    tools {nodejs "node"}
    environment {
        ACR_NAME = "appacr"  // Your ACR name
        ACR_LOGIN_SERVER = "${ACR_NAME}.azurecr.io"  // ACR login server
        DOCKER_IMAGE = "${ACR_LOGIN_SERVER}/insightink-server"  // Docker image name in ACR
        DOCKER_TAG = "latest"  // You can use a different tag like ${env.BUILD_NUMBER}
        ACR_CREDENTIALS = credentials('acr-credentials')  // ACR admin credentials
    }
    stages {
        stage('Build') {
            steps {
                // Build your app
                sh 'npm i'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                // sh 'npm test'
                echo "Test not setup"
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    sh """
                    docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .
                    """
                }
            }
        }
        stage('Push to ACR') {
            steps {
                script {
                    // Log in to ACR using admin credentials
                    sh """
                    docker login ${ACR_LOGIN_SERVER} \
                    -u ${ACR_CREDENTIALS_USR} \
                    -p ${ACR_CREDENTIALS_PSW}
                    """
                }
            }
        }
    }
    post {
        always {
            // Always run this after the pipeline stages
            echo 'Pipeline finished.'
        }
    }
}
