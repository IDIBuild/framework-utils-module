node {
    currentBuild.result = "SUCCESS"

    try {

        def buildNumber = env.BUILD_NUMBER
        def branchName = env.BRANCH_NAME
        def workspace = env.WORKSPACE
        def buildUrl = env.BUILD_URL


        stage('Info') {
            echo "workspace directory is $workspace"
            echo "build URL is $buildUrl"
            echo "build Number is $buildNumber"
            echo "branch name is $branchName"
            echo "PATH is $env.PATH"
        }


        stage('Checkout'){
            git pull: true ,url: 'https://github.com/IDIBuild/framework-utils-module.git'
        }


        stage('Build') {
            print "Environment : ${env.NODE_ENV}"

            sh 'node -v'
            sh 'npm prune'
            sh 'npm install'
            sh 'npm run build'
            archive .Artifacts artifacts: '*.tar.gz', fingerprint: true
        }


        stage('Cleanup'){
            echo 'prune and cleanup'
        }

    } catch (err) {
        currentBuild.result = "FAILURE"
        throw err
    }
}