import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
	appType: 'mpa',
	input: {
		home: resolve(import.meta.dirname, 'index.html'),
		bikes: resolve(import.meta.dirname, 'bikes.html'),
		insurance: resolve(import.meta.dirname, 'insurance.html'),
		contact: resolve(import.meta.dirname, 'contact.html'),
		budget: resolve(import.meta.dirname, 'budget.html'),
		terms: resolve(import.meta.dirname, 'terms.html'),
		nimbus: resolve(import.meta.dirname, 'bikes/nimbus.html'),
		magic: resolve(import.meta.dirname, 'bikes/magic.html'),
		nebula: resolve(import.meta.dirname, 'bikes/nebula.html'),
	},
});
