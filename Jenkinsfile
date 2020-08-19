pipeline {
   agent any

   stages {
      stage('build') {
         steps {
                docker.withRegistry('http://gcr.io/develeap-285912/echo-app', 'develeap-285912') {
                    customImage = docker.build("${GIT_BRANCH}-${GIT_COMMIT}")
                    customImage.push()
                }     
            }
      }

      stage('publish') {

      }
   }
}
