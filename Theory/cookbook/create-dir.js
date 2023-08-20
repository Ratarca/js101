if (!fs.existsSync('./storage')) {
    fs.mkdirSync('./storage', { recursive: true });
  }