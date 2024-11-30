pipeline {
    agent any
    tools {
        nodejs 'NodeJS'  // Numele pe care l-ai dat tool-ului NodeJS în configurația globală
    }
    environment {
        GITHUB_TOKEN = credentials('github-token') // Token-ul pentru autentificare GitHub
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/MadalinaBuu/dictionary-web-app.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build -- --output-path=dist'
            }
        }
        stage('Deploy to GitHub Pages') {
            steps {
                script {
                    def pagesBranch = 'gh-pages'

                    sh """
                    git config --global user.name "jenkins-bot"
                    git config --global user.email "jenkins-bot@example.com"
                    git checkout ${pagesBranch} || git checkout --orphan ${pagesBranch}
                    rm -rf *
                    cp -r dist/* .
                    git add .
                    git commit -m "Deploy by Jenkins"
                    git push https://x-access-token:${GITHUB_TOKEN}@github.com/<username>/<repository>.git ${pagesBranch} --force
                    """
                }
            }
        }
    }
}
