pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                // Build your app
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                // Run tests
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                // Deploy to staging or production
                sh 'npm run deploy'
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
