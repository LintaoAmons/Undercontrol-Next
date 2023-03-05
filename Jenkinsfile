pipeline {
    agent any

    options {
        buildDiscarder(logRotator(numToKeepStr: '5'))
        disableConcurrentBuilds()
    }

    environment {
        imagePrefix = 'oatnil.top:8083/undercontrol-next-app'
        CRED = credentials('docker-registry')
    }

    stages {
        stage('Build Image') {
            steps {
                sh "docker-compose -f docker/production/docker-compose.yml build"
            }
        }

        stage('Push Image') {
            steps {
                sh "docker login -u $CRED_USR -p $CRED_PSW oatnil.top:8083"
                sh "docker push $imagePrefix:$BUILD_NUMBER"
            }
        }

        stage('Deploy') {
            steps {
                script {
                    build(job: "Undercontrol/deployment",
                            parameters: [string(name: "FRONTEND_IMAGE_TAG", value: "$BUILD_NUMBER"),
                                         string(name: 'SERVICE', value: 'FRONTEND')]
                    )
                }
            }
        }

    }
}