pipeline {
   agent any

   stages {
      stage('Hello') {
         steps {
            sh "echo $USER"
            sh "docker run hello-world"
         }
      }
   }
}
