pipeline {
    agent any

    stages {
        stage('Code') {
           steps{
               echo "Cloning the code.."
               git url:"https://github.com/saurabhcoded/jenkins-learning.git", branch: "main"
           }
        }
        stage('Build') {
           steps{
              echo "Building the code.."
              sh "docker build -t jenkins-declarative ."
           }
        }
        stage('Push to Docker Hub') {
           steps{
               echo "Pushing the code. to DockerHub."
               withCredentials([usernamePassword(credentialsId:"dockerHub",passwordVariable:"dockerPass",usernameVariable:"dockerUser")]){
                sh "docker tag jenkins-tutorial ${env.dockerUser}/jenkins-tutorial:latest"
                sh "docker login -u ${env.dockerUser} -p '${env.dockerPass}'"
                sh "docker push ${env.dockerUser}/jenkins-tutorial:latest"
               }
           }
        }
        stage('Deploy') {
           steps{
                echo "Deploying the code"
                sh "docker-compose down && docker-compose up -d "
           }
        }
    }
}
