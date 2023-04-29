/* eslint-disable @typescript-eslint/no-explicit-any */
import * as eta from 'eta';
import { includeFile } from 'eta/dist/types/file-handlers';
import { readFileSync } from 'fs';

// Define a class to hold the singleton instance
class EtaSingleton {
	private static instance:any;

	// eslint-disable-next-line @typescript-eslint/no-empty-function
	private constructor() {}

	static getInstance(): any {
		if (!EtaSingleton.instance) {
			eta.configure({
				tags: ['{{', '}}'],
				views: __dirname + '/../views',

			});
			//console.log(readFileSync(__dirname + '/../views/incl/head.eta', {encoding:'utf8', flag:'r'}).toString());
			//eta.templates.define('head', eta.compile(readFileSync(__dirname + '/../views/incl/head.eta', {encoding:'utf8', flag:'r'}).toString(), {}));
			EtaSingleton.instance = eta;
		}

		return EtaSingleton.instance;
	}
}

export default EtaSingleton.getInstance();
