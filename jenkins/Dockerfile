FROM jenkins/jenkins:lts

# Switch to root to install packages
USER root

# Install base dependencies
RUN apt-get update && apt-get install -y \
    curl \
    wget \
    unzip \
    gnupg \
    lsb-release \
    jq \
    ca-certificates \
    apt-transport-https

# ------------------------------
# Install Docker CLI
# ------------------------------
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    echo "deb [arch=amd64] https://download.docker.com/linux/debian bookworm stable" \
    > /etc/apt/sources.list.d/docker.list && \
    apt-get update && \
    apt-get install -y docker-ce-cli

# ------------------------------
# Install AWS CLI v2
# ------------------------------
RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
    unzip awscliv2.zip && \
    ./aws/install && \
    rm -rf aws awscliv2.zip

# ------------------------------
# Install Terraform
# ------------------------------
RUN wget https://releases.hashicorp.com/terraform/1.9.6/terraform_1.9.6_linux_amd64.zip && \
    unzip terraform_1.9.6_linux_amd64.zip && \
    mv terraform /usr/local/bin/ && \
    chmod +x /usr/local/bin/terraform && \
    rm terraform_1.9.6_linux_amd64.zip

# Switch back to Jenkins user
USER jenkins
