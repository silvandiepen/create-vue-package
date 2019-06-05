const superb = require('superb');
const glob = require('glob');
const join = require('path').join;

const rootDir = __dirname;

const move = (from, to = '') => {
	const result = {};
	const options = { cwd: join(rootDir, 'template'), nodir: true, dot: true };
	for (const file of glob.sync(`${from}/**`, options)) {
		result[file] = (to ? to + '/' : '') + file.replace(`${from}/`, '');
	}
	return result;
};

module.exports = {
	prompts: {
		name: {
			message: 'Package name',
			default: ':folderName:'
		},
		description: {
			message: 'Package description',
			default: 'Vue Package'
		},
		author: {
			message: 'Author name',
			type: 'string',
			default: ':gitUser:',
			store: true
		},
		package_type: {
			message: "What kind of package will the be?",
			type: 'list',
			choices: ['component','directive'],
			default: 'component',
			store: true
		}
	},
	move() {
		const moveable = {
			'gitignore': '.gitignore',
			'_eslintrc.js': '.eslintrc.js',
			'_package.json': 'package.json',
			'_babelrc': '.babelrc',
      '_prettierrc': '.prettierrc',
      'src/package.vue': 'src/package.vue'
    };
    return moveable;
  },
	post(
		{ npmInstall, gitInit, chalk, isNewFolder, folderName }
	) {
		var fs = require('fs');
		var deleteFolderRecursive = function(path) {
			if( fs.existsSync(path) ) {
				fs.readdirSync(path).forEach(function(file,index){
				var curPath = path + "/" + file;
				if(fs.lstatSync(curPath).isDirectory()) { // recurse
					deleteFolderRecursive(curPath);
				} else { // delete file
					fs.unlinkSync(curPath);
				}
				});
				fs.rmdirSync(path);
			}
		};
		let henrisPath = process.cwd();

		if(isNewFolder){
			henrisPath = join(henrisPath, folderName)
		}

		henrisPath = join(henrisPath, 'henris')

		deleteFolderRecursive(henrisPath)
		gitInit();

		npmInstall();

		const cd = () => {
			if (isNewFolder) {
				console.log(`    ${chalk.cyan('cd')} ${folderName}`);
			}
		};

		console.log();
		console.log(chalk.bold(`  To get started:\n`));
		cd();
		console.log(`    npm run dev\n`);
		console.log(chalk.bold(`  To build & start for production:\n`));
		cd();
		console.log(`    npm run staging`);
		console.log(`    cd dist`);
		console.log(`    npm i --production`);
		console.log(`    ./node_modules/.bin/nuxt start`);
		console.log();
	}
};
