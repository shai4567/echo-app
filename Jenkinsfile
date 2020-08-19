pipeline {
   agent any

   stages {
      stage('Hello') {
         steps {
            dir("echo") {
               sh 'docker build -t echo:1.0.${BUILD_NUMBER} .' 
            }
         }
      }
   }
}
