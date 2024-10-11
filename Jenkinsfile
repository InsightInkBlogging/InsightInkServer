pipeline {
    agent any
    tools {nodejs "node"}
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
        stage('Deploy') {
            steps {
                // Deploy to staging or production
                // sh 'npm run deploy'
                echo "Deployment not setup"
                echo "Done"

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
