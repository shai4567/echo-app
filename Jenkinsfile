pipeline {
   agent any

   stages {
      stage('Hello') {
         steps {
            dir("echo") {
               sh 'pwd'
               sh 'ls'
               sh 'docker build -t echo:1.0.${BUILD_NUMBER} .' 
            }
         }
      }
   }
}
