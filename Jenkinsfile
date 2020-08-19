pipeline {
   agent any

   stages {
      stage('Hello') {
         steps {
            sh "echo on branch" + env.BRANCH_NAME
         }
      }
   }
}
