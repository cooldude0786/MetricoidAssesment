pipeline {
    agent any

    tools {
        nodejs "NodeJS_22"   // Jenkins will auto-install this version
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/cooldude0786/MetricoidAssesment.git'
            }
        }

        stage('Install Frontend') {
            steps {
                dir('frontend/vite-project') {
                    bat 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend/vite-project') {
                    bat 'npm run build'
                }
            }
        }

        stage('Copy Build to Backend') {
            steps {
                bat 'if exist backend\\public rmdir /s /q backend\\public'
                bat 'mkdir backend\\public'
                bat 'xcopy /E /I /Y frontend\\vite-project\\dist backend\\public'
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        stage('Finish') {
            steps {
                bat 'echo 🎉 Build pipeline finished with auto-installed NodeJS v22!'
            }
        }
    }
}
