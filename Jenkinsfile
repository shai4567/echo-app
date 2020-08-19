pipeline {
   agent any

   stages {
      stage('build') {
         steps {
                sh 'docker build -t ${GIT_BRANCH}-${GIT_COMMIT} .'
         }
      }
   }
}
