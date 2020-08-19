pipeline {
   agent any

   stages {
      stage('Hello') {
         steps {
            sh 'docker build -t echo:1.0.${BUILD_NUMBER} .' 
         }
      }
   }
}
