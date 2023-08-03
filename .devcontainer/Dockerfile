# Define base image
FROM ubuntu:20.04

# Install system dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y --no-install-recommends tzdata && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y locales && \
    locale-gen ja_JP.UTF-8 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set the timezone and language
ENV TZ=Asia/Tokyo\
    LANG=ja_JP.UTF-8 \
    LANGUAGE=ja_JP:ja \
    LC_ALL=ja_JP.UTF-8

# Install additional dependencies
RUN apt-get update && \
    DEBIAN_FRONTEND=noninteractive apt-get install -y \
    curl \
    git \
    unzip \
    zip \
    sudo \
    make \
    build-essential \
    libssl-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    wget \
    llvm \
    libncursesw5-dev \
    xz-utils \
    tk-dev \
    libxml2-dev \
    libxmlsec1-dev \
    libffi-dev \
    liblzma-dev \
    vim \
    tree && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install AWS CLI and SAM CLI
# RUN curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip" && \
#     unzip awscliv2.zip && \
#     sudo ./aws/install && \
#     rm awscliv2.zip && \
#     curl -L "https://github.com/aws/aws-sam-cli/releases/latest/download/aws-sam-cli-linux-x86_64.zip" -o "samcliv2.zip" && \
#     unzip samcliv2.zip -d sam-installation && \
#     sudo ./sam-installation/install && \
#     rm samcliv2.zip && \
#     echo '# Install AWS CLI and SAM CLI' >> ~/.bashrc && \
#     echo 'export PATH="/root/aws/dist:$PATH"' >> ~/.bashrc && \
#     echo 'complete -C "/usr/local/bin/aws_completer" aws' >> ~/.bashrc

# Add aliases
# COPY aliases.sh /root
# RUN echo "# Add aliases\n" >> ~/.bashrc && \
#     echo "source /root/aliases.sh" >> ~/.bashrc

# Install watch.sh as watch command
# COPY watch.sh /usr/local/bin/watch
# RUN echo "# Install watch.sh as watch command\n" >> ~/.bashrc && \
#     echo "chmod +x /usr/local/bin/watch" >> ~/.bashrc

# Add Git branch name to bash prompt
RUN echo "# Git branch in prompt.\n" >> ~/.bashrc && \
    echo "parse_git_branch() {" >> ~/.bashrc && \
    echo "  git branch 2> /dev/null | sed -e \"/^[^*]/d\" -e \"s/* \(.*\)/ (\\1)/\"" >> ~/.bashrc && \
    echo "}" >> ~/.bashrc && \
    echo 'export PS1="\\w\\[\\033[32m\\]\\$(parse_git_branch)\\[\\033[00m\\] $ "' >> ~/.bashrc

# Install git-completion
RUN echo "# Install git-completion\n" >> ~/.bashrc && \
    echo "curl https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash -o ~/.git-completion.bash" >> ~/.bashrc && \
    echo 'source ~/.git-completion.bash' >> ~/.bashrc

# Install pyenv and Python
# RUN echo "# Install pyenv and Python\n" >> ~/.bashrc && \
#     echo "curl https://pyenv.run | bash" >> ~/.bashrc && \
#     echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc && \
#     echo 'command -v pyenv >/dev/null || export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc && \
#     echo 'eval "$(pyenv init --path)"' >> ~/.bashrc && \
#     . ~/.bashrc && \
#     echo "pyenv install 3.8.16" >> ~/.bashrc && \
#     echo "pyenv global 3.8.16" >> ~/.bashrc && \
#     echo "pip install --upgrade pip" >> ~/.bashrc

# Install nvs
RUN echo "# Install nvs\n" >> ~/.bashrc && \
    echo 'export NVS_HOME="$HOME/.nvs"' >> ~/.bashrc && \
    echo '[ -s "$NVS_HOME/nvs.sh" ] && . "$NVS_HOME/nvs.sh"' >> ~/.bashrc && \
    echo "git clone https://github.com/jasongin/nvs \"$HOME/.nvs\"" >> ~/.bashrc && \
    . ~/.bashrc && \
    . "$NVS_HOME/nvs.sh" install && \
    echo "nvs add lts" >> ~/.bashrc && \
    echo "nvs link lts" >> ~/.bashrc
# . ~/.bashrc && \
# echo "npm install -g aws-cdk" >> ~/.bashrc

# Run bash
CMD ["/bin/bash", "-l"]
