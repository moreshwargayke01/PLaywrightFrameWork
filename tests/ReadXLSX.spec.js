import { test, expect } from '@playwright/test';
import fs from 'fs';
import XLSX from 'xlsx';

const fileBuffer = fs.readFileSync('test-data/TestData.xlsx');
const work = XLSX.read(fileBuffer, { type: 'buffer' });
const sheet = work.Sheets['Sheet1'];
const data = XLSX.utils.sheet_to_json(sheet);

// Optional: log data to check keys
console.log('Excel Data:', data);

dataforEach((d, index) => {
    const title = d.Column1 || `Row ${index + 1}`;
    test(`Read XLSX Data: ${title}`, async () => {
        console.log(`Row data:`, d);
    });
});