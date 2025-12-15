FROM jenkins/jenkins:lts

USER root

# Install dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    apt-transport-https \
    gnupg \
    lsb-release

# Install AWS CLI
RUN apt-get update -y && \
    apt-get install -y awscli

# Install Terraform
RUN wget https://releases.hashicorp.com/terraform/1.9.6/terraform_1.9.6_linux_amd64.zip && \
    unzip terraform_1.9.6_linux_amd64.zip && \
    mv terraform /usr/local/bin/ && \
    chmod +x /usr/local/bin/terraform && \
    rm terraform_1.9.6_linux_amd64.zip

USER jenkins
