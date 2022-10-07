# **_NodeJS with Jenkins and Kubernetes_**

## Clone this repo

```
git clone https://github.com/Smit90/Node_Kubernetes.git
```

---

## Prerequisite

- Docker
- Jenkins
- Kubernetes
- Docker Hub account
- NodeJS

---

## Jenkins Setup

```
1. Install all recommanded plugins

2. Go to Manage Jenkins / Manage Plugins / Available

3. Search Kubernetes Continuous Deploy Plugin and Docker Pipeline and install it

4. For Kubernetes Continuous Deploy Plugin newer version will give error so refer this old version of Kubernetes Continuous Deploy, please check attached link.

5. Add Docker Hub Credentails into jenikns in Manage Credentails

6. For Kubernetes Credentails, open your terminal go to root path and find .kube folder where you can find config file and copy that config file.

7. You will see an option Kubernetes Configuration (kubeconfig) only if you added Kubernetes        Continuous Deploy Plugin otherwise it will not show in list.

8. Select Kubeconfig -> Enter Directly and paste config file here and save it.

9. Go Jenkins Dashbaord and create new pipeline.

10. Add Github project url and set GitHub hook trigger for GITScm polling

11. For Pipeline, select SCM git and set Repositroy URL and give Jenkinsfile path then save it.
```

- Old Verison [Kubernetes Continuous Deploy Plugin (1.0.0)](https://updates.jenkins.io/download/plugins/kubernetes-cd/1.0.0/kubernetes-cd.hpi)

---

## Github Webhook Setup

```
1. Goto repo setting and add new webhook
2. Give Jenkins endpoint with github-webhook as a postfix
3. Ex : https://jenkins-endpoint/github-webhook/
4. Set content-type : application/json
5. Save the webhook
```

---

> Now when you push the code into GitHub, the Jenkins pipeline will trigger automatically and your app will deploy to the Kubernetes

<br>
<h1 align="center">(｡◕‿◕｡)</h1>
