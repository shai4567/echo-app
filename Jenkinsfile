pipeline {
   agent any

   stages {
      stage('publish') {
         steps {
             script {
                  docker.withRegistry('http://gcr.io/develeap-285912/echo-app', 'develeap-285912') {
                  customImage = docker.build("${GIT_BRANCH}-${GIT_COMMIT}")
                  customImage.push()
                } 
             }    
            }
        }
   }
}
