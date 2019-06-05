module.exports = {
  prompts() {
    return [
      {
        name: 'package_name',
        message: 'Package name',
        default: this.outFolder,
        filter: val => val.toLowerCase(),
        store: true
      },
      {
        name: 'package_description',
        message: 'Package description',
        default: 'Vue Package',
        store: true
      },
      {
        name: 'package_author',
        message: 'Author name',
        default: this.gitUser.username || this.gitUser.name,
        store: true
      },
      {
        name: 'package_type',
        message: 'What kind of package will the be?',
        type: 'list',
        choices: ['component', 'directive'],
        default: 'component',
        store: true
      }
    ]
  },
  actions: [
    {
      type: 'add',
      files: '**'
    },
    {
      type: 'move',
      patterns: {
        '_gitignore': '.gitignore',
        '_eslintrc.js': '.eslintrc.js',
        '_package.json': 'package.json',
        'src/_index.jstemplate': 'src/index.js',
        'src/_package.vue': 'src/package.vue'
      }
    }
  ],
  async completed() {
    this.gitInit()
    await this.npmInstall()
    // console.log()
    // console.log(chalk.bold(`  You are done! Happy developing.\n`))
  }
}
