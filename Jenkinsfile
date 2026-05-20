pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git 'https://github.com/GPrashanth-009/netflix-clone.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t netflix-clone .'
            }
        }

        stage('Stop Old Container') {
            steps {
                sh 'docker stop netflix-clone || true'
                sh 'docker rm netflix-clone || true'
            }
        }

        stage('Run New Container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name netflix-clone netflix-clone'
            }
        }
    }
}