pipeline {
   agent any

   stages {
      stage('publish') {
         steps {
             script {
                  docker.withRegistry('https://gcr.io/', 'gcr:develeap-285912') {
                  customImage = docker.build("develeap-285912/echo-app/${GIT_BRANCH}-${GIT_COMMIT}")
                  customImage.push()
                } 
             }    
            }
        }
   }
}
